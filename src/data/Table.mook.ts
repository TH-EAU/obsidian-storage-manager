import { TABLE_TYPES } from "@src/models/DataTable.model";

export const getDefaultDataTable = (tableName: string) => {
	return {
		name: tableName,
		schema: {
			fields: [
				{
					name: "nom",
					type: TABLE_TYPES.text,
				},
				{
					name: "status",
					type: TABLE_TYPES.list,
				},
			],
		},
	};
};
