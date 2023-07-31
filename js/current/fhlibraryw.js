var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(m, v, mt) {
	var Color = LITE;
	var PictureID = 'na.gif';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, m, v, mt);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + m + '</td><td>' + mt + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, m, v, mt) {
	this.c = Color;
	this.m = m;
	this.p = PictureID;
	this.v = v;
	this.mt = mt;
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
	return '<b>' + Infos[v].m + '</b><br>Items: ' + Infos[v].mt + '';
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhlibraryw2.asp?Type=' + Infos[v].m + '\');', 'View all ' + Infos[v].m + ' weapons', 'View');
}
