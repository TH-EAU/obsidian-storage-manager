import { ItemView, WorkspaceLeaf } from "obsidian";
import { KANBAN_VIEW_TYPE } from "src/const";
import { renderReactApp } from "@src/index";
import KanbanView from "@views/KabanView";

class KanbanLeaf extends ItemView {
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
		renderReactApp(this.containerEl, KanbanView);
	}

	async onClose() {}
}

export default KanbanLeaf;
