import { Plugin, WorkspaceLeaf, normalizePath } from "obsidian";
import DatabaseView from "./src/models/DatabaseView";

import {
	DEFAULT_SETTINGS,
	DatabaseSettings,
	DATABASE_VIEW_TYPE,
	KANBAN_VIEW_TYPE,
} from "src/const";
import DatabaseSettingTab from "src/models/DatabaseSettingsTab";
import KanbanView from "src/models/KanbanView";
import { DbManager } from "databaseManager";

export default class DatabasePlugin extends Plugin {
	settings: DatabaseSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(
			DATABASE_VIEW_TYPE.viewType,
			(leaf: WorkspaceLeaf) => new DatabaseView(leaf)
		);

		this.registerView(
			KANBAN_VIEW_TYPE.viewType,
			(leaf: WorkspaceLeaf) => new KanbanView(leaf)
		);

		const ribbonIconEl = this.addRibbonIcon(
			"table",
			"Open Database",
			() => {
				this.activateView();
			}
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new DatabaseSettingTab(this.app, this));

		new DbManager();
	}

	onunload() {
		this.app.workspace.detachLeavesOfType(DATABASE_VIEW_TYPE.viewType);
	}

	async activateView() {
		this.app.workspace.detachLeavesOfType(DATABASE_VIEW_TYPE.viewType);

		await this.app.workspace.getLeaf(false)?.setViewState({
			type: DATABASE_VIEW_TYPE.viewType,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(DATABASE_VIEW_TYPE.viewType)[0]
		);
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
