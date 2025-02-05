import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogContent } from '@/blogs/entities/blog-content.entity';

@Entity({ name: 'blogs-text' })
export class BlogText {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'blog_text_id' })
  blogTextId: number;

  @ApiProperty()
  @Column({ length: 255 })
  text: string;

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ApiProperty()
  @Column({ name: 'blog_content_id' })
  blogContentId: number;

  @ApiProperty({ type: () => BlogContent })
  @ManyToOne(() => BlogContent, (blogContent) => blogContent.paragraphs)
  @JoinColumn({ name: 'blog_content_id' })
  blogContent: BlogContent;
}
