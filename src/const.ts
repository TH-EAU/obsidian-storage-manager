export interface DatabaseViewType {
	viewType: string;
}
export interface DatabaseSettings {
	mySetting: string;
}

export const VIEW_TYPE: DatabaseViewType = { viewType: "database-view" };

export const DEFAULT_SETTINGS: DatabaseSettings = {
	mySetting: "default",
};
