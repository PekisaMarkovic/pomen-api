import { Module } from '@nestjs/common';
import { OrderService } from '@/orders/services/order.service';
import { OrderController } from '@/orders/controllers/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@/orders/entities/order.entity';
import { City } from '@/cities/entities/city.entity';
import { User } from '@/users/entities/user.entity';
import { Qrcode } from '@/qrcodes/entities/qrcode.entity';
import { Certificate } from '@/certificates/entities/certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, City, User, Certificate, Qrcode])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
