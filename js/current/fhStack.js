var Processing = 0;
var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AVC(value, ic, a, PictureID, Itty, m) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, value, ic, a, PictureID, Itty, m);
	// width="250" v=' + value + ' m="' + m + '" i=' + ic + ' a=' +a + ' p="' + PictureID + '"
	document.write('<tr id="I' + IC + '" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + m + ' ' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, value, ic, a, PictureID, Itty, m) {
	this.c = Color;
	this.v = value;
	this.p = PictureID;
	this.t = Itty;
	this.i = ic;
	this.a = a;
	this.m = m;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Material: ' + Infos[v].m + '<br>Items: ' + Infos[v].i;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhstack2.asp?ItemID=' + Infos[v].v + '&a=' + Infos[v].a + '&m=' + Infos[v].m + '\');}', 'Stack', 'Stack');
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}
