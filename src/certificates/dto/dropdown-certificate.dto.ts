import { ApiProperty } from '@nestjs/swagger';

export class DropdownCertificateDto {
  @ApiProperty()
  certificateId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  image: string;
}
