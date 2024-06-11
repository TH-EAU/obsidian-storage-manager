import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

interface NoteLinkProps {
	noteName: string;
}

const ObsidianLink: React.FC<NoteLinkProps> = ({ noteName }) => {
	const appContext = useContext(AppContext);

	const handleLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		(appContext?.app as any).workspace.openLinkText(noteName, "", false);
	};
	return (
		<a href="#" onClick={handleLinkClick}>
			{noteName}
		</a>
	);
};

export default ObsidianLink;
