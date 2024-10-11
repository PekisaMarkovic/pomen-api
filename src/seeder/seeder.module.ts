import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from 'src/auth/entities/permission.entity';
import { Role } from 'src/auth/entities/role.entity';
import { UsersModule } from 'src/users/users.module';
import { AppSeederService } from './app-seeder.service';

import { CityModule } from 'src/cities/city.module';
import { CountryModule } from 'src/countries/country.module';
import { CitySeederService } from './services/city-seeder.service';
import { CountrySeederService } from './services/country-seeder.service';
import { UserSeederService } from './services/user-seeder.service';
import { CemeteriesSeederService } from './services/cemeteries-seeder.service';
import { CemeteryModule } from 'src/cemeteries/cemetery.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role, Permission]),
    UsersModule,
    CountryModule,
    CemeteryModule,
    CityModule,
  ],
  providers: [
    AppSeederService,
    UserSeederService,
    CitySeederService,
    CountrySeederService,
    CemeteriesSeederService,
  ],
})
export class SeederModule {}
