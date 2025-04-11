import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CertificateStatusEnums } from '@/certificates/enums';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCertificateDto {
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  dateOfBirth: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  dateOfDeath: Date;

  @IsString()
  @ApiProperty()
  placeOfBirth: string;

  @IsString()
  @ApiProperty()
  placeOfDeath: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  timeOfDeath: number;

  @IsString()
  @ApiProperty()
  biography: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  location: string;

  @IsNumber()
  @ApiProperty()
  cemeteryId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  cityId: number;

  @ApiProperty()
  @IsNumber()
  pricingId: number;
}

export class UpdateCertificateStatusDto {
  @ApiProperty({
    enum: CertificateStatusEnums,
    enumName: 'CertificateStatusEnums',
    description:
      'Status must be one of the following: draft, completed, suspended, published',
  })
  @IsEnum(CertificateStatusEnums, {
    message:
      'Status must be one of the following: draft, completed, suspended, published',
  })
  status: CertificateStatusEnums;
}
