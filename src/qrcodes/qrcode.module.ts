import { Module } from '@nestjs/common';
import { QrcodeController } from './controllers/qrcode.controller';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { Qrcode } from './entities/qrcode.entity';
import { QrcodeService } from './services/qrcode.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Qrcode, Certificate])],
  controllers: [QrcodeController],
  providers: [QrcodeService],
  exports: [QrcodeService],
})
export class QrcodeModule {}
