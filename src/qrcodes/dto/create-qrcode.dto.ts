import { IsNumber, IsString } from 'class-validator';

export class CreateQrcodeDto {
  @IsString()
  value: string;
  @IsNumber()
  certificateId: number;
}
