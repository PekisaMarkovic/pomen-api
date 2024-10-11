import { Module } from '@nestjs/common';
import { CementeryService } from './services/cementery.service';
import { Cemetery } from './entities/cementery.entity';
import { City } from 'src/cities/entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CemeteryController } from './controllers/cemetery.controller';

@Module({
  imports: [TypeOrmModule.forFeature([City, Cemetery])],
  controllers: [CemeteryController],
  providers: [CementeryService],
  exports: [CementeryService],
})
export class CemeteryModule {}
