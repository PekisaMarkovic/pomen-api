import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BlogContent } from '@/blogs/entities/blog-content.entity';

@Entity({ name: 'blogs' })
export class Blog {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'blog_id' })
  blogId: number;

  @ApiProperty()
  @Column({ unique: true, length: 100 })
  slug: string;

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'published_at', nullable: true })
  publishedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ApiProperty({ type: () => [BlogContent] })
  @OneToMany(() => BlogContent, (content) => content.blog)
  contents: BlogContent[];
}
