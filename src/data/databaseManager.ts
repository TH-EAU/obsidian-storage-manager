import { Pool } from "pg";
import DatabaseManagerPlugin from "main";
import { App } from "obsidian";
import { DatabaseManagerSettings } from "@src/models/DatabaseSettings.model";

export class DbManager {
	private static pool: Pool;
	private readonly _dbSettings: DatabaseManagerSettings;

	constructor(dbSettings: DatabaseManagerSettings) {
		console.log("create pool");
		if (!DbManager.pool) {
			this._dbSettings = dbSettings;
			DbManager.pool = new Pool(this._dbSettings.database);
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
