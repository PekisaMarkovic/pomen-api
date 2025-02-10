/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("module-alias/register");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const core_1 = __webpack_require__(2);
const guards_1 = __webpack_require__(8);
const mailer_module_1 = __webpack_require__(23);
const cemetery_module_1 = __webpack_require__(30);
const certificates_module_1 = __webpack_require__(66);
const auth_module_1 = __webpack_require__(82);
const city_module_1 = __webpack_require__(104);
const country_module_1 = __webpack_require__(111);
const file_module_1 = __webpack_require__(118);
const getherings_module_1 = __webpack_require__(126);
const order_module_1 = __webpack_require__(132);
const qrcode_module_1 = __webpack_require__(138);
const tributes_module_1 = __webpack_require__(141);
const users_module_1 = __webpack_require__(97);
const validation_token_module_1 = __webpack_require__(81);
const seeder_module_1 = __webpack_require__(147);
const contacts_module_1 = __webpack_require__(156);
const city_entity_1 = __webpack_require__(33);
const country_entity_1 = __webpack_require__(56);
const cementery_entity_1 = __webpack_require__(34);
const certificate_entity_1 = __webpack_require__(35);
const user_entity_1 = __webpack_require__(37);
const file_entity_1 = __webpack_require__(36);
const role_entity_1 = __webpack_require__(43);
const permission_entity_1 = __webpack_require__(38);
const order_entity_1 = __webpack_require__(44);
const gethering_entity_1 = __webpack_require__(52);
const tribute_entity_1 = __webpack_require__(54);
const qrcode_entity_1 = __webpack_require__(53);
const contact_entity_1 = __webpack_require__(163);
const validation_token_entity_1 = __webpack_require__(71);
const entities_1 = __webpack_require__(47);
const blogs_module_1 = __webpack_require__(164);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: Number(configService.get('DB_PORT')),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [
                        city_entity_1.City,
                        country_entity_1.Country,
                        cementery_entity_1.Cemetery,
                        certificate_entity_1.Certificate,
                        user_entity_1.User,
                        file_entity_1.File,
                        role_entity_1.Role,
                        permission_entity_1.Permission,
                        order_entity_1.Order,
                        gethering_entity_1.Gethering,
                        tribute_entity_1.Tribute,
                        qrcode_entity_1.Qrcode,
                        contact_entity_1.Contact,
                        validation_token_entity_1.ValidationToken,
                        entities_1.Blog,
                        entities_1.BlogContent,
                        entities_1.BlogText,
                    ],
                    synchronize: true,
                }),
            }),
            mailer_module_1.MailerModule,
            cemetery_module_1.CemeteryModule,
            certificates_module_1.CertificatesModule,
            auth_module_1.AuthModule,
            city_module_1.CityModule,
            country_module_1.CountryModule,
            file_module_1.FileModule,
            getherings_module_1.GetheringsModule,
            order_module_1.OrderModule,
            qrcode_module_1.QrcodeModule,
            tributes_module_1.TributesModule,
            users_module_1.UsersModule,
            validation_token_module_1.ValidationTokenModule,
            seeder_module_1.SeederModule,
            contacts_module_1.ContactsModule,
            blogs_module_1.BlogsModule,
        ],
        providers: [
            { provide: core_1.APP_GUARD, useClass: guards_1.JwtAuthGuard },
            { provide: core_1.APP_GUARD, useClass: guards_1.RolesGuard },
            { provide: core_1.APP_GUARD, useClass: guards_1.PermissionsGuard },
        ],
    })
], AppModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(5);
const core_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(10);
const public_decorator_1 = __webpack_require__(11);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(5);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(10);
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsGuard = void 0;
const common_1 = __webpack_require__(5);
const core_1 = __webpack_require__(2);
const decorators_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(18);
let PermissionsGuard = class PermissionsGuard {
    constructor(refector) {
        this.refector = refector;
    }
    canActivate(context) {
        const requiredClientPermissions = this.refector.getAllAndOverride(decorators_1.PERMISSIONS_METEDATA_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredClientPermissions || requiredClientPermissions.length === 0) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const userPermissions = (0, helpers_1.getClientPermissions)(req.user);
        return requiredClientPermissions.some((permission) => userPermissions.has(permission));
    }
};
exports.PermissionsGuard = PermissionsGuard;
exports.PermissionsGuard = PermissionsGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], PermissionsGuard);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(5);
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Permissions = exports.PERMISSIONS_METEDATA_KEY = void 0;
const common_1 = __webpack_require__(5);
exports.PERMISSIONS_METEDATA_KEY = 'permissions_decorator_key';
const Permissions = (...permissions) => (0, common_1.SetMetadata)(exports.PERMISSIONS_METEDATA_KEY, permissions);
exports.Permissions = Permissions;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_METEDATA_KEY = void 0;
const common_1 = __webpack_require__(5);
exports.ROLES_METEDATA_KEY = 'roles_decorator_key';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_METEDATA_KEY, roles);
exports.Roles = Roles;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userHasAnyRole = void 0;
exports.getClientPermissions = getClientPermissions;
function getClientPermissions(user) {
    const rolePermissions = new Set((user.roles ?? []).flatMap((role) => (role.permissions ?? []).map((permission) => permission.name)));
    const directPermissions = new Set((user.permissions ?? []).map((permission) => permission.name));
    return new Set([...rolePermissions, ...directPermissions]);
}
const userHasAnyRole = (user, roles) => {
    return user.roles?.some((role) => roles.includes(role.name));
};
exports.userHasAnyRole = userHasAnyRole;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointTransformer = void 0;
exports.pointTransformer = {
    to(value) {
        return `(${value.x}, ${value.y})`;
    },
    from(value) {
        return value;
    },
};


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.slugify = slugify;
function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function cleanUpString(text) {
    return removeDiacritics(text)
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
function truncateString(str, len) {
    if (str.length > len) {
        return str.substring(0, len);
    }
    return str;
}
function slugify({ text, truncate, }) {
    return cleanUpString(truncate ? truncateString(text, truncate) : text);
}


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(5);
const core_1 = __webpack_require__(2);
const decorators_1 = __webpack_require__(14);
let RolesGuard = class RolesGuard {
    constructor(refector) {
        this.refector = refector;
    }
    canActivate(context) {
        const requiredClientRoles = this.refector.getAllAndOverride(decorators_1.ROLES_METEDATA_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredClientRoles || requiredClientRoles.length === 0) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        return (user.roles ?? []).some((role) => requiredClientRoles.includes(role.name));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailerModule = void 0;
const common_1 = __webpack_require__(5);
const mailer_service_1 = __webpack_require__(24);
const mailer_controller_1 = __webpack_require__(28);
let MailerModule = class MailerModule {
};
exports.MailerModule = MailerModule;
exports.MailerModule = MailerModule = __decorate([
    (0, common_1.Module)({
        controllers: [mailer_controller_1.MailerController],
        exports: [mailer_service_1.MailerService],
        providers: [mailer_service_1.MailerService],
    })
], MailerModule);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailerService = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const nodemailer = __webpack_require__(25);
const fs_1 = __webpack_require__(26);
const path = __webpack_require__(27);
let MailerService = class MailerService {
    constructor(configService) {
        this.configService = configService;
    }
    mailTransport() {
        const transporeter = nodemailer.createTransport({
            host: this.configService.get('MAIL_HOST'),
            port: this.configService.get('MAIL_PORT'),
            auth: {
                user: this.configService.get('MAIL_USER'),
                pass: this.configService.get('MAIL_PASSWORD'),
            },
        });
        return transporeter;
    }
    replacePlaceholders(str, replacements) {
        return str.replace(/{(.*?)}/g, (_, key) => {
            return replacements[key] || '';
        });
    }
    async readHtmlTemplate(name) {
        try {
            const filePath = path.join(__dirname, '..', 'templates', name);
            const data = await fs_1.promises.readFile(filePath, 'utf-8');
            return data;
        }
        catch (error) {
            console.error('Error reading the file:', error);
            throw new Error('Could not read the HTML file');
        }
    }
    async sendMail(subject, recipients, template, data) {
        const htmlString = await this.readHtmlTemplate(template);
        const html = this.replacePlaceholders(htmlString, data);
        const transport = this.mailTransport();
        const options = {
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
        }
        catch (e) {
            console.log(e);
        }
    }
    async sendFirstTimeRegisterMail(dto) {
        const { data, recipients } = dto;
        try {
            const result = await this.sendMail('Pomen Registracija', recipients, 'first-time-register.html', {
                link: `${this.configService.get('APP_DASHBOARD')}/first-time-register/${data.token}`,
                current_year: `${new Date().getFullYear()}`,
            });
            return result;
        }
        catch {
            throw new common_1.HttpException('Failed to first time register email', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
};
exports.MailerService = MailerService;
exports.MailerService = MailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], MailerService);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailerController = void 0;
const common_1 = __webpack_require__(5);
const mailer_service_1 = __webpack_require__(24);
const decorators_1 = __webpack_require__(14);
const swagger_1 = __webpack_require__(3);
const smtp_transport_1 = __webpack_require__(29);
let MailerController = class MailerController {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendFirstTimeRegisterMail() {
        const dto = {
            data: { link: 'register-organization/new-token' },
            recipients: [
                { name: 'Petar Markovic', address: 'mark.petar.ovic@gmail.com' },
            ],
        };
        return await this.mailerService.sendFirstTimeRegisterMail(dto);
    }
};
exports.MailerController = MailerController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('test-register-organization'),
    (0, swagger_1.ApiOperation)({ summary: 'Send a first time registe4r email' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the city.',
        type: smtp_transport_1.default,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        description: 'Throw exception if email not send',
        type: common_1.HttpException,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MailerController.prototype, "sendFirstTimeRegisterMail", null);
exports.MailerController = MailerController = __decorate([
    (0, common_1.Controller)('mailer'),
    (0, swagger_1.ApiTags)('Mailer'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_service_1.MailerService !== "undefined" && mailer_service_1.MailerService) === "function" ? _a : Object])
], MailerController);


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("nodemailer/lib/smtp-transport");

/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CemeteryModule = void 0;
const common_1 = __webpack_require__(5);
const cementery_service_1 = __webpack_require__(31);
const city_entity_1 = __webpack_require__(33);
const typeorm_1 = __webpack_require__(7);
const cemetery_controller_1 = __webpack_require__(58);
const cementery_entity_1 = __webpack_require__(34);
let CemeteryModule = class CemeteryModule {
};
exports.CemeteryModule = CemeteryModule;
exports.CemeteryModule = CemeteryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([city_entity_1.City, cementery_entity_1.Cemetery])],
        controllers: [cemetery_controller_1.CemeteryController],
        providers: [cementery_service_1.CementeryService],
        exports: [cementery_service_1.CementeryService],
    })
], CemeteryModule);


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CementeryService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(32);
const city_entity_1 = __webpack_require__(33);
const cementery_entity_1 = __webpack_require__(34);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const helpers_1 = __webpack_require__(18);
let CementeryService = class CementeryService {
    constructor(cemeteryRepository, cityRepository) {
        this.cemeteryRepository = cemeteryRepository;
        this.cityRepository = cityRepository;
        this.generateSlug = async (slug) => {
            let count = 2;
            let nextSlug = (0, helpers_1.slugify)({ text: slug });
            while (await this.cemeteryRepository.findOne({ where: { slug: nextSlug } })) {
                nextSlug = (0, helpers_1.slugify)({ text: `${slug}-${count}` });
                count++;
            }
            return nextSlug;
        };
    }
    getCemeteries(options) {
        const query = this.cemeteryRepository
            .createQueryBuilder('cemetery')
            .where('cemetery.deleted_at IS NULL')
            .leftJoinAndSelect('cemetery.city', 'city');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    async getCemeteryById(cemeteryId) {
        const cemetery = await this.cemeteryRepository.findOne({
            where: { cemeteryId, deletedAt: null },
            relations: ['city'],
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        return cemetery;
    }
    async getCemeteriesByCityId(cityId) {
        return await this.cemeteryRepository.find({
            where: { cityId, deletedAt: null },
        });
    }
    async getCemeteryBySlug(slug) {
        const cemetery = await this.cemeteryRepository.findOne({
            where: { slug, deletedAt: null },
            relations: ['city'],
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        return cemetery;
    }
    getCemeteriesOptions() {
        return this.cemeteryRepository.find({
            where: { deletedAt: null },
            select: ['cityId', 'name', 'slug', 'cemeteryId'],
        });
    }
    async updateCemetery(cemeteryId, updateCemeteryDto) {
        const cemetery = await this.cemeteryRepository.findOne({
            where: { cemeteryId, deletedAt: null },
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        const city = await this.cityRepository.findOne({
            where: { cityId: updateCemeteryDto.cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        cemetery.city = city;
        Object.assign(cemetery, updateCemeteryDto);
        cemetery.updatedAt = new Date();
        return this.cemeteryRepository.save(cemetery);
    }
    async removeCemetery(cemeteryId) {
        const cemetery = await this.cemeteryRepository.findOne({
            where: { cemeteryId },
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        cemetery.deletedAt = new Date();
        return this.cemeteryRepository.save(cemetery);
    }
    async createCemetery(createCemeteryDto) {
        const { name, address, cityId, location } = createCemeteryDto;
        const city = await this.cityRepository.findOne({
            where: { cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        const slug = await this.generateSlug(`${name} ${city.name}`);
        const cementery = this.cemeteryRepository.create({
            name,
            address,
            location,
            slug,
            city,
        });
        return this.cemeteryRepository.save(cementery);
    }
};
exports.CementeryService = CementeryService;
exports.CementeryService = CementeryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cementery_entity_1.Cemetery)),
    __param(1, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], CementeryService);


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.City = void 0;
const swagger_1 = __webpack_require__(3);
const cementery_entity_1 = __webpack_require__(34);
const country_entity_1 = __webpack_require__(56);
const order_entity_1 = __webpack_require__(44);
const typeorm_1 = __webpack_require__(32);
let City = class City {
};
exports.City = City;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'city_id' }),
    __metadata("design:type", Number)
], City.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, length: 100 }),
    __metadata("design:type", String)
], City.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 5, unique: true }),
    __metadata("design:type", String)
], City.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], City.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], City.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], City.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'country_id' }),
    __metadata("design:type", Number)
], City.prototype, "countryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, type: () => country_entity_1.Country }),
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.cities),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", typeof (_d = typeof country_entity_1.Country !== "undefined" && country_entity_1.Country) === "function" ? _d : Object)
], City.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [cementery_entity_1.Cemetery] }),
    (0, typeorm_1.OneToMany)(() => cementery_entity_1.Cemetery, (cemetery) => cemetery.city),
    __metadata("design:type", Array)
], City.prototype, "cemeteries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [order_entity_1.Order] }),
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.city),
    __metadata("design:type", Array)
], City.prototype, "orders", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)({ name: 'cities' })
], City);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cemetery = void 0;
const swagger_1 = __webpack_require__(3);
const certificate_entity_1 = __webpack_require__(35);
const city_entity_1 = __webpack_require__(33);
const helpers_1 = __webpack_require__(18);
const typeorm_1 = __webpack_require__(32);
let Cemetery = class Cemetery {
};
exports.Cemetery = Cemetery;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'cemetery_id' }),
    __metadata("design:type", Number)
], Cemetery.prototype, "cemeteryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Cemetery.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, length: 100 }),
    __metadata("design:type", String)
], Cemetery.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Cemetery.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'point', transformer: helpers_1.pointTransformer }),
    __metadata("design:type", Object)
], Cemetery.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Cemetery.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Cemetery.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Cemetery.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'city_id' }),
    __metadata("design:type", Number)
], Cemetery.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => city_entity_1.City }),
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.cemeteries),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", typeof (_d = typeof city_entity_1.City !== "undefined" && city_entity_1.City) === "function" ? _d : Object)
], Cemetery.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [certificate_entity_1.Certificate] }),
    (0, typeorm_1.OneToMany)(() => certificate_entity_1.Certificate, (certificate) => certificate.cemetery),
    __metadata("design:type", Array)
], Cemetery.prototype, "certificates", void 0);
exports.Cemetery = Cemetery = __decorate([
    (0, typeorm_1.Entity)({ name: 'cemeteries' })
], Cemetery);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Certificate = void 0;
const swagger_1 = __webpack_require__(3);
const cementery_entity_1 = __webpack_require__(34);
const helpers_1 = __webpack_require__(18);
const file_entity_1 = __webpack_require__(36);
const gethering_entity_1 = __webpack_require__(52);
const order_entity_1 = __webpack_require__(44);
const qrcode_entity_1 = __webpack_require__(53);
const tribute_entity_1 = __webpack_require__(54);
const user_entity_1 = __webpack_require__(37);
const typeorm_1 = __webpack_require__(32);
let Certificate = class Certificate {
};
exports.Certificate = Certificate;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'certificate_id' }),
    __metadata("design:type", Number)
], Certificate.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, length: 255, nullable: true }),
    __metadata("design:type", String)
], Certificate.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'first_name' }),
    __metadata("design:type", String)
], Certificate.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'last_name' }),
    __metadata("design:type", String)
], Certificate.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'date_of_birth' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Certificate.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'date_of_death' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Certificate.prototype, "dateOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'place_of_birth' }),
    __metadata("design:type", String)
], Certificate.prototype, "placeOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'place_of_death' }),
    __metadata("design:type", String)
], Certificate.prototype, "placeOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'float4',
        nullable: true,
        name: 'time_of_death',
    }),
    __metadata("design:type", Number)
], Certificate.prototype, "timeOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Certificate.prototype, "biography", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'point', transformer: helpers_1.pointTransformer }),
    __metadata("design:type", Object)
], Certificate.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Certificate.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Certificate.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Certificate.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'cemetery_id' }),
    __metadata("design:type", Number)
], Certificate.prototype, "cemeteryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => cementery_entity_1.Cemetery }),
    (0, typeorm_1.ManyToOne)(() => cementery_entity_1.Cemetery, (cemetery) => cemetery.certificates),
    (0, typeorm_1.JoinColumn)({ name: 'cemetery_id' }),
    __metadata("design:type", typeof (_f = typeof cementery_entity_1.Cemetery !== "undefined" && cementery_entity_1.Cemetery) === "function" ? _f : Object)
], Certificate.prototype, "cemetery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Certificate.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.certificates),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object)
], Certificate.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [gethering_entity_1.Gethering] }),
    (0, typeorm_1.OneToMany)(() => gethering_entity_1.Gethering, (gethering) => gethering.certificate),
    __metadata("design:type", Array)
], Certificate.prototype, "getherings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [tribute_entity_1.Tribute] }),
    (0, typeorm_1.OneToMany)(() => tribute_entity_1.Tribute, (tribute) => tribute.certificate),
    __metadata("design:type", Array)
], Certificate.prototype, "tributes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => qrcode_entity_1.Qrcode }),
    (0, typeorm_1.OneToOne)(() => qrcode_entity_1.Qrcode, (qrcode) => qrcode.certificate),
    __metadata("design:type", typeof (_h = typeof qrcode_entity_1.Qrcode !== "undefined" && qrcode_entity_1.Qrcode) === "function" ? _h : Object)
], Certificate.prototype, "qrcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [order_entity_1.Order] }),
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.certificate),
    __metadata("design:type", Array)
], Certificate.prototype, "orders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'certificate_profile_id', nullable: true }),
    __metadata("design:type", Number)
], Certificate.prototype, "certificateProfileId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => file_entity_1.File }),
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.certificateProfile),
    (0, typeorm_1.JoinColumn)({ name: 'certificate_profile_id' }),
    __metadata("design:type", typeof (_j = typeof file_entity_1.File !== "undefined" && file_entity_1.File) === "function" ? _j : Object)
], Certificate.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [file_entity_1.File] }),
    (0, typeorm_1.OneToMany)(() => file_entity_1.File, (file) => file.certificate),
    __metadata("design:type", Array)
], Certificate.prototype, "files", void 0);
exports.Certificate = Certificate = __decorate([
    (0, typeorm_1.Entity)({ name: 'certificate' })
], Certificate);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.File = void 0;
const user_entity_1 = __webpack_require__(37);
const typeorm_1 = __webpack_require__(32);
const file_type_enum_1 = __webpack_require__(46);
const certificate_entity_1 = __webpack_require__(35);
const swagger_1 = __webpack_require__(3);
const entities_1 = __webpack_require__(47);
let File = class File {
};
exports.File = File;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'file_id' }),
    __metadata("design:type", Number)
], File.prototype, "fileId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'int4' }),
    __metadata("design:type", Number)
], File.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'public_id', nullable: true }),
    __metadata("design:type", String)
], File.prototype, "publicId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'int4' }),
    __metadata("design:type", Number)
], File.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: '255' }),
    __metadata("design:type", String)
], File.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: '10', nullable: true }),
    __metadata("design:type", String)
], File.prototype, "fileExtension", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: file_type_enum_1.FileTypeEnum,
        default: file_type_enum_1.FileTypeEnum.IMAGE,
    }),
    __metadata("design:type", typeof (_a = typeof file_type_enum_1.FileTypeEnum !== "undefined" && file_type_enum_1.FileTypeEnum) === "function" ? _a : Object)
], File.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User }),
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.profileImage),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], File.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => certificate_entity_1.Certificate }),
    (0, typeorm_1.OneToOne)(() => certificate_entity_1.Certificate, (certificate) => certificate.profileImage),
    __metadata("design:type", typeof (_c = typeof certificate_entity_1.Certificate !== "undefined" && certificate_entity_1.Certificate) === "function" ? _c : Object)
], File.prototype, "certificateProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => entities_1.BlogContent }),
    (0, typeorm_1.OneToOne)(() => entities_1.BlogContent, (blogContent) => blogContent.blogContentImage),
    __metadata("design:type", typeof (_d = typeof entities_1.BlogContent !== "undefined" && entities_1.BlogContent) === "function" ? _d : Object)
], File.prototype, "blogContentImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'certificate_id', nullable: true }),
    __metadata("design:type", Number)
], File.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => certificate_entity_1.Certificate }),
    (0, typeorm_1.ManyToOne)(() => certificate_entity_1.Certificate, (certificate) => certificate.files),
    (0, typeorm_1.JoinColumn)({ name: 'certificate_id' }),
    __metadata("design:type", typeof (_e = typeof certificate_entity_1.Certificate !== "undefined" && certificate_entity_1.Certificate) === "function" ? _e : Object)
], File.prototype, "certificate", void 0);
exports.File = File = __decorate([
    (0, typeorm_1.Entity)({ name: 'files' })
], File);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const swagger_1 = __webpack_require__(3);
const permission_entity_1 = __webpack_require__(38);
const role_entity_1 = __webpack_require__(43);
const certificate_entity_1 = __webpack_require__(35);
const file_entity_1 = __webpack_require__(36);
const order_entity_1 = __webpack_require__(44);
const typeorm_1 = __webpack_require__(32);
let User = class User {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'user_id' }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'first_name' }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'last_name' }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'profile_image_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "profileImageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => file_entity_1.File }),
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.user),
    (0, typeorm_1.JoinColumn)({ name: 'profile_image_id' }),
    __metadata("design:type", typeof (_a = typeof file_entity_1.File !== "undefined" && file_entity_1.File) === "function" ? _a : Object)
], User.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'date_of_birth', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'last_logged_in_at', nullable: true }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], User.prototype, "lastLoggedInAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, nullable: true, name: 'phone_number' }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, nullable: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'boolean', name: 'is_email_confirmed', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isEmailConfirmed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, (role) => role.users),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => order_entity_1.Order }),
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.user),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [certificate_entity_1.Certificate] }),
    (0, typeorm_1.OneToMany)(() => certificate_entity_1.Certificate, (certificate) => certificate.user),
    __metadata("design:type", Array)
], User.prototype, "certificates", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Permission = void 0;
const typeorm_1 = __webpack_require__(32);
const enums_1 = __webpack_require__(39);
let Permission = class Permission {
};
exports.Permission = Permission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        type: 'enum',
        enum: enums_1.ClientPermissionEnums,
        default: enums_1.ClientPermissionEnums.READ_USER,
    }),
    __metadata("design:type", typeof (_a = typeof enums_1.ClientPermissionEnums !== "undefined" && enums_1.ClientPermissionEnums) === "function" ? _a : Object)
], Permission.prototype, "name", void 0);
exports.Permission = Permission = __decorate([
    (0, typeorm_1.Entity)()
], Permission);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionEnums = void 0;
var ActionEnums;
(function (ActionEnums) {
    ActionEnums["MANAGE"] = "MANAGE";
    ActionEnums["CREATE"] = "CREATE";
    ActionEnums["READ"] = "READ";
    ActionEnums["UPDATE"] = "UPDATE";
    ActionEnums["DELETE"] = "DELETE";
    ActionEnums["UPDATE_OWN"] = "UPDATE_OWN";
})(ActionEnums || (exports.ActionEnums = ActionEnums = {}));


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientPermissionEnums = void 0;
var ClientPermissionEnums;
(function (ClientPermissionEnums) {
    ClientPermissionEnums["CRETE_USER"] = "permission.create.user";
    ClientPermissionEnums["READ_USER"] = "permission.read.user";
    ClientPermissionEnums["UPDATE_USER"] = "permission.update.user";
    ClientPermissionEnums["DELETE_USER"] = "permission.delete.user";
    ClientPermissionEnums["CREATE_ANNOUNCEMENT"] = "permission.create.announcement";
    ClientPermissionEnums["UPDATE_ANNOUNCEMENT"] = "permission.update.announcement";
})(ClientPermissionEnums || (exports.ClientPermissionEnums = ClientPermissionEnums = {}));


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientRoleEnums = void 0;
var ClientRoleEnums;
(function (ClientRoleEnums) {
    ClientRoleEnums["USER"] = "user";
    ClientRoleEnums["ADMIN"] = "admin";
    ClientRoleEnums["SUPER_ADMIN"] = "super.admin";
})(ClientRoleEnums || (exports.ClientRoleEnums = ClientRoleEnums = {}));


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
const typeorm_1 = __webpack_require__(32);
const user_entity_1 = __webpack_require__(37);
const permission_entity_1 = __webpack_require__(38);
const enums_1 = __webpack_require__(39);
let Role = class Role {
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        type: 'enum',
        enum: enums_1.ClientRoleEnums,
        default: enums_1.ClientRoleEnums.USER,
    }),
    __metadata("design:type", typeof (_a = typeof enums_1.ClientRoleEnums !== "undefined" && enums_1.ClientRoleEnums) === "function" ? _a : Object)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.roles),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Role.prototype, "permissions", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)()
], Role);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = void 0;
const typeorm_1 = __webpack_require__(32);
const order_status_enum_1 = __webpack_require__(45);
const city_entity_1 = __webpack_require__(33);
const user_entity_1 = __webpack_require__(37);
const certificate_entity_1 = __webpack_require__(35);
const swagger_1 = __webpack_require__(3);
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'order_id' }),
    __metadata("design:type", Number)
], Order.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'first_name' }),
    __metadata("design:type", String)
], Order.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100, name: 'last_name' }),
    __metadata("design:type", String)
], Order.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: order_status_enum_1.OrderStatusEnum,
        default: order_status_enum_1.OrderStatusEnum.PENDING,
    }),
    __metadata("design:type", typeof (_a = typeof order_status_enum_1.OrderStatusEnum !== "undefined" && order_status_enum_1.OrderStatusEnum) === "function" ? _a : Object)
], Order.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Order.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'city_id' }),
    __metadata("design:type", Number)
], Order.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => city_entity_1.City }),
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.cemeteries),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", typeof (_e = typeof city_entity_1.City !== "undefined" && city_entity_1.City) === "function" ? _e : Object)
], Order.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'certificate_id' }),
    __metadata("design:type", Number)
], Order.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => certificate_entity_1.Certificate }),
    (0, typeorm_1.ManyToOne)(() => certificate_entity_1.Certificate, (certificate) => certificate.orders),
    (0, typeorm_1.JoinColumn)({ name: 'certificate_id' }),
    __metadata("design:type", typeof (_f = typeof certificate_entity_1.Certificate !== "undefined" && certificate_entity_1.Certificate) === "function" ? _f : Object)
], Order.prototype, "certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.orders),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object)
], Order.prototype, "user", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: 'orders' })
], Order);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatusEnum = void 0;
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["FAILED"] = "failed";
    OrderStatusEnum["RETURNED"] = "returned";
    OrderStatusEnum["CANCELED"] = "canceled";
    OrderStatusEnum["DELIVERED"] = "delivered";
    OrderStatusEnum["IN_PROGRESS"] = "in.progress";
    OrderStatusEnum["PENDING"] = "pending";
})(OrderStatusEnum || (exports.OrderStatusEnum = OrderStatusEnum = {}));


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileTypeEnum = void 0;
var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["IMAGE"] = "image";
    FileTypeEnum["VIDEO"] = "video";
    FileTypeEnum["DOCUMENT"] = "document";
})(FileTypeEnum || (exports.FileTypeEnum = FileTypeEnum = {}));


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogContent = void 0;
const swagger_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(32);
const blog_text_entity_1 = __webpack_require__(49);
const blog_content_type_1 = __webpack_require__(50);
const blog_entity_1 = __webpack_require__(51);
const file_entity_1 = __webpack_require__(36);
let BlogContent = class BlogContent {
};
exports.BlogContent = BlogContent;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'blog_content_id' }),
    __metadata("design:type", Number)
], BlogContent.prototype, "blogContentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 0, type: 'int4' }),
    __metadata("design:type", Number)
], BlogContent.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BlogContent.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BlogContent.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BlogContent.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [blog_text_entity_1.BlogText] }),
    (0, typeorm_1.OneToMany)(() => blog_text_entity_1.BlogText, (blogText) => blogText.blogContent),
    __metadata("design:type", Array)
], BlogContent.prototype, "paragraphs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'blog_id' }),
    __metadata("design:type", Number)
], BlogContent.prototype, "blogId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => blog_entity_1.Blog }),
    (0, typeorm_1.ManyToOne)(() => blog_entity_1.Blog, (blog) => blog.contents),
    (0, typeorm_1.JoinColumn)({ name: 'blog_id' }),
    __metadata("design:type", typeof (_d = typeof blog_entity_1.Blog !== "undefined" && blog_entity_1.Blog) === "function" ? _d : Object)
], BlogContent.prototype, "blog", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: blog_content_type_1.BlogContentTypeEnum,
        default: blog_content_type_1.BlogContentTypeEnum.TITLE,
    }),
    __metadata("design:type", typeof (_e = typeof blog_content_type_1.BlogContentTypeEnum !== "undefined" && blog_content_type_1.BlogContentTypeEnum) === "function" ? _e : Object)
], BlogContent.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'blog_content_image_id', nullable: true }),
    __metadata("design:type", Number)
], BlogContent.prototype, "blogContentImageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => file_entity_1.File }),
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.blogContentImage),
    (0, typeorm_1.JoinColumn)({ name: 'blog_content_image_id' }),
    __metadata("design:type", typeof (_f = typeof file_entity_1.File !== "undefined" && file_entity_1.File) === "function" ? _f : Object)
], BlogContent.prototype, "blogContentImage", void 0);
exports.BlogContent = BlogContent = __decorate([
    (0, typeorm_1.Entity)({ name: 'blog-content' })
], BlogContent);


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogText = void 0;
const swagger_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(32);
const blog_content_entity_1 = __webpack_require__(48);
let BlogText = class BlogText {
};
exports.BlogText = BlogText;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'blog_text_id' }),
    __metadata("design:type", Number)
], BlogText.prototype, "blogTextId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], BlogText.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: 0, type: 'int4' }),
    __metadata("design:type", Number)
], BlogText.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'boolean', name: 'is_bold', default: false }),
    __metadata("design:type", Boolean)
], BlogText.prototype, "isBold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BlogText.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BlogText.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BlogText.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'blog_content_id' }),
    __metadata("design:type", Number)
], BlogText.prototype, "blogContentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => blog_content_entity_1.BlogContent }),
    (0, typeorm_1.ManyToOne)(() => blog_content_entity_1.BlogContent, (blogContent) => blogContent.paragraphs),
    (0, typeorm_1.JoinColumn)({ name: 'blog_content_id' }),
    __metadata("design:type", typeof (_d = typeof blog_content_entity_1.BlogContent !== "undefined" && blog_content_entity_1.BlogContent) === "function" ? _d : Object)
], BlogText.prototype, "blogContent", void 0);
exports.BlogText = BlogText = __decorate([
    (0, typeorm_1.Entity)({ name: 'blogs-text' })
], BlogText);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogContentTypeEnum = void 0;
var BlogContentTypeEnum;
(function (BlogContentTypeEnum) {
    BlogContentTypeEnum["TITLE"] = "title";
    BlogContentTypeEnum["TEXT_CENTER"] = "text.center";
    BlogContentTypeEnum["TEXT_LEFT"] = "text.left";
    BlogContentTypeEnum["TEXT_RIGHT"] = "text.right";
})(BlogContentTypeEnum || (exports.BlogContentTypeEnum = BlogContentTypeEnum = {}));


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Blog = void 0;
const swagger_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(32);
const blog_content_entity_1 = __webpack_require__(48);
let Blog = class Blog {
};
exports.Blog = Blog;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'blog_id' }),
    __metadata("design:type", Number)
], Blog.prototype, "blogId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, length: 100 }),
    __metadata("design:type", String)
], Blog.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Blog.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'published_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Blog.prototype, "publishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Blog.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Blog.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [blog_content_entity_1.BlogContent] }),
    (0, typeorm_1.OneToMany)(() => blog_content_entity_1.BlogContent, (content) => content.blog),
    __metadata("design:type", Array)
], Blog.prototype, "contents", void 0);
exports.Blog = Blog = __decorate([
    (0, typeorm_1.Entity)({ name: 'blogs' })
], Blog);


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gethering = void 0;
const swagger_1 = __webpack_require__(3);
const certificate_entity_1 = __webpack_require__(35);
const typeorm_1 = __webpack_require__(32);
let Gethering = class Gethering {
};
exports.Gethering = Gethering;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'gethering_id' }),
    __metadata("design:type", Number)
], Gethering.prototype, "getheringId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'gethering_date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Gethering.prototype, "getheringDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'float4', name: 'hour', nullable: true }),
    __metadata("design:type", Number)
], Gethering.prototype, "hour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Gethering.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Gethering.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Gethering.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Gethering.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'certificate_id' }),
    __metadata("design:type", Number)
], Gethering.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => certificate_entity_1.Certificate }),
    (0, typeorm_1.ManyToOne)(() => certificate_entity_1.Certificate, (certificate) => certificate.getherings),
    (0, typeorm_1.JoinColumn)({ name: 'certificate_id' }),
    __metadata("design:type", typeof (_e = typeof certificate_entity_1.Certificate !== "undefined" && certificate_entity_1.Certificate) === "function" ? _e : Object)
], Gethering.prototype, "certificate", void 0);
exports.Gethering = Gethering = __decorate([
    (0, typeorm_1.Entity)({ name: 'getherings' })
], Gethering);


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Qrcode = void 0;
const swagger_1 = __webpack_require__(3);
const certificate_entity_1 = __webpack_require__(35);
const typeorm_1 = __webpack_require__(32);
let Qrcode = class Qrcode {
};
exports.Qrcode = Qrcode;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'qrcode_id' }),
    __metadata("design:type", Number)
], Qrcode.prototype, "qrcodeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Qrcode.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Qrcode.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Qrcode.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Qrcode.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'certificate_id' }),
    __metadata("design:type", Number)
], Qrcode.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => certificate_entity_1.Certificate }),
    (0, typeorm_1.OneToOne)(() => certificate_entity_1.Certificate, (certificate) => certificate.qrcode),
    (0, typeorm_1.JoinColumn)({ name: 'certificate_id' }),
    __metadata("design:type", typeof (_d = typeof certificate_entity_1.Certificate !== "undefined" && certificate_entity_1.Certificate) === "function" ? _d : Object)
], Qrcode.prototype, "certificate", void 0);
exports.Qrcode = Qrcode = __decorate([
    (0, typeorm_1.Entity)({ name: 'qrcodes' })
], Qrcode);


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tribute = void 0;
const swagger_1 = __webpack_require__(3);
const certificate_entity_1 = __webpack_require__(35);
const typeorm_1 = __webpack_require__(32);
const tribute_status_enum_1 = __webpack_require__(55);
let Tribute = class Tribute {
};
exports.Tribute = Tribute;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'tribute_id' }),
    __metadata("design:type", Number)
], Tribute.prototype, "tributeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Tribute.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Tribute.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Tribute.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Tribute.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tribute_status_enum_1.TributeStatusEnum,
        default: tribute_status_enum_1.TributeStatusEnum.PENDING,
    }),
    __metadata("design:type", typeof (_a = typeof tribute_status_enum_1.TributeStatusEnum !== "undefined" && tribute_status_enum_1.TributeStatusEnum) === "function" ? _a : Object)
], Tribute.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Tribute.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Tribute.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Tribute.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'certificate_id' }),
    __metadata("design:type", Number)
], Tribute.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => certificate_entity_1.Certificate }),
    (0, typeorm_1.ManyToOne)(() => certificate_entity_1.Certificate, (certificate) => certificate.getherings),
    (0, typeorm_1.JoinColumn)({ name: 'certificate_id' }),
    __metadata("design:type", typeof (_e = typeof certificate_entity_1.Certificate !== "undefined" && certificate_entity_1.Certificate) === "function" ? _e : Object)
], Tribute.prototype, "certificate", void 0);
exports.Tribute = Tribute = __decorate([
    (0, typeorm_1.Entity)({ name: 'tributes' })
], Tribute);


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TributeStatusEnum = void 0;
var TributeStatusEnum;
(function (TributeStatusEnum) {
    TributeStatusEnum["ALLOWED"] = "allowed";
    TributeStatusEnum["DENIED"] = "denied";
    TributeStatusEnum["PENDING"] = "pending";
})(TributeStatusEnum || (exports.TributeStatusEnum = TributeStatusEnum = {}));


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Country = void 0;
const swagger_1 = __webpack_require__(3);
const city_entity_1 = __webpack_require__(33);
const typeorm_1 = __webpack_require__(32);
let Country = class Country {
};
exports.Country = Country;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'country_id' }),
    __metadata("design:type", Number)
], Country.prototype, "countryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true, length: 100 }),
    __metadata("design:type", String)
], Country.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 10, unique: false }),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 10, unique: true }),
    __metadata("design:type", String)
], Country.prototype, "iso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Country.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Country.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Country.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [city_entity_1.City] }),
    (0, typeorm_1.OneToMany)(() => city_entity_1.City, (city) => city.country),
    __metadata("design:type", Array)
], Country.prototype, "cities", void 0);
exports.Country = Country = __decorate([
    (0, typeorm_1.Entity)({ name: 'countries' })
], Country);


