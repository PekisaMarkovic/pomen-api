import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateQrcodeDto {
  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty()
  @IsNumber()
  certificateId: number;
}
