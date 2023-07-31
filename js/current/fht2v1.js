var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Processing = 0;
var TotalMC = 0;
var TotalW = 0;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].i + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GS(in3, in2) {
	window.location.replace('?CharsAt=' + in2 + '&P=' + PageNo + '&Type=' + in3);
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>' + (Infos[v].f != 0 ? '<br>You can not re-enter this tournament.' : '<br>Won Money: ' + window.top.BSGM(Infos[v].m) + '<br>Wins: ' + Infos[v].w + '<br>Draws: ' + Infos[v].d + '<br>Losses: ' + Infos[v].l + '<br>' + Adr('confirm(\'If you remove yourself from this Tournament you will not be able to enter it again until it has reset, continue?\',' + v + ');', 'Leave this contest', 'Leave Contest'));
}

function AB(PictureID, ItemName, f, ItemID, w, l, d, m) {
	var Color = LITE;
	if (PictureID == '0') { PictureID = '' }
	TotalMC = TotalMC + m;
	TotalW = TotalW + w;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, f, ItemID, w, l, d, m);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'205\'style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td><td width=\'80\' style=\'\'>' + w + '</td><td width=\'80\'>' + window.top.BSGM(m) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, f, ItemID, w, l, d, m) {
	this.c = Color;
	this.w = w;
	this.p = PictureID;
	this.i = ItemName;
	this.f = f;
	this.v = ItemID;
	this.m = m;
	this.d = d;
	this.l = l;
}

function ABT() {
	var PictureID = 'na.gif';
	var Color = 'gold';
	document.write('<tr style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'205\'>Totals:</td><td style=\'\'>' + TotalW + '</td><td>' + window.top.BSGM(TotalMC) + '</td></tr>');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			window.top.Interface.location.replace('fht2.asp?ItemID=' + Infos[v].v + '&OK=-2');
		}
	}
}