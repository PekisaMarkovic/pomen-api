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
import { CountryService } from '../services/country.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCountryDto } from '../dto/create-country.dto';
import { Country } from '../entities/country.entity';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { DropdownCountryDto } from '../dto/dropdown-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';

@Controller('countries')
@ApiTags('Countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new country' })
  @ApiResponse({
    status: 201,
    description: 'The country has been successfully created.',
    type: Country,
  })
  createCountry(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.createCountry(createCountryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all countries paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all countries.',
    type: [Country],
  })
  getCemeteries(@Query() options: IPaginationOptions) {
    return this.countryService.getCountries(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a country by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the country.',
    type: Country,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the country is not found',
    type: NotFoundException,
  })
  getCountryById(@Param('id') id: string) {
    return this.countryService.getCountryById(+id);
  }

  @Get('/slug/:slug')
  @ApiOperation({ summary: 'Get a country by slug' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the country.',
    type: Country,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the country is not found',
    type: NotFoundException,
  })
  getCountryBySlug(@Param('slug') slug: string) {
    return this.countryService.getCountryBySlug(slug);
  }

  @Get('/options')
  @ApiOperation({ summary: 'Get all countries options' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the options.',
    type: [DropdownCountryDto],
  })
  getCountriesOptions() {
    return this.countryService.getCountriesOptions();
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a country with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the country.',
    type: Country,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the country is not found',
    type: NotFoundException,
  })
  updateCountry(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    return this.countryService.updateCountry(+id, updateCountryDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a country with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the country.',
    type: Country,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the country is not found',
    type: NotFoundException,
  })
  removeCountry(@Param('id') id: string) {
    return this.countryService.removeCountry(+id);
  }
}
