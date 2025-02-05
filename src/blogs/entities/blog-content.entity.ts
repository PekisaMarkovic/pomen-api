import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogText } from '@/blogs/entities/blog-text.entity';
import { BlogContentTypeEnum } from '@/blogs/enums/blog-content-type';
import { Blog } from '@/blogs/entities/blog.entity';
import { File } from '@/files/entities/file.entity';

@Entity({ name: 'blog-content' })
export class BlogContent {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'blog_content_id' })
  blogContentId: number;

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ApiProperty({ type: () => [BlogText] })
  @OneToMany(() => BlogText, (blogText) => blogText.blogContent)
  paragraphs: BlogText[];

  @ApiProperty()
  @Column({ name: 'blog_id' })
  blogId: number;

  @ApiProperty({ type: () => Blog })
  @ManyToOne(() => Blog, (blog) => blog.contents)
  @JoinColumn({ name: 'blog_id' })
  blog: Blog;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: BlogContentTypeEnum,
    default: BlogContentTypeEnum.TITLE,
  })
  type: BlogContentTypeEnum;

  @ApiProperty()
  @Column({ name: 'blog_content_image_id', nullable: true })
  blogContentImageId: number;

  @ApiProperty({ type: () => File })
  @OneToOne(() => File, (file) => file.blogContentImage)
  @JoinColumn({ name: 'blog_content_image_id' })
  blogContentImage: File;
}
