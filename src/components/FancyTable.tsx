import {
	Table,
	Thead,
	Tbody,
	Tr,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTable } from "@src/hooks/data.queries";
import FancyRow from "./fancyTable/FancyRow";
import FancyHeaderField from "./fancyTable/FancyHeaderField";

const FancyTable: React.FC<{ tableName: string }> = ({ tableName }) => {
	const { data } = useTable(tableName);

	return (
		<motion.div
			key="table"
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -500 }}
			transition={{ duration: 0.2 }}
		>
			<TableContainer>
				<Table variant="unstyled" border="1px solid #555">
					<TableCaption>Table Description</TableCaption>
					<Thead>
						<Tr>
							{data?.fields.map((f) => (
								<FancyHeaderField field={f} key={f.name} />
							))}
						</Tr>
					</Thead>
					<Tbody border="1px solid #555">
						{data?.rows.map((r) => (
							<FancyRow
								key={JSON.stringify(r)}
								id={r.id}
								values={r.values}
							/>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</motion.div>
	);
};

export default FancyTable;
