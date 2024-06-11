import { Row } from "@src/models/DataTable.model";
import FancyDataField from "./FancyDataField";
import { Tr } from "@chakra-ui/react";

const FancyRow: React.FC<Row> = ({ id, values }) => {
	return (
		<Tr>
			{Object.keys(values).map((v) => (
				<FancyDataField data={values[v]} />
			))}
		</Tr>
	);
};

export default FancyRow;
