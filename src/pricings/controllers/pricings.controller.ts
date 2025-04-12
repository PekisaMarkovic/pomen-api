import { PricingsService } from '@/pricings/services/pricings.service';
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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Pricing } from '@/pricings/entities/pricing.entity';
import { CreatePricingDto, UpdatePricingDto } from '@/pricings/dto';
import { Public } from '@/auth/decorators';
import { DropdownPricingDto } from '../dto/dropdown-pricing.dto';

@Controller('pricings')
export class PricingsController {
  constructor(private readonly pricingsService: PricingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pricing plan' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The pricing plan has been successfully created.',
    type: Pricing,
  })
  createPricing(@Body() createPricingDto: CreatePricingDto) {
    return this.pricingsService.createPricingPlanPackage(createPricingDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all pricing plans paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all pricing plans.',
    type: [Pricing],
  })
  getPricings(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.pricingsService.getPricingPackages({
      page,
      limit,
    });
  }

  @Public()
  @Get('/options')
  @ApiOperation({ summary: 'Get all pricings options' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the options.',
    type: [DropdownPricingDto],
  })
  getPricingsOptions() {
    return this.pricingsService.getPricingsOptions();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a pricing plan by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the pricing plan.',
    type: Pricing,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the pricing plan is not found',
    type: NotFoundException,
  })
  getCountryById(@Param('id', ParseIntPipe) id: number) {
    return this.pricingsService.getPricingPackakgesById(id);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a pricing plan with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the pricing plan.',
    type: Pricing,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the pricing plan is not found',
    type: NotFoundException,
  })
  updatePricing(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePricingDto: UpdatePricingDto,
  ) {
    return this.pricingsService.updatePricingPlanPackage(id, updatePricingDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a pricing plan with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the pricing plan.',
    type: Pricing,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the pricing plan is not found',
    type: NotFoundException,
  })
  removeCountry(@Param('id', ParseIntPipe) id: number) {
    return this.pricingsService.removePricingPlanPackage(id);
  }
}
