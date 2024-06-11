import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const theme = extendTheme({
	color: {
		brand: {
			500: "#403a83",
		},
	},
	styles: {
		global: () => ({
			body: {
				bg: "",
				color: "",
			},
			html: {
				color: "",
			},
		}),
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: true,
	},
});
