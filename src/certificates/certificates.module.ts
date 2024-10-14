import { Module } from '@nestjs/common';
import { CertificatesService } from './services/certificates.service';
import { CertificatesController } from './controllers/certificates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificate } from './entities/certificate.entity';
import { Cemetery } from 'src/cemeteries/entities/cementery.entity';
import { Role } from 'src/auth/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { MailerModule } from 'src/mailer/mailer.module';
import { ValidationTokenModule } from 'src/validation-token/validation-token.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Order } from 'src/orders/entities/order.entity';
import { City } from 'src/cities/entities/city.entity';
import { Qrcode } from 'src/qrcodes/entities/qrcode.entity';

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
