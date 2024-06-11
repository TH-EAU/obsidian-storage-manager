import { Menu, MenuButton, Th, Tooltip } from "@chakra-ui/react";
import FancyHeaderFieldMenu from "../FancyHeaderFieldMenu";

const FancyHeaderField: React.FC<{ field: any }> = ({ field }) => {
	return (
		<Th
			rounded="xl"
			cursor="pointer"
			_hover={{
				bg: "#6663",
				color: "white",
			}}
		>
			<Menu closeOnSelect={false}>
				<Tooltip label={field.name} placement="right">
					<MenuButton as="div" w="full">
						{field.name}
					</MenuButton>
				</Tooltip>
				<FancyHeaderFieldMenu field={field} />
			</Menu>
		</Th>
	);
};

export default FancyHeaderField;
