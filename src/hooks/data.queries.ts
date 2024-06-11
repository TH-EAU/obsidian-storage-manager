import { getData } from "@src/services/dataService";
import { UseQueryResult, useQuery } from "react-query";
import { Filter, Sort, dataTableResult } from "@src/models/DataTable.model";

export const useTable = (
	tableName: string,
	enabled: boolean = true,
	filter: Filter = {},
	sort: Sort = {}
): UseQueryResult<dataTableResult> => {
	return useQuery(
		["table", tableName, filter, sort],
		async () => await getData(tableName, filter, sort),
		{
			enabled,
		}
	);
};
