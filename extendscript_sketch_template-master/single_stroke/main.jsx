////////////////////////////////////////////////
// Single Stroke Type Setter
// author Greg Schomburg
// editor Justin Bakse
//
// Sets text provided by user by placing glyphs from provided illustrator
// "font" file made up of specially named layers for each letter.
//
// Refrences:
// http://www.kahrel.plus.com/indesign/scriptui.html

#include 'CustomFont.jsx' // jshint ignore:line

var myWin;
var textEntryBox;

myWin = buildUIPanel(this);
myWin.show();

// buildUIPanel create the window that the user uses to enter text
function buildUIPanel(_thisObj) {

	// create the dialog style window
	var win = new Window('dialog', 'Set Single Stroke Type');

	// layout settings
	win.orientation = "row";
	win.alignChildren = ['left', 'top'];
	win.margins = 8;

	// create a layout group
	var uiGroup = win.add("panel", undefined, "Render Type");
	uiGroup.alignChildren = ['left', 'top'];

	// add the main text entry box
	textEntryBox = uiGroup.add("edittext", undefined, "Enter Text Here...", {
		multiline: true,
		scrollable: true
	});
	textEntryBox.size = [300, 200];

	// submit button
	var submit = uiGroup.add("button", undefined, "Build");
	submit.onClick = buildType;

	// close button
	var closeButton = uiGroup.add("button", undefined, "Close");
	closeButton.onClick = closeWindow;

	// recalculate ui layout
	win.layout.layout(true);

	return win;
}


function closeWindow() {
	myWin.close();
}

function buildType() {
	generateText(textEntryBox.text);
	closeWindow();
}
