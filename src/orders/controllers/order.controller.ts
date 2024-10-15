import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto, UpdateOrderStatusDto } from '../dto/update-order.dto';
import { Order } from '../entities/order.entity';
import { OrderService } from '../services/order.service';

@Controller('orders')
@ApiTags('Orders')
@ApiBearerAuth('access-token')
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
  getCemeteries(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.orderService.getOrders({
      page,
      limit,
    });
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

  @Patch('/:id/status')
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
  updateOrderStatus(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.orderService.updateOrderStatus(+id, updateOrderStatusDto);
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
