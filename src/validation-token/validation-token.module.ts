import { Module } from '@nestjs/common';
import { ValidationTokenService } from './services/validation-token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationToken } from './entities/validation-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ValidationToken])],
  providers: [ValidationTokenService],
  exports: [ValidationTokenService],
})
export class ValidationTokenModule {}
