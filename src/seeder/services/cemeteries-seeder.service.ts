import { Injectable } from '@nestjs/common';

import { CementeryService } from 'src/cemeteries/services/cementery.service';
import { City } from 'src/cities/entities/city.entity';
import { SERBIAN_CITIES_CEMETEREIS } from '../jsons/cemeteries';

@Injectable()
export class CemeteriesSeederService {
  constructor(private cementeryService: CementeryService) {}

  async initCemeteries(cities: City[]) {
    const promises = SERBIAN_CITIES_CEMETEREIS.map(
      ({ name, address, city: cityName }) => {
        const city = cities.find((c) => c.name == cityName);

        if (!city) return Promise;

        return this.cementeryService.createCemetery({
          address,
          cityId: city.cityId,
          name,
        });
      },
    );

    const cemeteries = await Promise.all(promises);

    return { cemeteries };
  }
}
