import { Module } from '@nestjs/common';
import { TributesController } from './controllers/tributes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribute } from './entities/tribute.entity';
import { TributesService } from './services/tributes.service';
import { Certificate } from 'src/certificates/entities/certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tribute, Certificate])],
  controllers: [TributesController],
  providers: [TributesService],
  exports: [TributesService],
})
export class TributesModule {}
