import {
	App,
	ItemView,
	Plugin,
	PluginSettingTab,
	Setting,
	WorkspaceLeaf,
} from "obsidian";

import * as React from "react";
import { createRoot } from "react-dom/client";

import { renderReactApp } from "../index";
import { VIEW_TYPE } from "src/const";

class DatabaseView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return VIEW_TYPE.viewType;
	}

	getDisplayText(): string {
		return "Table View";
	}

	protected async onOpen(): Promise<void> {
		const container = this.containerEl.querySelector(".view-content");
		if (container) {
			container.empty();

			const rootElement = document.createElement("div");
			rootElement.id = "root";
			container.appendChild(rootElement);

			console.log(container);
			renderReactApp(rootElement);
		} else {
			console.error("Failed to find .view-content element");
		}
	}
}

export default DatabaseView;
