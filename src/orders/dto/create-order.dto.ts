import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNumber()
  postCode: number;

  @ApiProperty()
  @IsString()
  cityId: number;

  @ApiProperty()
  @IsNumber()
  certificateId: number;

  @ApiProperty()
  @IsNumber()
  userId: number;
}
