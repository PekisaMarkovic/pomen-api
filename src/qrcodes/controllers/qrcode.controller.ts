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
import { QrcodeService } from '../services/qrcode.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Qrcode } from '../entities/qrcode.entity';
import { CreateQrcodeDto } from '../dto/create-qrcode.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { UpdateQrcodeDto } from '../dto/update-qrcode.dto';

@Controller('qrcodes')
@ApiTags('Qrcodes')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Qrcode' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The Qrcode has been successfully created.',
    type: Qrcode,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if city/certificate not found.',
    type: NotFoundException,
  })
  createQRcode(@Body() createTributeDto: CreateQrcodeDto) {
    return this.qrcodeService.createQRcode(createTributeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all qrcodes paginated.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all qrcodes.',
    type: [Qrcode],
  })
  getQRcodes(@Query() options: IPaginationOptions) {
    return this.qrcodeService.getQRcodes(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a qrcode by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the qrcode.',
    type: Qrcode,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if qrcode.',
    type: NotFoundException,
  })
  getQRcodeById(@Param('id') id: string) {
    return this.qrcodeService.getQRcodeById(+id);
  }

  @Get('/certificates/:certificateId')
  @ApiOperation({ summary: 'Get all qrcodes by certificate id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the qrcodes.',
    type: [Qrcode],
  })
  getQRcodesByCertificateId(@Param('certificateId') certificateId: string) {
    return this.qrcodeService.getQRcodesByCertificateId(+certificateId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a qrcode with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the qrcode.',
    type: Qrcode,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if city/qrcode.',
    type: NotFoundException,
  })
  updateQRcode(
    @Param('id') id: string,
    @Body() updateQrcodeDto: UpdateQrcodeDto,
  ) {
    return this.qrcodeService.updateQRcode(+id, updateQrcodeDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a qrcode with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the qrcode.',
    type: Qrcode,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if qrcode.',
    type: NotFoundException,
  })
  removeQRcode(@Param('id') id: string) {
    return this.qrcodeService.removeQRcode(+id);
  }
}
