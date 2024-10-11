import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ClientPermissionEnums } from '../enums/permission.enum';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    type: 'enum',
    enum: ClientPermissionEnums,
    default: ClientPermissionEnums.READ_USER,
  })
  name: ClientPermissionEnums;
}
