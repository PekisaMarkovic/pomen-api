import { IsString } from 'class-validator';

export class UpdateQrcodeDto {
  @IsString()
  value: string;
}
