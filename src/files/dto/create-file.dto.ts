import { IsEnum, IsNumber, IsString } from 'class-validator';
import { FileTypeEnum } from '../enums/file-type.enum';

export class CreateFileDto {
  @IsNumber()
  height: number;

  @IsNumber()
  wight: number;

  @IsString()
  url: string;

  @IsString()
  publicId: string;

  @IsEnum(FileTypeEnum, {
    message: 'Status must be one of the following: image, video, document',
  })
  type: FileTypeEnum;
}

export class CreateFileBodyDto {
  filesToAdd: CreateFileDto[];
  filesToRemove: number[];
}
