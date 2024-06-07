import { ItemView, WorkspaceLeaf, Notice, Menu } from "obsidian";
import { DATABASE_VIEW_TYPE, KANBAN_VIEW_TYPE } from "src/const";
import DatabaseView from "@views/DatabaseView";
import { renderReactApp } from "@src/index";

class DatabaseLeaf extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return DATABASE_VIEW_TYPE.viewType;
	}

	getDisplayText(): string {
		return "Table View";
	}

	protected async onOpen(): Promise<void> {
		renderReactApp(this.containerEl, DatabaseView, this.app);
	}

	onPaneMenu(menu: Menu) {
		menu.addItem((item) => {
			item.setTitle("Ouvrir la vue kanban")
				.setIcon("square-kanban")
				.onClick(() => {
					this.openSecondView();
				});
		});
	}

	private openSecondView() {
		const leaf = this.app.workspace.getLeaf(false);
		if (leaf) {
			leaf.setViewState({
				type: KANBAN_VIEW_TYPE.viewType,
				active: true,
			});
			this.app.workspace.revealLeaf(leaf);
		} else {
			new Notice("Failed to open second view");
		}
	}
}

export default DatabaseLeaf;
