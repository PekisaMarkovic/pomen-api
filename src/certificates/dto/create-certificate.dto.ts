import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCertificateDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfDeath: Date;

  @ApiProperty()
  @IsString()
  placeOfBirth: string;

  @ApiProperty()
  @IsString()
  placeOfDeath: string;

  @ApiProperty()
  @IsNumber()
  timeOfDeath: number;

  @ApiProperty()
  @IsString()
  biography: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNumber()
  cementeryId: number;

  @ApiProperty()
  @IsNumber()
  userId: number;
}

export class CreateCertificateAndUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstNameNewPhone: string;

  @ApiProperty()
  @IsString()
  firstNameNewUser: string;

  @ApiProperty()
  @IsString()
  lastNameNewUser: string;

  @ApiProperty()
  @IsString()
  emailNewUser: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfDeath: Date;

  @ApiProperty()
  @IsString()
  placeOfBirth: string;

  @ApiProperty()
  @IsString()
  placeOfDeath: string;

  @ApiProperty()
  @IsNumber()
  timeOfDeath: number;

  @ApiProperty()
  @IsString()
  biography: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNumber()
  cementeryId: number;
}
