import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FancyTable from "@components/FancyTable";
import TableStack from "@components/TableStack";
import { Container } from "@chakra-ui/react";

const DatabaseView: React.FC = () => {
	const [activeTable, setActiveTable] = useState<string>("");

	const onSelect = (tableName: string) => {
		setActiveTable(tableName);
	};

	return (
		<Container>
			<AnimatePresence>
				{activeTable && <FancyTable tableName={activeTable} />}
				{!activeTable && <TableStack onSelect={onSelect} />}
			</AnimatePresence>
		</Container>
	);
};

export default DatabaseView;
