import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  address: string;

  @IsNumber()
  postCode: number;

  @IsString()
  cityId: number;

  @IsNumber()
  certificateId: number;

  @IsNumber()
  userId: number;
}
