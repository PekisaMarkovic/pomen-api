import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { ClientRoleEnums } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(ClientRoleEnums.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get a users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the user.',
    type: [User],
  })
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get currently logged user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the user.',
    type: User,
  })
  getProfile(@CurrentUser() user: User) {
    return user;
  }
}
