import { ApiProperty } from '@nestjs/swagger';

export class DropdownCementeryDto {
  @ApiProperty()
  cityId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  cementeryId: number;
}
