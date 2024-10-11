import { ApiProperty } from '@nestjs/swagger';
import { City } from 'src/cities/entities/city.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'countries' })
export class Country {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'country_id' })
  countryId: number;

  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @Column({ unique: true, length: 100 })
  slug: string;

  @ApiProperty()
  @Column({ length: 10, unique: false })
  code: string;

  @ApiProperty()
  @Column({ length: 10, unique: true })
  iso: string;

  @ApiProperty()
  @Column({ type: 'date', name: 'created_at', default: new Date() })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'date', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ApiProperty({ type: () => [City] })
  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
