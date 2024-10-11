import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  iso: string;
}
