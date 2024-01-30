var BagCount = 0;
var CharID = CharID;
var PageNo = PageNo;
var Bo = Bo;
var Cr = Cr;
var What = What;
var aok = aok;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var Waiting = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&P=' + GoP + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Appraisal: ' + Infos[v].a;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>"
	getObj('Buttons').innerHTML = (aok == 0 ? '<' + strClicky2 + ' id=IDButton onclick="Identify(' + v + ');" style=\'width: 85\'>' + (Waiting <= 0 ? 'Identify' : 'Wait ...') + '</button>' : 'Your target has disabled Appraisal via File > Options, Character tab. You can not appraise their items.');
}

function Identify(v) {
	clearTimeout(Waiting);
	getObj('IDButton').innerHTML = 'Wait ...';
	getObj('IDButton').disabled = true;
	window.location.replace(`?P=${PageNo}&CharsAt=${CharID}&InventoryItemID=${Infos[v].v}`);
	Waiting = setTimeout(() => { getObj('IDButton').innerHTML = 'Identify'; Waiting = 0; getObj('IDButton').disabled = false; }, 2000);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].t + '</b>' + (Infos[v].a != '' ? '<br>Appraisal: ' + Infos[v].a : ''));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AvC(v, s, a, i, b, PictureID, Itty, x) {
	var Color = '#888888';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, s, a, i, b, PictureID, Itty, x);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, s, a, i, b, PictureID, Itty, x) {
	this.c = Color;
	this.x = x;
	this.p = PictureID;
	this.t = Itty;
	this.i = i;
	this.b = b;
	this.v = v;
	this.a = a;
	this.s = s;

}