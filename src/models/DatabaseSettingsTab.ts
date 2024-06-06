import DatabasePlugin from "main";
import {
	App,
	ItemView,
	Plugin,
	PluginSettingTab,
	Setting,
	WorkspaceLeaf,
} from "obsidian";

class DatabaseSettingTab extends PluginSettingTab {
	plugin: DatabasePlugin;

	constructor(app: App, plugin: DatabasePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Database emplacement")
			.setDesc("Set the emplacement of the sqlite database file.")
			.addText((text) =>
				text
					.setPlaceholder("/path")
					.setValue(this.plugin.settings.path)
					.onChange(async (value) => {
						this.plugin.settings.path = value;
						await this.plugin.saveSettings();
					})
			);
	}
}

export default DatabaseSettingTab;
