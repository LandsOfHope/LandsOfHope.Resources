var IPath = 'https://lohcdn.com/game/r/';
var LastID = '';
var OPath = 'https://lohcdn.com/game/icons/';
document.write('<script src="https://lohcdn.com/js/current/simpleformatting.js" language="JavaScript"></script>');

/**
 * X-browser event handler attachment and detachment
 * TH: Switched first true to false per http://www.onlinetools.org/articles/unobtrusivejavascript/chapter4.html
 *
 * @argument obj - the object to attach event to
 * @argument evType - name of the event - DONT ADD "on", pass only "mouseover", etc
 * @argument fn - function to call
 */
function addEvent(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, false);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on" + evType, fn);
		return r;
	} else {
		return false;
	}
}
function removeEvent(obj, evType, fn, useCapture) {
	if (obj.removeEventListener) {
		obj.removeEventListener(evType, fn, useCapture);
		return true;
	} else if (obj.detachEvent) {
		var r = obj.detachEvent("on" + evType, fn);
		return r;
	} else {
		alert("Handler could not be removed");
	}
}

/**
 * Code below taken from - http://www.evolt.org/article/document_body_doctype_switching_and_more/17/30655/
 *
 * Modified 4/22/04 to work with Opera/Moz (by webmaster at subimage dot com)
 *
 * Gets the full width/height because it's different for most browsers.
 */
function getViewportHeight() {
	if (window.innerHeight != window.undefined) return window.innerHeight;
	if (document.compatMode == 'CSS1Compat') return document.documentElement.clientHeight;
	if (document.body) return document.body.clientHeight;

	return window.undefined;
}
function getViewportWidth() {
	var offset = 17;
	var width = null;
	if (window.innerWidth != window.undefined) return window.innerWidth;
	if (document.compatMode == 'CSS1Compat') return document.documentElement.clientWidth;
	if (document.body) return document.body.clientWidth;
}

/**
 * Gets the real scroll top
 */
function getScrollTop() {
	if (self.pageYOffset) // all except Explorer
	{
		return self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop)
	// Explorer 6 Strict
	{
		return document.documentElement.scrollTop;
	}
	else if (document.body) // all other Explorers
	{
		return document.body.scrollTop;
	}
}
function getScrollLeft() {
	if (self.pageXOffset) // all except Explorer
	{
		return self.pageXOffset;
	}
	else if (document.documentElement && document.documentElement.scrollLeft)
	// Explorer 6 Strict
	{
		return document.documentElement.scrollLeft;
	}
	else if (document.body) // all other Explorers
	{
		return document.body.scrollLeft;
	}
}


function popupcolor(strID) {
	LastID = strID;
	window.top.showPopWin("colorpicker.asp", 550, 340, PromptReturnx, null, "Choose Color", 1);
}

function PromptReturnx(returnVal, postback) {
	if (returnVal != null) {
		getObj(LastID).value = returnVal;
	}
}