import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGetheringDto {
  @ApiProperty()
  @IsNumber()
  certificateId: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  getheringDate: Date;

  @ApiProperty()
  @IsNumber()
  hour: number;

  @ApiProperty()
  @IsString()
  address: string;
}
