import { Module } from '@nestjs/common';
import { CityService } from '@/cities/services/city.service';
import { CityController } from '@/cities/controllers/city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '@/cities/entities/city.entity';
import { Country } from '@/countries/entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, Country])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
