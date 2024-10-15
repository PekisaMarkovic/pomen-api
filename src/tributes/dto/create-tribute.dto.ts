import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TributeStatusEnum } from '../enums/tribute-status.enum';

export class CreateTributeDto {
  @ApiProperty()
  @IsNumber()
  certificateId: number;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @IsOptional()
  @ApiProperty()
  @IsEnum(TributeStatusEnum, {
    message: 'Status must be one of the following: allowed, denied, pending',
  })
  status: TributeStatusEnum;
}
