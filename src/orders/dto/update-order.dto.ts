import { IsEnum, IsNumber, IsString } from 'class-validator';
import { OrderStatusEnum } from '../enums/order-status.enum';

export class UpdateOrderDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  address: string;

  @IsNumber()
  postCode: number;

  @IsString()
  cityId: number;

  @IsString()
  certificateId: number;

  @IsNumber()
  userId: number;
}

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatusEnum, {
    message:
      'Status must be one of the following: canceled, delivered, in.progress',
  })
  status: OrderStatusEnum;
}
