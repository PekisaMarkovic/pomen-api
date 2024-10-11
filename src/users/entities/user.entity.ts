import { ApiProperty } from '@nestjs/swagger';
import { Permission } from 'src/auth/entities/permission.entity';
import { Role } from 'src/auth/entities/role.entity';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { File } from 'src/files/entities/file.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: number;

  @ApiProperty()
  @Column({ length: 100, name: 'first_name' })
  firstName: string;

  @ApiProperty()
  @Column({ length: 100, name: 'last_name' })
  lastName: string;

  @ApiProperty()
  @Column({ name: 'profile_image_id', nullable: true })
  profileImageId: number;

  @ApiProperty({ type: () => File })
  @OneToOne(() => File, (file) => file.user)
  @JoinColumn({ name: 'profile_image_id' })
  profileImage: File;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  gender: string;

  @ApiProperty()
  @Column({ type: 'date', name: 'date_of_birth', nullable: true })
  dateOfBirth: Date;

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
  @Column({ type: 'date', name: 'last_logged_in_at', nullable: true })
  lastLoggedInAt: Date;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column({ unique: true, nullable: true, name: 'phone_number' })
  phoneNumber: string;

  @ApiProperty()
  @Column({ unique: true, nullable: true, select: false })
  password: string;

  @ApiProperty()
  @Column({ type: 'boolean', name: 'is_email_confirmed', default: false })
  isEmailConfirmed: boolean;

  @ApiProperty()
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles?: Role[];

  // Ability to also directly assign permissions to user
  // means more flexibility with potentially more complexity
  @ApiProperty()
  @ManyToMany(() => Permission)
  @JoinTable()
  permissions?: Permission[];

  @ApiProperty({ type: () => Order })
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @ApiProperty({ type: () => [Certificate] })
  @OneToMany(() => Certificate, (certificate) => certificate.user)
  certificates: Certificate[];
}
