import { dataTable, Field } from "@models/DataTable.model";
import { PoolClient } from "pg";
import {
	executeQuery,
	createTableQueryString,
	addConstraintOnField,
	addFieldQueryString,
} from "./ormService";

export const getAllTables = async () => {
	return await executeQuery(async (client: PoolClient) => {
		const result = await client.query(
			"SELECT * FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE';"
		);
		return result;
	});
};

export const createTable = async (table: dataTable) => {
	return await executeQuery(async (client: PoolClient) => {
		return await client.query(createTableQueryString(table));
	});
};

export const addField = async (tableName: string, field: Field) => {
	await executeQuery(async (client: PoolClient) => {
		return await client.query(addFieldQueryString(tableName, field));
	});
};
