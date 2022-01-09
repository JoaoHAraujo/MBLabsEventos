import { createConnection } from "typeorm";
import path from "path";


export const initDatabase = async() => {
 await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "mblabs123",
  database: "mblabs_eventos",
  entities: [`${path.join(__dirname, "entities/*.ts")}`],
  uuidExtension: 'uuid-ossp',
})
}

