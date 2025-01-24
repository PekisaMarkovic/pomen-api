import { Module } from '@nestjs/common';
import { TributesController } from '@/tributes/controllers/tributes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribute } from '@/tributes/entities/tribute.entity';
import { TributesService } from '@/tributes/services/tributes.service';
import { Certificate } from '@/certificates/entities/certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tribute, Certificate])],
  controllers: [TributesController],
  providers: [TributesService],
  exports: [TributesService],
})
export class TributesModule {}
