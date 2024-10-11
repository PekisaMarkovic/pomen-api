import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateTributeDto {
  @IsNumber()
  certificateId: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  description: string;

  @IsEmail()
  email: string;
}
