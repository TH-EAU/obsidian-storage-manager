import { Plugin, WorkspaceLeaf, normalizePath } from "obsidian";

import {
	DEFAULT_SETTINGS,
	DATABASE_VIEW_TYPE,
	KANBAN_VIEW_TYPE,
} from "src/const";

import DatabaseSettingTab from "@src/settings/DatabaseSettingsTab";
import { DbManager } from "@data/databaseManager";
import DatabaseLeaf from "@src/leaves/DatabaseLeaf";
import KanbanLeaf from "@src/leaves/KanbanLeaf";
import { DatabaseManagerSettings } from "@src/models/DatabaseSettings.model";

export default class DatabaseManagerPlugin extends Plugin {
	settings: DatabaseManagerSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(
			DATABASE_VIEW_TYPE.viewType,
			(leaf: WorkspaceLeaf) => new DatabaseLeaf(leaf)
		);

		this.registerView(
			KANBAN_VIEW_TYPE.viewType,
			(leaf: WorkspaceLeaf) => new KanbanLeaf(leaf)
		);

		const ribbonIconEl = this.addRibbonIcon(
			"table",
			"Open Database",
			() => {
				this.activateView();
			}
		);

		this.addSettingTab(new DatabaseSettingTab(this.app, this));

		new DbManager(this.settings);
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
