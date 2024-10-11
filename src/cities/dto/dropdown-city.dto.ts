import { ApiProperty } from '@nestjs/swagger';

export class DropdownCityDto {
  @ApiProperty()
  cityId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  countryId: number;
}
