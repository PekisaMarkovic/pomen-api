import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from '../dto/create-country.dto';
import { slugify } from 'src/common/helpers/slug.helpers';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../entities/country.entity';
import { Repository } from 'typeorm';
import { DropdownCountryDto } from '../dto/dropdown-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  /**
   * Find all cemeteries with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of cemeteries and the total count
   *
   */
  getCountries(options: IPaginationOptions): Promise<Pagination<Country>> {
    const query = this.countryRepository
      .createQueryBuilder('country')
      .where('country.deleted_at IS NULL');

    return paginate<Country>(query, options);
  }

  /**
   * Find a country by id
   * @param countryId - The id of the country to find
   * @returns The found country
   * @throws NotFoundException if the country is not found
   *
   */
  async getCountryById(countryId: number): Promise<Country> {
    const country = await this.countryRepository.findOne({
      where: { countryId, deletedAt: null },
    });

    if (!country) {
      throw new NotFoundException();
    }

    return country;
  }

  /**
   * Find a country by id
   * @param slug - The id of the country to find
   * @returns The found country
   * @throws NotFoundException if the country is not found
   *
   */
  async getCountryBySlug(slug: string): Promise<Country> {
    const country = await this.countryRepository.findOne({
      where: { slug, deletedAt: null },
    });

    if (!country) {
      throw new NotFoundException();
    }

    return country;
  }

  /**
   * Find all countries options
   * @returns The countries options
   *
   */
  getCountriesOptions(): Promise<DropdownCountryDto[]> {
    return this.countryRepository.find({
      where: { deletedAt: null },
      select: ['countryId', 'name', 'slug'],
    });
  }

  /**
   * Update a country
   * @param countryId - The id of the country to update
   * @param UpdateCountryDto - The data to update the country
   * @returns The updated country
   * @throws NotFoundException if the country is not found
   *
   */
  async updateCountry(countryId: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.countryRepository.findOne({
      where: { countryId, deletedAt: null },
    });

    if (!country) {
      throw new NotFoundException();
    }

    Object.assign(country, updateCountryDto);

    country.updatedAt = new Date();

    return this.countryRepository.save(country);
  }

  /**
   * remove a country
   * @param countryId - The id of the country to remove
   * @returns The removed country
   * @throws NotFoundException if the country is not found
   *
   */
  async removeCountry(countryId: number) {
    const country = await this.countryRepository.findOne({
      where: { countryId },
    });

    if (!country) {
      throw new NotFoundException();
    }

    country.deletedAt = new Date();

    return this.countryRepository.save(country);
  }

  /**
   * Create a new country
   * @param CreateCountryDto - The data to create a new country
   * @returns The created country
   *
   */
  async createCountry(createCountryDto: CreateCountryDto) {
    const { name, code, iso } = createCountryDto;

    const slug = await this.generateSlug(name);

    const country = this.countryRepository.create({
      iso,
      name,
      code,
      slug,
    });

    return this.countryRepository.save(country);
  }

  /**
   * Create a slug for new country
   * @param slug - The data to create a new slug
   * @returns slug
   *
   */
  private generateSlug = async (slug: string) => {
    let count = 2;
    let nextSlug = slugify({ text: slug });
    while (
      await this.countryRepository.findOne({ where: { slug: nextSlug } })
    ) {
      nextSlug = slugify({ text: `${slug}-${count}` });
      count++;
    }
    return nextSlug;
  };
}
