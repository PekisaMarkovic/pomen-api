import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateQrcodeDto {
  @ApiProperty()
  @IsString()
  value: string;
}
