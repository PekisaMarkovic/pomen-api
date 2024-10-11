import { Module } from '@nestjs/common';
import { MailerService } from './services/mailer.service';
import { MailerController } from './controllers/mailer.controller';

@Module({
  controllers: [MailerController],
  exports: [MailerService],
  providers: [MailerService],
})
export class MailerModule {}
