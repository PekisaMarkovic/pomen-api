import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCertificateDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfBirth: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfDeath: Date;

  @IsString()
  placeOfBirth: string;

  @IsString()
  placeOfDeath: string;

  @IsOptional()
  @IsNumber()
  timeOfDeath: number;

  @IsString()
  biography: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsNumber()
  cemeteryId: number;

  @IsOptional()
  @IsNumber()
  cityId: number;
}
