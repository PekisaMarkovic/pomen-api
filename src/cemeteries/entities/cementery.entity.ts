import { ApiProperty } from '@nestjs/swagger';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { City } from 'src/cities/entities/city.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cemeteries' })
export class Cemetery {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'cemetery_id' })
  cementeryId: number;

  @ApiProperty()
  @Column({ length: 100 })
  address: string;

  @ApiProperty()
  @Column({ unique: true, length: 100 })
  slug: string;

  @ApiProperty()
  @Column({ length: 100 })
  name: string;

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

  @ApiProperty({ type: () => [Certificate] })
  @OneToMany(() => Certificate, (certificate) => certificate.cemetery)
  certificates: Certificate[];
}
