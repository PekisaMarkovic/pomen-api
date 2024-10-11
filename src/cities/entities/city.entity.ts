import { ApiProperty } from '@nestjs/swagger';
import { Cemetery } from 'src/cemeteries/entities/cementery.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cities' })
export class City {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'city_id' })
  cityId: number;

  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @Column({ unique: true, length: 100 })
  slug: string;

  @ApiProperty()
  @Column({ length: 5, unique: true })
  code: string;

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
  @Column({ name: 'country_id' })
  countryId: number;

  @ApiProperty({ example: null, type: () => Country })
  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @ApiProperty({ type: () => [Cemetery] })
  @OneToMany(() => Cemetery, (cemetery) => cemetery.city)
  cemeteries: Cemetery[];

  @ApiProperty({ type: () => [Order] })
  @OneToMany(() => Order, (order) => order.city)
  orders: Order[];
}
