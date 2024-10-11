import { Injectable } from '@nestjs/common';

import { CountryService } from 'src/countries/services/country.service';
import { COUNTRIES } from '../jsons/countries';
@Injectable()
export class CountrySeederService {
  constructor(private countryService: CountryService) {}

  async initCountries() {
    const countriesPromises = COUNTRIES.map(({ name, code, iso }) => {
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

  async checkIsThereOneRecord() {
    const country = await this.countryService.getCountryById(1);

    return !!country;
  }
}
