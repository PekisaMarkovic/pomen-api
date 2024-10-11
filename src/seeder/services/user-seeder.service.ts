import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientRoleEnums } from 'src/auth/enums/role.enum';
import { ClientPermissionEnums } from 'src/auth/enums/permission.enum';
import { UsersService } from 'src/users/services/users.service';
import { User } from 'src/users/entities/user.entity';
import { Permission } from 'src/auth/entities/permission.entity';
import { Role } from 'src/auth/entities/role.entity';

@Injectable()
export class UserSeederService {
  constructor(
    private usersService: UsersService,

    @InjectRepository(Role)
    private roleRepository: Repository<Role>,

    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async initUsers() {
    // demo permissions
    const permissions = await this.createPermissions([
      ClientPermissionEnums.CRETE_USER,
      ClientPermissionEnums.READ_USER,
      ClientPermissionEnums.UPDATE_USER,
      ClientPermissionEnums.DELETE_USER,

      ClientPermissionEnums.CREATE_ANNOUNCEMENT,
      ClientPermissionEnums.UPDATE_ANNOUNCEMENT,
    ]);

    // demo roles
    const [
      CRETE_USER,
      READ_USER,
      UPDATE_USER,
      DELETE_USER,
      CREATE_ANNOUNCEMENT,
      UPDATE_ANNOUNCEMENT,
    ] = permissions;

    const superAdminRole = await this.createRole({
      name: ClientRoleEnums.SUPER_ADMIN,
      permissions: [
        CRETE_USER,
        READ_USER,
        UPDATE_USER,
        DELETE_USER,
        CREATE_ANNOUNCEMENT,
        UPDATE_ANNOUNCEMENT,
      ],
    });

    const adminRole = await this.createRole({
      name: ClientRoleEnums.ADMIN,
      permissions: [CRETE_USER, READ_USER, UPDATE_USER, DELETE_USER],
    });

    const userRole = await this.createRole({
      name: ClientRoleEnums.USER,
      permissions: [READ_USER],
    });

    // demo users

    const admins: User[] = [];

    for (let i = 0; i < 80; i++) {
      const admin = await this.usersService.createUser({
        email: `johndoe${i}@gmail.com`,
        password: 'secret',
        firstName: `John-${i}`,
        lastName: 'Doe',
      });

      this.usersService.updateUserRolesAndPermissions(admin.userId, {
        roles: [adminRole, userRole],
        permissions: permissions,
      });

      admins.push(admin);
    }

    const superAdmins: User[] = [];

    for (let i = 0; i < 10; i++) {
      const superAdmin = await this.usersService.createUser({
        email: `lucywoo-${i}@gmail.com`,
        password: 'secret',
        firstName: `Lucy-${i}`,
        lastName: 'Woo',
      });

      this.usersService.updateUserRolesAndPermissions(superAdmin.userId, {
        roles: [superAdminRole, adminRole, userRole],
      });

      superAdmins.push(superAdmin);
    }

    const users: User[] = [];

    for (let i = 0; i < 200; i++) {
      const user = await this.usersService.createUser({
        email: `zest-${i}@gmail.com`,
        password: 'secret',
        firstName: `Zest-${i}`,
        lastName: 'Made',
      });

      this.usersService.updateUserRolesAndPermissions(user.userId, {
        roles: [userRole],
      });

      users.push(user);
    }

    return {
      permissions,
      adminRole,
      superAdminRole,
      userRole,
      admins,
      superAdmins,
      users,
    };
  }

  private async createPermissions(
    permissionNames: ClientPermissionEnums[],
  ): Promise<Permission[]> {
    return Promise.all(
      permissionNames.map(async (name) => {
        const permission = this.permissionRepository.create({ name });

        return this.permissionRepository.save(permission);
      }),
    );
  }

  private async createRole(data: {
    name: ClientRoleEnums;
    permissions: Permission[];
  }) {
    const { name, permissions } = data;
    const role = this.roleRepository.create({ name });

    role.permissions = permissions;

    return await this.roleRepository.save(role);
  }
}
