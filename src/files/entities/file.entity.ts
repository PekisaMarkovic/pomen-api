import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FileTypeEnum } from '../enums/file-type.enum';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'files' })
export class File {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'file_id' })
  fileId: number;

  @ApiProperty()
  @Column({ type: 'int4' })
  height: number;

  @ApiProperty()
  @Column({ name: 'public_id', nullable: true })
  publicId: string;

  @ApiProperty()
  @Column({ type: 'int4' })
  width: number;

  @ApiProperty()
  @Column({ length: '255' })
  url: string;

  @ApiProperty()
  @Column({ length: '10', nullable: true })
  fileExtension: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: FileTypeEnum,
    default: FileTypeEnum.IMAGE,
  })
  type: FileTypeEnum;

  @ApiProperty({ type: () => User })
  @OneToOne(() => User, (user) => user.profileImage)
  user?: User;

  @ApiProperty({ type: () => Certificate })
  @OneToOne(() => Certificate, (certificate) => certificate.profileImage)
  certificateProfile?: Certificate;

  @ApiProperty()
  @Column({ name: 'certificate_id', nullable: true })
  certificateId: number;

  @ApiProperty({ type: () => Certificate })
  @ManyToOne(() => Certificate, (certificate) => certificate.files)
  @JoinColumn({ name: 'certificate_id' })
  certificate: Certificate;
}
