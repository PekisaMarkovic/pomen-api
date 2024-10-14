import { ApiProperty } from '@nestjs/swagger';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'qrcodes' })
export class Qrcode {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'qrcode_id' })
  qrcodeId: number;

  @ApiProperty()
  @Column({ type: 'text' })
  value: string;

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
  @Column({ name: 'certificate_id' })
  certificateId: number;

  @ApiProperty({ type: () => Certificate })
  @OneToOne(() => Certificate, (certificate) => certificate.qrcode)
  @JoinColumn({ name: 'certificate_id' })
  certificate: Certificate;
}
