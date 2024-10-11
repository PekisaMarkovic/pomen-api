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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { CreateTributeDto } from '../dto/create-tribute.dto';
import { UpdateTributeDto } from '../dto/update-tribute.dto';
import { Tribute } from '../entities/tribute.entity';
import { TributesService } from '../services/tributes.service';

@Controller('tributes')
@ApiTags('Tributes')
export class TributesController {
  constructor(private readonly tributesService: TributesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tribute' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The tribute has been successfully created.',
    type: Tribute,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate not found.',
    type: NotFoundException,
  })
  createTribute(@Body() createTributeDto: CreateTributeDto) {
    return this.tributesService.createTribute(createTributeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tributes paginated.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all tributes.',
    type: [Tribute],
  })
  getTributes(@Query() options: IPaginationOptions) {
    return this.tributesService.getTributes(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tribute by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the tribute.',
    type: Tribute,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if tribute.',
    type: NotFoundException,
  })
  getTributeById(@Param('id') id: string) {
    return this.tributesService.getTributeById(+id);
  }

  @Get('/certificates/:certificateId')
  @ApiOperation({ summary: 'Get all tributes by certificate id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the tributes.',
    type: [Tribute],
  })
  getTributesByCertificateId(@Param('certificateId') certificateId: string) {
    return this.tributesService.getTributesByCertificateId(+certificateId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a tribute with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the tribute.',
    type: Tribute,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if tribute.',
    type: NotFoundException,
  })
  updateQRcode(
    @Param('id') id: string,
    @Body() updateTributeDto: UpdateTributeDto,
  ) {
    return this.tributesService.updateTribute(+id, updateTributeDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a tribute with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the tribute.',
    type: Tribute,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if tribute.',
    type: NotFoundException,
  })
  removeTribute(@Param('id') id: string) {
    return this.tributesService.removeTribute(+id);
  }
}
