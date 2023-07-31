var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIP;
var Processing = 0;
var Level = Level;
var Money = Money;
var Rank = Rank;
var BagCount = 0;
var VPath = "game/v/"
var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(rid, tid, rn, rpp, rp, rf, rc, ru, ru2) {
var PictureID = rp;
var Color = 'orange';
if (ru == 0) {
	Color = 'red';
} else if (Rank >= rf) {
	Color = '#66ff66';
}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}

Infos[IC] = new newInfo(tid, Color, rid, rn, rpp, rp, rf, rc, ru, ru2);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')"><td><table width=370 class="weakercell" cellpadding=0 cellspacing=0><tr><td rowspan=2><img width=30 height=30 src="' + (IPath + rpp + '/' + PictureID) + '"></td><td style="color: ' +  Color + '"><b>' + rn + '</b></td></tr><tr><td><table class="weakercell" width=340 cellpadding=0 cellspacing=0><td width=90>Rank: ' + rf + '</td><td width=160>' + window.top.PSGM3(rc) + '</td></tr></table></td></tr></table></td></tr>');

IC = IC + 1;
}

function newInfo(tid, Color, rid, rn, rpp, rp, rf, rc, ru, ru2) {
this.c = Color;
this.rid = rid;
this.tid = tid;
this.p = IPath + rpp + '/' + rp;
this.ru2 = ru2;
this.rn = rn;
this.rpp = rpp;
this.rp = rp;
this.rf = rf;
this.rc = rc;
this.ru = ru;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt + '');
}
function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + Infos[v].p, '' + Tipsfor(v))
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].rn + '</b><br>Unlocked: ' + (Infos[v].ru != 0 ? 'Yes' : 'Nope') + '<br>Rank: ' + (Rank >= Infos[v].rf ? '<font id=tgreen>' + Infos[v].rf + '</font>' : '<font id=tred>' + Infos[v].rf + '</font>') + '<br>Cost: ' + (Money >= Infos[v].rc ? '<font id=tgreen>' + window.top.PSGM3(Infos[v].rc) + '</font>' : '<font id=tred>' + window.top.PSGM3(Infos[v].rc) + '</font>');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Money >= Infos[v].rc && Rank >= Infos[v].rf && Infos[v].ru != 0 ? '<' + strClicky2 + ' onclick="if (Processing == 0) {window.location.replace(\'?P=' + PageNo + '&CharsAt=' + CharsAt + '&Type=' + Infos[v].rid + '\')}" style=\'width: 65\'>Purchase</button>' : '') + '<' + strClicky + ' onclick="if (Processing == 0) {window.top.loadwindow2(\'vessels.asp?MT=' + Infos[v].tid + '\',615,395,\'iwindow\',\'' + Infos[v].rn + '\')}" style=\'width: 65\'>Info</button>';
}