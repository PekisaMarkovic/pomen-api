import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1744885704974 implements MigrationInterface {
    name = 'Migration1744885704974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "countries"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.151Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs-text"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.192Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.196Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "blog-content"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.196Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.196Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "orders"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.197Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "cities"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.197Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "cemeteries"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.214Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "getherings"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.219Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "qrcodes"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.223Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "leads"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.235Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.235Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.283Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "tributes"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.284Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "contacts"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-17T10:28:26.475Z"'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "contacts"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "tributes"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "leads"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "qrcodes"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "getherings"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "cemeteries"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "cities"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "orders"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "blog-content"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs-text"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
        await queryRunner.query(`
            ALTER TABLE "countries"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-17'
        `);
    }

}
