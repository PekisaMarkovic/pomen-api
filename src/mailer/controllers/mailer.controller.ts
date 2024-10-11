import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { MailerService } from '../services/mailer.service';
import { SendMailDto } from '../dto/send-mail.dto';
import { Public } from 'src/auth/decorators/public.decorator';
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
  @Get('test-register-organization')
  @ApiOperation({ summary: 'Send a first time registe4r email' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the city.',
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
}
