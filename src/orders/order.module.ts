import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { City } from 'src/cities/entities/city.entity';
import { User } from 'src/users/entities/user.entity';
import { Certificate } from 'crypto';
import { Qrcode } from 'src/qrcodes/entities/qrcode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, City, User, Certificate, Qrcode])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
