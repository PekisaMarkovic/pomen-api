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
import { CertificatesService } from '../services/certificates.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Certificate } from '../entities/certificate.entity';
import {
  CreateCertificateAndUserDto,
  CreateCertificateDto,
} from '../dto/create-certificate.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { UpdateCertificateDto } from '../dto/update-certificate.dto';

@Controller('certificates')
@ApiTags('Certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new certificate' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The certificate has been successfully created.',
    type: Certificate,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if user/cemetery is not found.',
    type: NotFoundException,
  })
  createCertificate(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.createCertificate(createCertificateDto);
  }

  @Post('/new-user')
  @ApiOperation({ summary: 'Create a new certificate' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The certificate has been successfully created.',
    type: Certificate,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if user/cemetery is not found.',
    type: NotFoundException,
  })
  createCertificateAndUser(
    @Body() createCertificateAndUserDto: CreateCertificateAndUserDto,
  ) {
    return this.certificatesService.createCertificateAndUser(
      createCertificateAndUserDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all certificates' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all certificates.',
    type: [Certificate],
  })
  getCertificates(@Query() options: IPaginationOptions) {
    return this.certificatesService.getCertificates(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a certificate by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the certificate.',
    type: Certificate,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate is not found.',
    type: NotFoundException,
  })
  getCertificateById(@Param('id') id: string) {
    return this.certificatesService.getCertificateById(+id);
  }

  @Get('/slug/:slug')
  @ApiOperation({ summary: 'Get a certificate by slug' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the certificate.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate is not found.',
    type: NotFoundException,
  })
  getCertificateBySlug(@Param('slug') slug: string) {
    return this.certificatesService.getCertificateBySlug(slug);
  }

  @Get('/cemeteries/:cementeryId')
  @ApiOperation({ summary: 'Get all cemeteries by cementery id' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [Certificate],
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate is not found.',
    type: NotFoundException,
  })
  getCertificatesByCementeryId(@Param('cementeryId') cementeryId: string) {
    return this.certificatesService.getCertificatesByCementeryId(+cementeryId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a certificate with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the certificate.',
    type: Certificate,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate/cemetery is not found.',
    type: NotFoundException,
  })
  updateCertificate(
    @Param('id') id: string,
    @Body() updateCertificateDto: UpdateCertificateDto,
  ) {
    return this.certificatesService.updateCertificate(
      +id,
      updateCertificateDto,
    );
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a certificate with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the certificate.',
    type: Certificate,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if certificate is not found.',
    type: NotFoundException,
  })
  removeCertificate(@Param('id') id: string) {
    return this.certificatesService.removeCertificate(+id);
  }
}
