import { ApiProperty } from '@nestjs/swagger';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'getherings' })
export class Gethering {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'gethering_id' })
  getheringId: number;

  @ApiProperty()
  @Column({ type: 'date', name: 'gethering_date' })
  getheringDate: Date;

  @ApiProperty()
  @Column({ type: 'float4', name: 'hour', nullable: true })
  hour: number;

  @ApiProperty()
  @Column({ length: 255 })
  address: string;

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
  @ManyToOne(() => Certificate, (certificate) => certificate.getherings)
  @JoinColumn({ name: 'certificate_id' })
  certificate: Certificate;
}
