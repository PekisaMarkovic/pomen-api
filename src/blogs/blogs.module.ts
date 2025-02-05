import { Module } from '@nestjs/common';
import { BlogsService } from '@/blogs/services/blogs.service';
import { BlogsController } from '@/blogs/controllers/blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog, BlogContent, BlogText } from '@/blogs/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, BlogContent, BlogText])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
