import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUser } from 'src/users/interface/user';
import { ValidationTokenService } from 'src/validation-token/services/validation-token.service';
import { ValidationTokenTypeEnums } from 'src/validation-token/enums/VerificationTokenType';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { LoginDto } from '../dto/login.dto';
import { Nullable } from '../../common/interface/general';
import { UpdateFirstTimeRegisterUserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly validationTokenService: ValidationTokenService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Check if credetials are valud
   * @param LoginDto - The data to check
   * @returns The user wihtout password | null
   *
   */
  async validateUser({
    email,
    password,
  }: LoginDto): Promise<Nullable<LoginUser>> {
    const user = await this.usersService.getUserByEmailForLogIn(email);

    if (!user) {
      return null;
    }

    try {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return null;
      }
    } catch {
      return null;
    }

    delete user.password;

    return user;
  }

  /**
   * Login user throgh email
   * @param userDto - The data need to have email
   * @return The object that containes { access_token, refresh_token }
   * @throws Throws exception if there is no user
   *
   */
  async login(userDto: any) {
    const user = await this.usersService.getUserByEmail(userDto.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    await this.validationTokenService.removeRefreshTokenByEmail(user.email);

    const newAccessToken = this.generateAccessToken(user);

    const { token, ...rest } =
      await this.validationTokenService.createValidationToken({
        email: user.email,
        token: newAccessToken,
        validationTokenType: ValidationTokenTypeEnums.REFRESH,
      });

    return {
      access_token: token,
      refresh_token: this.jwtService.sign(rest, {
        expiresIn: this.configService.get('JWT_REFRESH_EXPIRE'),
      }),
    };
  }

  /**
   * Login user throgh email
   * @param UpdateFirstTimeRegisterUserDto - The data need to have email
   * @return The object that containes { access_token, refresh_token }
   * @throws Throws exception if there is no user
   *
   */
  async updateFirstTimeRegisterUser(dto: UpdateFirstTimeRegisterUserDto) {
    const isTokenValid = await await this.jwtService.verifyAsync(dto.token);

    if (!isTokenValid) {
      throw new UnauthorizedException();
    }

    const toUpdate = await this.usersService.getUserByEmail(dto.email);

    if (!toUpdate) {
      throw new NotFoundException();
    }

    Object.assign(toUpdate, dto);

    await this.usersService.updateFirstTimeRegisterUser(dto);

    const user = await this.usersService.getUserByEmail(dto.email);

    const newAccessToken = this.generateAccessToken(user);

    const { token, ...rest } =
      await this.validationTokenService.createValidationToken({
        email: user.email,
        token: newAccessToken,
        validationTokenType: ValidationTokenTypeEnums.REFRESH,
      });

    return {
      access_token: token,
      refresh_token: this.jwtService.sign(rest, {
        expiresIn: this.configService.get('JWT_REFRESH_EXPIRE'),
      }),
    };
  }

  /**
   * Is token valid
   * @param token - The token is string
   * @returns boolean
   *
   */
  async isUserTokenValid(token: string) {
    try {
      this.jwtService.verifyAsync(token);

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Removes all refresh tokens from db
   * @param email - The email is string
   *
   */
  logout(email: string) {
    this.validationTokenService.removeRefreshTokenByEmail(email);
  }

  /**
   * Generates new refresh token for user
   * @param refreshToken - The token string
   * @returns The user wihtout password | null
   * @throws Throws exception if there is no user/token
   *
   */
  async refreshToken(refreshToken: string) {
    const payload = this.jwtService.decode(refreshToken);

    const user = await this.usersService.getUserByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const dbToken = await this.validationTokenService.getRefreshTokenByEmail(
      user.email,
    );

    if (!dbToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    if (Number(dbToken.expirationDate) < new Date().getTime()) {
      throw new UnauthorizedException('Refresh token expired');
    }

    await this.validationTokenService.removeRefreshTokenByEmail(dbToken.email);

    const accessToken = this.generateAccessToken(user);

    const { token, ...rest } =
      await this.validationTokenService.createValidationToken({
        email: user.email,
        token: accessToken,
        validationTokenType: ValidationTokenTypeEnums.REFRESH,
      });

    return {
      access_token: token,
      refresh_token: this.jwtService.sign(rest, {
        expiresIn: this.configService.get('JWT_REFRESH_EXPIRE'),
      }),
    };
  }

  /**
   * Create a new token
   * @param User - The user data to generate token
   * @returns jwt token
   *
   */
  private generateAccessToken = (user: User) => {
    return this.jwtService.sign({
      email: user.email,
      sub: user.userId,
      roles: user.roles || [],
      profileImage: user.profileImage || null,
      firstName: user.firstName,
      lastName: user.lastName,
      expires: new Date().getTime() + 3600000,
    });
  };
}
