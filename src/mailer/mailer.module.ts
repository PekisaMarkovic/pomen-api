import { Module } from '@nestjs/common';
import { MailerService } from '@/mailer/services/mailer.service';
import { MailerController } from '@/mailer/controllers/mailer.controller';

@Module({
  controllers: [MailerController],
  exports: [MailerService],
  providers: [MailerService],
})
export class MailerModule {}
