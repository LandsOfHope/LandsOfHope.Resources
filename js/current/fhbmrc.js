
var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Room: ' + Infos[v].g + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'fhmessn.asp?CharsAt=' + Infos[v].v + '\');}', 'Message ' + Infos[v].t, 'Message') + Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'fh.asp?Redraw=1&BuildingID=' + Infos[v].b + '\');}', 'Recall to the building', 'Recall') + Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'?CharsAt=' + CharsAt + '&B=' + Infos[v].b + '&C=' + Infos[v].v + '\');}', 'Delete', 'Delete');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
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

function AVC(v, b, PictureID, Itty, GuildName) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, b, PictureID, Itty, GuildName);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="315" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, b, PictureID, Itty, GuildName) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
	this.b = b;
	this.g = GuildName;
}