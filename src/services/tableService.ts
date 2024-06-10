import { DbManager } from "@data/databaseManager";
import { TABLE_TYPES, dataTable } from "@models/DataTable.model";

const pool = DbManager.getPool();

console.log("laaa");

export const getTable = async (tableName: string) => {
	const client = await pool.connect();
	return await client.query(`SELECT * FROM "${tableName}"`);
};

export const createTable = async () => {
	console.log(
		createTableQueryString({
			name: "notes",
			schema: {
				columns: [
					{
						name: "nom de l'élève",
						type: TABLE_TYPES.relation,
						relatedTable: {
							name: "Student",
							onField: "name",
						},
					},
					{
						name: "compétence",
						type: TABLE_TYPES.text,
					},
					{
						name: "status",
						type: TABLE_TYPES.list,
					},
				],
			},
		})
	);
};

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
