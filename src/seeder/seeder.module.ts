import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '@/auth/entities/permission.entity';
import { Role } from '@/auth/entities/role.entity';
import { UsersModule } from '@/users/users.module';
import { AppSeederService } from '@/seeder/app-seeder.service';
import { CityModule } from '@/cities/city.module';
import { CountryModule } from '@/countries/country.module';
import { CitySeederService } from '@/seeder/services/city-seeder.service';
import { CountrySeederService } from '@/seeder/services/country-seeder.service';
import { UserSeederService } from '@/seeder/services/user-seeder.service';
import { CemeteriesSeederService } from '@/seeder/services/cemeteries-seeder.service';
import { CemeteryModule } from '@/cemeteries/cemetery.module';

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
