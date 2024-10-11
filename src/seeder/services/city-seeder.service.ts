import { Injectable } from '@nestjs/common';

import { COUNTRIES_DATA } from '../jsons/countries';
import { CityService } from 'src/cities/services/city.service';

@Injectable()
export class CitySeederService {
  constructor(private cityService: CityService) {}

  async initCountries(countryId: number) {
    const citiesPromises = COUNTRIES_DATA.map(({ name, code }) => {
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
