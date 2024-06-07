import { DatabaseViewType } from "@models/ViewType.model";
import { DatabaseManagerSettings } from "@models/DatabaseSettings.model";

export const DATABASE_VIEW_TYPE: DatabaseViewType = {
	viewType: "database-view",
};
export const KANBAN_VIEW_TYPE: DatabaseViewType = {
	viewType: "kanban-view",
};
export const DEFAULT_SETTINGS: DatabaseManagerSettings = {
	database: {
		user: "postgres",
		host: "localhost",
		database: "obsidian",
		password: "root",
		port: 5432,
	},
};
