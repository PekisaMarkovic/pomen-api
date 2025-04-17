import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Certificate } from '../../certificates/entities/certificate.entity';
import { LeadStatusEnums } from '../enums';
import { ApiProperty } from '@nestjs/swagger';
import { Pricing } from '../../pricings/entities/pricing.entity';

@Entity('leads')
export class Lead {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'lead_id' })
  leadId: number;

  @ApiProperty()
  @Column({ name: 'first_name_for_certificate' })
  firstNameForCertificate: string;

  @ApiProperty()
  @Column({ name: 'last_name_for_certificate' })
  lastNameForCertificate: string;

  @ApiProperty()
  @Column({ name: 'first_name' })
  firstName: string;

  @ApiProperty()
  @Column({ name: 'last_name' })
  lastName: string;

  @ApiProperty()
  @Column({ length: 255 })
  address: string;

  @ApiProperty()
  @Column({ type: 'date', name: 'date_of_birth' })
  dateOfBirth: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'date_of_death' })
  dateOfDeath: Date;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column({ unique: true, nullable: true, name: 'phone_number' })
  phoneNumber: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  note: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: LeadStatusEnums,
    default: LeadStatusEnums.NEW,
  })
  status: LeadStatusEnums;

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ApiProperty({ type: () => Certificate })
  @OneToOne(() => Certificate, (certificate) => certificate.lead)
  certificate?: Certificate;

  @ApiProperty()
  @Column({ name: 'pricing_id', nullable: true })
  pricingId: number;

  @ApiProperty({ type: () => Pricing })
  @ManyToOne(() => Pricing, (pricing) => pricing.leads)
  @JoinColumn({ name: 'pricing_id' })
  pricing: Pricing;
}
