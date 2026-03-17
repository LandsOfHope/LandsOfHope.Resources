var BkName = BkName;
var BkID = BkID;
var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPI;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;

document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function KP2() {
	if (getObj('BookText').value.length >= 6000) {
		getObj('charco').innerHTML = 'Character Count: ' + getObj('BookText').value.length + '/6000 <font id=tred>TOO LONG</font>';
		return true;
	} else {
		getObj('charco').innerHTML = 'Character Count: ' + getObj('BookText').value.length + '/6000 OK';
		return false;
	}
}
