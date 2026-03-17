
var IPath = window.top.FHIPR;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;
document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('Messy').submit();
		}
	}
}