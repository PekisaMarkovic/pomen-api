import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { ClientRoleEnums } from 'src/auth/enums/role.enum';

export class RegisterUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;
}

export class RegisterUserOptionsDto {
  isEmailConfirmed?: boolean;
  roles?: ClientRoleEnums[];
}
