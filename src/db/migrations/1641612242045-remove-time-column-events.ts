import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class removeTimeColumnEvents1641612242045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("events", "time");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "events",
      new TableColumn({
        name: "time",
        type: "time",
      })
    );
  }
}
