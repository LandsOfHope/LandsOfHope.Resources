/**
 * SUBMODAL v1.5
 * Used for displaying DHTML only popups instead of using buggy modal windows.
 *
 * By Seth Banks
 * http://www.subimage.com/
 *
 * Contributions by:
 * 	Eric Angel - tab index code
 * 	Scott - hiding/showing selects for IE users
 *	Todd Huss - inserting modal dynamically and anchor classes
 *
 * Up to date code can be found at http://www.subimage.com/dhtml/subModal
 * 
 *
 * This code is free for you to use anywhere, just keep this comment block.
 */

// Popup code
var gPopupMask = null;
var gPopupContainer = null;
var gPopFrame = null;
var gReturnFunc;
var gPopupIsShown = false;
var gDefaultPage = "about:blank";
var gHideSelects = false;
var gReturnVal = null;
var gReturnVal2 = null;
var gPostBack = null;

var gTabIndexes = new Array();
var gTabbableTags = new Array("A", "BUTTON", "TEXTAREA", "INPUT", "IFRAME");

if (!document.all) {
	document.onkeypress = keyDownHandler;
}

/**
 * Initializes popup code on load.	
 */
function initPopUp() {
	theBody = document.getElementsByTagName('BODY')[0];
	popmask = document.createElement('div');
	popmask.id = 'popupMask';
	popcont = document.createElement('div');
	popcont.id = 'popupContainer';

	popcont.innerHTML = '' +
		'<div id="popupInner">' +
		'<table width="100%" cellpadding=0 cellspacing=0 class="navborderx" id="popupTitleBar"><tr style="height: 22px;"><td class="menul">&nbsp;&nbsp;&nbsp;</td><td class="title" width="100%" id="popupTitle"></td><td><img src="https://lohcdn.com/game/icons/cancel.png" border=0 onclick="hidePopWin(false);" id="popCloseBox" style="cursor: pointer;"></td><td class="menur">&nbsp;&nbsp;&nbsp;</td></tr></table>' +
		'<iframe src="' + gDefaultPage + '" style="width:100%;height:100%;background-color:transparent;" scrolling="auto" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe>' +
		'</div>';
	theBody.appendChild(popmask);
	theBody.appendChild(popcont);

	gPopupMask = document.getElementById("popupMask");
	gPopupContainer = document.getElementById("popupContainer");
	gPopFrame = document.getElementById("popupFrame");

	var brsVersion = parseInt(window.navigator.appVersion.charAt(0), 10);
	if (brsVersion <= 6 && window.navigator.userAgent.indexOf("MSIE") > -1) {
		gHideSelects = true;
	}

}
addEvent(window, "load", initPopUp);

/**
   * @argument width - int in pixels
   * @argument height - int in pixels
   * @argument url - url to display
   * @argument returnFunc - function to call when returning true from the window.
   * @argument showCloseBox - show the close box - default true
   */

function showPopWin(url, width, height, returnFunc, showCloseBox, title, pb) {
	gPostBack = pb;
	if (title == '') {
		title = 'No title';
	}
	document.getElementById("popupTitle").innerHTML = title;
	if (showCloseBox == null || showCloseBox == true) {
		document.getElementById("popCloseBox").style.display = "block";
	} else {
		document.getElementById("popCloseBox").style.display = "none";
	}
	gPopupIsShown = true;
	disableTabIndexes();
	gPopupMask.style.display = "block";
	gPopupContainer.style.display = "block";
	gPopupContainer.style.zIndex = 50000;
	centerPopWin(width, height);

	var titleBarHeight = parseInt(document.getElementById("popupTitleBar").offsetHeight, 10);


	gPopupContainer.style.width = width + "px";
	gPopupContainer.style.height = (height + titleBarHeight) + "px";

	setMaskSize();

	gPopFrame.style.width = parseInt(document.getElementById("popupTitleBar").offsetWidth, 10) + "px";
	gPopFrame.style.height = height + "px";

	gPopFrame.src = url;

	gReturnFunc = returnFunc;
	if (gHideSelects == true) {
		hideSelectBoxes();
	}

}

//
var gi = 0;
function centerPopWin(width, height) {
	if (gPopupIsShown == true) {
		if (width == null || isNaN(width)) {
			width = gPopupContainer.offsetWidth;
		}
		if (height == null) {
			height = gPopupContainer.offsetHeight;
		}

		var theBody = document.getElementsByTagName("BODY")[0];
		var scTop = parseInt(getScrollTop(), 10);
		var scLeft = parseInt(theBody.scrollLeft, 10);

		setMaskSize();

		var titleBarHeight = parseInt(document.getElementById("popupTitleBar").offsetHeight, 10);

		var fullHeight = getViewportHeight();
		var fullWidth = getViewportWidth();

		gPopupContainer.style.top = (scTop + ((fullHeight - (height + titleBarHeight)) / 2)) + "px";
		gPopupContainer.style.left = (scLeft + ((fullWidth - width) / 2)) + "px";
	} else {
		ResizeDivs();
	}
}

