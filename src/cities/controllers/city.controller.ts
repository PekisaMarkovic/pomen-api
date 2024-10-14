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
import { CreateCityDto } from '../dto/create-city.dto';
import { DropdownCityDto } from '../dto/dropdown-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { City } from '../entities/city.entity';
import { CityService } from '../services/city.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('cities')
@ApiTags('Cities')
@ApiBearerAuth('access-token')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new city' })
  @ApiResponse({
    status: 201,
    description: 'The city has been successfully created.',
    type: City,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the country is not found',
    type: NotFoundException,
  })
  createCity(@Body() createCityDto: CreateCityDto) {
    return this.cityService.createCity(createCityDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all cities paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all cities.',
    type: [City],
  })
  getCities(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.cityService.getCities({
      page,
      limit,
    });
  }

  @Public()
  @Get('/options')
  @ApiOperation({ summary: 'Get all cities options' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the options.',
    type: [DropdownCityDto],
  })
  getCitiesOptions() {
    return this.cityService.getCitiesOptions();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a city by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the city.',
    type: City,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the city is not found',
    type: NotFoundException,
  })
  getCityById(@Param('id') id: string) {
    return this.cityService.getCityById(+id);
  }

  @Public()
  @Get('/slug/:slug')
  @ApiOperation({ summary: 'Get a city by slug' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the city.',
    type: City,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the city is not found',
    type: NotFoundException,
  })
  getCityBySlug(@Param('slug') slug: string) {
    return this.cityService.getCityBySlug(slug);
  }

  @Public()
  @Get('/countries/:countryId')
  @ApiOperation({ summary: 'Get all cities by county id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the cities.',
    type: [City],
  })
  getCitiesByCountryId(@Param('countryId') countryId: string) {
    return this.cityService.getCitiesByCountryId(+countryId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a city with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the city.',
    type: City,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the city/country is not found',
    type: NotFoundException,
  })
  updateCity(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.updateCity(+id, updateCityDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a city with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the city.',
    type: City,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the city is not found',
    type: NotFoundException,
  })
  removeCity(@Param('id') id: string) {
    return this.cityService.removeCity(+id);
  }
}
