var SN = SN;
var IPath = window.top.FHIP
var Processing = 0;
var PageNo = PageNo;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;

document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&SN=' + SN);
} 