function ResizeDivs() {
	// if (getObj('ChatWindow') != null) {
	// 	if (getObj('messages') != null) {
	// 		getObj('messages').style.height = parseInt(getObj('ChatWindow').style.height) - 34; // fullHeight - (mainheight - 48);
	// 		if (getObj('messages').style.height <= 50) {
	// 			getObj('messages').style.height = 50;
	// 		}
	// 	}
	// }
	// if (getObj('StatusWindow') != null) {
	// 	if (getObj('Readout') != null) {
	// 		getObj('Readout').style.height = parseInt(getObj('StatusWindow').style.height) - 34; // fullHeight - (mainheight - 48);
	// 	}
	// }
}
addEvent(window, "resize", centerPopWin);
addEvent(window, "scroll", centerPopWin);
window.onscroll = centerPopWin;


/**
 * Sets the size of the popup mask.
 *
 */
function setMaskSize() {
	var theBody = document.getElementsByTagName("BODY")[0];

	var fullHeight = getViewportHeight();
	var fullWidth = getViewportWidth();
	var popHeight = 0;
	var popWidth = 0;
	// Determine what's bigger, scrollHeight or fullHeight / width
	if (fullHeight > theBody.scrollHeight) {
		popHeight = fullHeight;
	} else {
		popHeight = theBody.scrollHeight;
	}

	if (fullWidth > theBody.scrollWidth) {
		popWidth = fullWidth;
	} else {
		popWidth = theBody.scrollWidth;
	}

	gPopupMask.style.height = popHeight + "px";
	gPopupMask.style.width = popWidth + "px";
}

/**
 * @argument callReturnFunc - bool - determines if we call the return function specified
 * @argument returnVal - anything - return value 
 */
function hidePopWin(callReturnFunc) {
	gPopupIsShown = false;
	var theBody = document.getElementsByTagName("BODY")[0];
	theBody.style.overflow = "hidden";
	restoreTabIndexes();
	if (gPopupMask == null) {
		return;
	}
	gPopupMask.style.display = "none";
	gPopupContainer.style.display = "none";
	if (callReturnFunc == true && gReturnFunc != null) {
		// Set the return code to run in a timeout.
		// Was having issues using with an Ajax.Request();
		gReturnVal = window.frames["popupFrame"].returnVal;
		if (window.frames["popupFrame"].returnVal2 != null) {
			gReturnVal2 = window.frames["popupFrame"].returnVal2;
		} else {
			gReturnVal2 = null;
		}
		window.setTimeout(() => gReturnFunc(gReturnVal, gPostBack, gReturnVal2), 1);
	}
	gPopFrame.src = gDefaultPage;
	// display all select boxes
	if (gHideSelects == true) {
		displaySelectBoxes();
	}
}

// Tab key trap. iff popup is shown and key was [TAB], suppress it.
// @argument e - event - keyboard event that caused this function to be called.
function keyDownHandler(e) {
	if (gPopupIsShown && e.keyCode == 9) {
		return false;
	} else {
		return true;
	}
}

// For IE.  Go through predefined tags and disable tabbing into them.
function disableTabIndexes() {
	if (document.all) {
		var i = 0;
		for (var j = 0; j < gTabbableTags.length; j++) {
			var tagElements = document.getElementsByTagName(gTabbableTags[j]);
			for (var k = 0; k < tagElements.length; k++) {
				gTabIndexes[i] = tagElements[k].tabIndex;
				tagElements[k].tabIndex = "-1";
				i++;
			}
		}
	}
}

// For IE. Restore tab-indexes.
function restoreTabIndexes() {
	if (document.all) {
		var i = 0;
		for (var j = 0; j < gTabbableTags.length; j++) {
			var tagElements = document.getElementsByTagName(gTabbableTags[j]);
			for (var k = 0; k < tagElements.length; k++) {
				tagElements[k].tabIndex = gTabIndexes[i];
				tagElements[k].tabEnabled = true;
				i++;
			}
		}
	}
}


/**
* Hides all drop down form select boxes on the screen so they do not appear above the mask layer.
* IE has a problem with wanted select form tags to always be the topmost z-index or layer
*
* Thanks for the code Scott!
*/
function hideSelectBoxes() {
	for (var i = 0; i < document.forms.length; i++) {
		for (var e = 0; e < document.forms[i].length; e++) {
			if (document.forms[i].elements[e].tagName == "SELECT") {
				document.forms[i].elements[e].style.visibility = "hidden";
			}
		}
	}
}

/**
* Makes all drop down form select boxes on the screen visible so they do not reappear after the dialog is closed.
* IE has a problem with wanted select form tags to always be the topmost z-index or layer
*/
function displaySelectBoxes() {
	for (var i = 0; i < document.forms.length; i++) {
		for (var e = 0; e < document.forms[i].length; e++) {
			if (document.forms[i].elements[e].tagName == "SELECT") {
				document.forms[i].elements[e].style.visibility = "visible";
			}
		}
	}
}