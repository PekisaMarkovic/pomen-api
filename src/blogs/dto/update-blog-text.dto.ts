import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBlogTextDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  blogTextId?: number;

  @ApiProperty()
  @IsString()
  text: string;
}