/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("nestjs-typeorm-paginate");

/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CemeteryController = void 0;
const common_1 = __webpack_require__(5);
const cementery_service_1 = __webpack_require__(31);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(59);
const cementery_entity_1 = __webpack_require__(34);
const decorators_1 = __webpack_require__(14);
let CemeteryController = class CemeteryController {
    constructor(cementeryService) {
        this.cementeryService = cementeryService;
    }
    createCemetery(createCemeteryDto) {
        return this.cementeryService.createCemetery(createCemeteryDto);
    }
    getCemeteries(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.cementeryService.getCemeteries({
            page,
            limit,
        });
    }
    getCemeteriesOptions() {
        return this.cementeryService.getCemeteriesOptions();
    }
    getCemeteryById(id) {
        return this.cementeryService.getCemeteryById(id);
    }
    getCemeteryBySlug(slug) {
        return this.cementeryService.getCemeteryBySlug(slug);
    }
    getCemeteriesByCityId(cityId) {
        return this.cementeryService.getCemeteriesByCityId(+cityId);
    }
    updateCemetery(id, updateCemeteryDto) {
        return this.cementeryService.updateCemetery(id, updateCemeteryDto);
    }
    removeCemetery(id) {
        return this.cementeryService.removeCemetery(id);
    }
};
exports.CemeteryController = CemeteryController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new cemetery' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The cemetery has been successfully created.',
        type: cementery_entity_1.Cemetery,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if city not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCemeteryDto !== "undefined" && dto_1.CreateCemeteryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "createCemetery", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cemeteries paginated.' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all cemeteries.',
        type: [cementery_entity_1.Cemetery],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "getCemeteries", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/options'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cemeteries options' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the options.',
        type: [dto_1.DropdownCementeryDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "getCemeteriesOptions", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a cemetery by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the cemetery.',
        type: cementery_entity_1.Cemetery,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if cemetery.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "getCemeteryById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a cemetery by slug' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the cemetery.',
        type: cementery_entity_1.Cemetery,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if cemetery.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "getCemeteryBySlug", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/cities/:cityId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cemeteries by city id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the cemetery.',
        type: [cementery_entity_1.Cemetery],
    }),
    __param(0, (0, common_1.Param)('cityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "getCemeteriesByCityId", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a cemeteries with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the cemetery.',
        type: cementery_entity_1.Cemetery,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if city/cemetery.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateCemeteryDto !== "undefined" && dto_1.UpdateCemeteryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "updateCemetery", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a cemeteries with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the cemetery.',
        type: cementery_entity_1.Cemetery,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if cemetery.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CemeteryController.prototype, "removeCemetery", null);
exports.CemeteryController = CemeteryController = __decorate([
    (0, common_1.Controller)('cemeteries'),
    (0, swagger_1.ApiTags)('Cemeteries'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof cementery_service_1.CementeryService !== "undefined" && cementery_service_1.CementeryService) === "function" ? _a : Object])
], CemeteryController);


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCemeteryDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(61);
const class_validator_1 = __webpack_require__(62);
const location_point_dto_1 = __webpack_require__(63);
class CreateCemeteryDto {
}
exports.CreateCemeteryDto = CreateCemeteryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCemeteryDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCemeteryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCemeteryDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: location_point_dto_1.LocationPointDto }),
    (0, class_transformer_1.Type)(() => location_point_dto_1.LocationPointDto),
    __metadata("design:type", typeof (_a = typeof location_point_dto_1.LocationPointDto !== "undefined" && location_point_dto_1.LocationPointDto) === "function" ? _a : Object)
], CreateCemeteryDto.prototype, "location", void 0);


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocationPointDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class LocationPointDto {
}
exports.LocationPointDto = LocationPointDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationPointDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationPointDto.prototype, "y", void 0);


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownCementeryDto = void 0;
const swagger_1 = __webpack_require__(3);
class DropdownCementeryDto {
}
exports.DropdownCementeryDto = DropdownCementeryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DropdownCementeryDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCementeryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCementeryDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DropdownCementeryDto.prototype, "cemeteryId", void 0);


