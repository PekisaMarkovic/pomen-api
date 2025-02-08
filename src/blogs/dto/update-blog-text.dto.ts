import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBlogTextDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  blogTextId?: number;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNumber()
  order: number;

  @ApiProperty()
  @IsBoolean()
  isBold: string;
}
