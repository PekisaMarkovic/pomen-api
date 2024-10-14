import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { slugify } from 'src/common/helpers/slug.helpers';
import { Country } from 'src/countries/entities/country.entity';
import { Repository } from 'typeorm';
import { CreateCityDto } from '../dto/create-city.dto';
import { DropdownCityDto } from '../dto/dropdown-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { City } from '../entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  /**
   * Find all cities with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of cities and the total count
   *
   */
  getCities(options: IPaginationOptions): Promise<Pagination<City>> {
    const query = this.cityRepository
      .createQueryBuilder('city')
      .where('city.deleted_at IS NULL')
      .leftJoinAndSelect('city.country', 'country');

    return paginate<City>(query, options);
  }

  /**
   * Find a city by id
   * @param cityId - The city id of the city to find
   * @returns The found city
   * @throws NotFoundException if the city/country is not found
   *
   */
  async getCityById(cityId: number): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { cityId, deletedAt: null },
      relations: ['country'],
    });

    if (!city) {
      throw new NotFoundException();
    }

    return city;
  }

  /**
   * Find all cities by country id
   * @param countryId - The country Id of the cities to find
   * @returns The found cities
   *
   */
  getCitiesByCountryId(countryId: number): Promise<City[]> {
    return this.cityRepository.find({ where: { countryId, deletedAt: null } });
  }

  /**
   * Find a city by slug
   * @param slug - The slug of the city to find
   * @returns The found city
   * @throws NotFoundException if the city/country is not found
   *
   */
  async getCityBySlug(slug: string): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { slug, deletedAt: null },
      relations: ['country'],
    });

    if (!city) {
      throw new NotFoundException();
    }

    return city;
  }

  /**
   * Find all cities options
   * @returns The cities options
   *
   */
  getCitiesOptions(): Promise<DropdownCityDto[]> {
    return this.cityRepository.find({
      where: { deletedAt: null },
      select: ['cityId', 'name', 'slug', 'countryId'],
    });
  }

  /**
   * Update a city
   * @param cityId - The id of the city to update
   * @param UpdateCityDto - The data to update the city
   * @returns The updated city
   * @throws NotFoundException if the city/country is not found
   *
   */
  async updateCity(
    cityId: number,
    updateCityDto: UpdateCityDto,
  ): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    const country = await this.countryRepository.findOne({
      where: { countryId: updateCityDto.countryId, deletedAt: null },
    });

    if (!country) {
      throw new NotFoundException();
    }

    city.country = country;

    Object.assign(city, updateCityDto);

    city.updatedAt = new Date();

    return this.cityRepository.save(city);
  }

  /**
   * Remove a city
   * @param cityId - The id of the city to remove
   * @returns The removed city
   * @throws NotFoundException if the city is not found
   *
   */
  async removeCity(cityId: number): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    city.deletedAt = new Date();

    return this.cityRepository.save(city);
  }

  /**
   * Create a new city
   * @param CreateCityDto - The data to create a new city
   * @returns The created city
   * @throws NotFoundException if the country is not found
   *
   */
  async createCity(createCityDto: CreateCityDto): Promise<City> {
    const { name, code, countryId } = createCityDto;

    const country = await this.countryRepository.findOne({
      where: { countryId, deletedAt: null },
    });

    if (!country) {
      throw new NotFoundException();
    }

    const slug = await this.generateSlug(name);

    const city = this.cityRepository.create({
      name,
      code,
      slug,
      country,
    });

    return this.cityRepository.save(city);
  }

  /**
   * Create a slug for new city
   * @param slug - The data to create a new slug
   * @returns slug
   *
   */
  private generateSlug = async (slug: string) => {
    let count = 2;
    let nextSlug = slugify({ text: slug });
    while (await this.cityRepository.findOne({ where: { slug: nextSlug } })) {
      nextSlug = slugify({ text: `${slug}-${count}` });
      count++;
    }
    return nextSlug;
  };
}
