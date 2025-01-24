import { Module } from '@nestjs/common';
import { GetheringsController } from '@/getherings/controllers/getherings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gethering } from '@/getherings/entities/gethering.entity';
import { Certificate } from '@/certificates/entities/certificate.entity';
import { GetheringsService } from '@/getherings/services/getherings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gethering, Certificate])],
  controllers: [GetheringsController],
  providers: [GetheringsService],
  exports: [GetheringsService],
})
export class GetheringsModule {}
