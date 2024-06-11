import { Pool } from "pg";
import DatabaseManagerPlugin from "main";
import { App } from "obsidian";
import { DatabaseManagerSettings } from "@src/models/DatabaseSettings.model";

export class DbManager {
	private static pool: Pool;
	private static _dbSettings: DatabaseManagerSettings;

	static setPool() {
		DbManager.pool = new Pool(this._dbSettings.database);
	}

	static getPool(): Pool {
		if (!DbManager.pool) {
			throw new Error("Pool has not been initialized.");
		}
		return DbManager.pool;
	}

	static setDbSettings(dbSettings: DatabaseManagerSettings) {
		this._dbSettings = dbSettings;
	}
}
