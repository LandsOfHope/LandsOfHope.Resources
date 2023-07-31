var CaptainID = CaptainID;
var PageNo = PageNo;
var county = 0;
var Processing = 0;
var Level = Level;
var Money = Money;
var Rank = Rank;
var ItemTypeID = ItemTypeID;
var CharsAt = CharsAt;
var BagCount = 0;
var IPath = window.top.FHIP;
var VPath = window.top.FHIPV;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(rid, rn, rpp, rp, rf, rc, rs, re) {
var PictureID = rp;
var Color = 'orange';
if (CaptainID == rid) {
	Color = 'gold';
} else if (Rank >= rf) {
	Color = '#66ff66';
}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}

Infos[IC] = new newInfo(Color, rid, rn, rpp, rp, rf, rc, rs, re);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')"><td><table width=370 class="weakercell" cellpadding=0 cellspacing=0><tr><td rowspan=2><img width=30 height=30 src="' + (IPath + rpp + '/' + PictureID) + '"></td><td style="color: ' +  Color + '"><b>' + rn + '</b></td></tr><tr><td><table class="weakercell" width=340 cellpadding=0 cellspacing=0><td width=90>Rank: ' + rf + '</td><td width=160>' + window.top.PSGM3(rc) + '</td></tr></table></td></tr></table></td></tr>');

IC = IC + 1;
}

function newInfo(Color, rid, rn, rpp, rp, rf, rc, rs, re) {
this.c = Color;
this.rid = rid;
this.p = IPath + rpp + '/' + rp;
this.rn = rn;
this.rpp = rpp;
this.rp = rp;
this.rf = rf;
this.rc = rc;
this.rs = rs;
this.re = re;
}

function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles2 = 'Open your ' + Names;
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPV + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
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
return '<b>' + Infos[v].rn + '</b>' + (Infos[v].rid == CaptainID ? '<center>HIRED</center>' : '') + '<br>Sex: ' + Infos[v].rs + '<br>Bonus: ' + Infos[v].re + '<br>Rank: ' + (Rank >= Infos[v].rf ? '<font id=tgreen>' + Infos[v].rf + '</font>' : '<font id=tred>' + Infos[v].rf + '</font>') + '<br>Cost: ' + (Infos[v].rc == 0 ? 'Free' : (Money >= Infos[v].rc ? '<font id=tgreen>' + window.top.PSGM3(Infos[v].rc) + '</font>' : '<font id=tred>' + window.top.PSGM3(Infos[v].rc) + '</font>'));
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Money >= Infos[v].rc && Rank >= Infos[v].rf && (Infos[v].rid != CaptainID || Infos[v].rid == 1) ? '<' + strClicky2 + ' onclick="if (Processing == 0) {confirm(\'Are you sure you wish to hire ' + Infos[v].rn  + ' as ships captain?\', ' + v + ')}" style=\'width: 65\'>Hire</button>' : '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.location.replace('fhnavycrew.asp?P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&CharsAt=' + CharsAt + '&Type=' + Infos[pb].rid);
		}
	}
}