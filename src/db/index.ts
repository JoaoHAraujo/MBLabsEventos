import { createConnection } from "typeorm";

createConnection()
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Unable to connect to database");
  });
