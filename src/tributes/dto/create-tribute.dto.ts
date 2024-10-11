import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateTributeDto {
  @ApiProperty()
  @IsNumber()
  certificateId: number;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
