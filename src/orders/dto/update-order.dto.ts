import { IsEnum, IsNumber, IsString } from 'class-validator';
import { OrderStatusEnum } from '../enums/order-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNumber()
  postCode: number;

  @ApiProperty()
  @IsString()
  cityId: number;

  @ApiProperty()
  @IsString()
  certificateId: number;

  @ApiProperty()
  @IsNumber()
  userId: number;
}

export class UpdateOrderStatusDto {
  @ApiProperty()
  @IsEnum(OrderStatusEnum, {
    message:
      'Status must be one of the following: canceled, delivered, in.progress',
  })
  status: OrderStatusEnum;
}
