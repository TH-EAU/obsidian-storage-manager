import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

interface NoteLinkProps {
	noteName: string;
}

const ObsidianLink: React.FC<NoteLinkProps> = ({ noteName }) => {
	const appContext = useContext(AppContext);
	// console.log(app);

	const handleLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		// Utiliser l'API Obsidian pour ouvrir la note
		(appContext?.app as any).workspace.openLinkText(noteName, "", false);
	};
	return (
		<a href="#" onClick={handleLinkClick}>
			{noteName}
		</a>
	);
};

export default ObsidianLink;
