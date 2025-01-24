import { Module } from '@nestjs/common';
import { QrcodeController } from '@/qrcodes/controllers/qrcode.controller';
import { Certificate } from '@/certificates/entities/certificate.entity';
import { Qrcode } from '@/qrcodes/entities/qrcode.entity';
import { QrcodeService } from '@/qrcodes/services/qrcode.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Qrcode, Certificate])],
  controllers: [QrcodeController],
  providers: [QrcodeService],
  exports: [QrcodeService],
})
export class QrcodeModule {}
