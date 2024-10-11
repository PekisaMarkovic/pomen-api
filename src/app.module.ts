import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { PermissionsGuard } from './auth/guards/permissions.guard';
import { MailerModule } from './mailer/mailer.module';
import { CemeteryModule } from './cemeteries/cemetery.module';
import { CertificatesModule } from './certificates/certificates.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './cities/city.module';
import { CountryModule } from './countries/country.module';
import { FileModule } from './files/file.module';
import { GetheringsModule } from './getherings/getherings.module';
import { OrderModule } from './orders/order.module';
import { QrcodeModule } from './qrcodes/qrcode.module';
import { TributesModule } from './tributes/tributes.module';
import { UsersModule } from './users/users.module';
import { ValidationTokenModule } from './validation-token/validation-token.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
    }),
    MailerModule,
    CemeteryModule,
    CertificatesModule,
    AuthModule,
    CityModule,
    CountryModule,
    FileModule,
    GetheringsModule,
    OrderModule,
    QrcodeModule,
    TributesModule,
    UsersModule,
    ValidationTokenModule,
    SeederModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
  ],
})
export class AppModule {}
