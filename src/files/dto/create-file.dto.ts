import { IsEnum, IsNumber, IsString } from 'class-validator';
import { FileTypeEnum } from '../enums/file-type.enum';
import { ApiProperty } from '@nestjs/swagger';

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
  filesToAdd: CreateFileDto[];

  @ApiProperty()
  filesToRemove: number[];
}
