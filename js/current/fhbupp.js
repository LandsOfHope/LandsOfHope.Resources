var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Type2 = Type2;
var Processing = 0;
var IPath = window.top.FHIPM;
var IPath2 = window.top.FHIPI;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(Color, v, f, Itty, PictureID, y, x, g) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, f, Itty, PictureID, y, x, g);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=12><img width=12 height=12 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, f, Itty, PictureID, y, x, g) {
	this.c = Color;
	this.f = f;
	this.p = PictureID;
	this.t = Itty;
	this.value = v;
	this.x = x;
	this.y = y;
	this.g = g;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath2 + 'po5.gif', Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Location: ' + Infos[v].x + '. ' + Infos[v].y + ' ' + GetRealm(Infos[v].g)
	getObj('Pic').innerHTML = "<img src='" + IPath2 + "po5.gif'>";
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1;this.disabled=true;window.location.replace(\'?Type=' + Infos[v].value + '&CharsAt=' + Infos[v].f + '\');}', 'Open Portal', 'Open');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}

function GoP(p) {
	window.location.replace('?P=' + p);
}