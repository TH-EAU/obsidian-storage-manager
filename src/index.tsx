import App from "./App";
import * as React from "react";
import { createRoot } from "react-dom/client";

export function renderReactApp(rootElement: HTMLElement) {
	// const root = createRoot(document.getElementById("root") as HTMLElement);
	const root = createRoot(rootElement);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
