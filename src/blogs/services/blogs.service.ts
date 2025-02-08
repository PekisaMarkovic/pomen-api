import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import {
  BlogSitemapDto,
  CreateBlogDto,
  SearchBlogDto,
  UpdateBlogDto,
} from '@/blogs/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogContent, Blog, BlogText } from '@/blogs/entities';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { slugify } from '@/common/helpers';
import { BlogContentTypeEnum } from '@/blogs/enums/blog-content-type';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogContent)
    private readonly blogContentRepository: Repository<BlogContent>,
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    @InjectRepository(BlogText)
    private readonly blogTextRepository: Repository<BlogText>,
  ) {}

  /**
   * Find a blog by id
   * @param blogId - The blogId of the blog to find
   * @returns The found certificate
   * @throws NotFoundException if the certificate is not found
   *
   */
  async getBlogById(blogId: number): Promise<Blog> {
    const blog = await this.blogRepository
      .createQueryBuilder('blog')
      .where('blog.deleted_at IS NULL')
      .andWhere('blog.blogId = :blogId', { blogId })
      .leftJoinAndSelect('blog.contents', 'blog-content')
      .andWhere('blog-content.deleted_at IS NULL')
      .leftJoinAndSelect('blog-content.paragraphs', 'blogs-text')
      .andWhere('blogs-text.deleted_at IS NULL')
      .leftJoinAndSelect('blog-content.blogContentImage', 'files')
      .getOne();

    if (!blog) {
      throw new NotFoundException();
    }

    return blog;
  }

  /**
   * Find all blogs and maps them to values for sitemap
   * @returns The sitemap for bogs
   *
   */
  async getBlogSitemap(): Promise<BlogSitemapDto[]> {
    const query = this.blogRepository
      .createQueryBuilder('blog')
      .where('blog.deleted_at IS NULL')
      .andWhere('blog.published_at IS NOT NULL')
      .leftJoinAndSelect('blog.contents', 'blog-content')
      .leftJoinAndSelect('blog-content.blogContentImage', 'files');

    const data = await query.getMany();

    return data.map((obj) => {
      let image = '';
      const findImage = obj.contents.find((cont) => cont.blogContentImage?.url);

      if (findImage) {
        image = findImage.blogContentImage.url;
      }

      return {
        slug: obj.slug,
        image,
        updatedAt: obj.updatedAt,
        blogId: obj.blogId,
      };
    });
  }

  /**
   * Create a new Blog
   * @param CreateBlogAndUserDto - The data to create a new Blog
   * @returns The created Blog
   * @throws NotFoundException if the Blog is not found
   *
   */
  async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    const { contents } = createBlogDto;

    const titleExist = contents.filter(
      (cont) => cont.type === BlogContentTypeEnum.TITLE,
    );

    if (titleExist.length !== 1) {
      throw new NotAcceptableException('Must have one title');
    }

    const title = contents.find(
      (cont) => cont.type === BlogContentTypeEnum.TITLE,
    );

    const slug = await this.generateSlug(title.paragraphs[0]);

    const newBlog = this.blogRepository.create({
      slug,
    });

    const blog = await this.blogRepository.save(newBlog);

    const newBlogContexts: BlogContent[] = [];

    for (const cont of contents) {
      const newBlogContent = this.blogContentRepository.create({
        type: cont.type,
        blog,
      });

      const blogContent = await this.blogContentRepository.save(newBlogContent);

      const newParagraphs: BlogText[] = [];

      for (const paragraph of cont.paragraphs) {
        const newBlogText = this.blogTextRepository.create({
          text: paragraph,
          blogContent: blogContent,
        });

        const blogText = await this.blogTextRepository.save(newBlogText);

        newParagraphs.push(blogText);
      }

      blogContent.paragraphs = newParagraphs;

      newBlogContexts.push(blogContent);
    }

    blog.contents = newBlogContexts;

    return blog;
  }

  /**
   * Find all blogs with pagination
   * @param IPaginationOptions - The pagination parameters
   * @param title - The blog title that we are filter on
   * @returns An array of blogs and the total count
   *
   */
  async searchAllBlogs(body: SearchBlogDto): Promise<Pagination<Blog>> {
    const { isPublished, limit, page, title } = body;
    const options: IPaginationOptions = { limit, page };
    const baseQuery = this.blogRepository
      .createQueryBuilder('blog')
      .where('blog.deleted_at IS NULL');

    if (isPublished) {
      baseQuery.andWhere('blog.published_at IS NOT NULL');
    }

    if (title) {
      baseQuery
        .andWhere((qb) => {
          const subQuery = qb
            .subQuery()
            .select('blog-content.blogId')
            .from('blog-content', 'blog-content')
            .leftJoin('blog-content.paragraphs', 'blog-text')
            .where('blog-text.text LIKE :text')
            .getQuery();
          return `blog.id IN ${subQuery}`;
        })
        .setParameter('text', `%${title}%`);
    }

    const paginateReadOnly = await paginate<Blog>(baseQuery, options);

    const paginatedResult = { ...paginateReadOnly };

    if (paginatedResult.items.length === 0) {
      return paginatedResult;
    }

    const blogIds = paginatedResult.items.map((blog) => blog.blogId);

    const blogsWithRelations = await this.blogRepository
      .createQueryBuilder('blog')
      .leftJoinAndSelect('blog.contents', 'blog-content')
      .leftJoinAndSelect('blog-content.paragraphs', 'blog-text')
      .where('blog.blogId IN (:...ids)', { ids: blogIds })
      .getMany();

    paginatedResult.items = blogsWithRelations as any;

    return paginatedResult;
  }

  /**
   * Find a blog by slug
   * @param slug - The slug of the blog to find
   * @returns The found blog
   * @throws NotFoundException if the blog is not found
   *
   */
  async getBlogBySlug(slug: string): Promise<Blog> {
    const blog = await this.blogRepository
      .createQueryBuilder('blog')
      .where('blog.deleted_at IS NULL')
      .andWhere('blog.published_at IS NOT NULL')
      .andWhere('blog.slug = :slug', { slug })
      .leftJoinAndSelect('blog.contents', 'blog-content')
      .andWhere('blog-content.deleted_at IS NULL')
      .leftJoinAndSelect('blog-content.paragraphs', 'blogs-text')
      .andWhere('blogs-text.deleted_at IS NULL')
      .leftJoinAndSelect('blog-content.blogContentImage', 'files')
      .getOne();

    if (!blog) {
      throw new NotFoundException();
    }

    return blog;
  }

  /**
   * Update a blog
   * @param blogId - The id of the blog to update
   * @param UpdateblogDto - The data to update the blog
   * @returns The updated blog
   * @throws NotFoundException if the blog/cemetery is not found
   *
   */
  async updateBlog(
    blogId: number,
    updateBlogDto: UpdateBlogDto,
  ): Promise<Blog> {
    const { content } = updateBlogDto;
    const blog = await this.blogRepository.findOne({
      where: { blogId, deletedAt: null },
      relations: ['contents'],
    });

    if (!blog) {
      throw new NotFoundException();
    }

    const blogContents = blog.contents;

    if (content.blogContentId) {
      const toUpdateContent = await this.blogContentRepository.findOne({
        where: {
          blogContentId: content.blogContentId,
          deletedAt: null,
        },
      });

      if (!toUpdateContent) {
        throw new NotFoundException();
      }

      if (
        toUpdateContent.type === BlogContentTypeEnum.TITLE &&
        content.type !== BlogContentTypeEnum.TITLE
      ) {
        throw new NotAcceptableException('Blog have one title');
      }

      toUpdateContent.updatedAt = new Date();

      toUpdateContent.type = content.type;
      toUpdateContent.order = content.order;

      const newParagraphs: BlogText[] = [];

      for (const paragraph of content.paragraphs) {
        if (paragraph.blogTextId) {
          const paragraphToUpdate = await this.blogTextRepository.findOne({
            where: {
              blogTextId: paragraph.blogTextId,
              deletedAt: null,
            },
          });

          if (!paragraphToUpdate) continue;

          Object.assign(paragraphToUpdate, paragraph);

          paragraphToUpdate.updatedAt = new Date();

          this.blogTextRepository.save(paragraphToUpdate);

          newParagraphs.push(paragraphToUpdate);
        } else {
          const newBlogText = this.blogTextRepository.create({
            text: paragraph.text,
            blogContent: toUpdateContent,
          });

          const blogText = await this.blogTextRepository.save(newBlogText);

          newParagraphs.push(blogText);
        }
      }

      await this.blogContentRepository.save(toUpdateContent);

      toUpdateContent.paragraphs = newParagraphs;

      const index = blogContents.findIndex(
        (cont) => cont.blogContentId == toUpdateContent.blogContentId,
      );

      toUpdateContent[index] = toUpdateContent;
    } else {
      const newBlogContent = this.blogContentRepository.create({
        order: content.order,
        type: content.type,
        blog,
      });

      const blogContent = await this.blogContentRepository.save(newBlogContent);

      const newParagraphs: BlogText[] = [];

      for (const paragraph of content.paragraphs) {
        const newBlogText = this.blogTextRepository.create({
          order: paragraph.order,
          text: paragraph.text,
          blogContent: blogContent,
        });

        const blogText = await this.blogTextRepository.save(newBlogText);

        newParagraphs.push(blogText);
      }

      blogContent.paragraphs = newParagraphs;

      blogContents.push(blogContent);
    }

    blog.updatedAt = new Date();

    const updatedBlog = await this.blogRepository.save(blog);

    updatedBlog.contents = blogContents.filter((cont) => !cont.deletedAt);

    return updatedBlog;
  }

  /**
   * Remove a blog
   * @param blogId - The id of the blog to remove
   * @returns The removed blog
   * @throws NotFoundException if the blog is not found
   *
   */
  async removeBlog(blogId: number): Promise<Blog> {
    const blog = await this.blogRepository.findOne({
      where: { blogId, deletedAt: null },
    });

    if (!blog) {
      throw new NotFoundException();
    }

    blog.deletedAt = new Date();
    blog.publishedAt = null;

    return this.blogRepository.save(blog);
  }

  /**
   * Publish or unpublish a blog
   * @param blogId - The id of the blog to publish/unpublished
   * @returns The publish/unpublished blog
   * @throws NotFoundException if the blog is not found
   *
   */
  async publishOrUnpublishBlog(blogId: number): Promise<Blog> {
    const blog = await this.blogRepository.findOne({
      where: { blogId, deletedAt: null },
    });

    if (!blog) {
      throw new NotFoundException();
    }

    if (blog.publishedAt === null) {
      blog.publishedAt = new Date();
    } else {
      blog.publishedAt = null;
    }

    return this.blogRepository.save(blog);
  }

  /**
   * Remove a blog text
   * @param blogTextId - The id of the blog text to remove
   * @returns The removed blog text
   * @throws NotFoundException if the blog text is not found
   *
   */
  async removeBlogText(blogTextId: number): Promise<BlogText> {
    const blogText = await this.blogTextRepository.findOne({
      where: { blogTextId, deletedAt: null },
    });

    if (!blogText) {
      throw new NotFoundException();
    }

    blogText.deletedAt = new Date();

    return this.blogTextRepository.save(blogText);
  }

  /**
   * Remove a blog Content
   * @param blogContentId - The id of the blog content to remove
   * @returns The removed blog content
   * @throws NotFoundException if the blog content is not found
   *
   */
  async removeBlogContent(blogContentId: number): Promise<BlogContent> {
    const blogContent = await this.blogContentRepository.findOne({
      where: { blogContentId, deletedAt: null },
    });

    if (!blogContent) {
      throw new NotFoundException();
    }

    blogContent.deletedAt = new Date();

    return this.blogContentRepository.save(blogContent);
  }

  /**
   * Create a slug for sertificate
   * @param slug - The data to create a new slug
   * @return string
   *
   */
  private generateSlug = async (slug: string): Promise<string> => {
    let count = 2;
    let nextSlug = slugify({ text: slug });
    while (await this.blogRepository.findOne({ where: { slug: nextSlug } })) {
      nextSlug = slugify({ text: `${slug}-${count}` });
      count++;
    }
    return nextSlug;
  };
}
