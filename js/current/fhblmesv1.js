var Special = Special;
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var IPath2 = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var PageNo = PageNo;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, q, IVID, RID, Itty, a, mp, fp) {
	var PictureID = '';
	var Color = LITE;
	if (a == 0) {
		Color = 'yellow'
	} else if (a < 0) {
		Color = '#ff6666'
	} else {
		Color = '#66ff66'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, q, IVID, RID, Itty, a, mp, fp);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=30><img src=\'' + IPath2 + mp + '\' width=15 height=15><img src=\'' + IPath2 + fp + '\' width=15 height=15></td><td width=\'200\'>' + Itty + '</td><td>' + q + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, q, IVID, RID, Itty, a, mp, fp) {
	this.c = Color;
	this.z = ItemID;
	this.i = Itty;
	this.q = q;
	this.a = a;
	this.v = IVID;
	this.m = RID;
	this.mp = mp;
	this.fp = fp;
}


function GoP(p) {
	window.location.replace('fhblmes.asp?P=' + p + '&CharsAt=' + CharsAt + '&Special=' + Special);
}

function Tipz(v) {
	window.top.InfoTip(IPath2 + (Infos[v].mp == '' ? 'na.gif' : Infos[v].mp), '<b>' + Infos[v].i + '</b>' + (Infos[v].q > 1 ? '<br>Quantity: ' + Infos[v].q : ''));
}

function DC(v) {
	Tipz(v);

	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&Mat=' + Infos[v].m + '&sq=' + Infos[v].q + '&Special=' + Special + '&IID=' + Infos[v].v + '&Type=' + Infos[v].z + '\');}', (Infos[v].z < 0 ? 'Despawn' : 'Spawn ' + Infos[v].i), (Infos[v].z < 0 ? 'Despawn' : 'Spawn'));
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	Tipz(v);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}