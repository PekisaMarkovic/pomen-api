import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsNumber()
  timeOfDeath: number;

  @IsString()
  Biography: string;

  @IsString()
  location: string;

  @IsNumber()
  cemeteryId: number;
}
