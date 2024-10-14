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
import { Public } from 'src/auth/decorators/public.decorator';
import { CreateCountryDto } from '../dto/create-country.dto';
import { DropdownCountryDto } from '../dto/dropdown-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { Country } from '../entities/country.entity';
import { CountryService } from '../services/country.service';

@Controller('countries')
@ApiTags('Countries')
@ApiBearerAuth('access-token')
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

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all countries paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all countries.',
    type: [Country],
  })
  getCountries(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.countryService.getCountries({
      page,
      limit,
    });
  }

  @Public()
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

  @Public()
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

  @Public()
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
