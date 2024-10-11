import { IsEmail, IsString } from 'class-validator';

export class UpdateTributeDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  description: string;

  @IsEmail()
  email: string;
}
