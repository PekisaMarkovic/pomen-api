import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { Qrcode } from '../entities/qrcode.entity';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { UpdateQrcodeDto } from '../dto/update-qrcode.dto';
import { CreateQrcodeDto } from '../dto/create-qrcode.dto';
import { slugify } from 'src/common/helpers/slug.helpers';

@Injectable()
export class QrcodeService {
  constructor(
    @InjectRepository(Qrcode)
    private readonly qrcodeRepository: Repository<Qrcode>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  /**
   * Find all qrcodes with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of qrcodes and the total count
   *
   */
  getQRcodes(options: IPaginationOptions): Promise<Pagination<Qrcode>> {
    const query = this.qrcodeRepository
      .createQueryBuilder('qrcode')
      .where('qrcode.deleted_at IS NULL')
      .leftJoinAndSelect('qrcode.certificate', 'certificate');

    return paginate<Qrcode>(query, options);
  }

  /**
   * Find all qrcodes by certificate id
   * @param certificateId - The id of the qrcode to find
   * @returns The found qrcodes
   *
   */
  getQRcodesByCertificateId(certificateId: number): Promise<Qrcode[]> {
    return this.qrcodeRepository.find({
      where: { certificateId, deletedAt: null },
    });
  }

  /**
   * Find a qrcode by id
   * @param qrcodeId - The id of the qrcode to find
   * @returns The found qrcode
   * @throws NotFoundException if the qrcode is not found
   *
   */
  async getQRcodeById(qrcodeId: number): Promise<Qrcode> {
    const qrcode = await this.qrcodeRepository.findOne({
      where: { qrcodeId, deletedAt: null },
      relations: ['certificate'],
    });

    if (!qrcode) {
      throw new NotFoundException();
    }

    return qrcode;
  }

  /**
   * Update a qrcode
   * @param cementeryId - The id of the qrcode to update
   * @param UpdateQrcodeDto - The data to update the qrcode
   * @returns The updated qrcode
   * @throws NotFoundException if the qrcode is not found
   *
   */
  async updateQRcode(qrcodeId: number, updateQrcodeDto: UpdateQrcodeDto) {
    const qrcode = await this.qrcodeRepository.findOne({
      where: { qrcodeId, deletedAt: null },
    });

    if (!qrcode) {
      throw new NotFoundException();
    }

    Object.assign(qrcode, updateQrcodeDto);

    qrcode.updatedAt = new Date();

    return this.qrcodeRepository.save(qrcode);
  }

  /**
   * Remove a qrcode
   * @param cementeryId - The id of the qrcode to remove
   * @returns The removed qrcode
   * @throws NotFoundException if the qrcode is not found
   *
   */
  async removeQRcode(qrcodeId: number) {
    const qrcode = await this.qrcodeRepository.findOne({
      where: { qrcodeId, deletedAt: null },
    });

    if (!qrcode) {
      throw new NotFoundException();
    }

    qrcode.deletedAt = new Date();

    return this.qrcodeRepository.save(qrcode);
  }

  /**
   * Create a new qrcode
   * @param CreateQrcodeDto - The data to create a new qrcode
   * @returns The created qrcode
   * @throws NotFoundException if the certificate is not found
   *
   */
  async createQRcode(createTributeDto: CreateQrcodeDto) {
    const { value, certificateId } = createTributeDto;

    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    const qrcode = this.qrcodeRepository.create({
      value,
      certificate,
    });

    const slug = await this.generateSlug(
      `${certificate.firstName} ${certificate.lastName} ${certificate.dateOfBirth} ${certificate.dateOfDeath}`,
    );

    await this.certificateRepository.save({ ...certificate, slug });

    return this.qrcodeRepository.save(qrcode);
  }

  /**
   * Create a slug for sertificate
   * @param slug - The data to create a new slug
   * @returns slug
   *
   */
  private generateSlug = async (slug: string) => {
    let count = 2;
    let nextSlug = slugify({ text: slug });
    while (
      await this.certificateRepository.findOne({ where: { slug: nextSlug } })
    ) {
      nextSlug = `${slug}-${count}`;
      count++;
    }
    return nextSlug;
  };
}
