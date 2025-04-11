import { ApiProperty } from '@nestjs/swagger';
import { PricingPackagesEnums } from '@/pricings/enums';

export class DropdownPricingDto {
  @ApiProperty()
  pricingId: number;

  @ApiProperty()
  plan: PricingPackagesEnums;

  @ApiProperty()
  price: number;
}
