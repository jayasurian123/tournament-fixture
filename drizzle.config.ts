import { defineConfig } from 'drizzle-kit';
// import "dotenv/config";

export default defineConfig({
  dialect: 'sqlite',
  schema: './src/db/*.sql.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: 'file:./src/db/football.sqlite.db'
  }
});
