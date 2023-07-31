var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var SL = SL;
var SN = SN;
var PageNo = PageNo;
var EL = EL;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function fx1(stuff) {
	var re = /^\$|,|'|"|%|@|#/g;
	stuff.value = stuff.value.replace(re, "");
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
}


function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Race: ' + Infos[v].r + '<br>Prof: ' + Infos[v].n + '<br>Level: ' + Infos[v].l + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + Adr('window.location.replace(\'?ItemID=' + Infos[v].z + '&P=' + PageNo + '&SN=' + SN + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '\');', 'Move Here', 'Move Here') + Adr('PopupMonsterInfo(' + Infos[v].z + ');', 'Info', 'Info');
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

function AC(z, r, l, PictureID, ItemName) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, r, l, PictureID, ItemName);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, r, l, PictureID, ItemName) {
	this.c = Color;
	this.z = z;
	this.p = PictureID;
	this.t = ItemName;
	this.r = r;
	this.l = l;
	this.n = 'Player Vendor';
}
