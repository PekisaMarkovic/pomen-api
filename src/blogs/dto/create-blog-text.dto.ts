import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBlogTextDto {
  @ApiProperty()
  @IsString()
  text: string;
}
