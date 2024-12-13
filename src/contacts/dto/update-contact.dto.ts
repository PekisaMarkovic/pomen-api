import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import { IsEnum } from 'class-validator';
import { ContactStatusEnum } from '../enums/contact-status.enum';

export class UpdateContactDto extends PartialType(CreateContactDto) {}

export class UpdateContactStatusEnumDto {
  @ApiProperty()
  @IsEnum(ContactStatusEnum, {
    message: 'Status must be one of the following: resolved, new.message...',
  })
  status: ContactStatusEnum;
}
