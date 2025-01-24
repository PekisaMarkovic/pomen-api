import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CountrySeederService } from '@/seeder/services/country-seeder.service';
import { UserSeederService } from '@/seeder/services/user-seeder.service';
import { CitySeederService } from '@/seeder/services/city-seeder.service';
import { CemeteriesSeederService } from '@/seeder/services/cemeteries-seeder.service';

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
    switch (this.configService.get('ENVIROMENT')) {
      case 'production':
        await this.initProdDatabase();
        break;

      case 'local':
        // await this.resetDatabase();
        break;

      default:
        await this.initProdDatabase();
        break;
    }
  }

  private async resetDatabase() {
    console.log(
      '🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕 Dropping database... 🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕',
    );
    await this.connection.dropDatabase();
    console.log('🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚 Database dropped. 🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚');

    console.log(
      '📈📈📈📈📈📈📈📈📈📈 Synchronizing database... 📈📈📈📈📈📈📈📈📈📈',
    );
    await this.connection.synchronize();
    console.log(
      '🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖 Database synchronized. 🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖',
    );

    await this.seedDatabase();
  }

  private async initProdDatabase() {
    await this.seedProduction();
  }

  private async seedDatabase() {
    console.log(
      '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀   SEEDING DATABASE STARTED     🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀',
    );

    this.userSeederService.initUsers();

    const { serbia } = await this.countrySeederService.initCountries();

    const { cities } = await this.citySeederService.initCities(
      serbia.countryId,
    );

    await this.cemeteriesSeederService.initCemeteries(cities);

    console.log(
      '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟   SEEDING DATABASE ENDED     🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟',
    );
  }

  private async seedProduction() {
    console.log(
      '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀   SEEDING PRODUCTION DATABASE STARTED     🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀',
    );

    const exist = await this.userSeederService.checkRoles();

    if (!exist) {
      console.log('🌕🌕🌕🌕🌕 Data dont exist... 🌕🌕🌕🌕🌕');

      const { superAdminRole, adminRole, userRole } =
        await this.userSeederService.createRolesAndPermisions();

      this.userSeederService.createSuperAdmin(
        superAdminRole,
        adminRole,
        userRole,
      );

      const { serbia } = await this.countrySeederService.initCountries();

      const { cities } = await this.citySeederService.initCities(
        serbia.countryId,
      );

      await this.cemeteriesSeederService.initCemeteries(cities);
    } else {
      console.log('📈📈📈📈📈 Data exist 📈📈📈📈📈');
    }

    console.log(
      '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟   SEEDING PRODUCTION DATABASE ENDED     🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟',
    );
  }
}
