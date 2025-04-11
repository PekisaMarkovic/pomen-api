import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1744229340463 implements MigrationInterface {
    name = 'InitMigration1744229340463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."certificate_status_enum" AS ENUM('draft', 'completed', 'published', 'suspended')
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ADD "status" "public"."certificate_status_enum" NOT NULL DEFAULT 'draft'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ADD "pricing_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "countries"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.684Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "orders"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.691Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "cities"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.692Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "cemeteries"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.709Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs-text"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.727Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.731Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "blog-content"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.731Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "getherings"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.736Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "qrcodes"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.741Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "tributes"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.746Z"'
        `);
        await queryRunner.query(`
            ALTER TYPE "public"."pricing_packages_enums_enum"
            RENAME TO "pricing_packages_enums_enum_old"
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."pricings_plan_enum" AS ENUM('free', 'beginner', 'standard', 'premium')
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "plan" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "plan" TYPE "public"."pricings_plan_enum" USING "plan"::"text"::"public"."pricings_plan_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "plan"
            SET DEFAULT 'beginner'
        `);
        await queryRunner.query(`
            DROP TYPE "public"."pricing_packages_enums_enum_old"
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings" DROP CONSTRAINT "UQ_pricings_plan"
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.750Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.794Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:01.796Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "contacts"
            ALTER COLUMN "created_at"
            SET DEFAULT '"2025-04-09T20:09:02.177Z"'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ADD CONSTRAINT "FK_ce1b842883abfae9f946bc57d7c" FOREIGN KEY ("pricing_id") REFERENCES "pricings"("pricing_id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "certificate" DROP CONSTRAINT "FK_ce1b842883abfae9f946bc57d7c"
        `);
        await queryRunner.query(`
            ALTER TABLE "contacts"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "created_at"
            SET DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ADD CONSTRAINT "UQ_pricings_plan" UNIQUE ("plan")
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."pricing_packages_enums_enum_old" AS ENUM('free', 'beginner', 'standard', 'premium')
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "plan" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "plan" TYPE "public"."pricing_packages_enums_enum_old" USING "plan"::"text"::"public"."pricing_packages_enums_enum_old"
        `);
        await queryRunner.query(`
            ALTER TABLE "pricings"
            ALTER COLUMN "plan"
            SET DEFAULT 'beginner'
        `);
        await queryRunner.query(`
            DROP TYPE "public"."pricings_plan_enum"
        `);
        await queryRunner.query(`
            ALTER TYPE "public"."pricing_packages_enums_enum_old"
            RENAME TO "pricing_packages_enums_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "tributes"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "qrcodes"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "getherings"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "blog-content"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "blogs-text"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "cemeteries"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "cities"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "orders"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "countries"
            ALTER COLUMN "created_at"
            SET DEFAULT '2025-04-07'
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate" DROP COLUMN "pricing_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "certificate" DROP COLUMN "status"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."certificate_status_enum"
        `);
    }

}
