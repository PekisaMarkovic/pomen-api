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
import { GetheringsService } from '../services/getherings.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Gethering } from '../entities/gethering.entity';
import { CreateGetheringDto } from '../dto/create-gethering.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { UpdateGetheringDto } from '../dto/update-gethering.dto';

@Controller('getherings')
@ApiTags('Getherings')
export class GetheringsController {
  constructor(private readonly getheringsService: GetheringsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new gethering' })
  @ApiResponse({
    status: 201,
    description: 'The gethering has been successfully created.',
    type: Gethering,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the certificate is not found',
    type: NotFoundException,
  })
  createGethering(@Body() createCemeteryDto: CreateGetheringDto) {
    return this.getheringsService.createGethering(createCemeteryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all getherings paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all getherings.',
    type: [Gethering],
  })
  getGetherings(@Query() options: IPaginationOptions) {
    return this.getheringsService.getGetherings(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a gethering by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the gethering.',
    type: Gethering,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the gethering is not found',
    type: NotFoundException,
  })
  getGetheringById(@Param('id') id: string) {
    return this.getheringsService.getGetheringById(+id);
  }

  @Get('/certificates/:certificateId')
  @ApiOperation({ summary: 'Get all cities by county id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the cities.',
    type: [Gethering],
  })
  getGetheringsByCertificateId(@Param('certificateId') certificateId: string) {
    return this.getheringsService.getGetheringsByCertificateId(+certificateId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a gethering with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the gethering.',
    type: Gethering,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the gethering is not found',
    type: NotFoundException,
  })
  updateCity(
    @Param('id') id: string,
    @Body() updateGetheringDto: UpdateGetheringDto,
  ) {
    return this.getheringsService.updateGethering(+id, updateGetheringDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a gethering with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the gethering.',
    type: Gethering,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the gethering is not found',
    type: NotFoundException,
  })
  removeGethering(@Param('id') id: string) {
    return this.getheringsService.removeGethering(+id);
  }
}
