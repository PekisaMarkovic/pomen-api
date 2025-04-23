import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { LeadStatusEnums } from '@/leads/enums';

export class SearchLeadDto {
  @ApiProperty()
  @IsNumber()
  page: number;

  @ApiProperty()
  @IsNumber()
  limit: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({
    enum: LeadStatusEnums,
    enumName: 'LeadStatusEnums',
    description:
      'Status must be one of the following: new, in.progress, converted, discarded',
  })
  @IsOptional()
  @IsEnum(LeadStatusEnums, {
    message:
      'Status must be one of the following: new, in.progress, converted, discarded',
  })
  status: LeadStatusEnums;
}
