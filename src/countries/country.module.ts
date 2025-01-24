import { Module } from '@nestjs/common';
import { CountryService } from '@/countries/services/country.service';
import { CountryController } from '@/countries/controllers/country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '@/countries/entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
