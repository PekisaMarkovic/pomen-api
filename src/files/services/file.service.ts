import { Injectable, NotFoundException } from '@nestjs/common';
import { File } from '../entities/file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate } from 'src/certificates/entities/certificate.entity';
import { FileTypeEnum } from '../enums/file-type.enum';
import { CreateFileDto } from '../dto/create-file.dto';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  /**
   * Create a new file
   * @param certificateId - The data to create a certificateId
   * @param CreateFileDto - The data to create a new file
   * @returns The created file
   * @throws NotFoundException if the certification is not found
   *
   */
  async createCertificateProfile(
    certificateId: number,
    createImageDto: CreateFileDto,
  ) {
    const certification = await this.certificateRepository.findOne({
      where: { certificateId },
    });

    if (!certification) {
      throw new NotFoundException();
    }

    const profile = this.fileRepository.create({
      ...createImageDto,
      certificateProfile: certification,
    });

    await this.fileRepository.save(profile);
  }

  /**
   * Create a new files and remove files
   * @param certificateId - The data to create a certificateId
   * @param CreateFileDto[] - The data to create a new files
   * @param filesToRemove[] - The data to remove files
   * @returns The created file
   * @throws NotFoundException if the certification is not found
   *
   */
  async createCertificateFiles(
    certificateId: number,
    filesToAdd: CreateFileDto[],
    filesToRemove: number[],
  ) {
    const certificate = await this.certificateRepository.findOne({
      where: { certificateId },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    const uploadImagePromises = filesToAdd.map((image) => {
      const img = this.fileRepository.create({
        ...image,
        certificate,
      });

      return this.fileRepository.save(img);
    });

    await Promise.all(uploadImagePromises);

    const filesRemoved = filesToRemove.map(async (id) => {
      const image = await this.fileRepository.findOne({
        where: {
          fileId: id,
        },
      });

      return this.fileRepository.remove(image);
    });

    await Promise.all(filesRemoved);
  }

  /**
   * Find a file by id
   * @param fileId - The file id of the file to find
   * @returns The found file
   * @throws NotFoundException if the file is not found
   *
   */
  async getFileById(fileId: number) {
    const file = await this.fileRepository.findOne({ where: { fileId } });

    if (!file) {
      throw new NotFoundException();
    }

    return file;
  }

  /**
   * Find a file by public id
   * @param publicId - The file public id of the file to find
   * @returns The found file
   * @throws NotFoundException if the file is not found
   *
   */
  async getFileByPublicId(publicId: string) {
    const file = await this.fileRepository.findOne({ where: { publicId } });

    if (!file) {
      throw new NotFoundException();
    }

    return file;
  }

  /**
   * Find all files by certificate id
   * @param certificateId - The certificate Id of the files to find
   * @returns The found files
   * @throws NotFoundException if certificate file is not found
   *
   */
  async getFilesByCertificateId(certificateId: number) {
    const certification = await this.certificateRepository.findOne({
      where: { certificateId },
    });

    if (!certification) {
      throw new NotFoundException();
    }

    const certificateFiles = await this.fileRepository.find({
      where: { certificateId },
    });

    let profile = null;
    const images = [];
    const videos = [];
    const document = [];

    certificateFiles.forEach((file) => {
      if (file.fileId === certification.certificateProfileId) {
        profile = file;
      } else {
        switch (file.type) {
          case FileTypeEnum.DOCUMENT:
            document.push(file);
            break;
          case FileTypeEnum.IMAGE:
            images.push(file);
            break;
          case FileTypeEnum.VIDEO:
            videos.push(file);
            break;
        }
      }
    });

    return {
      profile,
      images,
      videos,
      document,
    };
  }

  /**
   * Remove a files by id
   * @param fileId - The Id of the files to remove
   * @returns The removed files
   * @throws NotFoundException if file is not found
   *
   */
  async removeImage(fileId: number) {
    const file = await this.fileRepository.findOne({
      where: { fileId },
    });

    if (!file) {
      throw new NotFoundException();
    }

    return this.fileRepository.remove(file);
  }
}
