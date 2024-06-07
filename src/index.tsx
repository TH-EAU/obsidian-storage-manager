import * as React from "react";
import { createRoot } from "react-dom/client";

export function renderReactApp(containerEl: Element, View: React.FC) {
	if (!View) {
		throw new Error("View must be provided.");
	}

	const container = containerEl.querySelector(".view-content");
	if (!container) {
		throw new Error("Failed to find .view-content element");
	}

	container.empty();
	const rootElement = document.createElement("div");
	rootElement.id = "root";
	container.appendChild(rootElement);
	const root = createRoot(rootElement);

	root.render(
		<React.StrictMode>
			<View />
		</React.StrictMode>
	);
}
