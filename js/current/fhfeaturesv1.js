var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPR;
var Processing = 0;
var Search = Search;
var MT = MT;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(m, mt, PictureID, cn) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, m, mt, PictureID, cn);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'500\'>' + m + '</td><td width=\'100\'>' + cn + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, m, mt, PictureID, cn) {
	this.c = Color;
	this.cn = cn;
	this.p = PictureID;
	this.m = m;
	this.mt = mt;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Search=' + Search);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].m);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	window.location.replace('fhfeaturev.asp?CharsAt=' + Infos[v].mt + '&P=' + PageNo + '&Search=' + Search)
}