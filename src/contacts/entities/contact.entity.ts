import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContactStatusEnum } from '../../contacts/enums/contact-status.enum';

@Entity({ name: 'contacts' })
export class Contact {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'contact_id' })
  contactId: number;

  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @Column({ type: 'text' })
  message: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: ContactStatusEnum,
    default: ContactStatusEnum.NEW_MESSAGE,
  })
  status: ContactStatusEnum;

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
