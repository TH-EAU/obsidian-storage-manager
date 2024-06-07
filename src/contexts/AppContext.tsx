import { App } from "obsidian";
import React, { createContext, ReactElement, ReactNode, useState } from "react";

interface AppContext {
	app: App;
	setApp: React.Dispatch<React.SetStateAction<App>>;
}

export const AppContext = createContext<AppContext | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode; currentApp: App }> = ({
	currentApp,
	children,
}) => {
	const [app, setApp] = useState<App>(currentApp);

	return (
		<AppContext.Provider value={{ app, setApp }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
