import { Pricing } from '@/pricings/entities/pricing.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import {
  UpdatePricingDto,
  CreatePricingDto,
  DropdownPricingDto,
} from '@/pricings/dto';

@Injectable()
export class PricingsService {
  constructor(
    @InjectRepository(Pricing)
    private readonly pricingPlanRepository: Repository<Pricing>,
  ) {}

  /**
   * Find all pricing packages with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of qrcodes and the total count
   *
   */
  getPricingPackages(
    options: IPaginationOptions,
  ): Promise<Pagination<Pricing>> {
    const query = this.pricingPlanRepository
      .createQueryBuilder('pricing')
      .where('pricing.deleted_at IS NULL');
    return paginate<Pricing>(query, options);
  }

  /**
   * Find a pricing package by id
   * @param pricing packageId - The id of the pricing package to find
   * @returns The found pricing package
   * @throws NotFoundException if the pricing package is not found
   *
   */
  async getPricingPackakgesById(pricingId: number): Promise<Pricing> {
    const pricingPackage = await this.pricingPlanRepository.findOne({
      where: { pricingId, deletedAt: null },
    });

    if (!pricingPackage) {
      throw new NotFoundException();
    }

    return pricingPackage;
  }

  /**
   * Remove a pricing plan
   * @param pricing planId - The id of the pricing plan to remove
   * @returns The removed pricing plan
   * @throws NotFoundException if the pricing plan is not found
   *
   */
  async removePricingPlanPackage(pricingId: number) {
    const pricingPlan = await this.pricingPlanRepository.findOne({
      where: { pricingId, deletedAt: null },
    });

    if (!pricingPlan) {
      throw new NotFoundException();
    }

    pricingPlan.deletedAt = new Date();

    return this.pricingPlanRepository.save(pricingPlan);
  }

  /**
   * Update a pricingPlan will create new record of pricing plan with same enum
   * we need to track when we change price of package so we know how mutch each certificate cost
   * @param pricingPlanId - The id of the pricingPlan to update
   * @param UpdatePricingPlanDto - The data to update the pricingPlan
   * @returns The updated pricingPlan
   * @throws NotFoundException if the pricingPlan is not found
   *
   */
  async updatePricingPlanPackage(
    pricingId: number,
    updatePricingDto: UpdatePricingDto,
  ) {
    const pricingPlan = await this.pricingPlanRepository.findOne({
      where: { pricingId, deletedAt: null },
    });

    if (!pricingPlan) {
      throw new NotFoundException();
    }

    pricingPlan.updatedAt = new Date();
    pricingPlan.deletedAt = new Date();

    await this.pricingPlanRepository.save(pricingPlan);

    return this.createPricingPlanPackage({
      price: updatePricingDto.price,
      plan: pricingPlan.plan,
    });
  }

  /**
   * Find all pricing options
   * @returns The pricing options
   *
   */
  getPricingsOptions(): Promise<DropdownPricingDto[]> {
    return this.pricingPlanRepository.find({
      where: { deletedAt: null },
      select: ['pricingId', 'plan', 'price'],
    });
  }

  /**
   * Create a new pricing Plan
   * @param CreatePricingDto - The data to create a new pricing Plan
   * @returns The created pricing Plan
   *
   */
  async createPricingPlanPackage(createPricingDto: CreatePricingDto) {
    const { price, plan } = createPricingDto;

    const pricingPlan = this.pricingPlanRepository.create({
      price,
      plan,
    });

    return this.pricingPlanRepository.save(pricingPlan);
  }
}
