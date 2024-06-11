import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "obsidian";
import AppContext from "@contexts/AppContext";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export function renderReactApp(containerEl: Element, View: React.FC, app: App) {
	if (!View) {
		throw new Error("View must be provided.");
	}

	const container = containerEl.querySelector(".view-content");
	if (!container) {
		throw new Error("Failed to find .view-content element");
	}

	const queryClient = new QueryClient();

	container.empty();
	const rootElement = document.createElement("div");
	rootElement.id = "root";
	container.appendChild(rootElement);
	const root = createRoot(rootElement);

	root.render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<ChakraProvider
					theme={theme}
					// resetCSS={false}
					disableGlobalStyle={true}
				>
					<AppContext currentApp={app}>
						<View />
					</AppContext>
				</ChakraProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</React.StrictMode>
	);
}
