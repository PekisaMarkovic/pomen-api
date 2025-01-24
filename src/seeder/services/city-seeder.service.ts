import { Injectable } from '@nestjs/common';
import { CityService } from '@/cities/services/city.service';
import { SERBIAN_CITIES } from '@/seeder/jsons/cities';

@Injectable()
export class CitySeederService {
  constructor(private cityService: CityService) {}

  async initCities(countryId: number) {
    const citiesPromises = SERBIAN_CITIES.map(({ name, code }) => {
      return this.cityService.createCity({
        code,
        name,
        countryId,
      });
    });

    const cities = await Promise.all(citiesPromises);

    return { cities };
  }
}
