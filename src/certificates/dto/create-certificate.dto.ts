import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { LocationPointDto } from '@/common/dto/location-point.dto';

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
  @IsOptional()
  @IsNumber()
  timeOfDeath: number;

  @ApiProperty()
  @IsString()
  biography: string;

  @ApiProperty({ type: LocationPointDto })
  @Type(() => LocationPointDto)
  location: LocationPointDto;

  @ApiProperty()
  @IsNumber()
  cemeteryId: number;

  @ApiProperty()
  @IsNumber()
  pricingId: number;

  @ApiProperty()
  @IsNumber()
  userId: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  leadId: number;
}

export class CreateCertificateAndUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  phoneNewUser: string;

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
  addressOrder: string;

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
  @IsOptional()
  timeOfDeath: number;

  @ApiProperty()
  @IsString()
  @MinLength(250, {
    message: 'Biography must be at least 250 characters long.',
  })
  biography: string;

  @ApiProperty()
  @IsNumber()
  cemeteryId: number;

  @ApiProperty()
  @IsNumber()
  pricingId: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  cityId: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  leadId: number;
}

export class CertificateBuyerUserData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isEmailConfirmed: boolean;
}
