import { Module } from '@nestjs/common';
import { FileService } from '@/files/services/file.service';
import { FileController } from '@/files/controllers/file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from '@/files/entities/file.entity';
import { Certificate } from '@/certificates/entities/certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File, Certificate])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
