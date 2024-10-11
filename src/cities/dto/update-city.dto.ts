import { IsNumber, IsString } from 'class-validator';

export class UpdateCityDto {
  @IsString()
  name: string;
  @IsString()
  code: string;
  @IsNumber()
  countryId: number;
}
