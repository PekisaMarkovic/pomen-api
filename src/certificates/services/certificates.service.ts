import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Role } from 'src/auth/entities/role.entity';
import { ClientRoleEnums } from 'src/auth/enums/role.enum';
import { Cemetery } from 'src/cemeteries/entities/cementery.entity';
import { MailerService } from 'src/mailer/services/mailer.service';
import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { ValidationTokenTypeEnums } from 'src/validation-token/enums/VerificationTokenType';
import { ValidationTokenService } from 'src/validation-token/services/validation-token.service';
import { Repository } from 'typeorm';
import {
  CreateCertificateAndUserDto,
  CreateCertificateDto,
} from '../dto/create-certificate.dto';
import { DropdownCertificateDto } from '../dto/dropdown-certificate.dto';
import { UpdateCertificateDto } from '../dto/update-certificate.dto';
import { Certificate } from '../entities/certificate.entity';
import { City } from 'src/cities/entities/city.entity';
import { slugify } from 'src/common/helpers/slug.helpers';
import { ConfigService } from '@nestjs/config';
import { Qrcode } from 'src/qrcodes/entities/qrcode.entity';
import * as qr from 'qrcode';
import { formatDateYearMonthDay } from 'src/common/utils/date';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
    @InjectRepository(Cemetery)
    private readonly cemeteryRepository: Repository<Cemetery>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Qrcode)
    private readonly qrcodeRepository: Repository<Qrcode>,

    private readonly mailerService: MailerService,
    private readonly validationTokenService: ValidationTokenService,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
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
      .leftJoinAndSelect('certificate.profileImage', 'file')
      .leftJoinAndSelect('certificate.cemetery', 'cemetery');

    return paginate<Certificate>(query, options);
  }

  /**
   * Find all certificates by Cementery id
   * @param cemeteryId - The cemeteryId of the certificates to find
   * @returns The found certificates
   *
   */
  getCertificatesBycemeteryId(cemeteryId: number): Promise<Certificate[]> {
    return this.certificateRepository.find({
      where: { cemeteryId, deletedAt: null },
      relations: ['user', 'qrcode', 'getherings', 'tributes', 'profileImage'],
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
        'profileImage',
      ],
    });

    if (!certificate) {
      throw new NotFoundException();
    }

    return certificate;
  }

  /**
   * Find all countries options
   * @returns The countries options
   *
   */
  async getCertificateOptions(): Promise<DropdownCertificateDto[]> {
    const data = await this.certificateRepository.find({
      where: { deletedAt: null },
      select: [
        'certificateId',
        'firstName',
        'lastName',
        'slug',
        'profileImage',
      ],
      relations: ['profileImage'],
    });

    return data.map((obj) => {
      return {
        image: obj?.profileImage?.url || '',
        name: `${obj.firstName} ${obj.lastName}`,
        slug: obj.slug,
        certificateId: obj.certificateId,
      };
    });
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
        'profileImage',
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
      where: { cemeteryId: updateCertificateDto.cemeteryId },
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
      cemeteryId,
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
      where: { cemeteryId, deletedAt: null },
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
      cemeteryId,
      biography,
      dateOfBirth,
      dateOfDeath,
      firstName,
      lastName,
      placeOfBirth,
      placeOfDeath,
      timeOfDeath,
      emailNewUser,
      firstNameNewUser,
      lastNameNewUser,
      phoneNewUser,
      addressOrder,
    } = createCertificateDto;

    let user = null;

    const exist = await this.userRepository.findOne({
      where: { email: emailNewUser },
    });

    if (!exist) {
      const newUser = this.userRepository.create({
        email: emailNewUser,
        firstName: firstNameNewUser,
        lastName: lastNameNewUser,
        phoneNumber: phoneNewUser,
        isEmailConfirmed: true,
      });

      const role = await this.roleRepository.findOne({
        where: { name: ClientRoleEnums.USER },
      });

      newUser.roles = [role];

      user = await this.userRepository.save(newUser);
    } else {
      user = exist;
    }

    if (!user) {
      throw new NotFoundException();
    }

    const cemetery = await this.cemeteryRepository.findOne({
      where: { cemeteryId, deletedAt: null },
    });

    if (!cemetery) {
      throw new NotFoundException();
    }

    const city = await this.cityRepository.findOne({
      where: { cityId: cemetery.cityId, deletedAt: null },
    });

    if (!city) {
      throw new NotFoundException();
    }

    const slug = await this.generateSlug(
      `${firstName} ${lastName} ${formatDateYearMonthDay(dateOfBirth)} ${formatDateYearMonthDay(dateOfDeath)}`,
    );

    const newCertificate = this.certificateRepository.create({
      biography,
      slug,
      dateOfBirth,
      dateOfDeath,
      firstName,
      lastName,
      location: cemetery.location,
      placeOfBirth,
      placeOfDeath,
      timeOfDeath,
      cemetery,
      user,
    });

    const certificate = await this.certificateRepository.save(newCertificate);

    if (!exist) {
      const token = this.jwtService.sign({
        email: emailNewUser,
        certificateId: certificate.certificateId,
        slug: certificate.slug,
      });

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
    }

    const newOrder = this.orderRepository.create({
      address: addressOrder,
      firstName: firstNameNewUser,
      lastName: lastNameNewUser,
      city,
      phoneNumber: phoneNewUser,
      certificate,
      user,
    });

    await this.orderRepository.save(newOrder);

    const fullUrl = `${this.configService.get('APP_DOMAIN')}/docs/${certificate.slug}`;

    const qrData = await qr.toDataURL(fullUrl);

    const qrcode = this.qrcodeRepository.create({
      value: qrData,
      certificate,
    });

    await this.qrcodeRepository.save(qrcode);

    return certificate;
  }

  /**
   * Create a slug for sertificate
   * @param slug - The data to create a new slug
   * @returns slug
   *
   */
  private generateSlug = async (slug: string) => {
    let count = 2;
    let nextSlug = slugify({ text: slug });
    while (
      await this.certificateRepository.findOne({ where: { slug: nextSlug } })
    ) {
      nextSlug = slugify({ text: `${slug}-${count}` });
      count++;
    }
    return nextSlug;
  };
}
