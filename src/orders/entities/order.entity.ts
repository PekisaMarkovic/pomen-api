import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatusEnum } from '../enums/order-status.enum';
import { City } from 'src/cities/entities/city.entity';
import { User } from 'src/users/entities/user.entity';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'orders' })
export class Order {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'order_id' })
  orderId: number;

  @ApiProperty()
  @Column({ length: 100, name: 'first_name' })
  firstName: string;

  @ApiProperty()
  @Column({ length: 100, name: 'last_name' })
  lastName: string;

  @ApiProperty()
  @Column({ length: 255 })
  address: string;

  @ApiProperty()
  @Column()
  phoneNumber: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: OrderStatusEnum,
    default: OrderStatusEnum.PENDING,
  })
  status: OrderStatusEnum;

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ApiProperty()
  @Column({ name: 'city_id' })
  cityId: number;

  @ApiProperty({ type: () => City })
  @ManyToOne(() => City, (city) => city.cemeteries)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @ApiProperty()
  @Column({ name: 'certificate_id' })
  certificateId: number;

  @ApiProperty({ type: () => Certificate })
  @ManyToOne(() => Certificate, (certificate) => certificate.orders)
  @JoinColumn({ name: 'certificate_id' })
  certificate: Certificate;

  @ApiProperty()
  @Column({ name: 'user_id' })
  userId: number;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
