import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { UserSeederService } from './services/user-seeder.service';
import { CountrySeederService } from './services/country-seeder.service';
import { CitySeederService } from './services/city-seeder.service';

@Injectable()
export class AppSeederService implements OnModuleInit {
  constructor(
    private userSeederService: UserSeederService,
    private countrySeederService: CountrySeederService,
    private citySeederService: CitySeederService,
    private configService: ConfigService,
    @InjectConnection()
    private connection: Connection,
  ) {}

  async onModuleInit() {
    if (this.configService.get('ENVIROMENT') === 'local') {
      // await this.resetDatabase();
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
    const { serbia } = await this.countrySeederService.initCountries();
    await this.citySeederService.initCountries(serbia.countryId);

    await this.userSeederService.initUsers();

    console.log(
      '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟   SEEDING DATABASE ENDED     🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟',
    );
  }
}
