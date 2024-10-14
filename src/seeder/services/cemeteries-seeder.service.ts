import { Injectable } from '@nestjs/common';

import { CementeryService } from 'src/cemeteries/services/cementery.service';
import { City } from 'src/cities/entities/city.entity';
import { SERBIAN_CITIES_CEMETEREIS } from '../jsons/cemeteries';

@Injectable()
export class CemeteriesSeederService {
  constructor(private cementeryService: CementeryService) {}

  private formatLocation(location: {
    type: string;
    coordinates: number[];
  }): string {
    if (location.type === 'Point' && location.coordinates.length === 2) {
      const [longitude, latitude] = location.coordinates;
      return `(${longitude}, ${latitude})`; // Returns string in the format PostgreSQL expects
    }
    throw new Error('Invalid location format');
  }

  async initCemeteries(cities: City[]) {
    const promises = SERBIAN_CITIES_CEMETEREIS.map(
      ({ name, address, city: cityName, location }) => {
        const city = cities.find((c) => c.name == cityName);

        if (!city) return Promise;

        return this.cementeryService.createCemetery({
          address,
          cityId: city.cityId,
          location,
          name,
        });
      },
    );

    const cemeteries = await Promise.all(promises);

    return { cemeteries };
  }
}
