import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from '@/blogs/services/blogs.service';
import { Public } from '@/auth/decorators';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Blog } from '@/blogs/entities';
import {
  SearchBlogDto,
  BlogSitemapDto,
  CreateBlogDto,
  UpdateBlogDto,
  PublishBlogDto,
} from '@/blogs/dto';

@Controller('blogs')
@ApiTags('Blogs')
@ApiBearerAuth('access-token')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Blog' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The Blog has been successfully created.',
    type: Blog,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if title is not found.',
    type: NotFoundException,
  })
  createBlog(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.createBlog(createBlogDto);
  }

  @Public()
  @Post('/search')
  @ApiOperation({ summary: 'Search blogs by title' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all blogs.',
    type: [Blog],
  })
  searchAllBlogs(
    @Body()
    body: SearchBlogDto,
  ) {
    return this.blogsService.searchAllBlogs(body);
  }

  @Public()
  @Get('/sitemap')
  @ApiOperation({ summary: 'Get blogs for sitemap' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the sitemap.',
    type: [BlogSitemapDto],
  })
  getBlogSitemap() {
    return this.blogsService.getBlogSitemap();
  }

  @Public()
  @Post('/publish-blog')
  @ApiOperation({ summary: 'Get blogs for sitemap' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the sitemap.',
    type: [BlogSitemapDto],
  })
  publishOrUnpublishBlog(
    @Body()
    { blogId }: PublishBlogDto,
  ) {
    return this.blogsService.publishOrUnpublishBlog(blogId);
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a Blog by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the Blog.',
    type: Blog,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if Blog is not found.',
    type: NotFoundException,
  })
  getBlogById(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.getBlogById(id);
  }

  @Public()
  @Get('/slug/:slug')
  @ApiOperation({ summary: 'Get a certificate by slug' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the certificate.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate is not found.',
    type: NotFoundException,
  })
  getBlogBySlug(@Param('slug') slug: string) {
    return this.blogsService.getBlogBySlug(slug);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a blog with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the blog.',
    type: Blog,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if blog is not found.',
    type: NotFoundException,
  })
  updateBlog(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogsService.updateBlog(id, updateBlogDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a blog with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the blog.',
    type: Blog,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if blog is not found.',
    type: NotFoundException,
  })
  removeBlog(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.removeBlog(id);
  }

  @Delete('/blog-content/:id')
  @ApiOperation({ summary: 'Remove a blog with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the blog.',
    type: Blog,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if blog is not found.',
    type: NotFoundException,
  })
  removeBlogContent(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.removeBlogContent(id);
  }

  @Delete('/blog-text/:id')
  @ApiOperation({ summary: 'Remove a blog with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the blog.',
    type: Blog,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if blog is not found.',
    type: NotFoundException,
  })
  removeBlogText(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.removeBlogText(id);
  }
}
