import { PartialType } from '@nestjs/mapped-types';
import { Role } from '../../auth/entities/role.entity';
import { Permission } from '../../auth/entities/permission.entity';
import { RegisterUserDto } from './register-user.dto';

export class UserRolesAndPermisssionsDto extends PartialType(RegisterUserDto) {
  roles?: Role[];
  permissions?: Permission[];
}
