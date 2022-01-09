import { initDatabase } from "./src/db";

(async (): Promise<void> => {
  await initDatabase();
  const app = require("./src/app").default;
  app.listen(3333, () => {
    console.log(`Aplication running on: http://localhost:3333`);
  });
})();
