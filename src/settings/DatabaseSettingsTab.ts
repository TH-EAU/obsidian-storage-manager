import DatabaseManagerPlugin from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

class DatabaseSettingTab extends PluginSettingTab {
	plugin: DatabaseManagerPlugin;

	constructor(app: App, plugin: DatabaseManagerPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Host")
			.setDesc("Set the emplacement of the sqlite database file.")
			.addText((text) =>
				text
					.setPlaceholder("/localhost")
					.setValue(this.plugin.settings.database.host)
					.onChange(async (value) => {
						this.plugin.settings.database.host = value;
						await this.plugin.saveSettings();
					})
			);
	}
}

export default DatabaseSettingTab;
