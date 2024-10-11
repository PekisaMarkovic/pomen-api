import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../entities/order.entity';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Controller('orders')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The order has been successfully created.',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if city/certificate not found.',
    type: NotFoundException,
  })
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders paginated.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all orders.',
    type: [Order],
  })
  getCemeteries(@Query() options: IPaginationOptions) {
    return this.orderService.getOrders(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a order by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the order.',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if order.',
    type: NotFoundException,
  })
  getOrderById(@Param('id') id: string) {
    return this.orderService.getOrderById(+id);
  }

  @Get('/certificates/:certificateId')
  @ApiOperation({ summary: 'Get all cemeteries by certificate id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the order.',
    type: [Order],
  })
  getOrdersByCertificateId(@Param('certificateId') certificateId: string) {
    return this.orderService.getOrdersByCertificateId(+certificateId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a order with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the order.',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if city/order.',
    type: NotFoundException,
  })
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateOrder(+id, updateOrderDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a order with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the order.',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if order.',
    type: NotFoundException,
  })
  removeOrder(@Param('id') id: string) {
    return this.orderService.removeOrder(+id);
  }
}
