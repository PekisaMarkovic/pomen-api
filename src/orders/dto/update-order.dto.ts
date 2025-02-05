import { IsEnum, IsNumber, IsString } from 'class-validator';
import { OrderStatusEnum } from '@/orders/enums/order-status.enum';
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
  @ApiProperty({
    enum: OrderStatusEnum,
    enumName: 'OrderStatusEnum',
    description:
      'Status must be one of the following: canceled, delivered, in.progress',
  })
  @IsEnum(OrderStatusEnum, {
    message:
      'Status must be one of the following: canceled, delivered, in.progress',
  })
  status: OrderStatusEnum;
}
