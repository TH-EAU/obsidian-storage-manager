export interface dataTable {
	name: string;
	schema: {
		columns: [
			{
				name: string;
				type: TABLE_TYPES;
			}
		];
	};
}

enum TABLE_TYPES {
	text = "TEXT",
	number = "INT",
	list = "TEXT[]",
}
