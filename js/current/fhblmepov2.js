var Processing = 0;
var Special = Special;
var CharsAt = CharsAt;
var POCount = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(port, PictureID, v, Itty, ox, oy, oz) {
	var Color = LITE;
	POCount = POCount + 1;

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, port, PictureID, v, Itty, ox, oy, oz);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" style="color: ' + Color + '; padding-left: 5px;"><table class="weakcell"><tr><td><b>' + (port == 1 ? 'Source Room' : 'Destination Room') + '</b></td></tr><tr><td>' + Itty + '</td></tr><tr><td>X: ' + ox + ' Y: ' + oy + ' Floor: ' + oz + '</td></tr><tr><td>' + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + v + '&Special=' + Special + '&Type=1\');}', 'Clear', 'Clear') + '</td></tr></table></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, port, PictureID, v, Itty, ox, oy, oz) {
	this.c = Color;
	this.port = port;
	this.p = PictureID;
	this.t = Itty;
	this.ox = ox;
	this.oy = oy;
	this.oz = oz;
	this.v = v;
}


function DC2() {
	if (POCount == 2) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Special=' + Special + '&Type=2\');}', 'Place Portal', 'Place');
	} else {
		getObj('Buttons').innerHTML = '';
	}

	getObj('Buttons').innerHTML = getObj('Buttons').innerHTML + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Special=' + Special + '&Type=3\');}', 'Delete Portals', 'Delete');
}

function Tipz(v) {
	window.top.InfoTip(IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].t + '</b><br>Room X/Y: ' + Infos[v].ox + ', ' + Infos[v].oy + '<br>Floor: ' + Infos[v].oz);
}

function DC(v) {
	Tipz(v);

}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}