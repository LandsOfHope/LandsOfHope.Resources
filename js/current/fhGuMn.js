
var DefaultShop = 0;
var IPath = window.top.FHIPR;
var GuildLeader = GuildLeader;
var RSL = new Array();
if (GuildLeader != 0) {
	AR(GuildLeader, 'Guild Leader', 'na.gif')
}

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function KP2() {
	if (getObj('Message').value.length >= 3500) {
		getObj('charco').innerHTML = '' + getObj('Message').value.length + '/3500 <font id=tred>TOO LONG</font>';
		return true;
	} else {
		getObj('charco').innerHTML = '' + getObj('Message').value.length + '/3500 OK';
		return false;
	}
}
