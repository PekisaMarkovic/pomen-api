import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCertificateDto {
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
  biography: string;

  @IsString()
  location: string;

  @IsNumber()
  cementeryId: number;

  @IsNumber()
  userId: number;
}

export class CreateCertificateAndUserDto {
  @IsOptional()
  @IsString()
  firstNameNewPhone: string;

  @IsString()
  firstNameNewUser: string;

  @IsString()
  lastNameNewUser: string;

  @IsString()
  emailNewUser: string;

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
  biography: string;

  @IsString()
  location: string;

  @IsNumber()
  cementeryId: number;
}
