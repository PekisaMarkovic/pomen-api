import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CertificateStatusEnums } from '@/certificates/enums';

export class SearchCertificateDto {
  @ApiProperty()
  @IsNumber()
  page: number;

  @ApiProperty()
  @IsNumber()
  limit: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  cityId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  cemeteryId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({
    enum: CertificateStatusEnums,
    enumName: 'CertificateStatusEnums',
    description:
      'Status must be one of the following: draft, completed, suspended, published',
  })
  @IsOptional()
  @IsEnum(CertificateStatusEnums, {
    message:
      'Status must be one of the following: draft, completed, suspended, published',
  })
  status: CertificateStatusEnums;
}
