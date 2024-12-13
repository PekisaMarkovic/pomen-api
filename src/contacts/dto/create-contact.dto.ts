import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  message: string;
}
