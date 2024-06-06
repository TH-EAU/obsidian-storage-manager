export interface DatabaseViewType {
	viewType: string;
}
export interface DatabaseSettings {
	path: string;
	name: string;
}

export const DATABASE_VIEW_TYPE: DatabaseViewType = {
	viewType: "database-view",
};
export const KANBAN_VIEW_TYPE: DatabaseViewType = {
	viewType: "kanban-view",
};
export const DEFAULT_SETTINGS: DatabaseSettings = {
	path: ".",
	name: "_dataManagers",
};
