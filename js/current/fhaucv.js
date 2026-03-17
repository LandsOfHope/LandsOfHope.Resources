var IPath = window.top.FHIPR;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;

document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function fx1(stuff) {
	var re = /^\$|,|'|"|%|@|#/g;
	stuff.value = stuff.value.replace(re, "");
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (returnVal == true) {
			getObj('bid').value = 'QSP';
			getObj('bidform').submit();
		}
	}
}