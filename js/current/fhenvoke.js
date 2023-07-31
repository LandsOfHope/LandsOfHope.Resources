var IPath = window.top.FHIPI;
var RPath = window.top.FHIPR;
var Processing = 0;
var PageNo = PageNo;
var IID = IID;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AH(r, m, v, Itty, PictureID, P2) {
	var Color = LITE;
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, r, m, v, Itty, PictureID, P2);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, r, m, v, Itty, PictureID, P2) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
	this.p2 = P2;
	this.m = m;
	this.r = r;
}

function GoP(P) {
	window.location.replace('?InventoryItemID=' + IID + '&P=' + P);
}


function DC(v) {
	getObj('Stuff2').innerHTML = '' + Infos[v].t + '<Br>Envoked Species: ' + Infos[v].m + '';
	getObj('pic').innerHTML = '<img src=\'' + RPath + Infos[v].p2 + '\'>';
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?InventoryItemID=' + Infos[v].v + '&ItemID=' + Infos[v].r + '&I=' + Infos[v].t + '&M=' + Infos[v].m + '\');}', 'Envoke', 'Envoke');
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