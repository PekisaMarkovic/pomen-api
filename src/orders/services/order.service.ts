import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { City } from 'src/cities/entities/city.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto, UpdateOrderStatusDto } from '../dto/update-order.dto';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Find all orders with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of orders and the total count
   *
   */
  getOrders(options: IPaginationOptions): Promise<Pagination<Order>> {
    const query = this.orderRepository
      .createQueryBuilder('order')
      .where('order.deleted_at IS NULL')
      .leftJoinAndSelect('order.certificate', 'certificate')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.city', 'city');

    return paginate<Order>(query, options);
  }

  /**
   * Find all orders by certificate id
   * @param certificateId - The id of the orders to find
   * @returns The found orders
   *
   */
  getOrdersByCertificateId(certificateId: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: { certificateId, deletedAt: null },
      relations: ['user', 'city'],
    });
  }

  /**
   * Find a order by id
   * @param cementeryId - The id of the order to find
   * @returns The found order
   * @throws NotFoundException if the order is not found
   *
   */
  async getOrderById(orderId: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { orderId, deletedAt: null },
      relations: ['user', 'city', 'certificate'],
    });

    if (!order) {
      throw new NotFoundException();
    }

    return order;
  }

  /**
   * Update a order
   * @param orderId - The id of the order to update
   * @param UpdateOrderDto - The data to update the order
   * @returns The updated order
   * @throws NotFoundException if the city/order is not found
   *
   */
  async updateOrder(orderId: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOne({
      where: { orderId, deletedAt: null },
    });

    if (!order) {
      throw new NotFoundException();
    }

    const city = await this.cityRepository.findOne({
      where: { cityId: updateOrderDto.cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    Object.assign(orderId, updateOrderDto);

    order.updatedAt = new Date();

    order.city = city;

    return this.orderRepository.save(order);
  }

  /**
   * Create a new order
   * @param CreateOrderDto - The data to create a new Order
   * @returns The created Order
   * @throws NotFoundException if the city/certificate/user is not found
   *
   */
  async createOrder(createOrderDto: CreateOrderDto) {
    const {
      cityId,
      firstName,
      lastName,
      postCode,
      userId,
      address,
      certificateId,
    } = createOrderDto;

    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    const city = await this.cityRepository.findOne({
      where: { cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    const user = await this.userRepository.findOne({
      where: { userId },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const order = this.orderRepository.create({
      address,
      firstName,
      lastName,
      postCode,
      certificate,
      user,
    });

    return this.orderRepository.save(order);
  }

  /**
   * Update a order status
   * @param orderId - The id of the order to update
   * @param UpdateOrderStatusDto - The data to update the order
   * @returns The updated order
   * @throws NotFoundException if the order is not found
   *
   */
  async updateOrderStatus(orderId: number, { status }: UpdateOrderStatusDto) {
    const order = await this.orderRepository.findOne({
      where: { orderId, deletedAt: null },
    });

    if (!order) {
      throw new NotFoundException();
    }

    order.updatedAt = new Date();

    order.status = status;

    return this.orderRepository.save(order);
  }

  /**
   * remove a status
   * @param orderId - The id of the order to remove
   * @returns The removed order
   * @throws NotFoundException if the order is not found
   *
   */
  async removeOrder(orderId: number) {
    const order = await this.orderRepository.findOne({
      where: { orderId },
    });

    if (!order) {
      throw new NotFoundException();
    }

    order.deletedAt = new Date();

    return this.orderRepository.save(order);
  }
}
