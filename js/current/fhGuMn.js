
var DefaultShop = 0;
var IPath = window.top.FHIPR;
var GuildLeader = GuildLeader;
var RSL = new Array();
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;

if (GuildLeader != 0) {
	AR(GuildLeader, 'Guild Leader', 'na.gif')
}

document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function KP2() {
	if (getObj('Message').value.length >= 3500) {
		getObj('charco').innerHTML = '' + getObj('Message').value.length + '/3500 <font id=tred>TOO LONG</font>';
		return true;
	} else {
		getObj('charco').innerHTML = '' + getObj('Message').value.length + '/3500 OK';
		return false;
	}
}
