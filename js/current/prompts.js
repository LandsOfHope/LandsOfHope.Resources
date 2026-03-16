window.originalWindowConfirm = window.originalWindowConfirm ?? window.confirm;

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
	return window.underfined;

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
	} else {
		return window.underfined;
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
	} else {
		return window.underfined;
	}
}

function confirm(message, pb, title, icon, c1, c2) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (c1 == undefined) {
		c1 = 'OK';
	}
	if (c2 == undefined) {
		c2 = 'Cancel';
	}
	window.top.showPopWin("confirm.asp?message=" + message + "&title=" + title + "&c1=" + c1 + "&c2=" + c2 + "&icon=" + icon, 350, 130, PromptReturn, null, title, pb);
}
function prompt(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}

	window.top.showPopWin("prompt.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 350, 130, PromptReturn, null, title, pb);
}                  