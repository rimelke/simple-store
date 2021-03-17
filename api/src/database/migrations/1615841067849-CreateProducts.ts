import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateProducts1615841067849 implements MigrationInterface {
	name = 'CreateProducts1615841067849'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "products" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL, "offer" integer, "image_url" varchar NOT NULL)'
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('DROP TABLE "products"')
	}
}
