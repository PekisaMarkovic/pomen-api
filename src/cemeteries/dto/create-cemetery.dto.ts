import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { LocationPointDto } from 'src/common/dto/location-point.dto';

export class CreateCemeteryDto {
  @ApiProperty()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @Type(() => LocationPointDto)
  location: LocationPointDto;
}
