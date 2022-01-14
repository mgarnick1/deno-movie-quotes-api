import { Client } from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";


class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: Deno.env.get("DB_USER"),
      database: Deno.env.get("DBNAME"),
      hostname: Deno.env.get("DB_HOST"),
      password: Deno.env.get("DB_PASS"),
      port: 5432,
    });

    await this.client.connect();
  }
}

export default new Database().client;
