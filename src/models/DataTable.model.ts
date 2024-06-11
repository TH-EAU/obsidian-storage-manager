export interface dataTable {
	name: string;
	schema: {
		fields: Field[];
	};
}

export interface dataTableResult {
	fields: Field[];
	rows: Row[];
}

export interface Field {
	name: string;
	type: TABLE_TYPES;
	relatedTable?: {
		name: string;
		onField: string;
	};
}

export interface Row {
	id: number;
	values: any;
}

export interface Filter {
	field?: string;
	values?: string[];
}

export interface Sort {
	field?: string;
	ascendant?: boolean;
}

export enum TABLE_TYPES {
	text = "TEXT",
	relation = "INT",
	number = "INT",
	list = "TEXT[]",
	leaf = "TEXT[]",
	check = "BOOLEAN",
}

export enum TYPES {
	text = "text",
	number = "integer",
	array = "ARRAY",
}
