import { UpdateBlogContentDto } from '@/blogs/dto/update-blog-content.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class UpdateBlogDto {
  @ApiProperty({ type: UpdateBlogContentDto })
  @ValidateNested()
  @Type(() => UpdateBlogContentDto)
  content: UpdateBlogContentDto;
}
