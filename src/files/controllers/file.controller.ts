import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  UseInterceptors,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { FileService } from '@/files/services/file.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateColudnleryDto,
  CreateFileBodyDto,
  CreateFileDto,
  CreateMultyCludnleryDto,
} from '@/files/dto';
import * as cloudinary from 'cloudinary';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { mappCloundleryToFile } from '@/files/utils/map';
import { FileTypeEnum } from '@/files/enums/file-type.enum';
import { Public } from '@/auth/decorators';
import { File } from '@/files/entities/file.entity';

@Controller('files')
@ApiTags('Files')
@ApiBearerAuth('access-token')
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly configService: ConfigService,
  ) {
    cloudinary.v2.config({
      cloud_name: this.configService.get('VITE_CLOUDINARY_NAME'),
      api_key: this.configService.get('VITE_CLOUDINARY_KEY'),
      api_secret: this.configService.get('VITE_CLOUDINARY_SECRET'),
    });
  }

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSingleImage(@Body() body: CreateColudnleryDto) {
    const resource_type =
      body.type === FileTypeEnum.DOCUMENT ? 'raw' : body.type;

    try {
      const uploaded = await cloudinary.v2.uploader.upload(body.file, {
        resource_type,
      });

      return mappCloundleryToFile(uploaded, body.type);
    } catch (e) {
      return e;
    }
  }

  @Post('multy')
  @UseInterceptors(FileInterceptor('files'))
  async uploadMultyImage(@Body() body: CreateMultyCludnleryDto) {
    const resource_type =
      body.type === FileTypeEnum.DOCUMENT ? 'raw' : body.type;

    const uploadPromises = body.files.map((file) => {
      return cloudinary.v2.uploader.upload(file, { resource_type });
    });

    const uploadResults = await Promise.all(uploadPromises);

    return uploadResults.map((image) => mappCloundleryToFile(image, body.type));
  }

  @Post('/certificate-profile/:certificateId')
  @ApiOperation({ summary: 'Create a new file' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The file has been successfully created.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the certification is not found',
    type: NotFoundException,
  })
  createCertificateProfile(
    @Param('certificateId', ParseIntPipe) certificateId: number,
    @Body() createFileDto: CreateFileDto,
  ) {
    return this.fileService.createCertificateProfile(
      certificateId,
      createFileDto,
    );
  }

  @Post('/user-profile/:email')
  @ApiOperation({ summary: 'Create a new file' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The file has been successfully created.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the certification is not found',
    type: NotFoundException,
  })
  createUserProfileImage(
    @Param('email') email: string,
    @Body() createFileDto: CreateFileDto,
  ) {
    return this.fileService.createUserProfileImage(email, createFileDto);
  }

  @Post('/blog-content/:blogContentId')
  @ApiOperation({ summary: 'Create a new file' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The file has been successfully created.',
    type: File,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the blog content is not found',
    type: NotFoundException,
  })
  createBlogContentImage(
    @Param('blogContentId', ParseIntPipe) blogContentId: number,
    @Body() createFileDto: CreateFileDto,
  ) {
    return this.fileService.createBlogContentImage(
      blogContentId,
      createFileDto,
    );
  }

  @Patch('/certificate-files/:certificateId')
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
    @Param('certificateId', ParseIntPipe) certificateId: number,
    @Body() createFileBodyDto: CreateFileBodyDto,
  ) {
    return this.fileService.createCertificateFiles(
      certificateId,
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
  getFileById(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.getFileById(id);
  }

  @Public()
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
  getFilesByCertificateId(
    @Param('certificateId', ParseIntPipe) certificateId: number,
  ) {
    return this.fileService.getFilesByCertificateId(certificateId);
  }

  @Public()
  @Get('certificates/slug/:slug')
  @ApiOperation({ summary: 'Get a files by slug' })
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
  getFilesBySlug(@Param('slug') slug: string) {
    return this.fileService.getFilesBySlug(slug);
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
  removeImage(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.removeImage(id);
  }
}
