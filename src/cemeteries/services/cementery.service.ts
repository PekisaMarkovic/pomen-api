import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCemeteryDto } from '../dto/create-cemetery.dto';
import { updateCemeteryDto } from '../dto/update-cementery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from 'src/cities/entities/city.entity';
import { Cemetery } from '../entities/cementery.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { DropdownCementeryDto } from '../dto/dropdown-cementery.dto';
import { slugify } from 'src/common/helpers/slug.helpers';

@Injectable()
export class CementeryService {
  constructor(
    @InjectRepository(Cemetery)
    private readonly cemeteryRepository: Repository<Cemetery>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  /**
   * Find all cemeteries with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of cemeteries and the total count
   *
   */
  getCemeteries(options: IPaginationOptions): Promise<Pagination<Cemetery>> {
    const query = this.cemeteryRepository
      .createQueryBuilder('cemetery')
      .where('cemetery.deleted_at = NULL')
      .leftJoinAndSelect('cemetery.city', 'city');

    return paginate<Cemetery>(query, options);
  }

  /**
   * Find a cemetery by id
   * @param cementeryId - The id of the cemetery to find
   * @returns The found cemetery
   * @throws NotFoundException if the cemetery is not found
   *
   */
  async getCemeteryById(cementeryId: number): Promise<Cemetery> {
    const cemetery = await this.cemeteryRepository.findOne({
      where: { cementeryId, deletedAt: null },
      relations: ['city'],
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    return cemetery;
  }

  /**
   * Find all cemeteries by city id
   * @param cityId - The id of the cemetery to find
   * @returns The found cemeteries
   *
   */
  async getCemeteriesByCityId(cityId: number): Promise<Cemetery[]> {
    return await this.cemeteryRepository.find({
      where: { cityId, deletedAt: null },
    });
  }

  /**
   * Find a cemeterie by slug
   * @param slug - The slug of the cemetery to find
   * @returns The found cemetery
   * @throws NotFoundException if the cemetery is not found
   *
   */
  async getCemeteryBySlug(slug: string): Promise<Cemetery> {
    const cemetery = await this.cemeteryRepository.findOne({
      where: { slug, deletedAt: null },
      relations: ['city'],
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    return cemetery;
  }

  /**
   * Find all cemeteries options
   * @returns The cemeteries options
   *
   */
  getCemeteriesOptions(): Promise<DropdownCementeryDto[]> {
    return this.cemeteryRepository.find({
      where: { deletedAt: null },
      select: ['cityId', 'name', 'slug', 'cementeryId'],
    });
  }

  /**
   * Update a cemetery
   * @param cementeryId - The id of the cemetery to update
   * @param updateCemeteryDto - The data to update the cemetery
   * @returns The updated cemetery
   * @throws NotFoundException if the city/cemetery is not found
   *
   */
  async updateCemetery(
    cementeryId: number,
    updateCemeteryDto: updateCemeteryDto,
  ) {
    const cemetery = await this.cemeteryRepository.findOne({
      where: { cementeryId, deletedAt: null },
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    const city = await this.cityRepository.findOne({
      where: { cityId: updateCemeteryDto.cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    cemetery.city = city;

    Object.assign(cemetery, updateCemeteryDto);

    cemetery.updatedAt = new Date();

    return this.cemeteryRepository.save(cemetery);
  }

  /**
   * Remove a cemetery
   * @param cementeryId - The id of the cemetery to remove
   * @returns The removed cemetery
   * @throws NotFoundException if the cemetery is not found
   *
   */
  async removeCemetery(cementeryId: number) {
    const cemetery = await this.cemeteryRepository.findOne({
      where: { cementeryId },
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    cemetery.deletedAt = new Date();

    return this.cityRepository.save(cemetery);
  }

  /**
   * Create a new cemetery
   * @param CreateCemeteryDto - The data to create a new cemetery
   * @returns The created cemetery
   * @throws NotFoundException if the city is not found
   *
   */
  async createCemetery(createCemeteryDto: CreateCemeteryDto) {
    const { name, address, cityId } = createCemeteryDto;

    const city = await this.cityRepository.findOne({
      where: { cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    const slug = await this.generateSlug(name);

    const cementery = this.cemeteryRepository.create({
      name,
      address,
      slug,
      city,
    });

    return this.cemeteryRepository.save(cementery);
  }

  /**
   * Create a slug for new cemetery
   * @param slug - The data to create a new slug
   * @returns slug
   *
   */
  private generateSlug = async (slug: string) => {
    let count = 2;
    let nextSlug = slugify({ text: slug });
    while (
      await this.cemeteryRepository.findOne({ where: { slug: nextSlug } })
    ) {
      nextSlug = `${slug}-${count}`;
      count++;
    }
    return nextSlug;
  };
}
