import {
	App,
	ItemView,
	Plugin,
	PluginSettingTab,
	Setting,
	WorkspaceLeaf,
} from "obsidian";

import DatabaseView from "./src/models/DatabaseView";
import { DEFAULT_SETTINGS, DatabaseSettings, VIEW_TYPE } from "src/const";
import DatabaseSettingTab from "src/models/DatabaseSettingsTab";

export default class DatabasePlugin extends Plugin {
	settings: DatabaseSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(
			VIEW_TYPE.viewType,
			(leaf: WorkspaceLeaf) => new DatabaseView(leaf)
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
	}

	onunload() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE.viewType);
	}

	async activateView() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE.viewType);

		await this.app.workspace.getRightLeaf(false)?.setViewState({
			type: VIEW_TYPE.viewType,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(VIEW_TYPE.viewType)[0]
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
