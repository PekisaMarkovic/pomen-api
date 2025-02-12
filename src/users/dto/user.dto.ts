import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

export class UpdateProfileDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  dateOfBirth: Date;

  @ApiProperty()
  @IsString()
  phoneNumber: string;
}
