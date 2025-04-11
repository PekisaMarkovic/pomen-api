import { Module } from '@nestjs/common';
import { PricingsService } from '@/pricings/services/pricings.service';
import { PricingsController } from '@/pricings/controllers/pricings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pricing } from '@/pricings/entities/pricing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pricing])],
  controllers: [PricingsController],
  providers: [PricingsService],
  exports: [PricingsService],
})
export class PricingsModule {}
