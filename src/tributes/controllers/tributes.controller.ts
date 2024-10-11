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
import { CreateTributeDto } from '../dto/create-tribute.dto';
import { UpdateTributeDto } from '../dto/update-tribute.dto';
import { Tribute } from '../entities/tribute.entity';
import { TributesService } from '../services/tributes.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('tributes')
@ApiTags('Tributes')
@ApiBearerAuth('access-token')
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

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all tributes paginated.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all tributes.',
    type: [Tribute],
  })
  getTributes(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.tributesService.getTributes({
      page,
      limit,
    });
  }

  @Public()
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

  @Public()
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
