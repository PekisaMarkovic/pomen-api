import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  UpdateContactDto,
  CreateContactDto,
  UpdateContactStatusEnumDto,
} from '@/contacts/dto';
import { ContactsService } from '@/contacts/services/contacts.service';
import { Public } from '@/auth/decorators';
import { Contact } from '@/contacts/entities/contact.entity';

@Controller('contacts')
@ApiTags('Contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create a new contact' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The contacy has been successfully created.',
    type: Contact,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the country is not found',
    type: NotFoundException,
  })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createcontact(createContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contacts paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all contacts.',
    type: [Contact],
  })
  getContacts(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.contactsService.getContacts({
      page,
      limit,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a contact by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the contact.',
    type: Contact,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the contact is not found',
    type: NotFoundException,
  })
  getContactById(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.getContactById(id);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a contact with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the contact.',
    type: Contact,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the contact is not found',
    type: NotFoundException,
  })
  updateContact(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateContactDto,
  ) {
    return this.contactsService.updateContact(id, dto);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a contact status with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the contact.',
    type: Contact,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the contact status is not found',
    type: NotFoundException,
  })
  updateContactStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateContactStatusEnumDto,
  ) {
    return this.contactsService.updateContactStatus(id, dto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a contact with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the contact.',
    type: Contact,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the contact is not found',
    type: NotFoundException,
  })
  removeContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.removeContact(id);
  }
}
