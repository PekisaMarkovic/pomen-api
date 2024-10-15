import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { TributeStatusEnum } from '../enums/tribute-status.enum';

export class UpdateTributeDto {
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
}

export class UpdateTributeStatusDto {
  @ApiProperty()
  @ApiProperty()
  @IsEnum(TributeStatusEnum, {
    message: 'Status must be one of the following: allowed, denied, pending',
  })
  status: TributeStatusEnum;
}