/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCemeteryDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class UpdateCemeteryDto {
}
exports.UpdateCemeteryDto = UpdateCemeteryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCemeteryDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCemeteryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCemeteryDto.prototype, "address", void 0);


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificatesModule = void 0;
const common_1 = __webpack_require__(5);
const certificates_service_1 = __webpack_require__(67);
const certificates_controller_1 = __webpack_require__(75);
const typeorm_1 = __webpack_require__(7);
const certificate_entity_1 = __webpack_require__(35);
const cementery_entity_1 = __webpack_require__(34);
const role_entity_1 = __webpack_require__(43);
const user_entity_1 = __webpack_require__(37);
const mailer_module_1 = __webpack_require__(23);
const validation_token_module_1 = __webpack_require__(81);
const jwt_1 = __webpack_require__(68);
const config_1 = __webpack_require__(6);
const order_entity_1 = __webpack_require__(44);
const city_entity_1 = __webpack_require__(33);
const qrcode_entity_1 = __webpack_require__(53);
let CertificatesModule = class CertificatesModule {
};
exports.CertificatesModule = CertificatesModule;
exports.CertificatesModule = CertificatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                certificate_entity_1.Certificate,
                cementery_entity_1.Cemetery,
                user_entity_1.User,
                role_entity_1.Role,
                order_entity_1.Order,
                city_entity_1.City,
                qrcode_entity_1.Qrcode,
            ]),
            mailer_module_1.MailerModule,
            validation_token_module_1.ValidationTokenModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_EXPIRE') },
                }),
            }),
        ],
        controllers: [certificates_controller_1.CertificatesController],
        providers: [certificates_service_1.CertificatesService],
        exports: [certificates_service_1.CertificatesService],
    })
], CertificatesModule);


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificatesService = void 0;
const common_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(68);
const typeorm_1 = __webpack_require__(7);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const role_entity_1 = __webpack_require__(43);
const enums_1 = __webpack_require__(39);
const cementery_entity_1 = __webpack_require__(34);
const mailer_service_1 = __webpack_require__(24);
const order_entity_1 = __webpack_require__(44);
const user_entity_1 = __webpack_require__(37);
const VerificationTokenType_1 = __webpack_require__(69);
const validation_token_service_1 = __webpack_require__(70);
const typeorm_2 = __webpack_require__(32);
const certificate_entity_1 = __webpack_require__(35);
const city_entity_1 = __webpack_require__(33);
const helpers_1 = __webpack_require__(18);
const config_1 = __webpack_require__(6);
const qrcode_entity_1 = __webpack_require__(53);
const qr = __webpack_require__(72);
const utils_1 = __webpack_require__(73);
let CertificatesService = class CertificatesService {
    constructor(certificateRepository, cemeteryRepository, cityRepository, userRepository, roleRepository, orderRepository, qrcodeRepository, mailerService, validationTokenService, jwtService, configService) {
        this.certificateRepository = certificateRepository;
        this.cemeteryRepository = cemeteryRepository;
        this.cityRepository = cityRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.orderRepository = orderRepository;
        this.qrcodeRepository = qrcodeRepository;
        this.mailerService = mailerService;
        this.validationTokenService = validationTokenService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.generateSlug = async (slug) => {
            let count = 2;
            let nextSlug = (0, helpers_1.slugify)({ text: slug });
            while (await this.certificateRepository.findOne({ where: { slug: nextSlug } })) {
                nextSlug = (0, helpers_1.slugify)({ text: `${slug}-${count}` });
                count++;
            }
            return nextSlug;
        };
    }
    getCertificates(options) {
        const query = this.certificateRepository
            .createQueryBuilder('certificate')
            .where('certificate.deleted_at IS NULL')
            .leftJoinAndSelect('certificate.profileImage', 'file')
            .leftJoinAndSelect('certificate.cemetery', 'cemetery');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    getCertificatesSearch(options, firstName, lastName, cemeteryId, cityId) {
        const query = this.certificateRepository
            .createQueryBuilder('certificate')
            .where('certificate.deleted_at IS NULL')
            .andWhere('certificate.first_name ILIKE :firstName', {
            firstName: `%${firstName}%`,
        })
            .leftJoinAndSelect('certificate.profileImage', 'file')
            .leftJoinAndSelect('certificate.cemetery', 'cemetery');
        if (cemeteryId) {
            query.andWhere('cemetery.cemeteryId = :cemeteryId', { cemeteryId });
        }
        if (cityId) {
            query.andWhere('cemetery.cityId = :cityId', { cityId });
        }
        if (lastName) {
            query.andWhere('certificate.last_name ILIKE :lastName', {
                lastName: `%${lastName}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    getCertificatesBycemeteryId(cemeteryId) {
        return this.certificateRepository.find({
            where: { cemeteryId, deletedAt: null },
            relations: ['user', 'qrcode', 'getherings', 'tributes', 'profileImage'],
        });
    }
    async getCertificateById(certificateId) {
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
            throw new common_1.NotFoundException();
        }
        return certificate;
    }
    async getCertificateOptions() {
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
    async getCertificateBySlug(slug) {
        const certificate = await this.certificateRepository
            .createQueryBuilder('certificate')
            .leftJoinAndSelect('certificate.user', 'user')
            .leftJoinAndSelect('certificate.qrcode', 'qrcode')
            .leftJoinAndSelect('certificate.getherings', 'getherings')
            .leftJoinAndSelect('certificate.tributes', 'tributes')
            .leftJoinAndSelect('certificate.cemetery', 'cemetery')
            .leftJoinAndSelect('cemetery.city', 'city')
            .leftJoinAndSelect('certificate.profileImage', 'profileImage')
            .where('certificate.slug = :slug', { slug })
            .andWhere('certificate.deletedAt IS NULL')
            .getOne();
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        return certificate;
    }
    async updateCertificate(certificateId, updateCertificateDto) {
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId, deletedAt: null },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        const cemetery = await this.cemeteryRepository.findOne({
            where: { cemeteryId: updateCertificateDto.cemeteryId },
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        Object.assign(certificate, updateCertificateDto);
        certificate.cemetery = cemetery;
        certificate.updatedAt = new Date();
        return this.certificateRepository.save(certificate);
    }
    async createCertificate(createCertificateDto) {
        const { cemeteryId, biography, dateOfBirth, dateOfDeath, firstName, lastName, location, placeOfBirth, placeOfDeath, timeOfDeath, userId, } = createCertificateDto;
        const cemetery = await this.cemeteryRepository.findOne({
            where: { cemeteryId, deletedAt: null },
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        const user = await this.userRepository.findOne({
            where: { userId },
        });
        if (!user) {
            throw new common_1.NotFoundException();
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
    async removeCertificate(certificateId) {
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId, deletedAt: null },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        certificate.deletedAt = new Date();
        return this.certificateRepository.save(certificate);
    }
    async createCertificateAndUser(createCertificateDto) {
        const { cemeteryId, biography, dateOfBirth, dateOfDeath, firstName, lastName, placeOfBirth, placeOfDeath, timeOfDeath, emailNewUser, firstNameNewUser, lastNameNewUser, phoneNewUser, addressOrder, } = createCertificateDto;
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
                where: { name: enums_1.ClientRoleEnums.USER },
            });
            newUser.roles = [role];
            user = await this.userRepository.save(newUser);
        }
        else {
            user = exist;
        }
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const cemetery = await this.cemeteryRepository.findOne({
            where: { cemeteryId, deletedAt: null },
        });
        if (!cemetery) {
            throw new common_1.NotFoundException();
        }
        const city = await this.cityRepository.findOne({
            where: { cityId: cemetery.cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        const slug = await this.generateSlug(`${firstName} ${lastName} ${(0, utils_1.formatDateYearMonthDay)(dateOfBirth)} ${(0, utils_1.formatDateYearMonthDay)(dateOfDeath)}`);
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
                validationTokenType: VerificationTokenType_1.ValidationTokenTypeEnums.FIRST_TIME_REGISTER,
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
        const fullUrl = `${this.configService.get('APP_CLIENT')}/profil/${certificate.slug}`;
        const qrData = await qr.toDataURL(fullUrl);
        const qrcode = this.qrcodeRepository.create({
            value: qrData,
            certificate,
        });
        await this.qrcodeRepository.save(qrcode);
        return certificate;
    }
};
exports.CertificatesService = CertificatesService;
exports.CertificatesService = CertificatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __param(1, (0, typeorm_1.InjectRepository)(cementery_entity_1.Cemetery)),
    __param(2, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(4, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(5, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(6, (0, typeorm_1.InjectRepository)(qrcode_entity_1.Qrcode)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object, typeof (_h = typeof mailer_service_1.MailerService !== "undefined" && mailer_service_1.MailerService) === "function" ? _h : Object, typeof (_j = typeof validation_token_service_1.ValidationTokenService !== "undefined" && validation_token_service_1.ValidationTokenService) === "function" ? _j : Object, typeof (_k = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _k : Object, typeof (_l = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _l : Object])
], CertificatesService);


/***/ }),
/* 68 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationTokenTypeEnums = void 0;
var ValidationTokenTypeEnums;
(function (ValidationTokenTypeEnums) {
    ValidationTokenTypeEnums["REFRESH"] = "refresh";
    ValidationTokenTypeEnums["FIRST_TIME_REGISTER"] = "first.time.register";
})(ValidationTokenTypeEnums || (exports.ValidationTokenTypeEnums = ValidationTokenTypeEnums = {}));


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationTokenService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(32);
const validation_token_entity_1 = __webpack_require__(71);
const VerificationTokenType_1 = __webpack_require__(69);
let ValidationTokenService = class ValidationTokenService {
    constructor(validationRepository) {
        this.validationRepository = validationRepository;
    }
    async createValidationToken(createValidationToken) {
        let expirationDate = new Date().getTime();
        switch (createValidationToken.validationTokenType) {
            case VerificationTokenType_1.ValidationTokenTypeEnums.FIRST_TIME_REGISTER:
                expirationDate = expirationDate + 48 * 60 * 1000;
                break;
            default:
                expirationDate = expirationDate + 3 * 60 * 1000;
                break;
        }
        const token = this.validationRepository.create({
            ...createValidationToken,
            expirationDate,
        });
        return this.validationRepository.save(token);
    }
    getValidationTokens() {
        return this.validationRepository.find();
    }
    async getValidationTokenById(validationTokenId) {
        return this.validationRepository.findOne({ where: { validationTokenId } });
    }
    getRefreshTokenByEmail(email) {
        return this.validationRepository.findOne({
            where: { email, validationTokenType: VerificationTokenType_1.ValidationTokenTypeEnums.REFRESH },
        });
    }
    async removeValidationTokenById(validationTokenId) {
        const token = await this.validationRepository.findOne({
            where: { validationTokenId },
        });
        if (!token) {
            throw new common_1.NotFoundException();
        }
        return this.validationRepository.remove(token);
    }
    async removeRefreshTokenByEmail(email) {
        const tokens = await this.validationRepository.findBy({
            email,
            validationTokenType: VerificationTokenType_1.ValidationTokenTypeEnums.REFRESH,
        });
        if (!tokens) {
            throw new common_1.NotFoundException();
        }
        return this.validationRepository.remove(tokens);
    }
    async removeFirstTimeRegisterTokenByEmail(email) {
        const tokens = await this.validationRepository.findBy({
            email,
            validationTokenType: VerificationTokenType_1.ValidationTokenTypeEnums.FIRST_TIME_REGISTER,
        });
        if (!tokens) {
            throw new common_1.NotFoundException();
        }
        return this.validationRepository.remove(tokens);
    }
};
exports.ValidationTokenService = ValidationTokenService;
exports.ValidationTokenService = ValidationTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(validation_token_entity_1.ValidationToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ValidationTokenService);


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationToken = void 0;
const typeorm_1 = __webpack_require__(32);
const VerificationTokenType_1 = __webpack_require__(69);
const swagger_1 = __webpack_require__(3);
let ValidationToken = class ValidationToken {
};
exports.ValidationToken = ValidationToken;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'validation_token_id' }),
    __metadata("design:type", Number)
], ValidationToken.prototype, "validationTokenId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ValidationToken.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValidationToken.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'bigint', name: 'expiration_date', nullable: true }),
    __metadata("design:type", Number)
], ValidationToken.prototype, "expirationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: VerificationTokenType_1.ValidationTokenTypeEnums,
        default: VerificationTokenType_1.ValidationTokenTypeEnums.REFRESH,
        name: 'validation_token_type',
    }),
    __metadata("design:type", typeof (_a = typeof VerificationTokenType_1.ValidationTokenTypeEnums !== "undefined" && VerificationTokenType_1.ValidationTokenTypeEnums) === "function" ? _a : Object)
], ValidationToken.prototype, "validationTokenType", void 0);
exports.ValidationToken = ValidationToken = __decorate([
    (0, typeorm_1.Entity)('validation_tokens')
], ValidationToken);


/***/ }),
/* 72 */
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatDateYearMonthDay = formatDateYearMonthDay;
function formatDateYearMonthDay(input) {
    let date;
    if (input instanceof Date) {
        date = input;
    }
    else if (typeof input === 'string' || typeof input === 'number') {
        date = new Date(input);
    }
    else {
        throw new Error('Invalid input type. Expected Date, string, or number.');
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificatesController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(76);
const certificate_entity_1 = __webpack_require__(35);
const certificates_service_1 = __webpack_require__(67);
const decorators_1 = __webpack_require__(14);
let CertificatesController = class CertificatesController {
    constructor(certificatesService) {
        this.certificatesService = certificatesService;
    }
    createCertificate(createCertificateDto) {
        return this.certificatesService.createCertificate(createCertificateDto);
    }
    createCertificateAndUser(createCertificateAndUserDto) {
        return this.certificatesService.createCertificateAndUser(createCertificateAndUserDto);
    }
    getCertificates(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.certificatesService.getCertificates({
            page,
            limit,
        });
    }
    getCertificatesSearch({ limit, page, ...restSearchCertificateDto }) {
        return this.certificatesService.getCertificatesSearch({
            page,
            limit,
        }, restSearchCertificateDto.firstName, restSearchCertificateDto.lastName, restSearchCertificateDto.cemeteryId, restSearchCertificateDto.cityId);
    }
    getCertificateOptions() {
        return this.certificatesService.getCertificateOptions();
    }
    getCertificateById(id) {
        return this.certificatesService.getCertificateById(id);
    }
    getCertificateBySlug(slug) {
        return this.certificatesService.getCertificateBySlug(slug);
    }
    getCertificatesBycemeteryId(cemeteryId) {
        return this.certificatesService.getCertificatesBycemeteryId(cemeteryId);
    }
    updateCertificate(id, updateCertificateDto) {
        return this.certificatesService.updateCertificate(id, updateCertificateDto);
    }
    removeCertificate(id) {
        return this.certificatesService.removeCertificate(id);
    }
};
exports.CertificatesController = CertificatesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new certificate' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The certificate has been successfully created.',
        type: certificate_entity_1.Certificate,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if user/cemetery is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCertificateDto !== "undefined" && dto_1.CreateCertificateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "createCertificate", null);
__decorate([
    (0, common_1.Post)('/new-user'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new certificate' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The certificate has been successfully created.',
        type: certificate_entity_1.Certificate,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if user/cemetery is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateCertificateAndUserDto !== "undefined" && dto_1.CreateCertificateAndUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "createCertificateAndUser", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all certificates' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all certificates.',
        type: [certificate_entity_1.Certificate],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getCertificates", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('/search'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all certificates' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all certificates.',
        type: [certificate_entity_1.Certificate],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.SearchCertificateDto !== "undefined" && dto_1.SearchCertificateDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getCertificatesSearch", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/options'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all certificate options' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the options.',
        type: [dto_1.DropdownCertificateDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getCertificateOptions", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a certificate by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the certificate.',
        type: certificate_entity_1.Certificate,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getCertificateById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a certificate by slug' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the certificate.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getCertificateBySlug", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/cemeteries/:cemeteryId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cemeteries by cementery id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: [certificate_entity_1.Certificate],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('cemeteryId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getCertificatesBycemeteryId", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a certificate with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the certificate.',
        type: certificate_entity_1.Certificate,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate/cemetery is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof dto_1.UpdateCertificateDto !== "undefined" && dto_1.UpdateCertificateDto) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "updateCertificate", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a certificate with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the certificate.',
        type: certificate_entity_1.Certificate,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "removeCertificate", null);
exports.CertificatesController = CertificatesController = __decorate([
    (0, common_1.Controller)('certificates'),
    (0, swagger_1.ApiTags)('Certificates'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof certificates_service_1.CertificatesService !== "undefined" && certificates_service_1.CertificatesService) === "function" ? _a : Object])
], CertificatesController);


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCertificateAndUserDto = exports.CreateCertificateDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(61);
const class_validator_1 = __webpack_require__(62);
const location_point_dto_1 = __webpack_require__(63);
class CreateCertificateDto {
}
exports.CreateCertificateDto = CreateCertificateDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateCertificateDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateCertificateDto.prototype, "dateOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateDto.prototype, "placeOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateDto.prototype, "placeOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCertificateDto.prototype, "timeOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateDto.prototype, "biography", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: location_point_dto_1.LocationPointDto }),
    (0, class_transformer_1.Type)(() => location_point_dto_1.LocationPointDto),
    __metadata("design:type", typeof (_c = typeof location_point_dto_1.LocationPointDto !== "undefined" && location_point_dto_1.LocationPointDto) === "function" ? _c : Object)
], CreateCertificateDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCertificateDto.prototype, "cemeteryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCertificateDto.prototype, "userId", void 0);
class CreateCertificateAndUserDto {
}
exports.CreateCertificateAndUserDto = CreateCertificateAndUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "phoneNewUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "firstNameNewUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "lastNameNewUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "emailNewUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "addressOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateCertificateAndUserDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CreateCertificateAndUserDto.prototype, "dateOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "placeOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "placeOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCertificateAndUserDto.prototype, "timeOfDeath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCertificateAndUserDto.prototype, "biography", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCertificateAndUserDto.prototype, "cemeteryId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCertificateAndUserDto.prototype, "cityId", void 0);


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownCertificateDto = void 0;
const swagger_1 = __webpack_require__(3);
class DropdownCertificateDto {
}
exports.DropdownCertificateDto = DropdownCertificateDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DropdownCertificateDto.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCertificateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCertificateDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCertificateDto.prototype, "image", void 0);


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchCertificateDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class SearchCertificateDto {
}
exports.SearchCertificateDto = SearchCertificateDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchCertificateDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchCertificateDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchCertificateDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchCertificateDto.prototype, "cemeteryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchCertificateDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchCertificateDto.prototype, "lastName", void 0);


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCertificateDto = void 0;
const class_transformer_1 = __webpack_require__(61);
const class_validator_1 = __webpack_require__(62);
class UpdateCertificateDto {
}
exports.UpdateCertificateDto = UpdateCertificateDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCertificateDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCertificateDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateCertificateDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateCertificateDto.prototype, "dateOfDeath", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCertificateDto.prototype, "placeOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCertificateDto.prototype, "placeOfDeath", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCertificateDto.prototype, "timeOfDeath", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCertificateDto.prototype, "biography", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCertificateDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCertificateDto.prototype, "cemeteryId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCertificateDto.prototype, "cityId", void 0);


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationTokenModule = void 0;
const common_1 = __webpack_require__(5);
const validation_token_service_1 = __webpack_require__(70);
const typeorm_1 = __webpack_require__(7);
const validation_token_entity_1 = __webpack_require__(71);
let ValidationTokenModule = class ValidationTokenModule {
};
exports.ValidationTokenModule = ValidationTokenModule;
exports.ValidationTokenModule = ValidationTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([validation_token_entity_1.ValidationToken])],
        providers: [validation_token_service_1.ValidationTokenService],
        exports: [validation_token_service_1.ValidationTokenService],
    })
], ValidationTokenModule);


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(83);
const auth_controller_1 = __webpack_require__(86);
const users_module_1 = __webpack_require__(97);
const config_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(68);
const strategies_1 = __webpack_require__(99);
const validation_token_module_1 = __webpack_require__(81);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, strategies_1.LocalStrategy, strategies_1.JwtStrategy],
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_EXPIRE') },
                }),
            }),
            users_module_1.UsersModule,
            validation_token_module_1.ValidationTokenModule,
        ],
    })
], AuthModule);


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(5);
const bcrypt = __webpack_require__(84);
const users_service_1 = __webpack_require__(85);
const jwt_1 = __webpack_require__(68);
const validation_token_service_1 = __webpack_require__(70);
const VerificationTokenType_1 = __webpack_require__(69);
const config_1 = __webpack_require__(6);
let AuthService = class AuthService {
    constructor(usersService, jwtService, validationTokenService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.validationTokenService = validationTokenService;
        this.configService = configService;
        this.generateAccessToken = (user) => {
            return this.jwtService.sign({
                email: user.email,
                sub: user.userId,
                roles: user.roles || [],
                profileImage: user.profileImage || null,
                firstName: user.firstName,
                lastName: user.lastName,
                expires: new Date().getTime() + 3600000,
            });
        };
    }
    async validateUser({ email, password, }) {
        const user = await this.usersService.getUserByEmailForLogIn(email);
        if (!user) {
            return null;
        }
        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return null;
            }
        }
        catch {
            return null;
        }
        delete user.password;
        return user;
    }
    async login(userDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        await this.validationTokenService.removeRefreshTokenByEmail(user.email);
        return this.generateTokenByEmail(user.email);
    }
    async updateFirstTimeRegisterUser(dto) {
        const isTokenValid = await await this.jwtService.verifyAsync(dto.token);
        if (!isTokenValid) {
            throw new common_1.UnauthorizedException();
        }
        const toUpdate = await this.usersService.getUserByEmail(dto.email);
        if (!toUpdate) {
            throw new common_1.NotFoundException();
        }
        await this.usersService.updateFirstTimeRegisterUser(dto);
        return this.generateTokenByEmail(toUpdate.email);
    }
    async isUserTokenValid(token) {
        try {
            this.jwtService.verifyAsync(token);
            return true;
        }
        catch {
            return false;
        }
    }
    logout(email) {
        this.validationTokenService.removeRefreshTokenByEmail(email);
    }
    async refreshToken(refreshToken) {
        const payload = this.jwtService.decode(refreshToken);
        const user = await this.usersService.getUserByEmail(payload.email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const dbToken = await this.validationTokenService.getRefreshTokenByEmail(user.email);
        if (!dbToken) {
            throw new common_1.UnauthorizedException('Refresh token not found');
        }
        if (Number(dbToken.expirationDate) < new Date().getTime()) {
            throw new common_1.UnauthorizedException('Refresh token expired');
        }
        await this.validationTokenService.removeRefreshTokenByEmail(dbToken.email);
        return this.generateTokenByEmail(user.email);
    }
    async generateTokenByEmail(email) {
        const user = await this.usersService.getUserByEmail(email);
        const newAccessToken = this.generateAccessToken(user);
        const { token, ...rest } = await this.validationTokenService.createValidationToken({
            email: user.email,
            token: newAccessToken,
            validationTokenType: VerificationTokenType_1.ValidationTokenTypeEnums.REFRESH,
        });
        return {
            access_token: token,
            refresh_token: this.jwtService.sign(rest, {
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRE'),
            }),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof validation_token_service_1.ValidationTokenService !== "undefined" && validation_token_service_1.ValidationTokenService) === "function" ? _c : Object, typeof (_d = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _d : Object])
], AuthService);


/***/ }),
/* 84 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(68);
const typeorm_1 = __webpack_require__(7);
const bcrypt = __webpack_require__(84);
const role_entity_1 = __webpack_require__(43);
const mailer_service_1 = __webpack_require__(24);
const VerificationTokenType_1 = __webpack_require__(69);
const validation_token_service_1 = __webpack_require__(70);
const typeorm_2 = __webpack_require__(32);
const user_entity_1 = __webpack_require__(37);
let UsersService = class UsersService {
    constructor(userRepository, roleRepository, jwtService, mailerService, validationTokenService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.jwtService = jwtService;
        this.mailerService = mailerService;
        this.validationTokenService = validationTokenService;
    }
    async registerUser(dto, options) {
        const { email, firstName, lastName, password, phone } = dto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await this.userRepository.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber: phone,
        });
        if (options.roles) {
            const roles = [];
            for (const role of options.roles) {
                const foundRole = await this.roleRepository.findOne({
                    where: { name: role },
                });
                if (foundRole) {
                    roles.push(foundRole);
                }
            }
            user.roles = roles;
        }
        const newUser = await this.userRepository.save(user);
        delete newUser.password;
        return newUser;
    }
    getUsers() {
        const query = this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles', 'role')
            .leftJoinAndSelect('role.permissions', 'rolePermission')
            .leftJoinAndSelect('user.permissions', 'permission');
        return query.getMany();
    }
    async isFirstTimeRegisterTokenValid(token) {
        try {
            await this.jwtService.verifyAsync(token);
            return true;
        }
        catch {
            return false;
        }
    }
    async resendFirstTimeRegisterDto(dto) {
        const token = this.jwtService.sign({ email: dto.email });
        await this.validationTokenService.removeFirstTimeRegisterTokenByEmail(dto.email);
        await this.validationTokenService.createValidationToken({
            email: dto.email,
            token,
            validationTokenType: VerificationTokenType_1.ValidationTokenTypeEnums.FIRST_TIME_REGISTER,
        });
        await this.mailerService.sendFirstTimeRegisterMail({
            data: { token },
            recipients: [{ name: '', address: dto.email }],
        });
        return {
            registration_token: token,
        };
    }
    async getUserByUserId(userId) {
        const query = this.userRepository
            .createQueryBuilder('user')
            .where('user.userId = :userId', { userId })
            .leftJoinAndSelect('user.roles', 'role')
            .leftJoinAndSelect('role.permissions', 'rolePermission')
            .leftJoinAndSelect('user.permissions', 'permission');
        const user = await query.getOne();
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    getUserByEmail(email) {
        const query = this.userRepository
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .leftJoinAndSelect('user.roles', 'role')
            .leftJoinAndSelect('role.permissions', 'rolePermission')
            .leftJoinAndSelect('user.permissions', 'permission');
        return query.getOne();
    }
    getUserByEmailForLogIn(email) {
        const query = this.userRepository
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .leftJoinAndSelect('user.roles', 'role')
            .leftJoinAndSelect('role.permissions', 'rolePermission')
            .leftJoinAndSelect('user.permissions', 'permission');
        query.addSelect('user.password');
        return query.getOne();
    }
    async updateUserRolesAndPermissions(userId, dto) {
        const user = await this.userRepository.findOne({ where: { userId } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const { roles, permissions } = dto;
        user.roles = roles ?? user.roles;
        user.permissions = permissions ?? user.permissions;
        return await this.userRepository.save(user);
    }
    async updateFirstTimeRegisterUser(dto) {
        const user = await this.userRepository.findOne({
            where: { email: dto.email },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        Object.assign(user, dto);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(dto.password, salt);
        user.password = hashedPassword;
        user.isEmailConfirmed = true;
        return await this.userRepository.save(user);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async createUser(dto, options) {
        const { email, password, firstName, lastName, phone } = dto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = password !== null ? await bcrypt.hash(password, salt) : null;
        const user = this.userRepository.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phoneNumber: phone,
            isEmailConfirmed: !!options?.isEmailConfirmed,
        });
        if (options?.roles) {
            const roles = [];
            for (const role of options.roles) {
                const foundRole = await this.roleRepository.findOne({
                    where: { name: role },
                });
                roles.push(foundRole);
            }
            user.roles = roles;
        }
        const newUser = await this.userRepository.save(user);
        delete newUser.password;
        return newUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof mailer_service_1.MailerService !== "undefined" && mailer_service_1.MailerService) === "function" ? _d : Object, typeof (_e = typeof validation_token_service_1.ValidationTokenService !== "undefined" && validation_token_service_1.ValidationTokenService) === "function" ? _e : Object])
], UsersService);


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(5);
const dto_1 = __webpack_require__(87);
const user_entity_1 = __webpack_require__(37);
const dto_2 = __webpack_require__(95);
const users_service_1 = __webpack_require__(85);
const decorators_1 = __webpack_require__(14);
const enums_1 = __webpack_require__(39);
const guards_1 = __webpack_require__(8);
const auth_service_1 = __webpack_require__(83);
const swagger_1 = __webpack_require__(3);
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(body) {
        return this.authService.login(body);
    }
    async refreshToken(body) {
        const { refreshToken } = body;
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        return await this.authService.refreshToken(refreshToken);
    }
    register(body) {
        return this.usersService.registerUser(body, {
            roles: [enums_1.ClientRoleEnums.USER],
        });
    }
    updateFirstTimeRegisterUser(dto) {
        return this.authService.updateFirstTimeRegisterUser(dto);
    }
    isUserTokenValid(request) {
        try {
            const authHeader = request.headers['authorization'];
            const token = authHeader.split(' ')[1];
            return this.authService.isUserTokenValid(token || '');
        }
        catch {
            return false;
        }
    }
    async logout(user) {
        this.authService.logout(user.email);
        return true;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: 'Log in in user in our platform, generate token and refresh token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the tokens.',
        type: dto_2.TokenDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if user is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.LoginUserDto !== "undefined" && dto_1.LoginUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiOperation)({ summary: 'Generates new token and new refresh token.' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the tokens.',
        type: dto_2.TokenDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if user/token is not found.',
        type: common_1.NotFoundException,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Throws exception if user/token is not found.',
        type: common_1.UnauthorizedException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.RefreshTokenDto !== "undefined" && dto_1.RefreshTokenDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register new user to platform' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Return the user.',
        type: user_entity_1.User,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.RegisterUserDto !== "undefined" && dto_1.RegisterUserDto) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Patch)('update-fist-time-register'),
    (0, swagger_1.ApiOperation)({
        summary: 'Log in in user in our platform, generate token and refresh token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the tokens.',
        type: dto_2.TokenDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if user is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_1.UpdateFirstTimeRegisterUserDto !== "undefined" && dto_1.UpdateFirstTimeRegisterUserDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateFirstTimeRegisterUser", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('is-user-token-valid'),
    (0, swagger_1.ApiOperation)({ summary: 'Check if token is still valid' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the boolean.',
        type: Boolean,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Request !== "undefined" && Request) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "isUserTokenValid", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: 'Logout user, remove all refresh tokens' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the boolean.',
        type: Boolean,
    }),
    __param(0, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], AuthController);


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(89), exports);
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(91), exports);
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindUsersDto = void 0;
class FindUsersDto {
}
exports.FindUsersDto = FindUsersDto;


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterUserOptionsDto = exports.RegisterUserDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class RegisterUserDto {
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "phone", void 0);
class RegisterUserOptionsDto {
}
exports.RegisterUserOptionsDto = RegisterUserOptionsDto;


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class RefreshTokenDto {
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRolesAndPermisssionsDto = void 0;
const mapped_types_1 = __webpack_require__(93);
const register_user_dto_1 = __webpack_require__(90);
const swagger_1 = __webpack_require__(3);
class UserRolesAndPermisssionsDto extends (0, mapped_types_1.PartialType)(register_user_dto_1.RegisterUserDto) {
}
exports.UserRolesAndPermisssionsDto = UserRolesAndPermisssionsDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UserRolesAndPermisssionsDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UserRolesAndPermisssionsDto.prototype, "permissions", void 0);


/***/ }),
/* 93 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FirstTimeRegisterDto = exports.CheckFirstTimeRegisterTokenValidDto = exports.UpdateFirstTimeRegisterUserDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class UpdateFirstTimeRegisterUserDto {
}
exports.UpdateFirstTimeRegisterUserDto = UpdateFirstTimeRegisterUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFirstTimeRegisterUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFirstTimeRegisterUserDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFirstTimeRegisterUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateFirstTimeRegisterUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFirstTimeRegisterUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFirstTimeRegisterUserDto.prototype, "phone", void 0);
class CheckFirstTimeRegisterTokenValidDto {
}
exports.CheckFirstTimeRegisterTokenValidDto = CheckFirstTimeRegisterTokenValidDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckFirstTimeRegisterTokenValidDto.prototype, "token", void 0);
class FirstTimeRegisterDto {
}
exports.FirstTimeRegisterDto = FirstTimeRegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], FirstTimeRegisterDto.prototype, "email", void 0);


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenDto = exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class TokenDto {
}
exports.TokenDto = TokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TokenDto.prototype, "access_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TokenDto.prototype, "refresh_token", void 0);


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(5);
const users_service_1 = __webpack_require__(85);
const users_controller_1 = __webpack_require__(98);
const typeorm_1 = __webpack_require__(7);
const user_entity_1 = __webpack_require__(37);
const role_entity_1 = __webpack_require__(43);
const jwt_1 = __webpack_require__(68);
const config_1 = __webpack_require__(6);
const validation_token_module_1 = __webpack_require__(81);
const mailer_module_1 = __webpack_require__(23);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, role_entity_1.Role]),
            validation_token_module_1.ValidationTokenModule,
            mailer_module_1.MailerModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_EXPIRE') },
                }),
            }),
        ],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService],
        providers: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const decorators_1 = __webpack_require__(14);
const enums_1 = __webpack_require__(39);
const dto_1 = __webpack_require__(87);
const user_entity_1 = __webpack_require__(37);
const users_service_1 = __webpack_require__(85);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUsers() {
        return this.usersService.getUsers();
    }
    isFirstTimeRegisterTokenValid(dto) {
        return this.usersService.isFirstTimeRegisterTokenValid(dto.token);
    }
    resendFirstTimeRegisterDto(dto) {
        return this.usersService.resendFirstTimeRegisterDto(dto);
    }
    getProfile(user) {
        return user;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Roles)(enums_1.ClientRoleEnums.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get a users' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the user.',
        type: [user_entity_1.User],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('/is-fist-time-register-token-valid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CheckFirstTimeRegisterTokenValidDto !== "undefined" && dto_1.CheckFirstTimeRegisterTokenValidDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "isFirstTimeRegisterTokenValid", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('resend-first-time-registration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.FirstTimeRegisterDto !== "undefined" && dto_1.FirstTimeRegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "resendFirstTimeRegisterDto", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get currently logged user' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the user.',
        type: user_entity_1.User,
    }),
    __param(0, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(100), exports);
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(10);
const passport_jwt_1 = __webpack_require__(101);
const users_service_1 = __webpack_require__(85);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService, usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
        this.usersService = usersService;
    }
    async validate(payload) {
        const user = await this.usersService.getUserByEmail(payload.email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),
/* 101 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(10);
const passport_local_1 = __webpack_require__(103);
const auth_service_1 = __webpack_require__(83);
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser({ email, password });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password. Please try again.');
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityModule = void 0;
const common_1 = __webpack_require__(5);
const city_service_1 = __webpack_require__(105);
const city_controller_1 = __webpack_require__(106);
const typeorm_1 = __webpack_require__(7);
const city_entity_1 = __webpack_require__(33);
const country_entity_1 = __webpack_require__(56);
let CityModule = class CityModule {
};
exports.CityModule = CityModule;
exports.CityModule = CityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([city_entity_1.City, country_entity_1.Country])],
        controllers: [city_controller_1.CityController],
        providers: [city_service_1.CityService],
        exports: [city_service_1.CityService],
    })
], CityModule);


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const helpers_1 = __webpack_require__(18);
const country_entity_1 = __webpack_require__(56);
const typeorm_2 = __webpack_require__(32);
const city_entity_1 = __webpack_require__(33);
let CityService = class CityService {
    constructor(cityRepository, countryRepository) {
        this.cityRepository = cityRepository;
        this.countryRepository = countryRepository;
        this.generateSlug = async (slug) => {
            let count = 2;
            let nextSlug = (0, helpers_1.slugify)({ text: slug });
            while (await this.cityRepository.findOne({ where: { slug: nextSlug } })) {
                nextSlug = (0, helpers_1.slugify)({ text: `${slug}-${count}` });
                count++;
            }
            return nextSlug;
        };
    }
    getCities(options) {
        const query = this.cityRepository
            .createQueryBuilder('city')
            .where('city.deleted_at IS NULL')
            .leftJoinAndSelect('city.country', 'country');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    async getCityById(cityId) {
        const city = await this.cityRepository.findOne({
            where: { cityId, deletedAt: null },
            relations: ['country'],
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        return city;
    }
    getCitiesByCountryId(countryId) {
        return this.cityRepository.find({ where: { countryId, deletedAt: null } });
    }
    async getCityBySlug(slug) {
        const city = await this.cityRepository.findOne({
            where: { slug, deletedAt: null },
            relations: ['country'],
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        return city;
    }
    getCitiesOptions() {
        return this.cityRepository.find({
            where: { deletedAt: null },
            select: ['cityId', 'name', 'slug', 'countryId'],
        });
    }
    async updateCity(cityId, updateCityDto) {
        const city = await this.cityRepository.findOne({
            where: { cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        const country = await this.countryRepository.findOne({
            where: { countryId: updateCityDto.countryId, deletedAt: null },
        });
        if (!country) {
            throw new common_1.NotFoundException();
        }
        city.country = country;
        Object.assign(city, updateCityDto);
        city.updatedAt = new Date();
        return this.cityRepository.save(city);
    }
    async removeCity(cityId) {
        const city = await this.cityRepository.findOne({
            where: { cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        city.deletedAt = new Date();
        return this.cityRepository.save(city);
    }
    async createCity(createCityDto) {
        const { name, code, countryId } = createCityDto;
        const country = await this.countryRepository.findOne({
            where: { countryId, deletedAt: null },
        });
        if (!country) {
            throw new common_1.NotFoundException();
        }
        const slug = await this.generateSlug(name);
        const city = this.cityRepository.create({
            name,
            code,
            slug,
            country,
        });
        return this.cityRepository.save(city);
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __param(1, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], CityService);


/***/ }),
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(107);
const city_entity_1 = __webpack_require__(33);
const city_service_1 = __webpack_require__(105);
const decorators_1 = __webpack_require__(14);
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    createCity(createCityDto) {
        return this.cityService.createCity(createCityDto);
    }
    getCities(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.cityService.getCities({
            page,
            limit,
        });
    }
    getCitiesOptions() {
        return this.cityService.getCitiesOptions();
    }
    getCityById(id) {
        return this.cityService.getCityById(id);
    }
    getCityBySlug(slug) {
        return this.cityService.getCityBySlug(slug);
    }
    getCitiesByCountryId(countryId) {
        return this.cityService.getCitiesByCountryId(countryId);
    }
    updateCity(id, updateCityDto) {
        return this.cityService.updateCity(id, updateCityDto);
    }
    removeCity(id) {
        return this.cityService.removeCity(id);
    }
};
exports.CityController = CityController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new city' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The city has been successfully created.',
        type: city_entity_1.City,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCityDto !== "undefined" && dto_1.CreateCityDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "createCity", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cities paginated' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all cities.',
        type: [city_entity_1.City],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCities", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/options'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cities options' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the options.',
        type: [dto_1.DropdownCityDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCitiesOptions", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a city by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the city.',
        type: city_entity_1.City,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the city is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCityById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a city by slug' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the city.',
        type: city_entity_1.City,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the city is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCityBySlug", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/countries/:countryId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cities by county id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the cities.',
        type: [city_entity_1.City],
    }),
    __param(0, (0, common_1.Param)('countryId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCitiesByCountryId", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a city with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the city.',
        type: city_entity_1.City,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the city/country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateCityDto !== "undefined" && dto_1.UpdateCityDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "updateCity", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a city with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the city.',
        type: city_entity_1.City,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the city is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "removeCity", null);
exports.CityController = CityController = __decorate([
    (0, common_1.Controller)('cities'),
    (0, swagger_1.ApiTags)('Cities'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof city_service_1.CityService !== "undefined" && city_service_1.CityService) === "function" ? _a : Object])
], CityController);


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(108), exports);
__exportStar(__webpack_require__(109), exports);
__exportStar(__webpack_require__(110), exports);


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCityDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class CreateCityDto {
}
exports.CreateCityDto = CreateCityDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCityDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCityDto.prototype, "countryId", void 0);


/***/ }),
/* 109 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownCityDto = void 0;
const swagger_1 = __webpack_require__(3);
class DropdownCityDto {
}
exports.DropdownCityDto = DropdownCityDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DropdownCityDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCityDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DropdownCityDto.prototype, "countryId", void 0);


/***/ }),
/* 110 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCityDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class UpdateCityDto {
}
exports.UpdateCityDto = UpdateCityDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCityDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCityDto.prototype, "countryId", void 0);


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryModule = void 0;
const common_1 = __webpack_require__(5);
const country_service_1 = __webpack_require__(112);
const country_controller_1 = __webpack_require__(113);
const typeorm_1 = __webpack_require__(7);
const country_entity_1 = __webpack_require__(56);
let CountryModule = class CountryModule {
};
exports.CountryModule = CountryModule;
exports.CountryModule = CountryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([country_entity_1.Country])],
        controllers: [country_controller_1.CountryController],
        providers: [country_service_1.CountryService],
        exports: [country_service_1.CountryService],
    })
], CountryModule);


/***/ }),
/* 112 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryService = void 0;
const common_1 = __webpack_require__(5);
const helpers_1 = __webpack_require__(18);
const typeorm_1 = __webpack_require__(7);
const country_entity_1 = __webpack_require__(56);
const typeorm_2 = __webpack_require__(32);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
let CountryService = class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
        this.generateSlug = async (slug) => {
            let count = 2;
            let nextSlug = (0, helpers_1.slugify)({ text: slug });
            while (await this.countryRepository.findOne({ where: { slug: nextSlug } })) {
                nextSlug = (0, helpers_1.slugify)({ text: `${slug}-${count}` });
                count++;
            }
            return nextSlug;
        };
    }
    getCountries(options) {
        const query = this.countryRepository
            .createQueryBuilder('country')
            .where('country.deleted_at IS NULL');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    async getCountryById(countryId) {
        const country = await this.countryRepository.findOne({
            where: { countryId, deletedAt: null },
        });
        if (!country) {
            throw new common_1.NotFoundException();
        }
        return country;
    }
    async getCountryBySlug(slug) {
        const country = await this.countryRepository.findOne({
            where: { slug, deletedAt: null },
        });
        if (!country) {
            throw new common_1.NotFoundException();
        }
        return country;
    }
    getCountriesOptions() {
        return this.countryRepository.find({
            where: { deletedAt: null },
            select: ['countryId', 'name', 'slug'],
        });
    }
    async updateCountry(countryId, updateCountryDto) {
        const country = await this.countryRepository.findOne({
            where: { countryId, deletedAt: null },
        });
        if (!country) {
            throw new common_1.NotFoundException();
        }
        Object.assign(country, updateCountryDto);
        country.updatedAt = new Date();
        return this.countryRepository.save(country);
    }
    async removeCountry(countryId) {
        const country = await this.countryRepository.findOne({
            where: { countryId },
        });
        if (!country) {
            throw new common_1.NotFoundException();
        }
        country.deletedAt = new Date();
        return this.countryRepository.save(country);
    }
    async createCountry(createCountryDto) {
        const { name, code, iso } = createCountryDto;
        const slug = await this.generateSlug(name);
        const country = this.countryRepository.create({
            iso,
            name,
            code,
            slug,
        });
        return this.countryRepository.save(country);
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CountryService);


/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const decorators_1 = __webpack_require__(14);
const dto_1 = __webpack_require__(114);
const country_entity_1 = __webpack_require__(56);
const country_service_1 = __webpack_require__(112);
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    createCountry(createCountryDto) {
        return this.countryService.createCountry(createCountryDto);
    }
    getCountries(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.countryService.getCountries({
            page,
            limit,
        });
    }
    getCountriesOptions() {
        return this.countryService.getCountriesOptions();
    }
    getCountryById(id) {
        return this.countryService.getCountryById(id);
    }
    getCountryBySlug(slug) {
        return this.countryService.getCountryBySlug(slug);
    }
    updateCountry(id, updateCountryDto) {
        return this.countryService.updateCountry(id, updateCountryDto);
    }
    removeCountry(id) {
        return this.countryService.removeCountry(id);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new country' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The country has been successfully created.',
        type: country_entity_1.Country,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCountryDto !== "undefined" && dto_1.CreateCountryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "createCountry", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all countries paginated' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all countries.',
        type: [country_entity_1.Country],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "getCountries", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/options'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all countries options' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the options.',
        type: [dto_1.DropdownCountryDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "getCountriesOptions", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the country.',
        type: country_entity_1.Country,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "getCountryById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country by slug' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the country.',
        type: country_entity_1.Country,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "getCountryBySlug", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a country with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the country.',
        type: country_entity_1.Country,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateCountryDto !== "undefined" && dto_1.UpdateCountryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "updateCountry", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a country with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the country.',
        type: country_entity_1.Country,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "removeCountry", null);
exports.CountryController = CountryController = __decorate([
    (0, common_1.Controller)('countries'),
    (0, swagger_1.ApiTags)('Countries'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof country_service_1.CountryService !== "undefined" && country_service_1.CountryService) === "function" ? _a : Object])
], CountryController);


/***/ }),
/* 114 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(115), exports);
__exportStar(__webpack_require__(116), exports);
__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 115 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCountryDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class CreateCountryDto {
}
exports.CreateCountryDto = CreateCountryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "iso", void 0);


/***/ }),
/* 116 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownCountryDto = void 0;
const swagger_1 = __webpack_require__(3);
class DropdownCountryDto {
}
exports.DropdownCountryDto = DropdownCountryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DropdownCountryDto.prototype, "countryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCountryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DropdownCountryDto.prototype, "code", void 0);


/***/ }),
/* 117 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCountryDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class UpdateCountryDto {
}
exports.UpdateCountryDto = UpdateCountryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCountryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCountryDto.prototype, "code", void 0);


/***/ }),
/* 118 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileModule = void 0;
const common_1 = __webpack_require__(5);
const file_service_1 = __webpack_require__(119);
const file_controller_1 = __webpack_require__(120);
const typeorm_1 = __webpack_require__(7);
const file_entity_1 = __webpack_require__(36);
const certificate_entity_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(47);
let FileModule = class FileModule {
};
exports.FileModule = FileModule;
exports.FileModule = FileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([file_entity_1.File, certificate_entity_1.Certificate, entities_1.BlogContent])],
        controllers: [file_controller_1.FileController],
        providers: [file_service_1.FileService],
        exports: [file_service_1.FileService],
    })
], FileModule);


/***/ }),
/* 119 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileService = void 0;
const common_1 = __webpack_require__(5);
const file_entity_1 = __webpack_require__(36);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(32);
const certificate_entity_1 = __webpack_require__(35);
const file_type_enum_1 = __webpack_require__(46);
const entities_1 = __webpack_require__(47);
let FileService = class FileService {
    constructor(fileRepository, certificateRepository, blogContentRepository) {
        this.fileRepository = fileRepository;
        this.certificateRepository = certificateRepository;
        this.blogContentRepository = blogContentRepository;
    }
    async createCertificateProfile(certificateId, createImageDto) {
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        if (certificate.certificateProfileId) {
            await this.certificateRepository.save({
                ...certificate,
                certificateProfileId: null,
                profileImage: null,
            });
            await this.removeImage(certificate.certificateProfileId);
        }
        const profile = this.fileRepository.create({
            ...createImageDto,
            certificateProfile: certificate,
        });
        await this.fileRepository.save(profile);
    }
    async createBlogContentImage(blogContentId, createImageDto) {
        const blogContent = await this.blogContentRepository.findOne({
            where: { blogContentId },
        });
        if (!blogContent) {
            throw new common_1.NotFoundException();
        }
        if (blogContent.blogContentImage) {
            await this.blogContentRepository.save({
                ...blogContent,
                blogContentImage: null,
                blogContentImageId: null,
            });
            await this.removeImage(blogContent.blogContentId);
        }
        const blogContentImage = this.fileRepository.create({
            ...createImageDto,
            blogContentImage: blogContent,
        });
        await this.fileRepository.save(blogContentImage);
    }
    async createCertificateFiles(certificateId, filesToAdd, filesToRemove) {
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        const uploadImagePromises = filesToAdd.map((image) => {
            const img = this.fileRepository.create({
                ...image,
                certificate,
            });
            return this.fileRepository.save(img);
        });
        await Promise.all(uploadImagePromises);
        const filesRemoved = filesToRemove.map(async (id) => {
            const image = await this.fileRepository.findOne({
                where: {
                    fileId: id,
                },
            });
            return this.fileRepository.remove(image);
        });
        await Promise.all(filesRemoved);
    }
    async getFileById(fileId) {
        const file = await this.fileRepository.findOne({ where: { fileId } });
        if (!file) {
            throw new common_1.NotFoundException();
        }
        return file;
    }
    async getFileByPublicId(publicId) {
        const file = await this.fileRepository.findOne({ where: { publicId } });
        if (!file) {
            throw new common_1.NotFoundException();
        }
        return file;
    }
    async getFilesByCertificateId(certificateId) {
        const certification = await this.certificateRepository.findOne({
            where: { certificateId },
        });
        if (!certification) {
            throw new common_1.NotFoundException();
        }
        const certificateFiles = await this.fileRepository.find({
            where: { certificateId },
        });
        let profile = null;
        const images = [];
        const videos = [];
        const document = [];
        certificateFiles.forEach((file) => {
            if (file.fileId === certification.certificateProfileId) {
                profile = file;
            }
            else {
                switch (file.type) {
                    case file_type_enum_1.FileTypeEnum.DOCUMENT:
                        document.push(file);
                        break;
                    case file_type_enum_1.FileTypeEnum.IMAGE:
                        images.push(file);
                        break;
                    case file_type_enum_1.FileTypeEnum.VIDEO:
                        videos.push(file);
                        break;
                }
            }
        });
        return {
            profile,
            images,
            videos,
            document,
        };
    }
    async getFilesBySlug(slug) {
        const certification = await this.certificateRepository.findOne({
            where: { slug },
        });
        if (!certification) {
            throw new common_1.NotFoundException();
        }
        const certificateFiles = await this.fileRepository.find({
            where: { certificateId: certification.certificateId },
        });
        let profile = null;
        const images = [];
        const videos = [];
        const document = [];
        certificateFiles.forEach((file) => {
            if (file.fileId === certification.certificateProfileId) {
                profile = file;
            }
            else {
                switch (file.type) {
                    case file_type_enum_1.FileTypeEnum.DOCUMENT:
                        document.push(file);
                        break;
                    case file_type_enum_1.FileTypeEnum.IMAGE:
                        images.push(file);
                        break;
                    case file_type_enum_1.FileTypeEnum.VIDEO:
                        videos.push(file);
                        break;
                }
            }
        });
        return {
            profile,
            images,
            videos,
            document,
        };
    }
    async removeImage(fileId) {
        const file = await this.fileRepository.findOne({
            where: { fileId },
        });
        if (!file) {
            throw new common_1.NotFoundException();
        }
        return this.fileRepository.remove(file);
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __param(1, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.BlogContent)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], FileService);


/***/ }),
/* 120 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileController = void 0;
const common_1 = __webpack_require__(5);
const file_service_1 = __webpack_require__(119);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(121);
const cloudinary = __webpack_require__(123);
const platform_express_1 = __webpack_require__(124);
const config_1 = __webpack_require__(6);
const map_1 = __webpack_require__(125);
const file_type_enum_1 = __webpack_require__(46);
const decorators_1 = __webpack_require__(14);
let FileController = class FileController {
    constructor(fileService, configService) {
        this.fileService = fileService;
        this.configService = configService;
        cloudinary.v2.config({
            cloud_name: this.configService.get('VITE_CLOUDINARY_NAME'),
            api_key: this.configService.get('VITE_CLOUDINARY_KEY'),
            api_secret: this.configService.get('VITE_CLOUDINARY_SECRET'),
        });
    }
    async uploadSingleImage(body) {
        const resource_type = body.type === file_type_enum_1.FileTypeEnum.DOCUMENT ? 'raw' : body.type;
        try {
            const uploaded = await cloudinary.v2.uploader.upload(body.file, {
                resource_type,
            });
            return (0, map_1.mappCloundleryToFile)(uploaded, body.type);
        }
        catch (e) {
            return e;
        }
    }
    async uploadMultyImage(body) {
        const resource_type = body.type === file_type_enum_1.FileTypeEnum.DOCUMENT ? 'raw' : body.type;
        const uploadPromises = body.files.map((file) => {
            return cloudinary.v2.uploader.upload(file, { resource_type });
        });
        const uploadResults = await Promise.all(uploadPromises);
        return uploadResults.map((image) => (0, map_1.mappCloundleryToFile)(image, body.type));
    }
    createCertificateProfile(certificateId, createFileDto) {
        return this.fileService.createCertificateProfile(certificateId, createFileDto);
    }
    createBlogContentImage(blogContentId, createFileDto) {
        return this.fileService.createBlogContentImage(blogContentId, createFileDto);
    }
    createCertificateFiles(certificateId, createFileBodyDto) {
        return this.fileService.createCertificateFiles(certificateId, createFileBodyDto.filesToAdd, createFileBodyDto.filesToRemove);
    }
    getFileByPublicId(publicId) {
        return this.fileService.getFileByPublicId(publicId);
    }
    getFileById(id) {
        return this.fileService.getFileById(id);
    }
    getFilesByCertificateId(certificateId) {
        return this.fileService.getFilesByCertificateId(certificateId);
    }
    getFilesBySlug(slug) {
        return this.fileService.getFilesBySlug(slug);
    }
    removeImage(id) {
        return this.fileService.removeImage(id);
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.Post)('single'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateColudnleryDto !== "undefined" && dto_1.CreateColudnleryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadSingleImage", null);
__decorate([
    (0, common_1.Post)('multy'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('files')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.CreateMultyCludnleryDto !== "undefined" && dto_1.CreateMultyCludnleryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadMultyImage", null);
__decorate([
    (0, common_1.Post)('/certificate-profile/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new file' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The file has been successfully created.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the certification is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('certificateId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof dto_1.CreateFileDto !== "undefined" && dto_1.CreateFileDto) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "createCertificateProfile", null);
__decorate([
    (0, common_1.Post)('/blog-content/:blogContentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new file' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The file has been successfully created.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the blog content is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('blogContentId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof dto_1.CreateFileDto !== "undefined" && dto_1.CreateFileDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "createBlogContentImage", null);
__decorate([
    (0, common_1.Patch)('/certificate-files/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create new files' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'The files has been successfully created/removed.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the certification is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('certificateId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_g = typeof dto_1.CreateFileBodyDto !== "undefined" && dto_1.CreateFileBodyDto) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "createCertificateFiles", null);
__decorate([
    (0, common_1.Get)('/public/:publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a file by public id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the file.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the file is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getFileByPublicId", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a file by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the file.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the file is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getFileById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('certificates/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a files by certificate id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the files.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the file is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('certificateId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getFilesByCertificateId", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('certificates/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a files by slug' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the files.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the file is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getFilesBySlug", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a files by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the files.',
        type: File,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the file is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "removeImage", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Controller)('files'),
    (0, swagger_1.ApiTags)('Files'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], FileController);


/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFileBodyDto = exports.CreateFileDto = exports.CreateMultyCludnleryDto = exports.CreateColudnleryDto = void 0;
const class_validator_1 = __webpack_require__(62);
const file_type_enum_1 = __webpack_require__(46);
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(61);
class CreateColudnleryDto {
}
exports.CreateColudnleryDto = CreateColudnleryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateColudnleryDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: file_type_enum_1.FileTypeEnum,
        enumName: 'FileTypeEnum',
        description: 'Type must be one of the following: image, videos, files',
    }),
    (0, class_validator_1.IsEnum)(file_type_enum_1.FileTypeEnum, {
        message: 'Status must be one of the following: image, video, document',
    }),
    __metadata("design:type", typeof (_a = typeof file_type_enum_1.FileTypeEnum !== "undefined" && file_type_enum_1.FileTypeEnum) === "function" ? _a : Object)
], CreateColudnleryDto.prototype, "type", void 0);
class CreateMultyCludnleryDto {
}
exports.CreateMultyCludnleryDto = CreateMultyCludnleryDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateMultyCludnleryDto.prototype, "files", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: file_type_enum_1.FileTypeEnum,
        enumName: 'FileTypeEnum',
        description: 'Type must be one of the following: image, videos, files',
    }),
    (0, class_validator_1.IsEnum)(file_type_enum_1.FileTypeEnum, {
        message: 'Status must be one of the following: image, video, document',
    }),
    __metadata("design:type", typeof (_b = typeof file_type_enum_1.FileTypeEnum !== "undefined" && file_type_enum_1.FileTypeEnum) === "function" ? _b : Object)
], CreateMultyCludnleryDto.prototype, "type", void 0);
class CreateFileDto {
}
exports.CreateFileDto = CreateFileDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFileDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFileDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFileDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFileDto.prototype, "publicId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFileDto.prototype, "fileExtension", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: file_type_enum_1.FileTypeEnum,
        enumName: 'FileTypeEnum',
        description: 'Type must be one of the following: image, videos, files',
    }),
    (0, class_validator_1.IsEnum)(file_type_enum_1.FileTypeEnum, {
        message: 'Status must be one of the following: image, video, document',
    }),
    __metadata("design:type", typeof (_c = typeof file_type_enum_1.FileTypeEnum !== "undefined" && file_type_enum_1.FileTypeEnum) === "function" ? _c : Object)
], CreateFileDto.prototype, "type", void 0);
class CreateFileBodyDto {
}
exports.CreateFileBodyDto = CreateFileBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CreateFileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateFileDto),
    __metadata("design:type", Array)
], CreateFileBodyDto.prototype, "filesToAdd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateFileBodyDto.prototype, "filesToRemove", void 0);


/***/ }),
/* 123 */
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),
/* 124 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mappCloundleryToFile = void 0;
const mappCloundleryToFile = (clFile, type) => {
    return {
        fileExtension: clFile.format,
        height: clFile.height,
        publicId: clFile.public_id,
        url: clFile.url,
        width: clFile.width,
        certificate: null,
        certificateId: 0,
        fileId: 0,
        type,
        certificateProfile: null,
        user: null,
    };
};
exports.mappCloundleryToFile = mappCloundleryToFile;


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetheringsModule = void 0;
const common_1 = __webpack_require__(5);
const getherings_controller_1 = __webpack_require__(127);
const typeorm_1 = __webpack_require__(7);
const gethering_entity_1 = __webpack_require__(52);
const certificate_entity_1 = __webpack_require__(35);
const getherings_service_1 = __webpack_require__(131);
let GetheringsModule = class GetheringsModule {
};
exports.GetheringsModule = GetheringsModule;
exports.GetheringsModule = GetheringsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gethering_entity_1.Gethering, certificate_entity_1.Certificate])],
        controllers: [getherings_controller_1.GetheringsController],
        providers: [getherings_service_1.GetheringsService],
        exports: [getherings_service_1.GetheringsService],
    })
], GetheringsModule);


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetheringsController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(128);
const gethering_entity_1 = __webpack_require__(52);
const getherings_service_1 = __webpack_require__(131);
const decorators_1 = __webpack_require__(14);
let GetheringsController = class GetheringsController {
    constructor(getheringsService) {
        this.getheringsService = getheringsService;
    }
    createGethering(createCemeteryDto) {
        return this.getheringsService.createGethering(createCemeteryDto);
    }
    getGetherings(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.getheringsService.getGetherings({
            page,
            limit,
        });
    }
    getGetheringById(id) {
        return this.getheringsService.getGetheringById(id);
    }
    getGetheringsByCertificateId(certificateId, page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.getheringsService.getGetheringsByCertificateId(+certificateId, {
            page,
            limit,
        });
    }
    updateCity(id, updateGetheringDto) {
        return this.getheringsService.updateGethering(+id, updateGetheringDto);
    }
    removeGethering(id) {
        return this.getheringsService.removeGethering(id);
    }
};
exports.GetheringsController = GetheringsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new gethering' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The gethering has been successfully created.',
        type: gethering_entity_1.Gethering,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the certificate is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateGetheringDto !== "undefined" && dto_1.CreateGetheringDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], GetheringsController.prototype, "createGethering", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all getherings paginated' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all getherings.',
        type: [gethering_entity_1.Gethering],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GetheringsController.prototype, "getGetherings", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a gethering by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the gethering.',
        type: gethering_entity_1.Gethering,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the gethering is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GetheringsController.prototype, "getGetheringById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/certificates/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cities by county id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the cities.',
        type: [gethering_entity_1.Gethering],
    }),
    __param(0, (0, common_1.Param)('certificateId')),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], GetheringsController.prototype, "getGetheringsByCertificateId", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a gethering with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the gethering.',
        type: gethering_entity_1.Gethering,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the gethering is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateGetheringDto !== "undefined" && dto_1.UpdateGetheringDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], GetheringsController.prototype, "updateCity", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a gethering with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the gethering.',
        type: gethering_entity_1.Gethering,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the gethering is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GetheringsController.prototype, "removeGethering", null);
exports.GetheringsController = GetheringsController = __decorate([
    (0, common_1.Controller)('getherings'),
    (0, swagger_1.ApiTags)('Getherings'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof getherings_service_1.GetheringsService !== "undefined" && getherings_service_1.GetheringsService) === "function" ? _a : Object])
], GetheringsController);


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(129), exports);
__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGetheringDto = void 0;
const class_validator_1 = __webpack_require__(62);
const class_transformer_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(3);
class CreateGetheringDto {
}
exports.CreateGetheringDto = CreateGetheringDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGetheringDto.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateGetheringDto.prototype, "getheringDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGetheringDto.prototype, "hour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGetheringDto.prototype, "address", void 0);


/***/ }),
/* 130 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGetheringDto = void 0;
const class_validator_1 = __webpack_require__(62);
const class_transformer_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(3);
class UpdateGetheringDto {
}
exports.UpdateGetheringDto = UpdateGetheringDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateGetheringDto.prototype, "getheringDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGetheringDto.prototype, "hour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGetheringDto.prototype, "address", void 0);


/***/ }),
/* 131 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetheringsService = void 0;
const common_1 = __webpack_require__(5);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const typeorm_1 = __webpack_require__(7);
const certificate_entity_1 = __webpack_require__(35);
const typeorm_2 = __webpack_require__(32);
const gethering_entity_1 = __webpack_require__(52);
let GetheringsService = class GetheringsService {
    constructor(getheringRepository, certificateRepository) {
        this.getheringRepository = getheringRepository;
        this.certificateRepository = certificateRepository;
    }
    getGetherings(options) {
        const query = this.getheringRepository
            .createQueryBuilder('gethering')
            .where('gethering.deleted_at IS NULL')
            .leftJoinAndSelect('gethering.certificate', 'certificate');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    getGetheringsByCertificateId(certificateId, options) {
        const query = this.getheringRepository
            .createQueryBuilder('gethering')
            .where('gethering.deleted_at IS NULL')
            .andWhere('gethering.certificateId = :certificateId', { certificateId });
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    async getGetheringById(getheringId) {
        const gethering = await this.getheringRepository.findOne({
            where: { getheringId, deletedAt: null },
            relations: ['certificate'],
        });
        if (!gethering) {
            throw new common_1.NotFoundException();
        }
        return gethering;
    }
    async updateGethering(getheringId, updateGetheringDto) {
        const gethering = await this.getheringRepository.findOne({
            where: { getheringId, deletedAt: null },
        });
        if (!gethering) {
            throw new common_1.NotFoundException();
        }
        Object.assign(gethering, updateGetheringDto);
        gethering.updatedAt = new Date();
        return this.getheringRepository.save(gethering);
    }
    async removeGethering(getheringId) {
        const gethering = await this.getheringRepository.findOne({
            where: { getheringId, deletedAt: null },
        });
        if (!gethering) {
            throw new common_1.NotFoundException();
        }
        gethering.deletedAt = new Date();
        return this.getheringRepository.save(gethering);
    }
    async createGethering(createCemeteryDto) {
        const { getheringDate, hour, address, certificateId } = createCemeteryDto;
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId, deletedAt: null },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        const gethering = this.getheringRepository.create({
            address,
            getheringDate,
            hour,
            certificate,
        });
        return this.getheringRepository.save(gethering);
    }
};
exports.GetheringsService = GetheringsService;
exports.GetheringsService = GetheringsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gethering_entity_1.Gethering)),
    __param(1, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], GetheringsService);


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const common_1 = __webpack_require__(5);
const order_service_1 = __webpack_require__(133);
const order_controller_1 = __webpack_require__(134);
const typeorm_1 = __webpack_require__(7);
const order_entity_1 = __webpack_require__(44);
const city_entity_1 = __webpack_require__(33);
const user_entity_1 = __webpack_require__(37);
const qrcode_entity_1 = __webpack_require__(53);
const certificate_entity_1 = __webpack_require__(35);
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order, city_entity_1.City, user_entity_1.User, certificate_entity_1.Certificate, qrcode_entity_1.Qrcode])],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
        exports: [order_service_1.OrderService],
    })
], OrderModule);


/***/ }),
/* 133 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const certificate_entity_1 = __webpack_require__(35);
const city_entity_1 = __webpack_require__(33);
const user_entity_1 = __webpack_require__(37);
const typeorm_2 = __webpack_require__(32);
const order_entity_1 = __webpack_require__(44);
const qr = __webpack_require__(72);
const qrcode_entity_1 = __webpack_require__(53);
const config_1 = __webpack_require__(6);
let OrderService = class OrderService {
    constructor(orderRepository, qrcodeRepository, certificateRepository, cityRepository, userRepository, configService) {
        this.orderRepository = orderRepository;
        this.qrcodeRepository = qrcodeRepository;
        this.certificateRepository = certificateRepository;
        this.cityRepository = cityRepository;
        this.userRepository = userRepository;
        this.configService = configService;
    }
    getOrders(options) {
        const query = this.orderRepository
            .createQueryBuilder('order')
            .where('order.deleted_at IS NULL')
            .leftJoinAndSelect('order.certificate', 'certificate')
            .leftJoinAndSelect('order.user', 'user')
            .leftJoinAndSelect('order.city', 'city');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    getOrdersByCertificateId(certificateId) {
        return this.orderRepository.find({
            where: { certificateId, deletedAt: null },
            relations: ['user', 'city'],
        });
    }
    async getOrderById(orderId) {
        const order = await this.orderRepository.findOne({
            where: { orderId, deletedAt: null },
            relations: ['user', 'city', 'certificate'],
        });
        if (!order) {
            throw new common_1.NotFoundException();
        }
        return order;
    }
    async updateOrder(orderId, updateOrderDto) {
        const order = await this.orderRepository.findOne({
            where: { orderId, deletedAt: null },
        });
        if (!order) {
            throw new common_1.NotFoundException();
        }
        const city = await this.cityRepository.findOne({
            where: { cityId: updateOrderDto.cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        Object.assign(orderId, updateOrderDto);
        order.updatedAt = new Date();
        order.city = city;
        return this.orderRepository.save(order);
    }
    async createOrder(createOrderDto) {
        const { cityId, firstName, lastName, phoneNumber, userId, address, certificateId, } = createOrderDto;
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId, deletedAt: null },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        const city = await this.cityRepository.findOne({
            where: { cityId, deletedAt: null },
        });
        if (!city) {
            throw new common_1.NotFoundException();
        }
        const user = await this.userRepository.findOne({
            where: { userId },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const newOrder = this.orderRepository.create({
            address,
            firstName,
            lastName,
            phoneNumber,
            certificate,
            user,
        });
        const order = await this.orderRepository.save(newOrder);
        const fullUrl = `${this.configService.get('APP_CLIENT')}/profil/${certificate.slug}`;
        qr.toDataURL(fullUrl).then((value) => {
            const qrcode = this.qrcodeRepository.create({
                value,
                certificate,
            });
            this.qrcodeRepository.save(qrcode);
        });
        return order;
    }
    async updateOrderStatus(orderId, { status }) {
        const order = await this.orderRepository.findOne({
            where: { orderId, deletedAt: null },
        });
        if (!order) {
            throw new common_1.NotFoundException();
        }
        order.updatedAt = new Date();
        order.status = status;
        return this.orderRepository.save(order);
    }
    async removeOrder(orderId) {
        const order = await this.orderRepository.findOne({
            where: { orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException();
        }
        order.deletedAt = new Date();
        return this.orderRepository.save(order);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(qrcode_entity_1.Qrcode)),
    __param(2, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __param(3, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _f : Object])
], OrderService);


/***/ }),
/* 134 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(135);
const order_entity_1 = __webpack_require__(44);
const order_service_1 = __webpack_require__(133);
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(createOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }
    getCemeteries(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.orderService.getOrders({
            page,
            limit,
        });
    }
    getOrderById(id) {
        return this.orderService.getOrderById(id);
    }
    getOrdersByCertificateId(certificateId) {
        return this.orderService.getOrdersByCertificateId(certificateId);
    }
    updateOrderStatus(id, updateOrderStatusDto) {
        return this.orderService.updateOrderStatus(id, updateOrderStatusDto);
    }
    updateOrder(id, updateOrderDto) {
        return this.orderService.updateOrder(id, updateOrderDto);
    }
    removeOrder(id) {
        return this.orderService.removeOrder(id);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new order' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The order has been successfully created.',
        type: order_entity_1.Order,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if city/certificate not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateOrderDto !== "undefined" && dto_1.CreateOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all orders paginated.' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all orders.',
        type: [order_entity_1.Order],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getCemeteries", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a order by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the order.',
        type: order_entity_1.Order,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if order.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Get)('/certificates/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cemeteries by certificate id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the order.',
        type: [order_entity_1.Order],
    }),
    __param(0, (0, common_1.Param)('certificateId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrdersByCertificateId", null);
__decorate([
    (0, common_1.Patch)('/:id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a order with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the order.',
        type: order_entity_1.Order,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if city/order.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateOrderStatusDto !== "undefined" && dto_1.UpdateOrderStatusDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateOrderStatus", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a order with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the order.',
        type: order_entity_1.Order,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if city/order.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dto_1.UpdateOrderDto !== "undefined" && dto_1.UpdateOrderDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a order with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the order.',
        type: order_entity_1.Order,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if order.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "removeOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    (0, swagger_1.ApiTags)('Orders'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderController);


/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(136), exports);
__exportStar(__webpack_require__(137), exports);


/***/ }),
/* 136 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrderDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "userId", void 0);


/***/ }),
/* 137 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderStatusDto = exports.UpdateOrderDto = void 0;
const class_validator_1 = __webpack_require__(62);
const order_status_enum_1 = __webpack_require__(45);
const swagger_1 = __webpack_require__(3);
class UpdateOrderDto {
}
exports.UpdateOrderDto = UpdateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "postCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "userId", void 0);
class UpdateOrderStatusDto {
}
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: order_status_enum_1.OrderStatusEnum,
        enumName: 'OrderStatusEnum',
        description: 'Status must be one of the following: canceled, delivered, in.progress',
    }),
    (0, class_validator_1.IsEnum)(order_status_enum_1.OrderStatusEnum, {
        message: 'Status must be one of the following: canceled, delivered, in.progress',
    }),
    __metadata("design:type", typeof (_a = typeof order_status_enum_1.OrderStatusEnum !== "undefined" && order_status_enum_1.OrderStatusEnum) === "function" ? _a : Object)
], UpdateOrderStatusDto.prototype, "status", void 0);


/***/ }),
/* 138 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QrcodeModule = void 0;
const common_1 = __webpack_require__(5);
const qrcode_controller_1 = __webpack_require__(139);
const certificate_entity_1 = __webpack_require__(35);
const qrcode_entity_1 = __webpack_require__(53);
const qrcode_service_1 = __webpack_require__(140);
const typeorm_1 = __webpack_require__(7);
let QrcodeModule = class QrcodeModule {
};
exports.QrcodeModule = QrcodeModule;
exports.QrcodeModule = QrcodeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qrcode_entity_1.Qrcode, certificate_entity_1.Certificate])],
        controllers: [qrcode_controller_1.QrcodeController],
        providers: [qrcode_service_1.QrcodeService],
        exports: [qrcode_service_1.QrcodeService],
    })
], QrcodeModule);


/***/ }),
/* 139 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QrcodeController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const qrcode_entity_1 = __webpack_require__(53);
const qrcode_service_1 = __webpack_require__(140);
let QrcodeController = class QrcodeController {
    constructor(qrcodeService) {
        this.qrcodeService = qrcodeService;
    }
    getQRcodes(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.qrcodeService.getQRcodes({
            page,
            limit,
        });
    }
    getQRcodeById(id) {
        return this.qrcodeService.getQRcodeById(id);
    }
    getQRcodesByCertificateId(certificateId) {
        return this.qrcodeService.getQRcodesByCertificateId(certificateId);
    }
    removeQRcode(id) {
        return this.qrcodeService.removeQRcode(id);
    }
};
exports.QrcodeController = QrcodeController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all qrcodes paginated.' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all qrcodes.',
        type: [qrcode_entity_1.Qrcode],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], QrcodeController.prototype, "getQRcodes", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a qrcode by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the qrcode.',
        type: qrcode_entity_1.Qrcode,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if qrcode.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrcodeController.prototype, "getQRcodeById", null);
__decorate([
    (0, common_1.Get)('/certificates/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all qrcodes by certificate id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the qrcodes.',
        type: [qrcode_entity_1.Qrcode],
    }),
    __param(0, (0, common_1.Param)('certificateId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrcodeController.prototype, "getQRcodesByCertificateId", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a qrcode with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the qrcode.',
        type: qrcode_entity_1.Qrcode,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if qrcode.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrcodeController.prototype, "removeQRcode", null);
exports.QrcodeController = QrcodeController = __decorate([
    (0, common_1.Controller)('qrcodes'),
    (0, swagger_1.ApiTags)('Qrcodes'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof qrcode_service_1.QrcodeService !== "undefined" && qrcode_service_1.QrcodeService) === "function" ? _a : Object])
], QrcodeController);


/***/ }),
/* 140 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QrcodeService = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const certificate_entity_1 = __webpack_require__(35);
const typeorm_2 = __webpack_require__(32);
const qrcode_entity_1 = __webpack_require__(53);
let QrcodeService = class QrcodeService {
    constructor(qrcodeRepository, certificateRepository, configService) {
        this.qrcodeRepository = qrcodeRepository;
        this.certificateRepository = certificateRepository;
        this.configService = configService;
    }
    getQRcodes(options) {
        const query = this.qrcodeRepository
            .createQueryBuilder('qrcode')
            .where('qrcode.deleted_at IS NULL')
            .leftJoinAndSelect('qrcode.certificate', 'certificate');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    getQRcodesByCertificateId(certificateId) {
        return this.qrcodeRepository.find({
            where: { certificateId, deletedAt: null },
        });
    }
    async getQRcodeById(qrcodeId) {
        const qrcode = await this.qrcodeRepository.findOne({
            where: { qrcodeId, deletedAt: null },
            relations: ['certificate'],
        });
        if (!qrcode) {
            throw new common_1.NotFoundException();
        }
        return qrcode;
    }
    async removeQRcode(qrcodeId) {
        const qrcode = await this.qrcodeRepository.findOne({
            where: { qrcodeId, deletedAt: null },
        });
        if (!qrcode) {
            throw new common_1.NotFoundException();
        }
        qrcode.deletedAt = new Date();
        return this.qrcodeRepository.save(qrcode);
    }
};
exports.QrcodeService = QrcodeService;
exports.QrcodeService = QrcodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qrcode_entity_1.Qrcode)),
    __param(1, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], QrcodeService);


/***/ }),
/* 141 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TributesModule = void 0;
const common_1 = __webpack_require__(5);
const tributes_controller_1 = __webpack_require__(142);
const typeorm_1 = __webpack_require__(7);
const tribute_entity_1 = __webpack_require__(54);
const tributes_service_1 = __webpack_require__(146);
const certificate_entity_1 = __webpack_require__(35);
let TributesModule = class TributesModule {
};
exports.TributesModule = TributesModule;
exports.TributesModule = TributesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tribute_entity_1.Tribute, certificate_entity_1.Certificate])],
        controllers: [tributes_controller_1.TributesController],
        providers: [tributes_service_1.TributesService],
        exports: [tributes_service_1.TributesService],
    })
], TributesModule);


/***/ }),
/* 142 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TributesController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(143);
const tribute_entity_1 = __webpack_require__(54);
const tributes_service_1 = __webpack_require__(146);
const decorators_1 = __webpack_require__(14);
let TributesController = class TributesController {
    constructor(tributesService) {
        this.tributesService = tributesService;
    }
    createTribute(createTributeDto) {
        return this.tributesService.createTribute(createTributeDto);
    }
    getTributes(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.tributesService.getTributes({
            page,
            limit,
        });
    }
    getTributeById(id) {
        return this.tributesService.getTributeById(id);
    }
    getTributesByCertificateId(certificateId, page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.tributesService.getTributesByCertificateId(certificateId, {
            page,
            limit,
        });
    }
    updateTributeStatus(id, updateTributeStatusDto) {
        return this.tributesService.updateTributeStatus(id, updateTributeStatusDto);
    }
    updateQRcode(id, updateTributeDto) {
        return this.tributesService.updateTribute(id, updateTributeDto);
    }
    removeTribute(id) {
        return this.tributesService.removeTribute(id);
    }
};
exports.TributesController = TributesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tribute' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The tribute has been successfully created.',
        type: tribute_entity_1.Tribute,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateTributeDto !== "undefined" && dto_1.CreateTributeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "createTribute", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tributes paginated.' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all tributes.',
        type: [tribute_entity_1.Tribute],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "getTributes", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tribute by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the tribute.',
        type: tribute_entity_1.Tribute,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if tribute.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "getTributeById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/certificates/:certificateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tributes by certificate id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the tributes.',
        type: [tribute_entity_1.Tribute],
    }),
    __param(0, (0, common_1.Param)('certificateId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "getTributesByCertificateId", null);
__decorate([
    (0, common_1.Patch)('/:id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tribute with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the tribute.',
        type: tribute_entity_1.Tribute,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if city/tribute.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateTributeStatusDto !== "undefined" && dto_1.UpdateTributeStatusDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "updateTributeStatus", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tribute with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the tribute.',
        type: tribute_entity_1.Tribute,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if tribute.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dto_1.UpdateTributeDto !== "undefined" && dto_1.UpdateTributeDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "updateQRcode", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a tribute with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the tribute.',
        type: tribute_entity_1.Tribute,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if tribute.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TributesController.prototype, "removeTribute", null);
exports.TributesController = TributesController = __decorate([
    (0, common_1.Controller)('tributes'),
    (0, swagger_1.ApiTags)('Tributes'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof tributes_service_1.TributesService !== "undefined" && tributes_service_1.TributesService) === "function" ? _a : Object])
], TributesController);


/***/ }),
/* 143 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(144), exports);
__exportStar(__webpack_require__(145), exports);


/***/ }),
/* 144 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTributeDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
const tribute_status_enum_1 = __webpack_require__(55);
class CreateTributeDto {
}
exports.CreateTributeDto = CreateTributeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTributeDto.prototype, "certificateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTributeDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTributeDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTributeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTributeDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        enum: tribute_status_enum_1.TributeStatusEnum,
        enumName: 'TributeStatusEnum',
        description: 'Status must be one of the following: allowed, denied, pending',
    }),
    (0, class_validator_1.IsEnum)(tribute_status_enum_1.TributeStatusEnum, {
        message: 'Status must be one of the following: allowed, denied, pending',
    }),
    __metadata("design:type", typeof (_a = typeof tribute_status_enum_1.TributeStatusEnum !== "undefined" && tribute_status_enum_1.TributeStatusEnum) === "function" ? _a : Object)
], CreateTributeDto.prototype, "status", void 0);


/***/ }),
/* 145 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTributeStatusDto = exports.UpdateTributeDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
const tribute_status_enum_1 = __webpack_require__(55);
class UpdateTributeDto {
}
exports.UpdateTributeDto = UpdateTributeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTributeDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTributeDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTributeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateTributeDto.prototype, "email", void 0);
class UpdateTributeStatusDto {
}
exports.UpdateTributeStatusDto = UpdateTributeStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: tribute_status_enum_1.TributeStatusEnum,
        enumName: 'TributeStatusEnum',
        description: 'Status must be one of the following: allowed, denied, pending',
    }),
    (0, class_validator_1.IsEnum)(tribute_status_enum_1.TributeStatusEnum, {
        message: 'Status must be one of the following: allowed, denied, pending',
    }),
    __metadata("design:type", typeof (_a = typeof tribute_status_enum_1.TributeStatusEnum !== "undefined" && tribute_status_enum_1.TributeStatusEnum) === "function" ? _a : Object)
], UpdateTributeStatusDto.prototype, "status", void 0);


/***/ }),
/* 146 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TributesService = void 0;
const common_1 = __webpack_require__(5);
const tribute_entity_1 = __webpack_require__(54);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(32);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const certificate_entity_1 = __webpack_require__(35);
let TributesService = class TributesService {
    constructor(tributeRepository, certificateRepository) {
        this.tributeRepository = tributeRepository;
        this.certificateRepository = certificateRepository;
    }
    getTributes(options) {
        const query = this.tributeRepository
            .createQueryBuilder('tribute')
            .where('tribute.deleted_at IS NULL')
            .leftJoinAndSelect('tribute.certificate', 'certificate');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    getTributesByCertificateId(certificateId, options) {
        const query = this.tributeRepository
            .createQueryBuilder('tribute')
            .where('tribute.deleted_at IS NULL')
            .andWhere('tribute.certificateId = :certificateId', { certificateId });
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    async getTributeById(tributeId) {
        const tribute = await this.tributeRepository.findOne({
            where: { tributeId, deletedAt: null },
            relations: ['certificate'],
        });
        if (!tribute) {
            throw new common_1.NotFoundException();
        }
        return tribute;
    }
    async updateTribute(tributeId, updateTributeDto) {
        const tribute = await this.tributeRepository.findOne({
            where: { tributeId, deletedAt: null },
        });
        if (!tribute) {
            throw new common_1.NotFoundException();
        }
        Object.assign(tribute, updateTributeDto);
        tribute.updatedAt = new Date();
        return this.tributeRepository.save(tribute);
    }
    async updateTributeStatus(tributeId, { status }) {
        const tribute = await this.tributeRepository.findOne({
            where: { tributeId, deletedAt: null },
        });
        if (!tribute) {
            throw new common_1.NotFoundException();
        }
        tribute.updatedAt = new Date();
        tribute.status = status;
        return this.tributeRepository.save(tribute);
    }
    async removeTribute(tributeId) {
        const tribute = await this.tributeRepository.findOne({
            where: { tributeId, deletedAt: null },
        });
        if (!tribute) {
            throw new common_1.NotFoundException();
        }
        tribute.deletedAt = new Date();
        return this.tributeRepository.save(tribute);
    }
    async createTribute(createTributeDto) {
        const { description, email, firstName, lastName, certificateId, status } = createTributeDto;
        const certificate = await this.certificateRepository.findOne({
            where: { certificateId, deletedAt: null },
        });
        if (!certificate) {
            throw new common_1.NotFoundException();
        }
        const tribute = this.tributeRepository.create({
            description,
            email,
            firstName,
            lastName,
            certificate,
            status,
        });
        return this.tributeRepository.save(tribute);
    }
};
exports.TributesService = TributesService;
exports.TributesService = TributesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tribute_entity_1.Tribute)),
    __param(1, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], TributesService);


/***/ }),
/* 147 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeederModule = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const permission_entity_1 = __webpack_require__(38);
const role_entity_1 = __webpack_require__(43);
const users_module_1 = __webpack_require__(97);
const app_seeder_service_1 = __webpack_require__(148);
const city_module_1 = __webpack_require__(104);
const country_module_1 = __webpack_require__(111);
const city_seeder_service_1 = __webpack_require__(152);
const country_seeder_service_1 = __webpack_require__(149);
const user_seeder_service_1 = __webpack_require__(151);
const cemeteries_seeder_service_1 = __webpack_require__(154);
const cemetery_module_1 = __webpack_require__(30);
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role, permission_entity_1.Permission]),
            users_module_1.UsersModule,
            country_module_1.CountryModule,
            cemetery_module_1.CemeteryModule,
            city_module_1.CityModule,
        ],
        providers: [
            app_seeder_service_1.AppSeederService,
            user_seeder_service_1.UserSeederService,
            city_seeder_service_1.CitySeederService,
            country_seeder_service_1.CountrySeederService,
            cemeteries_seeder_service_1.CemeteriesSeederService,
        ],
    })
], SeederModule);


/***/ }),
/* 148 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppSeederService = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(32);
const country_seeder_service_1 = __webpack_require__(149);
const user_seeder_service_1 = __webpack_require__(151);
const city_seeder_service_1 = __webpack_require__(152);
const cemeteries_seeder_service_1 = __webpack_require__(154);
let AppSeederService = class AppSeederService {
    constructor(countrySeederService, citySeederService, cemeteriesSeederService, userSeederService, configService, connection) {
        this.countrySeederService = countrySeederService;
        this.citySeederService = citySeederService;
        this.cemeteriesSeederService = cemeteriesSeederService;
        this.userSeederService = userSeederService;
        this.configService = configService;
        this.connection = connection;
    }
    async onModuleInit() {
        switch (this.configService.get('ENVIROMENT')) {
            case 'production':
                await this.initProdDatabase();
                break;
            case 'local':
                break;
            default:
                await this.initProdDatabase();
                break;
        }
    }
    async resetDatabase() {
        console.log('🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕 Dropping database... 🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕');
        await this.connection.dropDatabase();
        console.log('🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚 Database dropped. 🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚');
        console.log('📈📈📈📈📈📈📈📈📈📈 Synchronizing database... 📈📈📈📈📈📈📈📈📈📈');
        await this.connection.synchronize();
        console.log('🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖 Database synchronized. 🖖🖖🖖🖖🖖🖖🖖🖖🖖🖖');
        await this.seedDatabase();
    }
    async initProdDatabase() {
        await this.seedProduction();
    }
    async seedDatabase() {
        console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀   SEEDING DATABASE STARTED     🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
        this.userSeederService.initUsers();
        const { serbia } = await this.countrySeederService.initCountries();
        const { cities } = await this.citySeederService.initCities(serbia.countryId);
        await this.cemeteriesSeederService.initCemeteries(cities);
        console.log('🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟   SEEDING DATABASE ENDED     🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟');
    }
    async seedProduction() {
        console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀   SEEDING PRODUCTION DATABASE STARTED     🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
        const exist = await this.userSeederService.checkRoles();
        if (!exist) {
            console.log('🌕🌕🌕🌕🌕 Data dont exist... 🌕🌕🌕🌕🌕');
            const { superAdminRole, adminRole, userRole } = await this.userSeederService.createRolesAndPermisions();
            this.userSeederService.createSuperAdmin(superAdminRole, adminRole, userRole);
            const { serbia } = await this.countrySeederService.initCountries();
            const { cities } = await this.citySeederService.initCities(serbia.countryId);
            await this.cemeteriesSeederService.initCemeteries(cities);
        }
        else {
            console.log('📈📈📈📈📈 Data exist 📈📈📈📈📈');
        }
        console.log('🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟   SEEDING PRODUCTION DATABASE ENDED     🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟');
    }
};
exports.AppSeederService = AppSeederService;
exports.AppSeederService = AppSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof country_seeder_service_1.CountrySeederService !== "undefined" && country_seeder_service_1.CountrySeederService) === "function" ? _a : Object, typeof (_b = typeof city_seeder_service_1.CitySeederService !== "undefined" && city_seeder_service_1.CitySeederService) === "function" ? _b : Object, typeof (_c = typeof cemeteries_seeder_service_1.CemeteriesSeederService !== "undefined" && cemeteries_seeder_service_1.CemeteriesSeederService) === "function" ? _c : Object, typeof (_d = typeof user_seeder_service_1.UserSeederService !== "undefined" && user_seeder_service_1.UserSeederService) === "function" ? _d : Object, typeof (_e = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Connection !== "undefined" && typeorm_2.Connection) === "function" ? _f : Object])
], AppSeederService);


/***/ }),
/* 149 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountrySeederService = void 0;
const common_1 = __webpack_require__(5);
const country_service_1 = __webpack_require__(112);
const countries_1 = __webpack_require__(150);
let CountrySeederService = class CountrySeederService {
    constructor(countryService) {
        this.countryService = countryService;
    }
    async initCountries() {
        const countriesPromises = countries_1.COUNTRIES.map(({ name, code, iso }) => {
            return this.countryService.createCountry({
                code,
                name,
                iso,
            });
        });
        const countries = await Promise.all(countriesPromises);
        const serbia = countries.find((c) => c.name === 'Serbia');
        return { countries, serbia };
    }
};
exports.CountrySeederService = CountrySeederService;
exports.CountrySeederService = CountrySeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof country_service_1.CountryService !== "undefined" && country_service_1.CountryService) === "function" ? _a : Object])
], CountrySeederService);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COUNTRIES = void 0;
exports.COUNTRIES = [{ name: 'Serbia', code: '381', iso: 'RS / SRB' }];


/***/ }),
/* 151 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSeederService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(32);
const enums_1 = __webpack_require__(39);
const enums_2 = __webpack_require__(39);
const users_service_1 = __webpack_require__(85);
const permission_entity_1 = __webpack_require__(38);
const role_entity_1 = __webpack_require__(43);
let UserSeederService = class UserSeederService {
    constructor(usersService, roleRepository, permissionRepository) {
        this.usersService = usersService;
        this.roleRepository = roleRepository;
        this.permissionRepository = permissionRepository;
    }
    async checkRoles() {
        try {
            const roles = await this.roleRepository.find();
            return !!roles.length;
        }
        catch {
            return false;
        }
    }
    async initUsers() {
        const { adminRole, superAdminRole, userRole, permissions } = await this.createRolesAndPermisions();
        this.createSuperAdmin(superAdminRole, adminRole, userRole);
        const admins = [];
        for (let i = 0; i < 80; i++) {
            const admin = await this.usersService.createUser({
                email: `johndoe${i}@gmail.com`,
                password: 'secret',
                firstName: `John-${i}`,
                lastName: 'Doe',
            });
            this.usersService.updateUserRolesAndPermissions(admin.userId, {
                roles: [adminRole, userRole],
                permissions: permissions,
            });
            admins.push(admin);
        }
        const superAdmins = [];
        for (let i = 0; i < 10; i++) {
            const superAdmin = await this.usersService.createUser({
                email: `lucywoo-${i}@gmail.com`,
                password: 'secret',
                firstName: `Lucy-${i}`,
                lastName: 'Woo',
            });
            this.usersService.updateUserRolesAndPermissions(superAdmin.userId, {
                roles: [superAdminRole, adminRole, userRole],
            });
            superAdmins.push(superAdmin);
        }
        const users = [];
        for (let i = 0; i < 200; i++) {
            const user = await this.usersService.createUser({
                email: `zest-${i}@gmail.com`,
                password: 'secret',
                firstName: `Zest-${i}`,
                lastName: 'Made',
            });
            this.usersService.updateUserRolesAndPermissions(user.userId, {
                roles: [userRole],
            });
            users.push(user);
        }
        return {
            permissions,
            adminRole,
            superAdminRole,
            userRole,
            admins,
            superAdmins,
            users,
        };
    }
    async createSuperAdmin(superAdminRole, adminRole, userRole) {
        const superAdmin = await this.usersService.createUser({
            email: `admin@pomen.org`,
            password: null,
            firstName: `Admin`,
            lastName: 'Pomen',
        });
        this.usersService.updateUserRolesAndPermissions(superAdmin.userId, {
            roles: [superAdminRole, adminRole, userRole],
        });
    }
    async createRolesAndPermisions() {
        const permissions = await this.createPermissions([
            enums_2.ClientPermissionEnums.CRETE_USER,
            enums_2.ClientPermissionEnums.READ_USER,
            enums_2.ClientPermissionEnums.UPDATE_USER,
            enums_2.ClientPermissionEnums.DELETE_USER,
            enums_2.ClientPermissionEnums.CREATE_ANNOUNCEMENT,
            enums_2.ClientPermissionEnums.UPDATE_ANNOUNCEMENT,
        ]);
        const [CRETE_USER, READ_USER, UPDATE_USER, DELETE_USER, CREATE_ANNOUNCEMENT, UPDATE_ANNOUNCEMENT,] = permissions;
        const superAdminRole = await this.createRole({
            name: enums_1.ClientRoleEnums.SUPER_ADMIN,
            permissions: [
                CRETE_USER,
                READ_USER,
                UPDATE_USER,
                DELETE_USER,
                CREATE_ANNOUNCEMENT,
                UPDATE_ANNOUNCEMENT,
            ],
        });
        const adminRole = await this.createRole({
            name: enums_1.ClientRoleEnums.ADMIN,
            permissions: [CRETE_USER, READ_USER, UPDATE_USER, DELETE_USER],
        });
        const userRole = await this.createRole({
            name: enums_1.ClientRoleEnums.USER,
            permissions: [READ_USER],
        });
        return { adminRole, userRole, superAdminRole, permissions };
    }
    async createPermissions(permissionNames) {
        return Promise.all(permissionNames.map(async (name) => {
            const permission = this.permissionRepository.create({ name });
            return this.permissionRepository.save(permission);
        }));
    }
    async createRole(data) {
        const { name, permissions } = data;
        const role = this.roleRepository.create({ name });
        role.permissions = permissions;
        return await this.roleRepository.save(role);
    }
};
exports.UserSeederService = UserSeederService;
exports.UserSeederService = UserSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(2, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], UserSeederService);


/***/ }),
/* 152 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CitySeederService = void 0;
const common_1 = __webpack_require__(5);
const city_service_1 = __webpack_require__(105);
const cities_1 = __webpack_require__(153);
let CitySeederService = class CitySeederService {
    constructor(cityService) {
        this.cityService = cityService;
    }
    async initCities(countryId) {
        const citiesPromises = cities_1.SERBIAN_CITIES.map(({ name, code }) => {
            return this.cityService.createCity({
                code,
                name,
                countryId,
            });
        });
        const cities = await Promise.all(citiesPromises);
        return { cities };
    }
};
exports.CitySeederService = CitySeederService;
exports.CitySeederService = CitySeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof city_service_1.CityService !== "undefined" && city_service_1.CityService) === "function" ? _a : Object])
], CitySeederService);


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SERBIAN_CITIES = void 0;
exports.SERBIAN_CITIES = [
    { name: 'Beograd', code: '11000' },
    { name: 'Novi Sad', code: '21000' },
    { name: 'Niš', code: '18000' },
    { name: 'Kragujevac', code: '34000' },
    { name: 'Subotica', code: '24000' },
    { name: 'Zrenjanin', code: '23000' },
    { name: 'Pančevo', code: '26000' },
    { name: 'Čačak', code: '32000' },
    { name: 'Kruševac', code: '37000' },
    { name: 'Kraljevo', code: '36000' },
    { name: 'Smederevo', code: '11300' },
    { name: 'Leskovac', code: '16000' },
    { name: 'Užice', code: '31000' },
    { name: 'Vranje', code: '17500' },
    { name: 'Šabac', code: '15000' },
    { name: 'Sombor', code: '25000' },
    { name: 'Valjevo', code: '14000' },
    { name: 'Požarevac', code: '12000' },
    { name: 'Zaječar', code: '19000' },
    { name: 'Sremska Mitrovica', code: '22000' },
    { name: 'Loznica', code: '15300' },
];


/***/ }),
/* 154 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CemeteriesSeederService = void 0;
const common_1 = __webpack_require__(5);
const cementery_service_1 = __webpack_require__(31);
const cemeteries_1 = __webpack_require__(155);
let CemeteriesSeederService = class CemeteriesSeederService {
    constructor(cementeryService) {
        this.cementeryService = cementeryService;
    }
    formatLocation(location) {
        if (location.type === 'Point' && location.coordinates.length === 2) {
            const [longitude, latitude] = location.coordinates;
            return `(${longitude}, ${latitude})`;
        }
        throw new Error('Invalid location format');
    }
    async initCemeteries(cities) {
        const promises = cemeteries_1.SERBIAN_CITIES_CEMETEREIS.map(({ name, address, city: cityName, location }) => {
            const city = cities.find((c) => c.name == cityName);
            if (!city)
                return Promise;
            return this.cementeryService.createCemetery({
                address,
                cityId: city.cityId,
                location,
                name,
            });
        });
        const cemeteries = await Promise.all(promises);
        return { cemeteries };
    }
};
exports.CemeteriesSeederService = CemeteriesSeederService;
exports.CemeteriesSeederService = CemeteriesSeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cementery_service_1.CementeryService !== "undefined" && cementery_service_1.CementeryService) === "function" ? _a : Object])
], CemeteriesSeederService);


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SERBIAN_CITIES_CEMETEREIS = void 0;
exports.SERBIAN_CITIES_CEMETEREIS = [
    {
        name: 'Novo Groblje',
        address: 'Ruzveltova 50',
        city: 'Beograd',
        location: { x: 20.4825, y: 44.8186 },
    },
    {
        name: 'Topčidersko Groblje',
        address: 'Knez Miloša 35',
        city: 'Beograd',
        location: { x: 20.4542, y: 44.7911 },
    },
    {
        name: 'Lešće',
        address: 'Patrijarha Dimitrija 34',
        city: 'Beograd',
        location: { x: 20.5414, y: 44.8229 },
    },
    {
        name: 'Centralno Groblje',
        address: 'Višnjička 9',
        city: 'Beograd',
        location: { x: 20.5065, y: 44.8159 },
    },
    {
        name: 'Banjica Groblje',
        address: 'Banjica bb',
        city: 'Beograd',
        location: { x: 20.4721, y: 44.7603 },
    },
    {
        name: 'Orlovača',
        address: 'Ibarski put bb',
        city: 'Beograd',
        location: { x: 20.3817, y: 44.7231 },
    },
    {
        name: 'Bežanijsko Groblje',
        address: 'Jurija Gagarina 335',
        city: 'Beograd',
        location: { x: 20.3844, y: 44.8134 },
    },
    {
        name: 'Zemun Groblje',
        address: 'Zemunska 40',
        city: 'Beograd',
        location: { x: 20.4104, y: 44.8471 },
    },
    {
        name: 'Groblje Nova Bežanija',
        address: 'Omladinskih brigada 35',
        city: 'Beograd',
        location: { x: 20.3851, y: 44.8111 },
    },
    {
        name: 'Groblje Kotež',
        address: 'Slanački put bb',
        city: 'Beograd',
        location: { x: 20.5331, y: 44.8452 },
    },
    {
        name: 'Almaško Groblje',
        address: 'Almaška 35',
        city: 'Novi Sad',
        location: { x: 19.8369, y: 45.2553 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Futoški put 48',
        city: 'Novi Sad',
        location: { x: 19.8248, y: 45.2601 },
    },
    {
        name: 'Jevrejsko Groblje',
        address: 'Jevrejska 12',
        city: 'Novi Sad',
        location: { x: 19.8439, y: 45.2557 },
    },
    {
        name: 'Novo Groblje',
        address: 'Preradovićeva 4',
        city: 'Novi Sad',
        location: { x: 19.8397, y: 45.2532 },
    },
    {
        name: 'Petrovaradinsko Groblje',
        address: 'Reljkovićeva 2',
        city: 'Novi Sad',
        location: { x: 19.8798, y: 45.2459 },
    },
    {
        name: 'Futroško Groblje',
        address: 'Futoška 10',
        city: 'Novi Sad',
        location: { x: 19.8311, y: 45.2506 },
    },
    {
        name: 'Groblje Veternik',
        address: 'Vojvode Mišića bb',
        city: 'Novi Sad',
        location: { x: 19.8172, y: 45.2545 },
    },
    {
        name: 'Sremska Kamenica Groblje',
        address: 'Patrijarha Rajačića 1',
        city: 'Sremska Kamenica',
        location: { x: 19.8531, y: 45.2236 },
    },
    {
        name: 'Novo Groblje',
        address: 'Bulevar Svetog cara Konstantina 80',
        city: 'Niš',
        location: { x: 21.9024, y: 43.3235 },
    },
    {
        name: 'Vojničko Groblje',
        address: 'Ratnih vojvoda 1',
        city: 'Niš',
        location: { x: 21.9152, y: 43.3148 },
    },
    {
        name: 'Groblje Palilula',
        address: 'Knjaževačka 144',
        city: 'Niš',
        location: { x: 21.9145, y: 43.3183 },
    },
    {
        name: 'Donje Međurovo Groblje',
        address: 'Donje Međurovo bb',
        city: 'Niš',
        location: { x: 21.8824, y: 43.2891 },
    },
    {
        name: 'Groblje Brzi Brod',
        address: 'Brzi Brod bb',
        city: 'Niš',
        location: { x: 21.9315, y: 43.3067 },
    },
    {
        name: 'Groblje Pantelej',
        address: 'Zetska 8',
        city: 'Niš',
        location: { x: 21.9304, y: 43.3337 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Miloja Pavlovića 23',
        city: 'Kragujevac',
        location: { x: 20.9263, y: 44.0141 },
    },
    {
        name: 'Šumarice Groblje',
        address: 'Šumarice bb',
        city: 'Kragujevac',
        location: { x: 20.8783, y: 44.0161 },
    },
    {
        name: 'Vojničko Groblje',
        address: 'Vojvode Putnika 43',
        city: 'Kragujevac',
        location: { x: 20.9228, y: 44.0105 },
    },
    {
        name: 'Groblje Ilićevo',
        address: 'Ilićevo bb',
        city: 'Kragujevac',
        location: { x: 20.8971, y: 44.0083 },
    },
    {
        name: 'Groblje Pivara',
        address: 'Pivarska bb',
        city: 'Kragujevac',
        location: { x: 20.9159, y: 44.0023 },
    },
    {
        name: 'Groblje Bajski Put',
        address: 'Bajski put bb',
        city: 'Subotica',
        location: { x: 19.6542, y: 46.1042 },
    },
    {
        name: 'Groblje Aleksandrovo',
        address: 'Aleksandrovo bb',
        city: 'Subotica',
        location: { x: 19.6581, y: 46.1005 },
    },
    {
        name: 'Groblje Kelebija',
        address: 'Kelebija bb',
        city: 'Subotica',
        location: { x: 19.6336, y: 46.1157 },
    },
    {
        name: 'Groblje Tavankut',
        address: 'Tavankut bb',
        city: 'Subotica',
        location: { x: 19.5962, y: 46.1484 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Beogradski put bb',
        city: 'Subotica',
        location: { x: 19.6618, y: 46.1022 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Senćanski put bb',
        city: 'Subotica',
        location: { x: 19.6587, y: 46.1029 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Beogradska bb',
        city: 'Zrenjanin',
        location: { x: 20.3904, y: 45.3836 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Cara Dušana bb',
        city: 'Zrenjanin',
        location: { x: 20.3995, y: 45.3797 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Save Tekelije bb',
        city: 'Zrenjanin',
        location: { x: 20.4083, y: 45.3814 },
    },
    {
        name: 'Groblje Mužlja',
        address: 'Mužlja bb',
        city: 'Zrenjanin',
        location: { x: 20.385, y: 45.3742 },
    },
    {
        name: 'Groblje Bagljaš',
        address: 'Bagljaš bb',
        city: 'Zrenjanin',
        location: { x: 20.4018, y: 45.376 },
    },
    {
        name: 'Novo Groblje',
        address: 'Hajduk Veljkova 2',
        city: 'Pančevo',
        location: { x: 20.6505, y: 44.8718 },
    },
    {
        name: 'Staro Groblje',
        address: 'Josifa Marinkovića bb',
        city: 'Pančevo',
        location: { x: 20.6569, y: 44.8729 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Miloša Obilića bb',
        city: 'Pančevo',
        location: { x: 20.6521, y: 44.8712 },
    },
    {
        name: 'Groblje Glogonjski Rit',
        address: 'Glogonjski Rit bb',
        city: 'Pančevo',
        location: { x: 20.6791, y: 44.8635 },
    },
    {
        name: 'Groblje Vojlovica',
        address: 'Vojlovica bb',
        city: 'Pančevo',
        location: { x: 20.6703, y: 44.8532 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Bulevar Oslobođenja 10',
        city: 'Čačak',
        location: { x: 20.3534, y: 43.8914 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Nemanjina bb',
        city: 'Čačak',
        location: { x: 20.3475, y: 43.892 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Svetog Save bb',
        city: 'Čačak',
        location: { x: 20.3437, y: 43.8902 },
    },
    {
        name: 'Groblje Konjevići',
        address: 'Konjevići bb',
        city: 'Čačak',
        location: { x: 20.3456, y: 43.8957 },
    },
    {
        name: 'Groblje Ljubić',
        address: 'Ljubić bb',
        city: 'Čačak',
        location: { x: 20.3412, y: 43.8991 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Dragoslava Srejovića 1',
        city: 'Kraljevo',
        location: { x: 20.6894, y: 43.7254 },
    },
    {
        name: 'Novo Groblje',
        address: 'Žička bb',
        city: 'Kraljevo',
        location: { x: 20.6925, y: 43.7281 },
    },
    {
        name: 'Vojničko Groblje',
        address: 'Karađorđeva bb',
        city: 'Kraljevo',
        location: { x: 20.6883, y: 43.7235 },
    },
    {
        name: 'Groblje Ribnica',
        address: 'Ribnica bb',
        city: 'Kraljevo',
        location: { x: 20.6872, y: 43.7295 },
    },
    {
        name: 'Groblje Adrani',
        address: 'Adrani bb',
        city: 'Kraljevo',
        location: { x: 20.6748, y: 43.7181 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Karađorđeva bb',
        city: 'Smederevo',
        location: { x: 20.9517, y: 44.6648 },
    },
    {
        name: 'Novo Groblje',
        address: 'Miloša Velikog bb',
        city: 'Smederevo',
        location: { x: 20.9534, y: 44.6645 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Dunavska bb',
        city: 'Smederevo',
        location: { x: 20.9562, y: 44.6673 },
    },
    {
        name: 'Groblje Vranovo',
        address: 'Vranovo bb',
        city: 'Smederevo',
        location: { x: 20.9675, y: 44.671 },
    },
    {
        name: 'Groblje Lugavčina',
        address: 'Lugavčina bb',
        city: 'Smederevo',
        location: { x: 21.0004, y: 44.6821 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Bulevar Oslobođenja bb',
        city: 'Leskovac',
        location: { x: 21.9476, y: 42.9984 },
    },
    {
        name: 'Špitaljsko Groblje',
        address: 'Špitaljski put bb',
        city: 'Leskovac',
        location: { x: 21.9453, y: 42.9975 },
    },
    {
        name: 'Novo Groblje',
        address: 'Svetozara Markovića bb',
        city: 'Leskovac',
        location: { x: 21.9447, y: 42.9993 },
    },
    {
        name: 'Groblje Bobište',
        address: 'Bobište bb',
        city: 'Leskovac',
        location: { x: 21.9468, y: 42.9956 },
    },
    {
        name: 'Groblje Donje Sinkovce',
        address: 'Donje Sinkovce bb',
        city: 'Leskovac',
        location: { x: 21.9369, y: 43.0043 },
    },
    {
        name: 'Pravoslavno Groblje Lazarica',
        address: 'Lazarica bb',
        city: 'Kruševac',
        location: { x: 21.3265, y: 43.5806 },
    },
    {
        name: 'Groblje Veliki Šiljegovac',
        address: 'Veliki Šiljegovac bb',
        city: 'Kruševac',
        location: { x: 21.2624, y: 43.5421 },
    },
    {
        name: 'Gradsko Groblje Dovarje',
        address: 'Dovarje bb',
        city: 'Užice',
        location: { x: 19.8494, y: 43.8539 },
    },
    {
        name: 'Novo Groblje',
        address: 'Kralja Petra I bb',
        city: 'Užice',
        location: { x: 19.849, y: 43.853 },
    },
    {
        name: 'Groblje Carina',
        address: 'Carina bb',
        city: 'Užice',
        location: { x: 19.8517, y: 43.8523 },
    },
    {
        name: 'Pravoslavno Groblje Sevojno',
        address: 'Sevojno bb',
        city: 'Užice',
        location: { x: 19.7896, y: 43.8495 },
    },
    {
        name: 'Groblje Krčagovo',
        address: 'Krčagovo bb',
        city: 'Užice',
        location: { x: 19.8395, y: 43.8541 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Partizanski put bb',
        city: 'Vranje',
        location: { x: 21.9012, y: 42.5487 },
    },
    {
        name: 'Novo Groblje',
        address: 'Svetosavska bb',
        city: 'Vranje',
        location: { x: 21.9036, y: 42.55 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Bore Stankovića bb',
        city: 'Vranje',
        location: { x: 21.8987, y: 42.5493 },
    },
    {
        name: 'Groblje Sobina',
        address: 'Sobina bb',
        city: 'Vranje',
        location: { x: 21.8972, y: 42.5522 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Zmaj Jovina bb',
        city: 'Vranje',
        location: { x: 21.9042, y: 42.5513 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Janka Veselinovića bb',
        city: 'Šabac',
        location: { x: 19.6893, y: 44.7567 },
    },
    {
        name: 'Novo Groblje',
        address: 'Svetog Save bb',
        city: 'Šabac',
        location: { x: 19.6902, y: 44.7556 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Vojvode Mišića bb',
        city: 'Šabac',
        location: { x: 19.6927, y: 44.7549 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Karađorđeva bb',
        city: 'Šabac',
        location: { x: 19.6873, y: 44.7571 },
    },
    {
        name: 'Groblje Majur',
        address: 'Majur bb',
        city: 'Šabac',
        location: { x: 19.682, y: 44.7541 },
    },
    {
        name: 'Veliko Pravoslavno Groblje',
        address: 'Venac Radomira Putnika bb',
        city: 'Sombor',
        location: { x: 19.0949, y: 45.7756 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Jovana Dučića bb',
        city: 'Sombor',
        location: { x: 19.0974, y: 45.7752 },
    },
    {
        name: 'Jevrejsko Groblje',
        address: 'Vojvođanska bb',
        city: 'Sombor',
        location: { x: 19.0925, y: 45.775 },
    },
    {
        name: 'Groblje Čonoplja',
        address: 'Čonoplja bb',
        city: 'Sombor',
        location: { x: 19.0117, y: 45.8446 },
    },
    {
        name: 'Groblje Kljajićevo',
        address: 'Kljajićevo bb',
        city: 'Sombor',
        location: { x: 19.0985, y: 45.8612 },
    },
    {
        name: 'Novo Groblje',
        address: 'Vojvode Mišića bb',
        city: 'Valjevo',
        location: { x: 19.8921, y: 44.2742 },
    },
    {
        name: 'Staro Groblje',
        address: 'Sinđelićeva bb',
        city: 'Valjevo',
        location: { x: 19.8944, y: 44.2748 },
    },
    {
        name: 'Pravoslavno Groblje Brđani',
        address: 'Brđani bb',
        city: 'Valjevo',
        location: { x: 19.8898, y: 44.2767 },
    },
    {
        name: 'Groblje Petnica',
        address: 'Petnica bb',
        city: 'Valjevo',
        location: { x: 19.8947, y: 44.2785 },
    },
    {
        name: 'Groblje Divci',
        address: 'Divci bb',
        city: 'Valjevo',
        location: { x: 19.8821, y: 44.2733 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Kneza Miloša bb',
        city: 'Požarevac',
        location: { x: 21.1927, y: 44.6222 },
    },
    {
        name: 'Novo Groblje',
        address: 'Božidarčeva bb',
        city: 'Požarevac',
        location: { x: 21.1933, y: 44.6218 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Nemanjina bb',
        city: 'Požarevac',
        location: { x: 21.192, y: 44.6235 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Jovana Šerbanovića bb',
        city: 'Požarevac',
        location: { x: 21.1914, y: 44.6215 },
    },
    {
        name: 'Groblje Kostolac',
        address: 'Kostolac bb',
        city: 'Požarevac',
        location: { x: 21.1378, y: 44.7011 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Nikole Pašića 58',
        city: 'Zaječar',
        location: { x: 22.2985, y: 43.9063 },
    },
    {
        name: 'Novo Groblje',
        address: 'Karađorđeva bb',
        city: 'Zaječar',
        location: { x: 22.2972, y: 43.9072 },
    },
    {
        name: 'Groblje Kotlujevac',
        address: 'Kotlujevac bb',
        city: 'Zaječar',
        location: { x: 22.2959, y: 43.9078 },
    },
    {
        name: 'Groblje Veliki Izvor',
        address: 'Veliki Izvor bb',
        city: 'Zaječar',
        location: { x: 22.3021, y: 43.9101 },
    },
    {
        name: 'Groblje Grljan',
        address: 'Grljan bb',
        city: 'Zaječar',
        location: { x: 22.296, y: 43.912 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Fruškogorska bb',
        city: 'Sremska Mitrovica',
        location: { x: 19.6028, y: 44.9813 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Šaševačka bb',
        city: 'Sremska Mitrovica',
        location: { x: 19.5984, y: 44.9807 },
    },
    {
        name: 'Katoličko Groblje',
        address: 'Stari Šor bb',
        city: 'Sremska Mitrovica',
        location: { x: 19.605, y: 44.982 },
    },
    {
        name: 'Groblje Laćarak',
        address: 'Laćarak bb',
        city: 'Sremska Mitrovica',
        location: { x: 19.5981, y: 44.9842 },
    },
    {
        name: 'Groblje Mačvanska Mitrovica',
        address: 'Mačvanska Mitrovica bb',
        city: 'Sremska Mitrovica',
        location: { x: 19.6094, y: 44.9795 },
    },
    {
        name: 'Gradsko Groblje',
        address: 'Narodnog fronta bb',
        city: 'Loznica',
        location: { x: 19.2261, y: 44.5317 },
    },
    {
        name: 'Novo Groblje',
        address: 'Jovana Cvijića bb',
        city: 'Loznica',
        location: { x: 19.2293, y: 44.5296 },
    },
    {
        name: 'Pravoslavno Groblje',
        address: 'Aleksandra Rankovića bb',
        city: 'Loznica',
        location: { x: 19.2245, y: 44.5331 },
    },
    {
        name: 'Groblje Klupci',
        address: 'Klupci bb',
        city: 'Loznica',
        location: { x: 19.2258, y: 44.5353 },
    },
    {
        name: 'Groblje Lešnica',
        address: 'Lešnica bb',
        city: 'Loznica',
        location: { x: 19.2138, y: 44.5365 },
    },
];


/***/ }),
/* 156 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactsModule = void 0;
const common_1 = __webpack_require__(5);
const contacts_controller_1 = __webpack_require__(157);
const contacts_service_1 = __webpack_require__(162);
const typeorm_1 = __webpack_require__(7);
const contact_entity_1 = __webpack_require__(163);
let ContactsModule = class ContactsModule {
};
exports.ContactsModule = ContactsModule;
exports.ContactsModule = ContactsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([contact_entity_1.Contact])],
        controllers: [contacts_controller_1.ContactsController],
        providers: [contacts_service_1.ContactsService],
    })
], ContactsModule);


/***/ }),
/* 157 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactsController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(158);
const contacts_service_1 = __webpack_require__(162);
const decorators_1 = __webpack_require__(14);
const contact_entity_1 = __webpack_require__(163);
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    create(createContactDto) {
        return this.contactsService.createcontact(createContactDto);
    }
    getContacts(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.contactsService.getContacts({
            page,
            limit,
        });
    }
    getContactById(id) {
        return this.contactsService.getContactById(id);
    }
    updateContact(id, dto) {
        return this.contactsService.updateContact(id, dto);
    }
    updateContactStatus(id, dto) {
        return this.contactsService.updateContactStatus(id, dto);
    }
    removeContact(id) {
        return this.contactsService.removeContact(id);
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contact' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The contacy has been successfully created.',
        type: contact_entity_1.Contact,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the country is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateContactDto !== "undefined" && dto_1.CreateContactDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contacts paginated' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all contacts.',
        type: [contact_entity_1.Contact],
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "getContacts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a contact by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the contact.',
        type: contact_entity_1.Contact,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the contact is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "getContactById", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contact with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the contact.',
        type: contact_entity_1.Contact,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the contact is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateContactDto !== "undefined" && dto_1.UpdateContactDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "updateContact", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contact status with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the contact.',
        type: contact_entity_1.Contact,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the contact status is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dto_1.UpdateContactStatusEnumDto !== "undefined" && dto_1.UpdateContactStatusEnumDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "updateContactStatus", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a contact with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the contact.',
        type: contact_entity_1.Contact,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throw exception if the contact is not found',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "removeContact", null);
exports.ContactsController = ContactsController = __decorate([
    (0, common_1.Controller)('contacts'),
    (0, swagger_1.ApiTags)('Contacts'),
    __metadata("design:paramtypes", [typeof (_a = typeof contacts_service_1.ContactsService !== "undefined" && contacts_service_1.ContactsService) === "function" ? _a : Object])
], ContactsController);


/***/ }),
/* 158 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(159), exports);
__exportStar(__webpack_require__(160), exports);


/***/ }),
/* 159 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContactDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class CreateContactDto {
}
exports.CreateContactDto = CreateContactDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContactDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContactDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContactDto.prototype, "message", void 0);


/***/ }),
/* 160 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContactStatusEnumDto = exports.UpdateContactDto = void 0;
const swagger_1 = __webpack_require__(3);
const create_contact_dto_1 = __webpack_require__(159);
const class_validator_1 = __webpack_require__(62);
const contact_status_enum_1 = __webpack_require__(161);
class UpdateContactDto extends (0, swagger_1.PartialType)(create_contact_dto_1.CreateContactDto) {
}
exports.UpdateContactDto = UpdateContactDto;
class UpdateContactStatusEnumDto {
}
exports.UpdateContactStatusEnumDto = UpdateContactStatusEnumDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: contact_status_enum_1.ContactStatusEnum,
        enumName: 'ContactStatusEnum',
        description: 'Type must be one of the following: title, text.center, text.left, text.right',
    }),
    (0, class_validator_1.IsEnum)(contact_status_enum_1.ContactStatusEnum, {
        message: 'Status must be one of the following: resolved, new.message...',
    }),
    __metadata("design:type", typeof (_a = typeof contact_status_enum_1.ContactStatusEnum !== "undefined" && contact_status_enum_1.ContactStatusEnum) === "function" ? _a : Object)
], UpdateContactStatusEnumDto.prototype, "status", void 0);


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactStatusEnum = void 0;
var ContactStatusEnum;
(function (ContactStatusEnum) {
    ContactStatusEnum["NEW_MESSAGE"] = "new.message";
    ContactStatusEnum["IN_PROGRESS"] = "in.progress";
    ContactStatusEnum["REPLIED"] = "replied";
    ContactStatusEnum["RESLOVED"] = "resolved";
    ContactStatusEnum["SPAM"] = "spam";
    ContactStatusEnum["ESCALATED"] = "escalated";
    ContactStatusEnum["ARCHIVED"] = "archived";
})(ContactStatusEnum || (exports.ContactStatusEnum = ContactStatusEnum = {}));


/***/ }),
/* 162 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactsService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const typeorm_2 = __webpack_require__(32);
const contact_entity_1 = __webpack_require__(163);
let ContactsService = class ContactsService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async createcontact(createcontactDto) {
        const { name, email, message } = createcontactDto;
        const contact = this.contactRepository.create({
            name,
            message,
            email,
        });
        return this.contactRepository.save(contact);
    }
    getContacts(options) {
        const query = this.contactRepository.createQueryBuilder('contacts');
        return (0, nestjs_typeorm_paginate_1.paginate)(query, options);
    }
    async getContactById(contactId) {
        const contact = await this.contactRepository.findOne({
            where: { contactId, deletedAt: null },
            relations: ['country'],
        });
        if (!contact) {
            throw new common_1.NotFoundException();
        }
        return contact;
    }
    async updateContact(contactId, updateContactDto) {
        const contact = await this.contactRepository.findOne({
            where: { contactId, deletedAt: null },
        });
        if (!contact) {
            throw new common_1.NotFoundException();
        }
        Object.assign(contact, updateContactDto);
        contact.updatedAt = new Date();
        return this.contactRepository.save(contact);
    }
    async updateContactStatus(contactId, dto) {
        const contact = await this.contactRepository.findOne({
            where: { contactId, deletedAt: null },
        });
        if (!contact) {
            throw new common_1.NotFoundException();
        }
        Object.assign(contact, dto);
        contact.updatedAt = new Date();
        return this.contactRepository.save(contact);
    }
    async removeContact(contactId) {
        const contact = await this.contactRepository.findOne({
            where: { contactId, deletedAt: null },
        });
        if (!contact) {
            throw new common_1.NotFoundException();
        }
        contact.deletedAt = new Date();
        return this.contactRepository.save(contact);
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contact_entity_1.Contact)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ContactsService);


/***/ }),
/* 163 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Contact = void 0;
const swagger_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(32);
const contact_status_enum_1 = __webpack_require__(161);
let Contact = class Contact {
};
exports.Contact = Contact;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'contact_id' }),
    __metadata("design:type", Number)
], Contact.prototype, "contactId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Contact.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: contact_status_enum_1.ContactStatusEnum,
        default: contact_status_enum_1.ContactStatusEnum.NEW_MESSAGE,
    }),
    __metadata("design:type", typeof (_a = typeof contact_status_enum_1.ContactStatusEnum !== "undefined" && contact_status_enum_1.ContactStatusEnum) === "function" ? _a : Object)
], Contact.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'created_at', default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Contact.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'updated_at', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Contact.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'date', name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Contact.prototype, "deletedAt", void 0);
exports.Contact = Contact = __decorate([
    (0, typeorm_1.Entity)({ name: 'contacts' })
], Contact);


/***/ }),
/* 164 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogsModule = void 0;
const common_1 = __webpack_require__(5);
const blogs_service_1 = __webpack_require__(165);
const blogs_controller_1 = __webpack_require__(166);
const typeorm_1 = __webpack_require__(7);
const entities_1 = __webpack_require__(47);
let BlogsModule = class BlogsModule {
};
exports.BlogsModule = BlogsModule;
exports.BlogsModule = BlogsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Blog, entities_1.BlogContent, entities_1.BlogText])],
        controllers: [blogs_controller_1.BlogsController],
        providers: [blogs_service_1.BlogsService],
    })
], BlogsModule);


/***/ }),
/* 165 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogsService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const entities_1 = __webpack_require__(47);
const typeorm_2 = __webpack_require__(32);
const nestjs_typeorm_paginate_1 = __webpack_require__(57);
const helpers_1 = __webpack_require__(18);
const blog_content_type_1 = __webpack_require__(50);
let BlogsService = class BlogsService {
    constructor(blogContentRepository, blogRepository, blogTextRepository) {
        this.blogContentRepository = blogContentRepository;
        this.blogRepository = blogRepository;
        this.blogTextRepository = blogTextRepository;
        this.generateSlug = async (slug) => {
            let count = 2;
            let nextSlug = (0, helpers_1.slugify)({ text: slug });
            while (await this.blogRepository.findOne({ where: { slug: nextSlug } })) {
                nextSlug = (0, helpers_1.slugify)({ text: `${slug}-${count}` });
                count++;
            }
            return nextSlug;
        };
    }
    async getBlogById(blogId) {
        const blog = await this.blogRepository
            .createQueryBuilder('blog')
            .where('blog.deleted_at IS NULL')
            .andWhere('blog.blogId = :blogId', { blogId })
            .leftJoinAndSelect('blog.contents', 'blog-content')
            .andWhere('blog-content.deleted_at IS NULL')
            .leftJoinAndSelect('blog-content.paragraphs', 'blogs-text')
            .andWhere('blogs-text.deleted_at IS NULL')
            .leftJoinAndSelect('blog-content.blogContentImage', 'files')
            .getOne();
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        return blog;
    }
    async getBlogSitemap() {
        const query = this.blogRepository
            .createQueryBuilder('blog')
            .where('blog.deleted_at IS NULL')
            .andWhere('blog.published_at IS NOT NULL')
            .leftJoinAndSelect('blog.contents', 'blog-content')
            .leftJoinAndSelect('blog-content.blogContentImage', 'files');
        const data = await query.getMany();
        return data.map((obj) => {
            let image = '';
            const findImage = obj.contents.find((cont) => cont.blogContentImage?.url);
            if (findImage) {
                image = findImage.blogContentImage.url;
            }
            return {
                slug: obj.slug,
                image,
                updatedAt: obj.updatedAt,
                blogId: obj.blogId,
            };
        });
    }
    async createBlog(createBlogDto) {
        const { contents } = createBlogDto;
        const titleExist = contents.filter((cont) => cont.type === blog_content_type_1.BlogContentTypeEnum.TITLE);
        if (titleExist.length !== 1) {
            throw new common_1.NotAcceptableException('Must have one title');
        }
        const title = contents.find((cont) => cont.type === blog_content_type_1.BlogContentTypeEnum.TITLE);
        const slug = await this.generateSlug(title.paragraphs[0]);
        const newBlog = this.blogRepository.create({
            slug,
        });
        const blog = await this.blogRepository.save(newBlog);
        const newBlogContexts = [];
        for (const cont of contents) {
            const newBlogContent = this.blogContentRepository.create({
                type: cont.type,
                blog,
            });
            const blogContent = await this.blogContentRepository.save(newBlogContent);
            const newParagraphs = [];
            for (const paragraph of cont.paragraphs) {
                const newBlogText = this.blogTextRepository.create({
                    text: paragraph,
                    blogContent: blogContent,
                });
                const blogText = await this.blogTextRepository.save(newBlogText);
                newParagraphs.push(blogText);
            }
            blogContent.paragraphs = newParagraphs;
            newBlogContexts.push(blogContent);
        }
        blog.contents = newBlogContexts;
        return blog;
    }
    async searchAllBlogs(body) {
        const { isPublished, limit, page, title } = body;
        const options = { limit, page };
        const baseQuery = this.blogRepository
            .createQueryBuilder('blog')
            .where('blog.deleted_at IS NULL');
        if (isPublished) {
            baseQuery.andWhere('blog.published_at IS NOT NULL');
        }
        if (title) {
            baseQuery
                .andWhere((qb) => {
                const subQuery = qb
                    .subQuery()
                    .select('blog-content.blogId')
                    .from('blog-content', 'blog-content')
                    .leftJoin('blog-content.paragraphs', 'blog-text')
                    .where('blog-text.text LIKE :text')
                    .getQuery();
                return `blog.id IN ${subQuery}`;
            })
                .setParameter('text', `%${title}%`);
        }
        const paginateReadOnly = await (0, nestjs_typeorm_paginate_1.paginate)(baseQuery, options);
        const paginatedResult = { ...paginateReadOnly };
        if (paginatedResult.items.length === 0) {
            return paginatedResult;
        }
        const blogIds = paginatedResult.items.map((blog) => blog.blogId);
        const blogsWithRelations = await this.blogRepository
            .createQueryBuilder('blog')
            .leftJoinAndSelect('blog.contents', 'blog-content')
            .leftJoinAndSelect('blog-content.paragraphs', 'blog-text')
            .leftJoinAndSelect('blog-content.blogContentImage', 'files')
            .where('blog.blogId IN (:...ids)', { ids: blogIds })
            .getMany();
        paginatedResult.items = blogsWithRelations;
        return paginatedResult;
    }
    async getBlogBySlug(slug) {
        const blog = await this.blogRepository
            .createQueryBuilder('blog')
            .where('blog.deleted_at IS NULL')
            .andWhere('blog.published_at IS NOT NULL')
            .andWhere('blog.slug = :slug', { slug })
            .leftJoinAndSelect('blog.contents', 'blog-content')
            .andWhere('blog-content.deleted_at IS NULL')
            .leftJoinAndSelect('blog-content.paragraphs', 'blogs-text')
            .andWhere('blogs-text.deleted_at IS NULL')
            .leftJoinAndSelect('blog-content.blogContentImage', 'files')
            .getOne();
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        return blog;
    }
    async updateBlog(blogId, updateBlogDto) {
        const { content } = updateBlogDto;
        const blog = await this.blogRepository.findOne({
            where: { blogId, deletedAt: null },
            relations: ['contents'],
        });
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        const blogContents = blog.contents;
        if (content.blogContentId) {
            const toUpdateContent = await this.blogContentRepository.findOne({
                where: {
                    blogContentId: content.blogContentId,
                    deletedAt: null,
                },
            });
            if (!toUpdateContent) {
                throw new common_1.NotFoundException();
            }
            if (toUpdateContent.type === blog_content_type_1.BlogContentTypeEnum.TITLE &&
                content.type !== blog_content_type_1.BlogContentTypeEnum.TITLE) {
                throw new common_1.NotAcceptableException('Blog have one title');
            }
            toUpdateContent.updatedAt = new Date();
            toUpdateContent.type = content.type;
            toUpdateContent.order = content.order;
            const newParagraphs = [];
            for (const paragraph of content.paragraphs) {
                if (paragraph.blogTextId) {
                    const paragraphToUpdate = await this.blogTextRepository.findOne({
                        where: {
                            blogTextId: paragraph.blogTextId,
                            deletedAt: null,
                        },
                    });
                    if (!paragraphToUpdate)
                        continue;
                    Object.assign(paragraphToUpdate, paragraph);
                    paragraphToUpdate.updatedAt = new Date();
                    this.blogTextRepository.save(paragraphToUpdate);
                    newParagraphs.push(paragraphToUpdate);
                }
                else {
                    const newBlogText = this.blogTextRepository.create({
                        text: paragraph.text,
                        blogContent: toUpdateContent,
                    });
                    const blogText = await this.blogTextRepository.save(newBlogText);
                    newParagraphs.push(blogText);
                }
            }
            await this.blogContentRepository.save(toUpdateContent);
            toUpdateContent.paragraphs = newParagraphs;
            const index = blogContents.findIndex((cont) => cont.blogContentId == toUpdateContent.blogContentId);
            toUpdateContent[index] = toUpdateContent;
        }
        else {
            const newBlogContent = this.blogContentRepository.create({
                order: content.order,
                type: content.type,
                blog,
            });
            const blogContent = await this.blogContentRepository.save(newBlogContent);
            const newParagraphs = [];
            for (const paragraph of content.paragraphs) {
                const newBlogText = this.blogTextRepository.create({
                    order: paragraph.order,
                    text: paragraph.text,
                    blogContent: blogContent,
                });
                const blogText = await this.blogTextRepository.save(newBlogText);
                newParagraphs.push(blogText);
            }
            blogContent.paragraphs = newParagraphs;
            blogContents.push(blogContent);
        }
        blog.updatedAt = new Date();
        const updatedBlog = await this.blogRepository.save(blog);
        updatedBlog.contents = blogContents.filter((cont) => !cont.deletedAt);
        return updatedBlog;
    }
    async removeBlog(blogId) {
        const blog = await this.blogRepository.findOne({
            where: { blogId, deletedAt: null },
        });
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        blog.deletedAt = new Date();
        blog.publishedAt = null;
        return this.blogRepository.save(blog);
    }
    async publishOrUnpublishBlog(blogId) {
        const blog = await this.blogRepository.findOne({
            where: { blogId, deletedAt: null },
        });
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        if (blog.publishedAt === null) {
            blog.publishedAt = new Date();
        }
        else {
            blog.publishedAt = null;
        }
        return this.blogRepository.save(blog);
    }
    async removeBlogText(blogTextId) {
        const blogText = await this.blogTextRepository.findOne({
            where: { blogTextId, deletedAt: null },
        });
        if (!blogText) {
            throw new common_1.NotFoundException();
        }
        blogText.deletedAt = new Date();
        return this.blogTextRepository.save(blogText);
    }
    async removeBlogContent(blogContentId) {
        const blogContent = await this.blogContentRepository.findOne({
            where: { blogContentId, deletedAt: null },
        });
        if (!blogContent) {
            throw new common_1.NotFoundException();
        }
        blogContent.deletedAt = new Date();
        return this.blogContentRepository.save(blogContent);
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.BlogContent)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Blog)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.BlogText)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], BlogsService);


/***/ }),
/* 166 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogsController = void 0;
const common_1 = __webpack_require__(5);
const blogs_service_1 = __webpack_require__(165);
const decorators_1 = __webpack_require__(14);
const swagger_1 = __webpack_require__(3);
const entities_1 = __webpack_require__(47);
const dto_1 = __webpack_require__(167);
let BlogsController = class BlogsController {
    constructor(blogsService) {
        this.blogsService = blogsService;
    }
    createBlog(createBlogDto) {
        return this.blogsService.createBlog(createBlogDto);
    }
    searchAllBlogs(body) {
        return this.blogsService.searchAllBlogs(body);
    }
    getBlogSitemap() {
        return this.blogsService.getBlogSitemap();
    }
    publishOrUnpublishBlog({ blogId }) {
        return this.blogsService.publishOrUnpublishBlog(blogId);
    }
    getBlogById(id) {
        return this.blogsService.getBlogById(id);
    }
    getBlogBySlug(slug) {
        return this.blogsService.getBlogBySlug(slug);
    }
    updateBlog(id, updateBlogDto) {
        return this.blogsService.updateBlog(id, updateBlogDto);
    }
    removeBlog(id) {
        return this.blogsService.removeBlog(id);
    }
    removeBlogContent(id) {
        return this.blogsService.removeBlogContent(id);
    }
    removeBlogText(id) {
        return this.blogsService.removeBlogText(id);
    }
};
exports.BlogsController = BlogsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Blog' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The Blog has been successfully created.',
        type: entities_1.Blog,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if title is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateBlogDto !== "undefined" && dto_1.CreateBlogDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "createBlog", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('/search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search blogs by title' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return all blogs.',
        type: [entities_1.Blog],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.SearchBlogDto !== "undefined" && dto_1.SearchBlogDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "searchAllBlogs", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/sitemap'),
    (0, swagger_1.ApiOperation)({ summary: 'Get blogs for sitemap' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the sitemap.',
        type: [dto_1.BlogSitemapDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogSitemap", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('/publish-blog'),
    (0, swagger_1.ApiOperation)({ summary: 'Get blogs for sitemap' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the sitemap.',
        type: [dto_1.BlogSitemapDto],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.PublishBlogDto !== "undefined" && dto_1.PublishBlogDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "publishOrUnpublishBlog", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Blog by id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the Blog.',
        type: entities_1.Blog,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if Blog is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogById", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a certificate by slug' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Return the certificate.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if certificate is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogBySlug", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a blog with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: 'Return the blog.',
        type: entities_1.Blog,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if blog is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof dto_1.UpdateBlogDto !== "undefined" && dto_1.UpdateBlogDto) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "updateBlog", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a blog with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the blog.',
        type: entities_1.Blog,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if blog is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "removeBlog", null);
__decorate([
    (0, common_1.Delete)('/blog-content/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a blog with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the blog.',
        type: entities_1.Blog,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if blog is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "removeBlogContent", null);
__decorate([
    (0, common_1.Delete)('/blog-text/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a blog with id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Return the blog.',
        type: entities_1.Blog,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Throws exception if blog is not found.',
        type: common_1.NotFoundException,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "removeBlogText", null);
exports.BlogsController = BlogsController = __decorate([
    (0, common_1.Controller)('blogs'),
    (0, swagger_1.ApiTags)('Blogs'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [typeof (_a = typeof blogs_service_1.BlogsService !== "undefined" && blogs_service_1.BlogsService) === "function" ? _a : Object])
], BlogsController);


/***/ }),
/* 167 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(168), exports);
__exportStar(__webpack_require__(170), exports);
__exportStar(__webpack_require__(172), exports);
__exportStar(__webpack_require__(173), exports);
__exportStar(__webpack_require__(169), exports);
__exportStar(__webpack_require__(171), exports);
__exportStar(__webpack_require__(174), exports);
__exportStar(__webpack_require__(175), exports);


/***/ }),
/* 168 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBlogDto = void 0;
const create_blog_content_dto_1 = __webpack_require__(169);
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(61);
const class_validator_1 = __webpack_require__(62);
class CreateBlogDto {
}
exports.CreateBlogDto = CreateBlogDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_blog_content_dto_1.CreateBlogContentDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => create_blog_content_dto_1.CreateBlogContentDto),
    __metadata("design:type", Array)
], CreateBlogDto.prototype, "contents", void 0);


/***/ }),
/* 169 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBlogContentDto = void 0;
const blog_content_type_1 = __webpack_require__(50);
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class CreateBlogContentDto {
}
exports.CreateBlogContentDto = CreateBlogContentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateBlogContentDto.prototype, "paragraphs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBlogContentDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: blog_content_type_1.BlogContentTypeEnum,
        enumName: 'BlogContentTypeEnum',
        description: 'Type must be one of the following: title, text.center, text.left, text.right',
    }),
    (0, class_validator_1.IsEnum)(blog_content_type_1.BlogContentTypeEnum, {
        message: 'Type must be one of the following: title, text.center, text.left, text.right',
    }),
    __metadata("design:type", typeof (_a = typeof blog_content_type_1.BlogContentTypeEnum !== "undefined" && blog_content_type_1.BlogContentTypeEnum) === "function" ? _a : Object)
], CreateBlogContentDto.prototype, "type", void 0);


/***/ }),
/* 170 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBlogDto = void 0;
const update_blog_content_dto_1 = __webpack_require__(171);
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(61);
const class_validator_1 = __webpack_require__(62);
class UpdateBlogDto {
}
exports.UpdateBlogDto = UpdateBlogDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: update_blog_content_dto_1.UpdateBlogContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => update_blog_content_dto_1.UpdateBlogContentDto),
    __metadata("design:type", typeof (_a = typeof update_blog_content_dto_1.UpdateBlogContentDto !== "undefined" && update_blog_content_dto_1.UpdateBlogContentDto) === "function" ? _a : Object)
], UpdateBlogDto.prototype, "content", void 0);


/***/ }),
/* 171 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBlogContentDto = void 0;
const class_validator_1 = __webpack_require__(62);
const update_blog_text_dto_1 = __webpack_require__(172);
const class_transformer_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(3);
const blog_content_type_1 = __webpack_require__(50);
class UpdateBlogContentDto {
}
exports.UpdateBlogContentDto = UpdateBlogContentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateBlogContentDto.prototype, "blogContentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBlogContentDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [update_blog_text_dto_1.UpdateBlogTextDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => update_blog_text_dto_1.UpdateBlogTextDto),
    __metadata("design:type", Array)
], UpdateBlogContentDto.prototype, "paragraphs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: blog_content_type_1.BlogContentTypeEnum,
        enumName: 'BlogContentTypeEnum',
        description: 'Type must be one of the following: title, text.center, text.left, text.right',
    }),
    (0, class_validator_1.IsEnum)(blog_content_type_1.BlogContentTypeEnum, {
        message: 'Type must be one of the following: title, text.center, text.left, text.right',
    }),
    __metadata("design:type", typeof (_a = typeof blog_content_type_1.BlogContentTypeEnum !== "undefined" && blog_content_type_1.BlogContentTypeEnum) === "function" ? _a : Object)
], UpdateBlogContentDto.prototype, "type", void 0);


/***/ }),
/* 172 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBlogTextDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class UpdateBlogTextDto {
}
exports.UpdateBlogTextDto = UpdateBlogTextDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateBlogTextDto.prototype, "blogTextId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBlogTextDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBlogTextDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", String)
], UpdateBlogTextDto.prototype, "isBold", void 0);


/***/ }),
/* 173 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBlogTextDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class CreateBlogTextDto {
}
exports.CreateBlogTextDto = CreateBlogTextDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogTextDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBlogTextDto.prototype, "order", void 0);


/***/ }),
/* 174 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublishBlogDto = exports.SearchBlogDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class SearchBlogDto {
}
exports.SearchBlogDto = SearchBlogDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchBlogDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchBlogDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchBlogDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], SearchBlogDto.prototype, "isPublished", void 0);
class PublishBlogDto {
}
exports.PublishBlogDto = PublishBlogDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PublishBlogDto.prototype, "blogId", void 0);


/***/ }),
/* 175 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogSitemapDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(62);
class BlogSitemapDto {
}
exports.BlogSitemapDto = BlogSitemapDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BlogSitemapDto.prototype, "blogId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogSitemapDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogSitemapDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BlogSitemapDto.prototype, "updatedAt", void 0);


/***/ }),
/* 176 */
/***/ ((module) => {

module.exports = require("body-parser");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
const bodyParser = __webpack_require__(176);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
async function bootstrap() {
    const baseUrl = 'api';
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT', 3200);
    const client = configService.get('APP_CLIENT', 'http://localhost:5300');
    const dashboard = configService.get('APP_DASHBOARD', 'http://localhost:5200');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Pomen API')
        .setDescription('Our API provides a seamless way to create and manage memorial profiles. It allows developers to integrate features for storing and sharing memories, uploading photos and videos, and locating memorial sites. With built-in search functionality, users can easily find profiles by name and explore their biographies, family connections, and important life events. The API supports personalization options, including profile updates and interaction with guestbooks. Designed for scalability and ease of use, our API empowers developers to build meaningful experiences around preserving memories and honoring loved ones.')
        .setBasePath(baseUrl)
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'access-token')
        .build();
    app.setGlobalPrefix(baseUrl);
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(baseUrl, app, document);
    app.enableCors({
        origin: [dashboard, client],
        methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization, X-Portal-Type',
        credentials: true,
    });
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(port);
}
bootstrap();

})();

/******/ })()
;