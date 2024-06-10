import { DbManager } from "../data/databaseManager";
import { useEffect, useState } from "react";
import ObsidianLink from "@components/ObsidianLink";
import { VscClose } from "react-icons/vsc";
import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Th,
	Thead,
	Tr,
	Td,
	Tag,
	TagLabel,
	TagLeftIcon,
} from "@chakra-ui/react";
import { createTable } from "@src/services/tableService";

const DatabaseView: React.FC = () => {
	const [data, setData] = useState<any[]>([]);

	const getData = async (): Promise<any> => {
		// try {
		// 	const pool = DbManager.getPool();
		// 	const client = await pool.connect();
		// 	try {
		// 		const result = await client.query(`SELECT * FROM "Student"`);
		// 		setData(result.rows);
		// 	} finally {
		// 		client.release();
		// 	}
		// } catch (err) {
		// 	console.error(err);
		// }

		createTable();
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<TableContainer>
				<Table variant="simple">
					<TableCaption>Hello</TableCaption>
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Tags</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data?.map((e) => (
							<Tr key={e.id}>
								<Td>{e.name}</Td>
								<Td>
									{e.tags?.split(";").map((t: string) => (
										<Tag key={t}>
											<TagLeftIcon
												boxSize="12px"
												as={VscClose}
											/>
											<TagLabel>{t}</TagLabel>
										</Tag>
									))}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default DatabaseView;
