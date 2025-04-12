import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PricingPackagesEnums } from '../../pricings/enums';
import { ApiProperty } from '@nestjs/swagger';
import { Certificate } from '../../certificates/entities/certificate.entity';

@Entity({ name: 'pricings' })
export class Pricing {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'pricing_id' })
  pricingId: number;

  @Column({
    type: 'enum',
    enum: PricingPackagesEnums,
    default: PricingPackagesEnums.BASIC,
  })
  plan: PricingPackagesEnums;

  @ApiProperty()
  @Column({
    type: 'float',
  })
  price: number;

  @ApiProperty({ type: () => [Certificate] })
  @OneToMany(() => Certificate, (certificate) => certificate.pricing)
  certificates: Certificate[];

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
