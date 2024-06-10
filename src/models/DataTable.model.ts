export interface dataTable {
	name: string;
	schema: {
		columns: {
			name: string;
			type: TABLE_TYPES;
			relatedTable?: {
				name: string;
				onField: string;
			};
		}[];
	};
}

export enum TABLE_TYPES {
	text = "TEXT",
	relation = "INT",
	number = "INT",
	list = "TEXT[]",
	leaf = "TEXT[]",
}
