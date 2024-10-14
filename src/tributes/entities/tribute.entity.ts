import { ApiProperty } from '@nestjs/swagger';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TributeStatusEnum } from '../enums/tribute-status.enum';

@Entity({ name: 'tributes' })
export class Tribute {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'tribute_id' })
  tributeId: number;

  @ApiProperty()
  @Column({ length: 100 })
  firstName: string;

  @ApiProperty()
  @Column({ length: 100 })
  lastName: string;

  @ApiProperty()
  @Column({ type: 'text' })
  description: string;

  @ApiProperty()
  @Column({ length: 100 })
  email: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: TributeStatusEnum,
    default: TributeStatusEnum.PENDING,
  })
  status: TributeStatusEnum;

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
