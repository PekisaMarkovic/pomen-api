import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { LocationPointDto } from 'src/common/dto/location-point.dto';

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

  @Type(() => LocationPointDto)
  location: LocationPointDto;

  @ApiProperty()
  @IsNumber()
  cemeteryId: number;

  @ApiProperty()
  @IsNumber()
  userId: number;
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
  biography: string;

  @ApiProperty()
  @IsNumber()
  cemeteryId: number;
}
