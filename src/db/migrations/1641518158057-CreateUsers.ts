import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1641518158057 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('create extension if not exists "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "age",
            type: "int",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "document",
            type: "varchar",
          },
          {
            name: "profile_type",
            type: "int",
          },
          {
            name: "password",
            type: "varchar",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
    await queryRunner.query('drop extension "uuid-ossp"');
  }
}
