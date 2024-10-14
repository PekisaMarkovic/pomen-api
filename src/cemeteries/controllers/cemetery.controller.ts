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
import { CementeryService } from '../services/cementery.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCemeteryDto } from '../dto/create-cemetery.dto';
import { Cemetery } from '../entities/cementery.entity';
import { updateCemeteryDto } from '../dto/update-cementery.dto';
import { DropdownCementeryDto } from '../dto/dropdown-cementery.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('cemeteries')
@ApiTags('Cemeteries')
@ApiBearerAuth('access-token')
export class CemeteryController {
  constructor(private readonly cementeryService: CementeryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new cemetery' })
  @ApiResponse({
    status: 201,
    description: 'The cemetery has been successfully created.',
    type: Cemetery,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if city not found.',
    type: NotFoundException,
  })
  createCemetery(@Body() createCemeteryDto: CreateCemeteryDto) {
    return this.cementeryService.createCemetery(createCemeteryDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all cemeteries paginated.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all cemeteries.',
    type: [Cemetery],
  })
  getCemeteries(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.cementeryService.getCemeteries({
      page,
      limit,
    });
  }

  @Public()
  @Get('/options')
  @ApiOperation({ summary: 'Get all cemeteries options' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the options.',
    type: [DropdownCementeryDto],
  })
  getCemeteriesOptions() {
    return this.cementeryService.getCemeteriesOptions();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a cemetery by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the cemetery.',
    type: Cemetery,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if cemetery.',
    type: NotFoundException,
  })
  getCemeteryById(@Param('id') id: string) {
    return this.cementeryService.getCemeteryById(+id);
  }

  @Public()
  @Get('/slug/:slug')
  @ApiOperation({ summary: 'Get a cemetery by slug' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the cemetery.',
    type: Cemetery,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if cemetery.',
    type: NotFoundException,
  })
  getCemeteryBySlug(@Param('slug') slug: string) {
    return this.cementeryService.getCemeteryBySlug(slug);
  }

  @Public()
  @Get('/cities/:cityId')
  @ApiOperation({ summary: 'Get all cemeteries by city id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the cemetery.',
    type: [Cemetery],
  })
  getCemeteriesByCityId(@Param('cityId') cityId: string) {
    return this.cementeryService.getCemeteriesByCityId(+cityId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a cemeteries with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the cemetery.',
    type: Cemetery,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if city/cemetery.',
    type: NotFoundException,
  })
  updateCemetery(
    @Param('id') id: string,
    @Body() updateCemeteryDto: updateCemeteryDto,
  ) {
    return this.cementeryService.updateCemetery(+id, updateCemeteryDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a cemeteries with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the cemetery.',
    type: Cemetery,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if cemetery.',
    type: NotFoundException,
  })
  removeCemetery(@Param('id') id: string) {
    return this.cementeryService.removeCemetery(+id);
  }
}
