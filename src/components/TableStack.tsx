import { useEffect, useState } from "react";
import {
	Center,
	Heading,
	Text,
	InputGroup,
	Input,
	InputRightElement,
	Kbd,
	Stack,
	HStack,
} from "@chakra-ui/react";
import { createTable } from "@services/tableService";
import { getDefaultDataTable } from "@data/Table.mook";
import { useTables } from "@hooks/tables.queries";
import { VscAdd, VscLayers, VscVersions, VscArrowRight } from "react-icons/vsc";
import { AiOutlineEnter } from "react-icons/ai";

import { motion } from "framer-motion";

const TableStack: React.FC<{ onSelect: (tableName: string) => void }> = ({
	onSelect,
}) => {
	const [tableName, setTableName] = useState<string>("");
	const { data: tables } = useTables();

	const onChangeTableName = (e: any) => {
		setTableName(e.target.value);
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		createTable(getDefaultDataTable(tableName));
		// @TODO: invalidate query
	};

	useEffect(() => {
		console.log(tables);
	}, [tables]);

	return (
		<motion.div
			key="box"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, x: -500 }}
			transition={{ duration: 0.2 }}
		>
			<Center>
				<Stack>
					<HStack alignItems="end">
						<Heading fontSize="small" mb={0}>
							New table
						</Heading>
						<VscAdd />
					</HStack>
					<form onSubmit={onSubmit}>
						<Stack backgroundColor="#403a8333" rounded="xl" p={5}>
							<HStack>
								<VscLayers />
								<Text fontSize={12}>Create new table</Text>
							</HStack>
							<InputGroup size="md">
								<Input
									name="tableName"
									pr="4.5rem"
									border="1px solid #403a83"
									onChange={onChangeTableName}
								/>
								<InputRightElement width="4.5rem">
									<Kbd
										backgroundColor="#403a8333"
										marginRight={2}
									>
										<HStack>
											<Text>Enter</Text>
											<AiOutlineEnter />
										</HStack>
									</Kbd>
								</InputRightElement>
							</InputGroup>
						</Stack>
					</form>

					<HStack alignItems="end">
						<Heading fontSize="small" mb={0}>
							Your tables
						</Heading>
						<VscVersions />
					</HStack>
					{tables?.rows.map((t: any) => {
						return (
							<TableCard
								key={JSON.stringify(t)}
								table={t}
								onSelect={onSelect}
							/>
						);
					})}
				</Stack>
			</Center>
		</motion.div>
	);
};

export default TableStack;

interface PgTable {
	table: {
		table_name: string;
	};
	onSelect: (table_name: string) => void;
}

const TableCard: React.FC<PgTable> = ({ table, onSelect }) => {
	const handleClick = () => {
		onSelect(table.table_name);
	};

	return (
		<>
			<HStack
				onClick={handleClick}
				gap={5}
				key={table.table_name}
				p={5}
				rounded="xl"
				cursor="pointer"
				border="1px solid #1e1e2e"
				background="linear-gradient(130deg, #1113 0% 33%, #6644e7ee 66%, #c13467ee 83%, sandybrown 100% )"
				backgroundPosition="0% 0%"
				backgroundSize="300% 300%"
				overflow="hidden"
				transition=".35s ease"
				alignItems="center"
				_hover={{
					backgroundColor: "#403a8333",
					border: "1px solid #606aA3AA",
					backgroundPosition: "100% 100%",
					transform: "scale(1.03, 1.03)",
					color: "white",
					zIndex: 9,
				}}
				justifyContent="space-between"
			>
				<Text fontSize="small">{table.table_name}</Text>
				<VscArrowRight />
			</HStack>
		</>
	);
};
