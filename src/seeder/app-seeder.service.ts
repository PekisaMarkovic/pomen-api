import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CountrySeederService } from './services/country-seeder.service';
import { UserSeederService } from './services/user-seeder.service';
import { CitySeederService } from './services/city-seeder.service';
import { CemeteriesSeederService } from './services/cemeteries-seeder.service';

@Injectable()
export class AppSeederService implements OnModuleInit {
  constructor(
    private countrySeederService: CountrySeederService,
    private citySeederService: CitySeederService,
    private cemeteriesSeederService: CemeteriesSeederService,
    private userSeederService: UserSeederService,
    private configService: ConfigService,
    @InjectConnection()
    private connection: Connection,
  ) {}

  async onModuleInit() {
    if (this.configService.get('ENVIROMENT') === 'local') {
      await this.resetDatabase();
    }
  }

  private async resetDatabase() {
    console.log('🌕🌕Dropping database...🌕🌕');
    await this.connection.dropDatabase();
    console.log('🌚🌚Database dropped.🌚🌚');

    console.log('📈📈Synchronizing database...📈📈');
    await this.connection.synchronize();
    console.log('🖖🖖Database synchronized.🖖🖖');

    // Optionally seed the database
    await this.seedDatabase();
  }

  private async seedDatabase() {
    console.log(
      '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀   SEEDING DATABASE STARTED     🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀',
    );

    this.userSeederService.initUsers();

    const { serbia } = await this.countrySeederService.initCountries();

    const { cities } = await this.citySeederService.initCities(
      serbia.countryId,
    );

    await this.cemeteriesSeederService.initCemeteries(cities);

    console.log(
      '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟   SEEDING DATABASE ENDED     🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟',
    );
  }
}
