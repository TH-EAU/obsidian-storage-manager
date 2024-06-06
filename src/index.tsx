import * as React from "react";
import { createRoot } from "react-dom/client";

export function renderReactApp(rootElement: HTMLElement, View: React.FC) {
	// const root = createRoot(document.getElementById("root") as HTMLElement);
	const root = createRoot(rootElement);

	root.render(
		<React.StrictMode>
			<View />
		</React.StrictMode>
	);
}
