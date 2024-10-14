import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { Repository } from 'typeorm';
import { Qrcode } from '../entities/qrcode.entity';

@Injectable()
export class QrcodeService {
  constructor(
    @InjectRepository(Qrcode)
    private readonly qrcodeRepository: Repository<Qrcode>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,

    private readonly configService: ConfigService,
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
   * Remove a qrcode
   * @param cemeteryId - The id of the qrcode to remove
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
}
