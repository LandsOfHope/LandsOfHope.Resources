var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, lx, isLegend, m, mt, PictureID, l, v) {
	if (lx == 'C') { lx = 'Common' }
	else if (lx == 'N') { lx = 'Uncommon' }
	else if (lx == 'R') { lx = 'Rare' }
	else if (lx == 'V') { lx = 'Very Rare' }
	else if (lx == 'U') { lx = 'Unique' }
	else if (lx == 'A') { lx = 'Artifact' }
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, lx, isLegend, m, mt, PictureID, l, v);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '">' + m + '</td><td>' + l + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, lx, isLegend, m, mt, PictureID, l, v) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.r = lx;
	this.il = isLegend;
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
	return '<b style="color: ' + Infos[v].c + '">' + Infos[v].m + '</b><br>Rarity: ' + Infos[v].r + (Math.abs(Infos[v].il) > 0 ? '<br><b>Legend Item</b>' : '') + '<br>Material Type: ' + Infos[v].mt + '<br>Minimum Level: ' + Infos[v].l;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].m + '\');', 'View item information', 'View');
}
