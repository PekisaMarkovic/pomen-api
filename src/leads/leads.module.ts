import { Module } from '@nestjs/common';
import { LeadsService } from '@/leads/services/leads.service';
import { LeadsController } from '@/leads/controllers/leads.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lead } from '@/leads/entities/lead.entity';
import { MailerModule } from '@/mailer/mailer.module';
import { Pricing } from '@/pricings/entities/pricing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead, Pricing]), MailerModule],
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
