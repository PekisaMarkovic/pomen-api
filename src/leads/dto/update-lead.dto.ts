import { ApiProperty } from '@nestjs/swagger';
import { LeadStatusEnums } from '@/leads/enums';
import { IsEnum } from 'class-validator';

export class UpdateLadStatusDto {
  @ApiProperty({
    enum: LeadStatusEnums,
    enumName: 'LeadStatusEnums',
    description:
      'Status must be one of the following: new, converted, discarded, in.progress',
  })
  @IsEnum(LeadStatusEnums, {
    message:
      'Status must be one of the following: new, converted, discarded, in.progress',
  })
  status: LeadStatusEnums;
}
