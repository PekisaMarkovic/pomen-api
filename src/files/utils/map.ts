import * as cloudinary from 'cloudinary';
import { File } from '../entities/file.entity';
import { FileTypeEnum } from '../enums/file-type.enum';

export const mappCloundleryToFile = (
  clFile: cloudinary.UploadApiResponse,
  type: FileTypeEnum,
): File => {
  return {
    fileExtension: clFile.format,
    height: clFile.height,
    publicId: clFile.public_id,
    url: clFile.url,
    wight: clFile.width,
    certificate: null,
    certificateId: 0,
    fileId: 0,
    type,
    certificateProfile: null,
    user: null,
  };
};
