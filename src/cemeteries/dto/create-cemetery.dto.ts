import { IsNumber, IsString } from 'class-validator';

export class CreateCemeteryDto {
  @IsNumber()
  cityId: number;
  @IsString()
  name: string;
  @IsString()
  address: string;
}
