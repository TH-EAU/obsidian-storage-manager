import { HStack, Input, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { GoTypography } from "react-icons/go";

const FancyHeaderFieldMenu: React.FC<{ field: any }> = ({ field }) => {
	const [name, setName] = useState<string>(field.name);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	return (
		<MenuList bg="#1e1e2e88" backdropFilter="blur(5px)">
			<HStack p={3}>
				<GoTypography />
				<Input
					value={name}
					onChange={handleChange}
					variant="unstyled"
				/>
			</HStack>
			<MenuItem bg="transparent"></MenuItem>
		</MenuList>
	);
};

export default FancyHeaderFieldMenu;
