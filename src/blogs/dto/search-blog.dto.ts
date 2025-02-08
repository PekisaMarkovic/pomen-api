import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchBlogDto {
  @ApiProperty()
  @IsNumber()
  page: number;

  @ApiProperty()
  @IsNumber()
  limit: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isPublished: boolean;
}

export class PublishBlogDto {
  @ApiProperty()
  @IsNumber()
  blogId: number;
}
