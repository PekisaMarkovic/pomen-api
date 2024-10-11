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
import {
  CreateCertificateAndUserDto,
  CreateCertificateDto,
} from '../dto/create-certificate.dto';
import { UpdateCertificateDto } from '../dto/update-certificate.dto';
import { Certificate } from '../entities/certificate.entity';
import { CertificatesService } from '../services/certificates.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('certificates')
@ApiTags('Certificates')
@ApiBearerAuth('access-token')
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

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all certificates' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all certificates.',
    type: [Certificate],
  })
  getCertificates(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.certificatesService.getCertificates({
      page,
      limit,
    });
  }

  @Public()
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

  @Public()
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

  @Public()
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
