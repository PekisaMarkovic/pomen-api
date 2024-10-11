import { Injectable } from '@nestjs/common';

import { CountryService } from 'src/countries/services/country.service';
import { COUNTRIES_DATA } from '../jsons/countries';

@Injectable()
export class CountrySeederService {
  constructor(private countryService: CountryService) {}

  async initCountries() {
    const countriesPromises = COUNTRIES_DATA.map(({ name, code, iso }) => {
      return this.countryService.createCountry({
        code,
        name,
        iso,
      });
    });

    const countries = await Promise.all(countriesPromises);

    const serbia = countries.find((c) => c.name === 'Serbia');

    return { countries, serbia };
  }
}
