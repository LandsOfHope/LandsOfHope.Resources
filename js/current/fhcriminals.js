var PageNo = PageNo;
var IC = 0;
var Infos = new Array();

var IPath = window.top.FHIPR;
var Processing = 0;
var MT = MT;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, mt, PictureID, l, a, b) {
	var Color = GetAColor(a);
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, mt, PictureID, l, a, b);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '">' + mt + '</td><td>' + window.top.BSGM(b) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, mt, PictureID, l, a, b) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.l = l;
	this.a = a;
	this.mt = mt;
	this.b = b;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo);
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
	return '<b>' + Infos[v].mt + '</b><br>Allegiance: ' + GetAName(Infos[v].a) + '<br>Level: ' + Infos[v].l + '<br>Bounty: ' + window.top.BSGM(Infos[v].b);
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '';
}
