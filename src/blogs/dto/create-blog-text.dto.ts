import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateBlogTextDto {
  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNumber()
  order: number;
}
