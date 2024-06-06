import { ItemView, WorkspaceLeaf } from "obsidian";
import { KANBAN_VIEW_TYPE } from "src/const";
import KanbanViewComponent from "../Kaban.view.comp";
import { renderReactApp } from "../index";

class KanbanView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return KANBAN_VIEW_TYPE.viewType;
	}

	getDisplayText(): string {
		return "Kanban View";
	}

	async onOpen(): Promise<void> {
		const container = this.containerEl.querySelector(".view-content");
		if (container) {
			container.empty();
			const rootElement = document.createElement("div");
			rootElement.id = "root";
			container.appendChild(rootElement);
			renderReactApp(rootElement, KanbanViewComponent);
		} else {
			console.error("Failed to find .view-content element");
		}
	}

	async onClose() {}
}

export default KanbanView;
