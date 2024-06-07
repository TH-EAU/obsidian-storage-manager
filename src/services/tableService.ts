import { DbManager } from "@data/databaseManager";
import { dataTable } from "@models/DataTable.model";

const pool = DbManager.getPool();

export const getTable = async (tableName: string) => {
	const client = await pool.connect();
	return await client.query(`SELECT * FROM "${tableName}"`);
};

export const createTable = async (schema: dataTable) => {};

const createTableQueryString = (schema: dataTable) => {
	let columns: string = "";

	schema.schema.columns.forEach((col) => {
		columns += `${col.name} ${col.type} NOT NULL,`;
	});

	return `
      CREATE TABLE IF NOT EXISTS ${schema.name} (
        id SERIAL PRIMARY KEY,
        ${columns}
      );
    `;
};
