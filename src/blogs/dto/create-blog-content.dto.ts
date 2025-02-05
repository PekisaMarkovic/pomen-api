import { BlogContentTypeEnum } from '@/blogs/enums/blog-content-type';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsEnum, IsString } from 'class-validator';

export class CreateBlogContentDto {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  paragraphs: string[];

  @ApiProperty({
    enum: BlogContentTypeEnum,
    enumName: 'BlogContentTypeEnum',
    description:
      'Type must be one of the following: title, text.center, text.left, text.right',
  })
  @IsEnum(BlogContentTypeEnum, {
    message:
      'Type must be one of the following: title, text.center, text.left, text.right',
  })
  type: BlogContentTypeEnum;
}
