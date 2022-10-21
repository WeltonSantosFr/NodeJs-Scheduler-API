import { MigrationInterface, QueryRunner } from "typeorm";

export class propertiesAlter1666291420624 implements MigrationInterface {
    name = 'propertiesAlter1666291420624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" DROP DEFAULT`);
    }

}
