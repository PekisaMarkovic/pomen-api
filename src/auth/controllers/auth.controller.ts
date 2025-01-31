import {
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { LoginUserDto } from '@/users/dto/login-user.dto';
import { RegisterUserDto } from '@/users/dto/register-user.dto';
import { RefreshTokenDto } from '@/users/dto/tokens.dto';
import { User } from '@/users/entities/user.entity';
import { TokenDto } from '@/auth/dto/login.dto';
import { UsersService } from '@/users/services/users.service';
import { Public, CurrentUser } from '@/auth/decorators';
import { ClientRoleEnums } from '@/auth/enums/role.enum';
import { LocalAuthGuard } from '@/auth/guards/local-auth.guard';
import { AuthService } from '@/auth/services/auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateFirstTimeRegisterUserDto } from 'src/users/dto/user.dto';

@Controller('auth')
@ApiBearerAuth('access-token')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'Log in in user in our platform, generate token and refresh token',
  })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the tokens.',
    type: TokenDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if user is not found.',
    type: NotFoundException,
  })
  async login(@Body() body: LoginUserDto) {
    return this.authService.login(body);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Generates new token and new refresh token.' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the tokens.',
    type: TokenDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if user/token is not found.',
    type: NotFoundException,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Throws exception if user/token is not found.',
    type: UnauthorizedException,
  })
  async refreshToken(@Body() body: RefreshTokenDto) {
    const { refreshToken } = body;

    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    return await this.authService.refreshToken(refreshToken);
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register new user to platform' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Return the user.',
    type: User,
  })
  register(@Body() body: RegisterUserDto) {
    return this.usersService.registerUser(body, {
      roles: [ClientRoleEnums.USER],
    });
  }

  @Public()
  @Patch('update-fist-time-register')
  @ApiOperation({
    summary: 'Log in in user in our platform, generate token and refresh token',
  })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the tokens.',
    type: TokenDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if user is not found.',
    type: NotFoundException,
  })
  updateFirstTimeRegisterUser(@Body() dto: UpdateFirstTimeRegisterUserDto) {
    return this.authService.updateFirstTimeRegisterUser(dto);
  }

  @Public()
  @Post('is-user-token-valid')
  @ApiOperation({ summary: 'Check if token is still valid' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the boolean.',
    type: Boolean,
  })
  isUserTokenValid(@Req() request: Request) {
    try {
      const authHeader = request.headers['authorization'];
      const token = authHeader.split(' ')[1];

      return this.authService.isUserTokenValid(token || '');
    } catch {
      return false;
    }
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout user, remove all refresh tokens' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the boolean.',
    type: Boolean,
  })
  async logout(@CurrentUser() user: User) {
    this.authService.logout(user.email);

    return true;
  }
}
