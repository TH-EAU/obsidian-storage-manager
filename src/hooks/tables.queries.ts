import { getAllTables } from "@src/services/tableService";
import { useQuery } from "react-query";

export const useTables = () => {
	return useQuery(["tables"], getAllTables);
};
