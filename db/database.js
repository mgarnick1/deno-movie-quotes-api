import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        this.client = new Client({
            user: 'postgres',
            database: 'demo_database',
            hostname: 'localhost',
            password: 'postgress55',
            port: 5432
        })

        await this.client.connect();
    }
}

export default new Database().client