import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';
import { CreateContactDto } from '../dto/create-contact.dto';
import {
  UpdateContactDto,
  UpdateContactStatusEnumDto,
} from '../dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  /**
   * Create a new contact
   * @param CreateContactDto - The data to create a new contact
   * @returns The created contact
   * @throws NotFoundException if the country is not found
   *
   */
  async createcontact(createcontactDto: CreateContactDto): Promise<Contact> {
    const { name, email, message } = createcontactDto;

    const contact = this.contactRepository.create({
      name,
      message,
      email,
    });

    return this.contactRepository.save(contact);
  }

  /**
   * Find all cities with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of cities and the total count
   *
   */
  getContacts(options: IPaginationOptions): Promise<Pagination<Contact>> {
    const query = this.contactRepository.createQueryBuilder('contacts');

    return paginate<Contact>(query, options);
  }

  /**
   * Find a contact by id
   * @param contactId - The contact id of the contact to find
   * @returns The found contact
   * @throws NotFoundException if the contact is not found
   *
   */
  async getContactById(contactId: number): Promise<Contact> {
    const contact = await this.contactRepository.findOne({
      where: { contactId, deletedAt: null },
      relations: ['country'],
    });

    if (!contact) {
      throw new NotFoundException();
    }

    return contact;
  }

  /**
   * Update a contact
   * @param contactId - The id of the contact to update
   * @param UpdateContactDto - The data to update the contact
   * @returns The updated contact
   * @throws NotFoundException if the contact is not found
   *
   */
  async updateContact(
    contactId: number,
    updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    const contact = await this.contactRepository.findOne({
      where: { contactId, deletedAt: null },
    });

    if (!contact) {
      throw new NotFoundException();
    }

    Object.assign(contact, updateContactDto);

    contact.updatedAt = new Date();

    return this.contactRepository.save(contact);
  }

  /**
   * Update a contact status
   * @param contactId - The id of the contact to update
   * @param dto - The data to update the contact
   * @returns The updated contact
   * @throws NotFoundException if the contact/country is not found
   *
   */
  async updateContactStatus(
    contactId: number,
    dto: UpdateContactStatusEnumDto,
  ): Promise<Contact> {
    const contact = await this.contactRepository.findOne({
      where: { contactId, deletedAt: null },
    });

    if (!contact) {
      throw new NotFoundException();
    }

    Object.assign(contact, dto);

    contact.updatedAt = new Date();

    return this.contactRepository.save(contact);
  }

  /**
   * Remove a contact
   * @param contactId - The id of the contact to remove
   * @returns The removed contact
   * @throws NotFoundException if the contact is not found
   *
   */
  async removeContact(contactId: number): Promise<Contact> {
    const contact = await this.contactRepository.findOne({
      where: { contactId, deletedAt: null },
    });

    if (!contact) {
      throw new NotFoundException();
    }

    contact.deletedAt = new Date();

    return this.contactRepository.save(contact);
  }
}
