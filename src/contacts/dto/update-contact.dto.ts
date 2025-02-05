import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from '@/contacts/dto/create-contact.dto';
import { IsEnum } from 'class-validator';
import { ContactStatusEnum } from '@/contacts/enums/contact-status.enum';

export class UpdateContactDto extends PartialType(CreateContactDto) {}

export class UpdateContactStatusEnumDto {
  @ApiProperty({
    enum: ContactStatusEnum,
    enumName: 'ContactStatusEnum',
    description:
      'Type must be one of the following: title, text.center, text.left, text.right',
  })
  @IsEnum(ContactStatusEnum, {
    message: 'Status must be one of the following: resolved, new.message...',
  })
  status: ContactStatusEnum;
}
