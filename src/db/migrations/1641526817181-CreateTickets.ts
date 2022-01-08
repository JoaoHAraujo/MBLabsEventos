import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTickets1641526817181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tickets",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "buy_date",
            type: "date",
          },
          {
            name: "ticket_code",
            type: "varchar",
          },
          {
            name: "event_id",
            type: "uuid"
          },
          {
            name: "buyer_id",
            type: "uuid"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
            {
                name: "fk_ticket_event",
                columnNames: ["event_id"],
                referencedTableName: "events",
                referencedColumnNames:["id"]
            },
            {
                name:"fk_ticket_buyer",
                columnNames: ["buyer_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"]
            }
        ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets")
    }

}
