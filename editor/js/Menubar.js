import { UIPanel, UIText, UITextArea } from "./libs/ui.js";

import { MenubarEdit } from "./Menubar.Edit.js";
import { MenubarFile } from "./Menubar.File.js";
import { MenubarHelp } from "./Menubar.Help.js";
import { MenubarStatus } from "./Menubar.Status.js";
import { MenuTitle } from "./MenuTitle.js";

function Menubar(editor) {
	var container = new UIPanel();
	container.setId("menubar");

	container.add(new MenubarFile(editor));
	container.add(new MenubarEdit(editor));
	container.add(new MenubarHelp(editor));
	container.add(new MenuTitle(editor));
	container.add(new MenubarStatus(editor));

	return container;
}

export { Menubar };
