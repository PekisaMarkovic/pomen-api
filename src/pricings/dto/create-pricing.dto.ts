import { ApiProperty } from '@nestjs/swagger';
import { PricingPackagesEnums } from '@/pricings/enums';
import { IsEnum, IsNumber } from 'class-validator';

export class CreatePricingDto {
  @ApiProperty({
    enum: PricingPackagesEnums,
    enumName: 'PricingPackagesEnums',
    description:
      'Type must be one of the following: free, begginer, standard, premium',
  })
  @IsEnum(PricingPackagesEnums, {
    message:
      'Status must be one of the following: rfree, begginer, standard, premium...',
  })
  plan: PricingPackagesEnums;

  @ApiProperty()
  @IsNumber()
  price: number;
}
