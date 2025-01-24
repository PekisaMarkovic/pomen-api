import { Module } from '@nestjs/common';
import { ContactsController } from '@/contacts/controllers/contacts.controller';
import { ContactsService } from '@/contacts/services/contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '@/contacts/entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
