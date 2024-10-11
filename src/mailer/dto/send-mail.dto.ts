import { Address } from 'nodemailer/lib/mailer';

export interface SendMailDto {
  recipients: Address[];
  data: Record<string, string>;
}
