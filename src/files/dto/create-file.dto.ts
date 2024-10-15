import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { FileTypeEnum } from '../enums/file-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateColudnleryDto {
  @ApiProperty()
  @IsString()
  file: string;
  @ApiProperty()
  @IsEnum(FileTypeEnum, {
    message: 'Status must be one of the following: image, video, document',
  })
  type: FileTypeEnum;
}

export class CreateMultyCludnleryDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  files: string[];

  @ApiProperty()
  @IsEnum(FileTypeEnum, {
    message: 'Status must be one of the following: image, video, document',
  })
  type: FileTypeEnum;
}

export class CreateFileDto {
  @ApiProperty()
  @IsNumber()
  height: number;

  @ApiProperty()
  @IsNumber()
  wight: number;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  publicId: string;

  @ApiProperty()
  @IsEnum(FileTypeEnum, {
    message: 'Status must be one of the following: image, video, document',
  })
  type: FileTypeEnum;
}

export class CreateFileBodyDto {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  filesToAdd: CreateFileDto[];

  @ApiProperty()
  @IsArray()
  filesToRemove: number[];
}
