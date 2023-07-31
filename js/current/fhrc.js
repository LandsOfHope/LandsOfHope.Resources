var IC = 0;
var Infos = new Array();
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	//window.location.replace('?InventoryItemID=' + IID + '&ItemID=' + ItemID + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Stored: ' + Infos[v].s + '/' + Infos[v].ms;
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?InventoryItemID=' + Infos[v].v + '&Type=1\');}', 'Take', 'Take');
}

function AC(v, PictureID, s, ms, mat, Itty) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, s, ms, mat, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + PictureID + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px;">' + mat + ' ' + Itty + '</td><td>' + s + '/' + ms + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, s, ms, mat, Itty) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
	this.s = s;
	this.ms = ms;
	this.mat = mat;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].t + '</b><br>Stored: ' + Infos[v].s + '/' + Infos[v].ms);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}