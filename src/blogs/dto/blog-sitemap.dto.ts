import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class BlogSitemapDto {
  @ApiProperty()
  @IsNumber()
  blogId: number;

  @ApiProperty()
  @IsString()
  slug: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
