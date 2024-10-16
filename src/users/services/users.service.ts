import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/auth/entities/role.entity';
import { Nullable } from 'src/common/interface/general';
import { MailerService } from 'src/mailer/services/mailer.service';
import { ValidationTokenTypeEnums } from 'src/validation-token/enums/VerificationTokenType';
import { ValidationTokenService } from 'src/validation-token/services/validation-token.service';
import { Repository } from 'typeorm';
import {
  RegisterUserDto,
  RegisterUserOptionsDto,
} from '../dto/register-user.dto';
import { UserRolesAndPermisssionsDto } from '../dto/user-roles-and-permisssions.dto';
import { FirstTimeRegisterDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { LoginUser } from '../interface/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly validationTokenService: ValidationTokenService,
  ) {}

  /**
   * Create a new user
   * @param RegisterUserDto - The data to create a new user
   * @param RegisterUserOptionsDto - The optional addition data for more details
   * @returns The created user
   * @throws NotFoundException if the city is not found
   *
   */
  async registerUser(dto: RegisterUserDto, options?: RegisterUserOptionsDto) {
    const { email, firstName, lastName, password, phone } = dto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.userRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber: phone,
    });

    if (options.roles) {
      const roles: Role[] = [];

      for (const role of options.roles) {
        const foundRole = await this.roleRepository.findOne({
          where: { name: role },
        });

        if (foundRole) {
          roles.push(foundRole);
        }
      }

      user.roles = roles;
    }

    const newUser = await this.userRepository.save(user);

    delete newUser.password;

    return newUser;
  }

  /**
   * Find all users with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of users and the total count
   *
   */
  getUsers(): Promise<User[]> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .leftJoinAndSelect('role.permissions', 'rolePermission')
      .leftJoinAndSelect('user.permissions', 'permission');

    return query.getMany();
  }

  /**
   * Check if fist time register token is valid
   * @param token - The token to check
   * @returns boolean
   *
   */
  async isFirstTimeRegisterTokenValid(token: string) {
    try {
      await this.jwtService.verifyAsync(token);

      return true;
    } catch {
      return false;
    }
  }

  async resendFirstTimeRegisterDto(dto: FirstTimeRegisterDto) {
    const token = this.jwtService.sign({ email: dto.email });

    await this.validationTokenService.removeFirstTimeRegisterTokenByEmail(
      dto.email,
    );

    await this.validationTokenService.createValidationToken({
      email: dto.email,
      token,
      validationTokenType: ValidationTokenTypeEnums.FIRST_TIME_REGISTER,
    });

    await this.mailerService.sendFirstTimeRegisterMail({
      data: { token },
      recipients: [{ name: '', address: dto.email }],
    });

    return {
      registration_token: token,
    };
  }

  /**
   * Find a user by id
   * @param cityId - The id of the user to find
   * @returns The found user
   *
   */
  async getUserByUserId(userId: number): Promise<User> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .where('user.userId = :userId', { userId })
      .leftJoinAndSelect('user.roles', 'role')
      .leftJoinAndSelect('role.permissions', 'rolePermission')
      .leftJoinAndSelect('user.permissions', 'permission');

    const user = await query.getOne();

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  /**
   * Find a user by email
   * @param email - The email of the user to find
   * @returns The found user | null
   *
   */
  getUserByEmail(email: string): Promise<Nullable<User>> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .leftJoinAndSelect('user.roles', 'role')
      .leftJoinAndSelect('role.permissions', 'rolePermission')
      .leftJoinAndSelect('user.permissions', 'permission');

    return query.getOne();
  }

  /**
   * Find a user by email for log in
   * @param email - The email of the user to find
   * @returns The found user | null
   *
   */
  getUserByEmailForLogIn(email: string): Promise<Nullable<LoginUser>> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .leftJoinAndSelect('user.roles', 'role')
      .leftJoinAndSelect('role.permissions', 'rolePermission')
      .leftJoinAndSelect('user.permissions', 'permission');

    query.addSelect('user.password');

    return query.getOne();
  }

  /**
   * Update a user
   * @param userId - The id of the user to update
   * @param UserRolesAndPermisssionsDto - The data to update the user
   * @returns The updated user
   * @throws NotFoundException if the city/user is not found
   *
   */
  async updateUserRolesAndPermissions(
    userId: number,
    dto: UserRolesAndPermisssionsDto,
  ) {
    const user = await this.userRepository.findOne({ where: { userId } });

    if (!user) {
      throw new NotFoundException();
    }

    const { roles, permissions } = dto;

    user.roles = roles ?? user.roles;
    user.permissions = permissions ?? user.permissions;

    return await this.userRepository.save(user);
  }

  /**
   * Update a user
   * @param userId - The id of the user to update
   * @param updateFirstTimeRegisterUserDto - The data to update the user
   * @returns The updated user
   * @throws NotFoundException if the city/user is not found
   *
   */
  async updateFirstTimeRegisterUser(dto: UserRolesAndPermisssionsDto) {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw new NotFoundException();
    }

    Object.assign(user, dto);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    user.password = hashedPassword;

    return await this.userRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  /**
   * Create a new user
   * @param RegisterUserDto - The data to create a new user
   * @param RegisterUserOptionsDto - The optional addition data for more details
   * @returns The created user without password
   * @throws NotFoundException if the city is not found
   *
   */
  async createUser(
    dto: RegisterUserDto,
    options?: RegisterUserOptionsDto,
  ): Promise<User> {
    const { email, password, firstName, lastName, phone } = dto;

    const salt = await bcrypt.genSalt();
    const hashedPassword =
      password !== null ? await bcrypt.hash(password, salt) : null;
    const user = this.userRepository.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber: phone,
      isEmailConfirmed: !!options?.isEmailConfirmed,
    });

    if (options?.roles) {
      const roles: Role[] = [];

      for (const role of options.roles) {
        const foundRole = await this.roleRepository.findOne({
          where: { name: role },
        });

        roles.push(foundRole);
      }

      user.roles = roles;
    }

    const newUser = await this.userRepository.save(user);

    delete (newUser as Partial<User>).password;

    return newUser;
  }
}
