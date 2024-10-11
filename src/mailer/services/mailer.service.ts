import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendMailDto } from '../dto/send-mail.dto';
import Mail from 'nodemailer/lib/mailer';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  private mailTransport() {
    const transporeter = nodemailer.createTransport({
      host: this.configService.get('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      auth: {
        user: this.configService.get('MAIL_USER'),
        pass: this.configService.get('MAIL_PASSWORD'),
      },
    });
    return transporeter;
  }

  private replacePlaceholders(str, replacements) {
    return str.replace(/{(.*?)}/g, (_, key) => {
      return replacements[key] || '';
    });
  }

  private async readHtmlTemplate(name: string) {
    try {
      const filePath = path.join(__dirname, '..', 'templates', name);
      const data = await fs.readFile(filePath, 'utf-8');
      return data;
    } catch (error) {
      console.error('Error reading the file:', error);
      throw new Error('Could not read the HTML file');
    }
  }

  private async sendMail(
    subject: string,
    recipients: Mail.Address[],
    template: string,
    data: Record<string, string>,
  ) {
    const htmlString = await this.readHtmlTemplate(template);
    const html = this.replacePlaceholders(htmlString, data);

    const transport = this.mailTransport();

    const options: Mail.Options = {
      from: {
        name: this.configService.get('APP_NAME'),
        address: this.configService.get('DEFAULT_EMAIL_FROM'),
      },
      to: recipients,
      subject,
      html,
    };

    try {
      const result = await transport.sendMail(options);

      return result;
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Send a first time registe4r email
   * @param SendMailDto - The data to send email
   * @returns The updated SMTPTransport.SentMessageInfo
   * @throws HttpException if the city/country is not found
   *
   */
  async sendFirstTimeRegisterMail(dto: SendMailDto) {
    const { data, recipients } = dto;

    try {
      const result = await this.sendMail(
        'Pomen Registracija',
        recipients,
        'first-time-register.html',
        {
          link: `${this.configService.get('APP_DOMAIN')}/first-time-register/${data.token}`,
          current_year: `${new Date().getFullYear()}`,
        },
      );

      return result;
    } catch {
      throw new HttpException(
        'Failed to first time register email',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
