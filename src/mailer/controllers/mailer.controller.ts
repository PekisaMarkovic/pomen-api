import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { MailerService } from '@/mailer/services/mailer.service';
import { SendMailDto } from '@/mailer/dto';
import { Public } from '@/auth/decorators';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Controller('mailer')
@ApiTags('Mailer')
@ApiBearerAuth('access-token')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Public()
  @Get('test-first-time-register')
  @ApiOperation({ summary: 'Send a first time registe4r email' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Send email',
    type: SMTPTransport,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Throw exception if email not send',
    type: HttpException,
  })
  async sendFirstTimeRegisterMail() {
    const dto: SendMailDto = {
      data: { link: 'register-organization/new-token' },
      recipients: [
        { name: 'Petar Markovic', address: 'mark.petar.ovic@gmail.com' },
      ],
    };

    return await this.mailerService.sendFirstTimeRegisterMail(dto);
  }

  @Public()
  @Get('test-create-lead')
  @ApiOperation({ summary: 'Send email to notify user, lead is created' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Send eimal',
    type: SMTPTransport,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Throw exception if email not send',
    type: HttpException,
  })
  async sendLeadCreatedMail() {
    const dto: SendMailDto = {
      data: {
        buyer_name: 'BUYER_NAME',
        first_name: 'CERTIFICATE_FIST_NAME',
        last_name: 'CERTIFICATE_LAST_NAME',
        current_year: `${new Date().getFullYear()}`,
      },
      recipients: [
        { name: 'Petar Markovic', address: 'mark.petar.ovic@gmail.com' },
      ],
    };

    return await this.mailerService.sendLeadCreatedMail(dto);
  }
}
