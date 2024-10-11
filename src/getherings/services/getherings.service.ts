import { Injectable, NotFoundException } from '@nestjs/common';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { Repository } from 'typeorm';
import { Gethering } from '../entities/gethering.entity';
import { UpdateGetheringDto } from '../dto/update-gethering.dto';
import { CreateGetheringDto } from '../dto/create-gethering.dto';

@Injectable()
export class GetheringsService {
  constructor(
    @InjectRepository(Gethering)
    private readonly getheringRepository: Repository<Gethering>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  /**
   * Find all getherings with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of getherings and the total count
   *
   */
  getGetherings(options: IPaginationOptions): Promise<Pagination<Gethering>> {
    const query = this.getheringRepository
      .createQueryBuilder('gethering')
      .where('gethering.deleted_at = NULL')
      .leftJoinAndSelect('gethering.certificate', 'certificate');

    return paginate<Gethering>(query, options);
  }

  /**
   * Find all getherings by cemetery id
   * @param cementeryId - The id of the cemetery to find
   * @returns The found getherings
   *
   */
  getGetheringsByCertificateId(certificateId: number): Promise<Gethering[]> {
    return this.getheringRepository.find({
      where: { certificateId, deletedAt: null },
    });
  }

  /**
   * Find a gethering by id
   * @param getheringId - The id of the gethering to find
   * @returns The found gethering
   *
   */
  async getGetheringById(getheringId: number): Promise<Gethering> {
    const gethering = await this.getheringRepository.findOne({
      where: { getheringId, deletedAt: null },
      relations: ['certificate'],
    });

    if (!gethering) {
      throw new NotFoundException();
    }

    return gethering;
  }

  /**
   * Update a gethering
   * @param getheringId - The id of the gethering to update
   * @param updateCemeteryDto - The data to update the gethering
   * @returns The updated gethering
   * @throws NotFoundException if the city/gethering is not found
   *
   */

  async updateGethering(
    getheringId: number,
    updateGetheringDto: UpdateGetheringDto,
  ) {
    const gethering = await this.getheringRepository.findOne({
      where: { getheringId, deletedAt: null },
    });

    if (!gethering) {
      throw new NotFoundException();
    }

    Object.assign(gethering, updateGetheringDto);

    gethering.updatedAt = new Date();

    return this.getheringRepository.save(gethering);
  }

  /**
   * Remove a gethering
   * @param getheringId - The id of the gethering to remove
   * @returns The removed gethering
   * @throws NotFoundException if the city/gethering is not found
   *
   */

  async removeGethering(getheringId: number) {
    const gethering = await this.getheringRepository.findOne({
      where: { getheringId, deletedAt: null },
    });

    if (!gethering) {
      throw new NotFoundException();
    }

    gethering.deletedAt = new Date();

    return this.getheringRepository.save(gethering);
  }

  /**
   * Create a new gethering
   * @param CreateGetheringDto - The data to create a new gethering
   * @returns The created gethering
   * @throws NotFoundException if the certificate is not found
   *
   */
  async createGethering(createCemeteryDto: CreateGetheringDto) {
    const { getheringDate, hour, address, certificateId } = createCemeteryDto;

    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    const gethering = this.getheringRepository.create({
      address,
      getheringDate,
      hour,
      certificate,
    });

    return this.getheringRepository.save(gethering);
  }
}
