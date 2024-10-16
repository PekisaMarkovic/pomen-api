import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateFirstTimeRegisterUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  token: string;

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
  @IsString()
  @IsOptional()
  phone?: string;
}

export class CheckFirstTimeRegisterTokenValidDto {
  @ApiProperty()
  @IsString()
  token: string;
}

export class FirstTimeRegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}
