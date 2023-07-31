var CharsAt = CharsAt;
var PageNo = PageNo;
var Processing = 0;
var BagCount = 0;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, value, q) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, value, q);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + (q > 1 ? ' * ' + q : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, value, q) {
	this.c = Color;
	this.value = value;
	this.p = PictureID;
	this.t = Itty;
	this.v = v;
	this.q = q;
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

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	window.location.replace('fhlordship2.asp?ItemID=' + Infos[v].v + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}