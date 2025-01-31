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
import { CreateGetheringDto, UpdateGetheringDto } from '@/getherings/dto';
import { Gethering } from '@/getherings/entities/gethering.entity';
import { GetheringsService } from '@/getherings/services/getherings.service';
import { Public } from '@/auth/decorators';

@Controller('getherings')
@ApiTags('Getherings')
@ApiBearerAuth('access-token')
export class GetheringsController {
  constructor(private readonly getheringsService: GetheringsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new gethering' })
  @ApiResponse({
    status: HttpStatus.CREATED,
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

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all getherings paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all getherings.',
    type: [Gethering],
  })
  getGetherings(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.getheringsService.getGetherings({
      page,
      limit,
    });
  }

  @Public()
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
  getGetheringById(@Param('id', ParseIntPipe) id: number) {
    return this.getheringsService.getGetheringById(id);
  }

  @Public()
  @Get('/certificates/:certificateId')
  @ApiOperation({ summary: 'Get all cities by county id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the cities.',
    type: [Gethering],
  })
  getGetheringsByCertificateId(
    @Param('certificateId') certificateId: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.getheringsService.getGetheringsByCertificateId(+certificateId, {
      page,
      limit,
    });
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
    @Param('id', ParseIntPipe) id: number,
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
  removeGethering(@Param('id', ParseIntPipe) id: number) {
    return this.getheringsService.removeGethering(id);
  }
}
