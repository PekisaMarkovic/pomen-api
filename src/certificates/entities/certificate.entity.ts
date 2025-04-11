import { ApiProperty } from '@nestjs/swagger';
import { Cemetery } from '../../cemeteries/entities/cementery.entity';
import { pointTransformer } from '../../common/helpers';
import { File } from '../../files/entities/file.entity';
import { Gethering } from '../../getherings/entities/gethering.entity';
import { Order } from '../../orders/entities/order.entity';
import { Qrcode } from '../../qrcodes/entities/qrcode.entity';
import { Tribute } from '../../tributes/entities/tribute.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pricing } from '../../pricings/entities/pricing.entity';
import { Length } from 'class-validator';
import { CertificateStatusEnums } from '../../certificates/enums';

@Entity({ name: 'certificate' })
export class Certificate {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'certificate_id' })
  certificateId: number;

  @ApiProperty()
  @Column({ unique: true, length: 255, nullable: true })
  slug: string;

  @ApiProperty()
  @Column({ length: 100, name: 'first_name' })
  firstName: string;

  @ApiProperty()
  @Column({ length: 100, name: 'last_name' })
  lastName: string;

  @ApiProperty()
  @Column({ type: 'date', name: 'date_of_birth' })
  dateOfBirth: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'date_of_death' })
  dateOfDeath: Date;

  @ApiProperty()
  @Column({ length: 100, name: 'place_of_birth' })
  placeOfBirth: string;

  @ApiProperty()
  @Column({ length: 100, name: 'place_of_death' })
  placeOfDeath: string;

  @ApiProperty()
  @Column({
    type: 'float4',
    nullable: true,
    name: 'time_of_death',
  })
  timeOfDeath: number;

  @ApiProperty()
  @Column({ type: 'text' })
  @Length(250, 3000, {
    message: 'Biography must be between 250 and 3000 characters.',
  })
  biography: string;

  @Column({
    type: 'enum',
    enum: CertificateStatusEnums,
    default: CertificateStatusEnums.DRAFT,
  })
  status: CertificateStatusEnums;

  @ApiProperty()
  @Column({ type: 'point', transformer: pointTransformer })
  location: { x: number; y: number };

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
  @Column({ name: 'cemetery_id' })
  cemeteryId: number;

  @ApiProperty({ type: () => Cemetery })
  @ManyToOne(() => Cemetery, (cemetery) => cemetery.certificates)
  @JoinColumn({ name: 'cemetery_id' })
  cemetery: Cemetery;

  @ApiProperty()
  @Column({ name: 'pricing_id', nullable: true })
  pricingId: number;

  @ApiProperty({ type: () => Pricing })
  @ManyToOne(() => Pricing, (pricing) => pricing.certificates)
  @JoinColumn({ name: 'pricing_id' })
  pricing: Pricing;

  @ApiProperty()
  @Column({ name: 'user_id' })
  userId: number;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.certificates)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty({ type: () => [Gethering] })
  @OneToMany(() => Gethering, (gethering) => gethering.certificate)
  getherings: Gethering[];

  @ApiProperty({ type: () => [Tribute] })
  @OneToMany(() => Tribute, (tribute) => tribute.certificate)
  tributes: Tribute[];

  @ApiProperty({ type: () => Qrcode })
  @OneToOne(() => Qrcode, (qrcode) => qrcode.certificate)
  qrcode: Qrcode;

  @ApiProperty({ type: () => [Order] })
  @OneToMany(() => Order, (order) => order.certificate)
  orders: Order[];

  @ApiProperty()
  @Column({ name: 'certificate_profile_id', nullable: true })
  certificateProfileId: number;

  @ApiProperty({ type: () => File })
  @OneToOne(() => File, (file) => file.certificateProfile)
  @JoinColumn({ name: 'certificate_profile_id' })
  profileImage: File;

  @ApiProperty({ type: () => [File] })
  @OneToMany(() => File, (file) => file.certificate)
  files: File[];
}
