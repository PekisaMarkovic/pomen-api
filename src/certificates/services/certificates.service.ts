import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate } from '../entities/certificate.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import {
  CreateCertificateAndUserDto,
  CreateCertificateDto,
} from '../dto/create-certificate.dto';
import { UpdateCertificateDto } from '../dto/update-certificate.dto';
import { User } from 'src/users/entities/user.entity';
import { ClientRoleEnums } from 'src/auth/enums/role.enum';
import { Role } from 'src/auth/entities/role.entity';
import { ValidationTokenTypeEnums } from 'src/validation-token/enums/VerificationTokenType';
import { MailerService } from 'src/mailer/services/mailer.service';
import { ValidationTokenService } from 'src/validation-token/services/validation-token.service';
import { JwtService } from '@nestjs/jwt';
import { Cemetery } from 'src/cemeteries/entities/cementery.entity';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
    @InjectRepository(Cemetery)
    private readonly cemeteryRepository: Repository<Cemetery>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    private readonly mailerService: MailerService,
    private readonly validationTokenService: ValidationTokenService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Find all certificates with pagination
   * @param IPaginationOptions - The pagination parameters
   * @returns An array of certificates and the total count
   *
   */
  getCertificates(
    options: IPaginationOptions,
  ): Promise<Pagination<Certificate>> {
    const query = this.certificateRepository
      .createQueryBuilder('certificate')
      .where('certificate.deleted_at IS NULL')
      .leftJoinAndSelect('certificate.user', 'user')
      .leftJoinAndSelect('certificate.qrcode', 'qrcode')
      .leftJoinAndSelect('certificate.getherings', 'getherings')
      .leftJoinAndSelect('certificate.tributes', 'tributes')
      .leftJoinAndSelect('certificate.profileImage', 'file')
      .leftJoinAndSelect('certificate.cemetery', 'cemetery');

    return paginate<Certificate>(query, options);
  }

  /**
   * Find all certificates by Cementery id
   * @param cementeryId - The cementeryId of the certificates to find
   * @returns The found certificates
   *
   */
  getCertificatesByCementeryId(cementeryId: number): Promise<Certificate[]> {
    return this.certificateRepository.find({
      where: { cementeryId, deletedAt: null },
      relations: ['user', 'qrcode', 'getherings', 'tributes', 'file'],
    });
  }

  /**
   * Find a certificate by id
   * @param certificateId - The certificateId of the certificate to find
   * @returns The found certificate
   * @throws NotFoundException if the certificate is not found
   *
   */
  async getCertificateById(certificateId: number): Promise<Certificate> {
    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
      relations: [
        'user',
        'qrcode',
        'getherings',
        'tributes',
        'cemetery',
        'file',
      ],
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    return certificate;
  }

  /**
   * Find a certificate by slug
   * @param slug - The slug of the certificate to find
   * @returns The found certificate
   * @throws NotFoundException if the certificate is not found
   *
   */
  async getCertificateBySlug(slug: string): Promise<Certificate> {
    const certificate = await this.certificateRepository.findOne({
      where: { slug, deletedAt: null },
      relations: [
        'user',
        'qrcode',
        'getherings',
        'tributes',
        'cemetery',
        'file',
      ],
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    return certificate;
  }

  /**
   * Update a certificate
   * @param certificateId - The id of the certificate to update
   * @param UpdateCertificateDto - The data to update the certificate
   * @returns The updated certificate
   * @throws NotFoundException if the certificate/cemetery is not found
   *
   */
  async updateCertificate(
    certificateId: number,
    updateCertificateDto: UpdateCertificateDto,
  ) {
    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    const cemetery = await this.cemeteryRepository.findOne({
      where: { cementeryId: updateCertificateDto.cementeryId },
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    Object.assign(certificate, updateCertificateDto);

    certificate.cemetery = cemetery;

    certificate.updatedAt = new Date();

    return this.certificateRepository.save(certificate);
  }

  /**
   * Create a new certificate
   * @param CreateCertificateDto - The data to create a new certificate
   * @returns The created certificate
   * @throws NotFoundException if the certificate/user is not found
   *
   */
  async createCertificate(createCertificateDto: CreateCertificateDto) {
    const {
      cementeryId,
      biography,
      dateOfBirth,
      dateOfDeath,
      firstName,
      lastName,
      location,
      placeOfBirth,
      placeOfDeath,
      timeOfDeath,
      userId,
    } = createCertificateDto;

    const cemetery = await this.cemeteryRepository.findOne({
      where: { cementeryId, deletedAt: null },
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    const user = await this.userRepository.findOne({
      where: { userId },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const certificate = this.certificateRepository.create({
      biography,
      dateOfBirth,
      dateOfDeath,
      firstName,
      lastName,
      location,
      placeOfBirth,
      placeOfDeath,
      timeOfDeath,
      cemetery,
      user,
    });

    return this.certificateRepository.save(certificate);
  }

  /**
   * Remove a certificate
   * @param certificateId - The id of the certificate to remove
   * @returns The removed certificate
   * @throws NotFoundException if the certificate is not found
   *
   */
  async removeCertificate(certificateId: number) {
    const certificate = await this.certificateRepository.findOne({
      where: { certificateId, deletedAt: null },
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    certificate.deletedAt = new Date();

    return this.certificateRepository.save(certificate);
  }

  /**
   * Create a new certificate
   * @param CreateCertificateAndUserDto - The data to create a new certificate
   * @returns The created certificate
   * @throws NotFoundException if the certificate is not found
   *
   */
  async createCertificateAndUser(
    createCertificateDto: CreateCertificateAndUserDto,
  ) {
    const {
      cementeryId,
      biography,
      dateOfBirth,
      dateOfDeath,
      firstName,
      lastName,
      location,
      placeOfBirth,
      placeOfDeath,
      timeOfDeath,
      emailNewUser,
      firstNameNewUser,
      lastNameNewUser,
      firstNameNewPhone,
    } = createCertificateDto;

    const newUser = this.userRepository.create({
      email: emailNewUser,
      firstName: firstNameNewUser,
      lastName: lastNameNewUser,
      phoneNumber: firstNameNewPhone,
      isEmailConfirmed: true,
    });

    const role = await this.roleRepository.findOne({
      where: { name: ClientRoleEnums.USER },
    });

    newUser.roles = [role];

    const user = await this.userRepository.save(newUser);

    if (!user) {
      throw new NotFoundException();
    }

    const cemetery = await this.cemeteryRepository.findOne({
      where: { cementeryId, deletedAt: null },
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    const newCertificate = this.certificateRepository.create({
      biography,
      dateOfBirth,
      dateOfDeath,
      firstName,
      lastName,
      location,
      placeOfBirth,
      placeOfDeath,
      timeOfDeath,
      cemetery,
      user,
    });

    const certificate = await this.certificateRepository.save(newCertificate);

    const token = this.jwtService.sign(certificate);

    await this.validationTokenService.createValidationToken({
      email: emailNewUser,
      token,
      validationTokenType: ValidationTokenTypeEnums.FIRST_TIME_REGISTER,
    });

    await this.mailerService.sendFirstTimeRegisterMail({
      data: { token },
      recipients: [
        {
          name: `${firstNameNewUser} ${lastNameNewUser}`,
          address: emailNewUser,
        },
      ],
    });

    return certificate;
  }
}
