var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Level = Level;
var IPath = window.top.FHIPR;
var SPath = window.top.FHIPS;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?P=' + GoP + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Leader: ' + Infos[v].ln + '<br>' + (Infos[v].a != '' ? 'Last Active: ' + Infos[v].a + 'mins ago' : 'Inactive') + '<br>Members: ' + Infos[v].m + (Infos[v].m >= 6 ? ' (Full)' : '') + (Infos[v].d != '' ? '<br><i>' + Infos[v].d + '</i>' : '<br>-No Description-');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Infos[v].m < 6 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhgroup2.asp?CharsAt=' + Infos[v].v + '&Type=1&P=' + PageNo + '\');}', 'Request membership', 'Join') : '<font id=tred>This fellowship is full.</font>');
}


function AC(PictureID, PictureID2, ln, b, Color, v, a, m, d, l, Itty) {
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, PictureID2, ln, b, Color, v, a, m, d, l, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + SPath + (PictureID2 == '' ? 'na.gif' : PictureID2) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(PictureID, PictureID2, ln, b, Color, v, a, m, d, l, Itty) {
	this.c = Color;
	this.ln = ln;
	this.p = PictureID;
	this.p2 = PictureID2;
	this.i = Itty;
	this.d = d;
	this.b = b;
	this.v = v;
	this.a = a;
	this.m = m;
	this.l = l;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].i + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}