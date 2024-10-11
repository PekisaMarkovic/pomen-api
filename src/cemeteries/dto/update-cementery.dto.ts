import { IsNumber, IsString } from 'class-validator';

export class updateCemeteryDto {
  @IsNumber()
  cityId: number;
  @IsString()
  name: string;
  @IsString()
  address: string;
}
