var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(m, na, mt, PictureID, l, v) {
	var Color = LITE;
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, m, na, mt, PictureID, l, v);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=200>' + m + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, m, na, mt, PictureID, l, v) {
	this.c = Color;
	this.na = na;
	this.p = PictureID;
	this.v = v;
	this.m = m;
	this.mt = mt;
	this.l = l;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].m + '</b><br>Needs Ammo: ' + (Infos[v].na != 0 ? 'Yes' : 'No') + '<br>Material Type: ' + Infos[v].mt + '<br>Minimum Level: ' + Infos[v].l;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].m + '\');', 'View item information', 'Info') + (Infos[v].na != 0 ? Adr('window.top.loadwindow2(\'imit.asp?Test=' + Infos[v].na + '\',300,300,\'iwindow\',\'' + Infos[v].m + ' ammo\');', 'List compatible ammo', 'Ammo') : '');
}
