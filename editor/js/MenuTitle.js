import * as THREE from "../../build/three.module.js";

import { UIPanel, UIText } from "./libs/ui.js";

function MenuTitle(editor) {
	var container = new UIPanel();
	container.setClass("menu");

	var title = new UIText("3D MODEL VIEWER for ARTLAB");
	title.dom.style.verticalAlign = "middle";
	title.setClass("title");
	title.setOpacity(0.5);

	container.add(title);

	return container;
}

export { MenuTitle };
