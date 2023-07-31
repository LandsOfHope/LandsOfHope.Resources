var PageNo = PageNo;
var IPath = window.top.FHIPI;
var IPath2 = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var CC = 0;
var Chars = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo);
}

function AC(q, v, m, l, Itty, PictureID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, q, v, m, l, Itty, PictureID);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + ' * ' + q + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, q, v, m, l, Itty, PictureID) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = Itty;
	this.q = q;
	this.m = m;
	this.l = l;
}

function AC2(v, l, Itty, PictureID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Chars[CC] == null) {
		Chars[CC] = new Array();
	}
	Chars[CC] = new newChar(Color, v, l, Itty, PictureID);
	document.write('<tr id="C' + CC + '" onmouseover="PC2(' + CC + ')" onmouseout="RC2(' + CC + ')" onclick="DC2(' + CC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td></tr>');
	CC = CC + 1;
}

function newChar(Color, v, l, Itty, PictureID) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = Itty;
	this.l = l;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tips(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function RC2(v) {
	getObj('C' + v).style.cursor = '';
	getObj('C' + v).style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip(IPath2 + (Chars[v].p == '' ? 'na.gif' : Chars[v].p), Chars[v].i);
	getObj('C' + v).style.cursor = 'pointer';
	getObj('C' + v).style.backgroundColor = BGCOLOR_S
}

function Tips(v) {
	return '<b>' + Infos[v].i + '</b>';
}

function DC2(v) {
	getObj('CharsAt').value = Chars[v].v;
	TestIt();
}

function DC(v) {
	LastV = v;
	TestIt();
}

function TestIt() {
	var v = LastV;
	if (Infos[v].v > 0 && getObj('CharsAt').value > 0) {
		window.location.replace('?InventoryItemID=' + Infos[v].v + '&ItemID=' + getObj('CharsAt').value + '&Quantity=' + Infos[v].q + '&Material=' + Infos[v].m + '&Level=' + Infos[v].l + '');
	} else {

	}

}