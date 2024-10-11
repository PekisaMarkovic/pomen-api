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
} from '@nestjs/common';
import { FileService } from '../services/file.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateFileBodyDto, CreateFileDto } from '../dto/create-file.dto';

@Controller('files')
@ApiTags('Files')
@ApiBearerAuth('access-token')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('/:certificateId')
  @ApiOperation({ summary: 'Create a new file' })
  @ApiResponse({
    status: 201,
    description: 'The file has been successfully created.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the certification is not found',
    type: NotFoundException,
  })
  createCertificateProfile(
    @Param('certificateId') certificateId: string,
    @Body() createFileDto: CreateFileDto,
  ) {
    return this.fileService.createCertificateProfile(
      +certificateId,
      createFileDto,
    );
  }

  @Patch('/:certificateId')
  @ApiOperation({ summary: 'Create new files' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'The files has been successfully created/removed.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the certification is not found',
    type: NotFoundException,
  })
  createCertificateFiles(
    @Param('certificateId') certificateId: string,
    @Body() createFileBodyDto: CreateFileBodyDto,
  ) {
    return this.fileService.createCertificateFiles(
      +certificateId,
      createFileBodyDto.filesToAdd,
      createFileBodyDto.filesToRemove,
    );
  }

  @Get('/public/:publicId')
  @ApiOperation({ summary: 'Get a file by public id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the file.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the file is not found',
    type: NotFoundException,
  })
  getFileByPublicId(@Param('publicId') publicId: string) {
    return this.fileService.getFileByPublicId(publicId);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a file by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the file.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the file is not found',
    type: NotFoundException,
  })
  getFileById(@Param('id') id: string) {
    return this.fileService.getFileById(+id);
  }

  @Get('certificates/:certificateId')
  @ApiOperation({ summary: 'Get a files by certificate id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the files.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the file is not found',
    type: NotFoundException,
  })
  getFilesByCertificateId(@Param('certificateId') certificateId: string) {
    return this.fileService.getFilesByCertificateId(+certificateId);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Get a files by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the files.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the file is not found',
    type: NotFoundException,
  })
  removeImage(@Param('id') id: string) {
    return this.fileService.removeImage(+id);
  }
}
