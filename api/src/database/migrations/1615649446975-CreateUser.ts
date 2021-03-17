import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUser1615649446975 implements MigrationInterface {
	name = 'CreateUser1615649446975'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))'
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('DROP TABLE "users"')
	}
}
