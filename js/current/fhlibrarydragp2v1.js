var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(dpid, dpn, dpc, dpt, PictureID, dpfv, dpsg) {
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(dpid, dpn, dpc, dpt, PictureID, dpfv, dpsg);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="https://res.landsofhope.com/game/dp/' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + dpn + ' (' + dpsg + ')</td><td>' + GetPower(dpid, dpc) + '</td></tr>');
IC = IC + 1;
}

function newInfo(dpid, dpn, dpc, dpt, PictureID, dpfv, dpsg) {
this.v = dpid;
this.p = PictureID;
this.dpn = dpn;
this.dpc = dpc;
this.dpt = dpt;
this.dpfv = dpfv;
this.dpsg = dpsg;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('https://res.landsofhope.com/game/dp/' + Infos[v].p,Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].dpn + ' (' + Infos[v].dpsg + ')</b><br>' + Infos[v].dpt + '<br><table class="weakcell" cellpadding=1 cellspacing=1><tr><td>Power Cost: </td><td>' + GetPower(Infos[v].v, Infos[v].dpc) + '</td></tr></table>Faction: ' + Infos[v].dpfv;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='https://res.landsofhope.com/game/dp/" + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = ''; //Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].m + '\');','View item information','View');
}

function GetPower(f, p) {
var x = 0;
var ret = '';
var w = 16;
w = 10;
for (x = 0; x < p; x++) {
	ret = ret + '<div style=\'float: left; width:' + w + 'px; height: ' + w + 'px;\'><img src=\'https://res.landsofhope.com/game/h/' + MT + '.gif\' width=' + w + ' height=' + w + '></div>';
}
return ret;
}