import { IsArray, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { UpdateBlogTextDto } from '@/blogs/dto/update-blog-text.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { BlogContentTypeEnum } from '@/blogs/enums/blog-content-type';

export class UpdateBlogContentDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  blogContentId?: number;

  @ApiProperty({ type: [UpdateBlogTextDto] })
  @IsArray()
  @Type(() => UpdateBlogTextDto)
  paragraphs: UpdateBlogTextDto[];

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
