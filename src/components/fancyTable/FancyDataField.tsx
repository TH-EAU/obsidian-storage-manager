import { Box, HStack, Tag, TagLabel, Td } from "@chakra-ui/react";

const FancyDataField: React.FC<{ data: any }> = ({ data }) => {
	if (Array.isArray(data)) {
		return (
			<Td>
				<HStack>
					{data.map((d) => {
						const metadatas = d.split("::");
						const colorScheme = metadatas[1];
						return (
							<Tag
								key={d}
								colorScheme={colorScheme}
								justifyContent="space-between"
								gap={2}
							>
								<Box
									bg={`${colorScheme}.400`}
									w={2}
									h={2}
									rounded="full"
								/>
								<TagLabel>{metadatas[0]}</TagLabel>
								{/* <TagCloseButton bg="transparent" /> */}
							</Tag>
						);
					})}
				</HStack>
			</Td>
		);
	}
	return <Td>{data}</Td>;
};

export default FancyDataField;
