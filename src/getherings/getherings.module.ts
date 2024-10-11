import { Module } from '@nestjs/common';
import { GetheringsController } from './controllers/getherings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gethering } from './entities/gethering.entity';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { GetheringsService } from './services/getherings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gethering, Certificate])],
  controllers: [GetheringsController],
  providers: [GetheringsService],
  exports: [GetheringsService],
})
export class GetheringsModule {}
