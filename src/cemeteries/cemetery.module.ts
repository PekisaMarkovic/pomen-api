import { Module } from '@nestjs/common';
import { CementeryService } from '@/cemeteries/services/cementery.service';
import { City } from '@/cities/entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CemeteryController } from '@/cemeteries/controllers/cemetery.controller';
import { Cemetery } from '@/cemeteries/entities/cementery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, Cemetery])],
  controllers: [CemeteryController],
  providers: [CementeryService],
  exports: [CementeryService],
})
export class CemeteryModule {}
