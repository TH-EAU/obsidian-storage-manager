import { DbManager } from "@src/data/databaseManager";
import { Field, TABLE_TYPES, dataTable } from "@models/DataTable.model";

export const executeQuery = async (callback: Function) => {
	const pool = DbManager.getPool();
	const client = await pool.connect();
	try {
		return callback(client);
	} catch (error) {
		throw new Error(`Error creating table : ${error}`);
	} finally {
		client.release();
	}
};

export const formatForeignKey = (field: Field) => {
	return `_fk_id${field.relatedTable?.name.toLocaleLowerCase()}_${
		field.relatedTable?.onField
	}_`;
};

export const createTableQueryString = (schema: dataTable) => {
	let fields: string = "";

	schema.schema.fields.forEach((field, i) => {
		fields += `${field.name} ${field.type} NOT NULL`;

		if (field.type === TABLE_TYPES.relation) {
			fields += `FOREIGN KEY (${formatForeignKey(field)}) REFERENCES "${
				field.relatedTable?.name
			}"(id) ON DELETE CASCADE`;
		}
		fields += i < schema.schema.fields.length - 1 ? "," : "";
	});

	return `
      CREATE TABLE IF NOT EXISTS ${schema.name} (
        id SERIAL PRIMARY KEY,
        ${fields}
      );
    `;
};

export const addFieldQueryString = (tableName: string, field: Field) => {
	let query: string = "";
	query += `ALTER TABLE ${tableName} ADD COLUMN ${field.name} ${field.type};`;

	if (field.type === TABLE_TYPES.relation) {
		query += `FOREIGN KEY (${formatForeignKey(field)}) REFERENCES "${
			field.relatedTable?.name
		}"(id) ON DELETE CASCADE`;
	}

	return query;
};

export const addConstraintOnField = (tableName: string, field: Field) => {
	const foreignKey = formatForeignKey(field);

	return `ALTER TABLE "${tableName}" ADD CONSTRAINT ${formatForeignKey(
		field
	)} FOREIGN KEY (${foreignKey}) REFERENCES "${
		field.relatedTable?.name
	}"(id) ON DELETE CASCADE`;
};

export const updateFieldName = (
	tableName: string,
	oldFieldName: string,
	newFieldName: string
) => {
	return `ALTER TABLE "${tableName}"
      RENAME COLUMN ${oldFieldName} TO ${newFieldName};`;
};

export const updateFieldType = (
	tableName: string,
	field: Field,
	oldType: TABLE_TYPES,
	newType: TABLE_TYPES
) => {
	let query: string = "";
	if (oldType === TABLE_TYPES.relation) {
		query += `ALTER TABLE "${tableName}" DROP CONSTRAINT ${formatForeignKey(
			field
		)};`;
	}
	query += `ALTER TABLE "${tableName}" ALTER COLUMN ${field.name} TYPE ${newType}`;
};
