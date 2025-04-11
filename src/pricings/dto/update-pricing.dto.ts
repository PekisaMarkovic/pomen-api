import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdatePricingDto {
  @ApiProperty()
  @IsNumber()
  pricingId: number;

  @ApiProperty()
  @IsNumber()
  price: number;
}
