
var CharsAt = CharsAt;
var SL2 = SL2;

var SN = SN;
var PageNo = PageNo;
var EL2 = EL2;
var IC = 0;
var Infos = new Array();

var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function ShowL() {
	getObj('Levels').innerHTML = 'Level Range: <b>' + getObj('SL').value + '</b> to <b>' + getObj('EL').value + '</b>';
}

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&SL=' + SL2 + '&EL=' + EL2 + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Guild: ' + Infos[v].gn + '<br>Level: ' + Infos[v].l + '<br>Wins: ' + Infos[v].w + ' Losses: ' + Infos[v].lo + ' Draws: ' + Infos[v].d + '<br>Guild Fame Earnt: ' + Infos[v].m;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('PopupMonsterInfo(' + Infos[v].z + ');', 'Info', 'Info') + Adr('window.location.replace(\'fhtfight.asp?CharsAt=' + Infos[v].z + '\');', 'Fight', 'Fight');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i + '<br>' + window.top.BSGM2(Infos[v].v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AC(z, m, w, lo, d, v, gn, l, PictureID, ItemName) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, m, w, lo, d, v, gn, l, PictureID, ItemName);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td><td>' + w + '</td><td>' + lo + '</td><td>' + d + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, m, w, lo, d, v, gn, l, PictureID, ItemName) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = ItemName;
	this.m = m;
	this.w = w;
	this.lo = lo;
	this.d = d;
	this.z = z;
	this.l = l;
	this.gn = gn;
}