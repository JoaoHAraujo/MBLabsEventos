import { createConnection } from "typeorm";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
export const initDatabase = async() => {
 await createConnection({
  type: "postgres",
  host: process.env.TYPEORM_HOST as string,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME as string,
  password: process.env.TYPEORM_PASSWORD as string,
  database: process.env.TYPEORM_DATABASE as string,
  entities: [`${path.join(__dirname, "entities/*.ts")}`],
  uuidExtension: 'uuid-ossp',
})
}

