import { executeQuery } from "./ormService";
import { PoolClient } from "pg";
import {
	Field,
	Filter,
	Row,
	Sort,
	dataTable,
	dataTableResult,
} from "@models/DataTable.model";

export const getData = async (
	tableName: string,
	{}: Filter,
	{}: Sort
): Promise<dataTableResult> => {
	return await executeQuery(async (client: PoolClient) => {
		const result = await client.query(`SELECT * FROM "${tableName}"`);
		const types = await client.query(
			`SELECT column_name, data_type, udt_name, is_nullable FROM information_schema.columns WHERE table_name = '${tableName}';`
		);

		const fields = result.fields.map((f, i): Field => {
			return {
				name: f.name,
				type: types.rows[i].data_type,
			};
		});

		fields.shift();

		const rows = result.rows.map((r): Row => {
			const row = { ...r };
			delete row.id;
			return {
				id: r.id,
				values: row,
			};
		});

		return {
			fields,
			rows,
		};
	});
};
