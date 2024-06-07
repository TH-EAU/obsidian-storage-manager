import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const theme = extendTheme({
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
});
