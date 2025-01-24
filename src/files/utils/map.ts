import * as cloudinary from 'cloudinary';
import { File } from '@/files/entities/file.entity';
import { FileTypeEnum } from '@/files/enums/file-type.enum';

export const mappCloundleryToFile = (
  clFile: cloudinary.UploadApiResponse,
  type: FileTypeEnum,
): File => {
  return {
    fileExtension: clFile.format,
    height: clFile.height,
    publicId: clFile.public_id,
    url: clFile.url,
    width: clFile.width,
    certificate: null,
    certificateId: 0,
    fileId: 0,
    type,
    certificateProfile: null,
    user: null,
  };
};
