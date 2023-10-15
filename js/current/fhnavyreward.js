var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIP;
var Processing = 0;
var ItemTypeID = ItemTypeID;
var Level = Level;
var Money = Money;
var Fame = Fame;
var BagCount = 0;
var VPath = "https://lohcdn.com/game/v/"
var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq) {
	var PictureID = rp;
	var Color = 'white';
	if (ru != 0) {
		Color = 'gold';
	}

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')"><td><table width=370 class="weakercell" cellpadding=0 cellspacing=0><tr><td rowspan=2><img width=30 height=30 src="' + (IPath + rpp + '/' + PictureID) + '"></td><td style="color: ' + Color + '"><b>' + rn + (rq > 1 ? ' * ' + rq : '') + '</b></td></tr><tr><td><table class="weakercell" width=340 cellpadding=0 cellspacing=0><td width=90>Fame: ' + rf + '</td><td width=160>' + window.top.PSGM3(rc) + '</td><td width=80>Level: ' + rl + '</td></tr></table></td></tr></table></td></tr>');

	IC = IC + 1;
}

function newInfo(Color, rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq) {
	this.c = Color;
	this.rid = rid;
	this.p = IPath + rpp + '/' + rp;
	this.rt = rt;
	this.rn = rn;
	this.rpp = rpp;
	this.rp = rp;
	this.rf = rf;
	this.rc = rc;
	this.rl = rl;
	this.ru = ru;
	this.rq = rq;
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&CharsAt=' + CharsAt + '');
}
function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + Infos[v].p, '' + Tipsfor(v))
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].rn + '</b><br>Quantity: ' + Infos[v].rq + '<br>Unique: ' + (Infos[v].ru != 0 ? 'Yes' : 'Nope') + '<br>Faction: ' + (Fame >= Infos[v].rf ? '<font id=tgreen>' + Infos[v].rf + '</font>' : '<font id=tred>' + Infos[v].rf + '</font>') + '<br>Cost: ' + (Money >= Infos[v].rc ? '<font id=tgreen>' + window.top.PSGM3(Infos[v].rc) + '</font>' : '<font id=tred>' + window.top.PSGM3(Infos[v].rc) + '</font>') + '<br>Level: ' + (Level >= Infos[v].rl ? '<font id=tgreen>' + Infos[v].rl + '</font>' : '<font id=tred>' + Infos[v].rl + '</font>');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Level >= Infos[v].rl && Money >= Infos[v].rc && Fame >= Infos[v].rf ? '<' + strClicky + ' onclick="if (Processing == 0) {window.location.replace(\'?P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&CharsAt=' + CharsAt + '&Type=' + Infos[v].rid + '\')}" style=\'width: 65\'>Take</button>' : '') + '<' + strClicky + ' onclick="if (Processing == 0) {window.top.loadwindow2(\'' + (Infos[v].rt == 1 ? 'imi.asp' : (Infos[v].rt == 3 ? 'imiv.asp' : (Infos[v].rt == 6 ? 'Rz.asp' : 'Mz.asp'))) + '?Test=' + Infos[v].rid + '\',300,300,\'iwindow\',\'' + Infos[v].rn + '\')}" style=\'width: 65\'>Info</button>';
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles2 = 'Open your ' + Names + '`s hold';
	document.write('<td style=\'cursor: pointer\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td p="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" class="menucell" title="' + Titles2 + '" style="width: 40px; color: ' + Color + '; background-color:' + Color + '" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + VPath + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=40 height=40 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
	document.write('</td>');
}