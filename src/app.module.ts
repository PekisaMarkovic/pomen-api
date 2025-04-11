import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard, PermissionsGuard, RolesGuard } from '@/auth/guards';
import { MailerModule } from '@/mailer/mailer.module';
import { CemeteryModule } from '@/cemeteries/cemetery.module';
import { CertificatesModule } from '@/certificates/certificates.module';
import { AuthModule } from '@/auth/auth.module';
import { CityModule } from '@/cities/city.module';
import { CountryModule } from '@/countries/country.module';
import { FileModule } from '@/files/file.module';
import { GetheringsModule } from '@/getherings/getherings.module';
import { OrderModule } from '@/orders/order.module';
import { QrcodeModule } from '@/qrcodes/qrcode.module';
import { TributesModule } from '@/tributes/tributes.module';
import { UsersModule } from '@/users/users.module';
import { ValidationTokenModule } from '@/validation-token/validation-token.module';
import { SeederModule } from '@/seeder/seeder.module';
import { ContactsModule } from '@/contacts/contacts.module';
import { City } from '@/cities/entities/city.entity';
import { Country } from '@/countries/entities/country.entity';
import { Cemetery } from '@/cemeteries/entities/cementery.entity';
import { Certificate } from '@/certificates/entities/certificate.entity';
import { User } from '@/users/entities/user.entity';
import { File } from '@/files/entities/file.entity';
import { Role } from '@/auth/entities/role.entity';
import { Permission } from '@/auth/entities/permission.entity';
import { Order } from '@/orders/entities/order.entity';
import { Gethering } from '@/getherings/entities/gethering.entity';
import { Tribute } from '@/tributes/entities/tribute.entity';
import { Qrcode } from '@/qrcodes/entities/qrcode.entity';
import { Contact } from '@/contacts/entities/contact.entity';
import { ValidationToken } from '@/validation-token/entities/validation-token.entity';
import { Blog, BlogContent, BlogText } from '@/blogs/entities';
import { BlogsModule } from '@/blogs/blogs.module';
import { PricingsModule } from '@/pricings/pricings.module';
import { Pricing } from '@/pricings/entities/pricing.entity';

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
        entities: [
          City,
          Country,
          Cemetery,
          Certificate,
          User,
          File,
          Role,
          Permission,
          Order,
          Gethering,
          Tribute,
          Qrcode,
          Contact,
          ValidationToken,
          Blog,
          BlogContent,
          BlogText,
          Pricing,
        ],
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
    ContactsModule,
    BlogsModule,
    PricingsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
  ],
})
export class AppModule {}
