import { SetMetadata } from '@nestjs/common';
import { ClientPermissionEnums } from '../enums/permission.enum';

export const PERMISSIONS_METEDATA_KEY = 'permissions_decorator_key';

export const Permissions = (...permissions: ClientPermissionEnums[]) =>
  SetMetadata(PERMISSIONS_METEDATA_KEY, permissions);
