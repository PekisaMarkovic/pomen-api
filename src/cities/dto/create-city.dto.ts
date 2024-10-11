import { IsNumber, IsString } from 'class-validator';

export class CreateCityDto {
  @IsString()
  name: string;
  @IsString()
  code: string;
  @IsNumber()
  countryId: number;
}
