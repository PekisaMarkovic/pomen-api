import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles, Public, CurrentUser } from '@/auth/decorators';
import { ClientRoleEnums } from '@/auth/enums';
import {
  CheckFirstTimeRegisterTokenValidDto,
  FirstTimeRegisterDto,
} from '@/users/dto';
import { User } from '@/users/entities/user.entity';
import { UsersService } from '@/users/services/users.service';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth('access-token')
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

  @Public()
  @Post('/is-fist-time-register-token-valid')
  isFirstTimeRegisterTokenValid(
    @Body() dto: CheckFirstTimeRegisterTokenValidDto,
  ) {
    return this.usersService.isFirstTimeRegisterTokenValid(dto.token);
  }

  @Public()
  @Post('resend-first-time-registration')
  resendFirstTimeRegisterDto(@Body() dto: FirstTimeRegisterDto) {
    return this.usersService.resendFirstTimeRegisterDto(dto);
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
