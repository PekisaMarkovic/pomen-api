import { CreateBlogContentDto } from '@/blogs/dto/create-blog-content.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({ type: [CreateBlogContentDto] })
  @IsArray()
  @Type(() => CreateBlogContentDto)
  contents: CreateBlogContentDto[];
}
