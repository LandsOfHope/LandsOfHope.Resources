var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIP;
var Processing = 0;
var Level = Level;
var Money = Money;
var Fame = Fame;
var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq) {
	var PictureID = rp;
	if (ru != 0) {
		Color = 'gold';
	} else {
		Color = 'white';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td width=360><table width=360 class="weakercell" cellpadding=0 cellspacing=0><tr><td rowspan=2><img width=30 height=30 src="' + (IPath + rpp + '/' + PictureID) + '"></td><td><b>' + rn + (rq > 1 ? ' * ' + rq : '') + '</b></td></tr><tr><td><table class="weakercell" width=320 cellpadding=0 cellspacing=0><td width=90>AP: ' + rf + '</td><td width=180>' + window.top.BSGM3(rc) + '</td><td width=90>Level: ' + rl + '</td></tr></table></td></tr></table></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq) {
	this.c = Color;
	this.rid = rid;
	this.p = (IPath + rpp + '/' + rp);
	this.rn = rn;
	this.rt = rt;
	this.rq = rq;
	this.rpp = rpp;
	this.rp = rp;
	this.rc = rc;
	this.rl = rl;
	this.ru = ru;
	this.rf = rf;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].rn + '</b><br>Quantity: ' + Infos[v].rq + '<br>Unique: ' + (Infos[v].ru != 0 ? 'Yes' : 'Nope') + '<br>Faction: ' + (Fame >= Infos[v].rf ? '<font id=tgreen>' + Infos[v].rf + '</font>' : '<font id=tred>' + Infos[v].rf + '</font>') + '<br>Cost: ' + (Money >= Infos[v].rc ? '<font id=tgreen>' + window.top.BSGM(Infos[v].rc) + '</font>' : '<font id=tred>' + window.top.BSGM(Infos[v].rc) + '</font>') + '<br>Level: ' + (Level >= Infos[v].rl ? '<font id=tgreen>' + Infos[v].rl + '</font>' : '<font id=tred>' + Infos[v].rl + '</font>');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Level >= Infos[v].rl && Money >= Infos[v].rc && Fame >= Infos[v].rf ? Adr('if (Processing == 0) {window.location.replace(\'?P=' + PageNo + '&CharsAt=' + CharsAt + '&Type=' + Infos[v].rid + '\');}', 'Take', 'Take') : '') + Adr('if (Processing == 0) {window.parent.loadwindow2(\'' + (Infos[v].rt == 1 ? 'imi.asp' : (Infos[v].rt == 6 ? 'rz.asp' : 'Mz.asp')) + '?Test=' + Infos[v].rid + '\',300,300,\'iwindow\',\'' + Infos[v].rn + '\')}', 'Info', 'Info');
}
