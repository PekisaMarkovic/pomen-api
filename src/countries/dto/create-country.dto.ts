import { IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  name: string;
  @IsString()
  code: string;
  @IsString()
  iso: string;
}
