var PageNo = PageNo;
var DefaultShop = 0;
var Shop = 0;
var Type2 = Type2;
var counter = 0;
var IPath = window.top.FHIPR;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;

document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);


function DBX(fid, fn, fpp, fp, fc) {
	document.write("<tr><td><img src='" + window.top.FHIP + fpp + "/" + fp + "' width=15 height=15></td><td style=\"" + strButtonx + "; width: 125; color: " + fc + "\" " + strClicksns + " c='" + fc + "' onclick=\"DB('" + fid + "');\">" + fn + "</td></tr>");
}

function DB(stuff) {
	getObj('FolderID').value = stuff;
	getObj('Delly').submit();
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}
