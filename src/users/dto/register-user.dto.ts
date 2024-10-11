import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { ClientRoleEnums } from 'src/auth/enums/role.enum';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;
}

export class RegisterUserOptionsDto {
  isEmailConfirmed?: boolean;
  roles?: ClientRoleEnums[];
}
