import { DbManager } from "../data/databaseManager";
import { useEffect, useState } from "react";

const DatabaseView: React.FC = () => {
	const [data, setData] = useState<any[]>([]);

	const getData = async (): Promise<any> => {
		try {
			const pool = DbManager.getPool();
			const client = await pool.connect();
			try {
				const result = await client.query(`SELECT * FROM "Student"`);
				setData(result.rows);
			} finally {
				client.release();
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<table>
			<th>
				<tr>Name</tr>
			</th>
			<tbody>
				{data?.map((e, i) => {
					console.log(e);
					return <tr>{e.name}</tr>;
				})}
			</tbody>
		</table>
	);
};

export default DatabaseView;
