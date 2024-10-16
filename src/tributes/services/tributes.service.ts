import { Injectable, NotFoundException } from '@nestjs/common';
import { Tribute } from '../entities/tribute.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import {
  UpdateTributeDto,
  UpdateTributeStatusDto,
} from '../dto/update-tribute.dto';
import { CreateTributeDto } from '../dto/create-tribute.dto';
import { Certificate } from 'src/certificates/entities/certificate.entity';

@Injectable()
export class TributesService {
  constructor(
    @InjectRepository(Tribute)
    private readonly tributeRepository: Repository<Tribute>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  /**
   * Find all tributes with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of tributes and the total count
   *
   */
  getTributes(options: IPaginationOptions): Promise<Pagination<Tribute>> {
    const query = this.tributeRepository
      .createQueryBuilder('tribute')
      .where('tribute.deleted_at IS NULL')
      .leftJoinAndSelect('tribute.certificate', 'certificate');

    return paginate<Tribute>(query, options);
  }

  /**
   * Find all tributes by certificate id
   * @param certificateId - The id of the tribute to find
   * @returns The found tributes
   *
   */
  getTributesByCertificateId(
    certificateId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<Tribute>> {
    const query = this.tributeRepository
      .createQueryBuilder('tribute')
      .where('tribute.deleted_at IS NULL')
      .andWhere('tribute.certificateId = :certificateId', { certificateId });

    return paginate<Tribute>(query, options);
  }

  /**
   * Find a tribute by id
   * @param tributeId - The id of the tribute to find
   * @returns The found tribute
   * @throws NotFoundException if the tribute is not found
   *
   */
  async getTributeById(tributeId: number): Promise<Tribute> {
    const tribute = await this.tributeRepository.findOne({
      where: { tributeId, deletedAt: null },
      relations: ['certificate'],
    });

    if (!tribute) {
      throw new NotFoundException();
    }

    return tribute;
  }

  /**
   * Update a tribute
   * @param tributeId - The id of the tribute to update
   * @param UpdateTributeDto - The data to update the tribute
   * @returns The updated tribute
   * @throws NotFoundException if the tribute is not found
   *
   */
  async updateTribute(tributeId: number, updateTributeDto: UpdateTributeDto) {
    const tribute = await this.tributeRepository.findOne({
      where: { tributeId, deletedAt: null },
    });

    if (!tribute) {
      throw new NotFoundException();
    }

    Object.assign(tribute, updateTributeDto);

    tribute.updatedAt = new Date();

    return this.tributeRepository.save(tribute);
  }

  /**
   * Update a tribute
   * @param tributeId - The id of the tribute to update
   * @param UpdateTributeStatusDto - The data to update the tribute
   * @returns The updated tribute
   * @throws NotFoundException if the tribute is not found
   *
   */
  async updateTributeStatus(
    tributeId: number,
    { status }: UpdateTributeStatusDto,
  ) {
    const tribute = await this.tributeRepository.findOne({
      where: { tributeId, deletedAt: null },
    });

    if (!tribute) {
      throw new NotFoundException();
    }

    tribute.updatedAt = new Date();

    tribute.status = status;

    return this.tributeRepository.save(tribute);
  }

  /**
   * Remove a tribute
   * @param tributeId - The id of the tribute to remove
   * @returns The removed tribute
   * @throws NotFoundException if the tribute is not found
   *
   */
  async removeTribute(tributeId: number) {
    const tribute = await this.tributeRepository.findOne({
      where: { tributeId, deletedAt: null },
    });

    if (!tribute) {
      throw new NotFoundException();
    }

    tribute.deletedAt = new Date();

    return this.tributeRepository.save(tribute);
  }

  /**
   * Create a new tribute
   * @param CreateTributeDto - The data to create a new tribute
   * @returns The created tribute
   * @throws NotFoundException if the certificate is not found
   *
   */
  async createTribute(createTributeDto: CreateTributeDto) {
    const { description, email, firstName, lastName, certificateId, status } =
      createTributeDto;

    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    const tribute = this.tributeRepository.create({
      description,
      email,
      firstName,
      lastName,
      certificate,
      status,
    });

    return this.tributeRepository.save(tribute);
  }
}
