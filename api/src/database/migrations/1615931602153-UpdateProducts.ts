import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateProducts1615931602153 implements MigrationInterface {
	name = 'UpdateProducts1615931602153'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "temporary_products" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "price" decimal NOT NULL, "offer" decimal, "image_url" varchar NOT NULL)'
		)

		await queryRunner.query(
			'INSERT INTO "temporary_products"("id", "name", "price", "offer", "image_url") SELECT "id", "name", "price", "offer", "image_url" FROM "products"'
		)

		await queryRunner.query('DROP TABLE "products"')

		await queryRunner.query(
			'ALTER TABLE "temporary_products" RENAME TO "products"'
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'ALTER TABLE "products" RENAME TO "temporary_products"'
		)

		await queryRunner.query(
			'CREATE TABLE "products" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL, "offer" integer, "image_url" varchar NOT NULL)'
		)

		await queryRunner.query(
			'INSERT INTO "products"("id", "name", "price", "offer", "image_url") SELECT "id", "name", "price", "offer", "image_url" FROM "temporary_products"'
		)

		await queryRunner.query('DROP TABLE "temporary_products"')
	}
}
