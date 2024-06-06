import { Pool } from "pg";

export class DbManager {
	private static pool: Pool;

	constructor() {
		if (!DbManager.pool) {
			DbManager.pool = new Pool({
				user: "postgres",
				host: "localhost",
				database: "obsidian",
				password: "root",
				port: 5432, // Le port par défaut de PostgreSQL est 5432
			});
		}
	}

	static getPool(): Pool {
		if (!DbManager.pool) {
			throw new Error(
				"Pool has not been initialized. Please create an instance of DbManager first."
			);
		}
		return DbManager.pool;
	}
}
