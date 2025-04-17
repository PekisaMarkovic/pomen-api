import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from '@/leads/entities/lead.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { LeadStatusEnums } from '@/leads/enums';
import { CreateLeadDto, UpdateLadStatusDto } from '@/leads/dto';
import { MailerService } from '@/mailer/services/mailer.service';
import { Pricing } from '../../pricings/entities/pricing.entity';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private readonly leadRepository: Repository<Lead>,
    @InjectRepository(Pricing)
    private readonly pricingRepository: Repository<Pricing>,

    private readonly mailerService: MailerService,
  ) {}

  /**
   * Find all leads with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of leads and the total count
   *
   */
  getLeads(options: IPaginationOptions): Promise<Pagination<Lead>> {
    const query = this.leadRepository
      .createQueryBuilder('lead')
      .where('lead.deleted_at IS NULL');

    return paginate<Lead>(query, options);
  }

  /**
   * Find all leads with pagination
   * @param IPaginationOptions - The pagination parameters
   * @param firstName - The first name of the leads to find
   * @param lastName - The last name of the leads to find
   * @param status - The status of the leads to find
   * @returns An array of leads and the total count
   *
   */
  getLeadsSearch(
    options: IPaginationOptions,
    firstName: string,
    lastName?: string,
    status?: LeadStatusEnums,
  ): Promise<Pagination<Lead>> {
    const query = this.leadRepository
      .createQueryBuilder('lead')
      .where('lead.deleted_at IS NULL')
      .andWhere('lead.first_name ILIKE :firstName', {
        firstName: `%${firstName}%`,
      });

    if (status) {
      query.andWhere('lead.status = :status', { status });
    }

    if (lastName) {
      query.andWhere('lead.last_name ILIKE :lastName', {
        lastName: `%${lastName}%`,
      });
    }

    return paginate<Lead>(query, options);
  }

  /**
   * Find a lead by id
   * @param leadId - The leadId of the lead to find
   * @returns The found lead
   * @throws NotFoundException if the lead is not found
   *
   */
  async getLeadById(leadId: number, status?: LeadStatusEnums): Promise<Lead> {
    const lead = await this.leadRepository.findOne({
      where: { leadId, deletedAt: null, ...(status ? { status } : {}) },
    });

    if (!lead) {
      throw new NotFoundException();
    }

    return lead;
  }

  /**
   * Remove a lead
   * @param leadId - The id of the lead to remove
   * @returns The removed lead
   * @throws NotFoundException if the lead is not found
   *
   */
  async removeLead(leadId: number) {
    const lead = await this.leadRepository.findOne({
      where: { leadId, deletedAt: null },
    });

    if (!lead) {
      throw new NotFoundException();
    }

    lead.deletedAt = new Date();

    return this.leadRepository.save(lead);
  }

  /**
   * Create a new lead
   * We can only have one lead with status NEW per email, so we throw exception when same email try creating many lead that are not proccessed
   * @param CreateLeadDto - The data to create a new lead
   * @returns The created lead
   * @throws NotFoundException if the pricing is not found
   * @throws ConflictException if the lead exists
   *
   */
  async createLead(createLeadDto: CreateLeadDto) {
    const {
      addressOrder,
      dateOfBirth,
      dateOfDeath,
      email,
      firstName,
      firstNameForCertificate,
      lastName,
      lastNameForCertificate,
      note,
      phoneNumber,
      pricingId,
    } = createLeadDto;

    const exist = await this.leadRepository.findOne({
      where: { email, deletedAt: null, status: LeadStatusEnums.NEW },
    });

    if (exist) {
      throw new ConflictException();
    }

    const pricing = await this.pricingRepository.findOne({
      where: { pricingId },
    });

    if (!pricing) {
      throw new NotFoundException();
    }

    const lead = this.leadRepository.create({
      address: addressOrder,
      dateOfBirth,
      dateOfDeath,
      email,
      firstName,
      firstNameForCertificate,
      lastName,
      lastNameForCertificate,
      note,
      phoneNumber,
      status: LeadStatusEnums.NEW,
    });

    await this.mailerService.sendLeadCreatedMail({
      data: {
        buyer_name: firstName,
        first_name: firstNameForCertificate,
        last_name: lastNameForCertificate,
      },
      recipients: [
        {
          name: `${firstName} ${lastName}`,
          address: email,
        },
      ],
    });

    return this.leadRepository.save(lead);
  }

  /**
   * Update a lead status
   * @param leadId - The id of the lead to update
   * @param UpdateLeadStatusDto - The data to update the lead
   * @returns The updated lead
   * @throws NotFoundException if the lead is not found
   *
   */
  async updateLeadStatus(leadId: number, { status }: UpdateLadStatusDto) {
    const lead = await this.leadRepository.findOne({
      where: { leadId, deletedAt: null },
    });

    if (!lead) {
      throw new NotFoundException();
    }

    lead.updatedAt = new Date();

    lead.status = status;

    return this.leadRepository.save(lead);
  }
}
