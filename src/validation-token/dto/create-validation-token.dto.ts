import { ValidationTokenTypeEnums } from '../enums/VerificationTokenType';

export class CreateValidationToken {
  email: string;
  token: string;
  validationTokenType: ValidationTokenTypeEnums;
}
