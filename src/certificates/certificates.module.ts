import { Module } from '@nestjs/common';
import { CertificatesService } from '@/certificates/services/certificates.service';
import { CertificatesController } from '@/certificates/controllers/certificates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificate } from '@/certificates/entities/certificate.entity';
import { Cemetery } from '@/cemeteries/entities/cementery.entity';
import { Role } from '@/auth/entities/role.entity';
import { User } from '@/users/entities/user.entity';
import { MailerModule } from '@/mailer/mailer.module';
import { ValidationTokenModule } from '@/validation-token/validation-token.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Order } from '@/orders/entities/order.entity';
import { City } from '@/cities/entities/city.entity';
import { Qrcode } from '@/qrcodes/entities/qrcode.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Certificate,
      Cemetery,
      User,
      Role,
      Order,
      City,
      Qrcode,
    ]),
    MailerModule,
    ValidationTokenModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRE') },
      }),
    }),
  ],
  controllers: [CertificatesController],
  providers: [CertificatesService],
  exports: [CertificatesService],
})
export class CertificatesModule {}
