import { ApiProperty } from '@nestjs/swagger';

export class DropdownCountryDto {
  @ApiProperty()
  countryId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;
}
