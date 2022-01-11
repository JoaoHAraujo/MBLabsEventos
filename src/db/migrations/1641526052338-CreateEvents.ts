import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEvents1641526052338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "events",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "date",
            type: "date",
          },
          {
            name: "time",
            type: "time",
          },
          {
            name: "location",
            type: "varchar",
          },
          {
            name: "quantity",
            type: "int",
          },
          {
            name: "price",
            type: "numeric",
          },
          {
            name: "abbreviation",
            type: "varchar"
          },
          {
            name: "owner_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          }
        ],
        foreignKeys: [
          {
            name: "fk_owner_event",
            columnNames: ["owner_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("events")
  }
}
