import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateGetheringDto {
  @IsNumber()
  certificateId: number;
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  getheringDate: Date;
  @IsNumber()
  hour: number;
  @IsString()
  address: string;
}
