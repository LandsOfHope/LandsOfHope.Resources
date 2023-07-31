var PageNo = PageNo;
var county = 0;
var county2 = 0;
var IPath = window.top.FHIPO;
var FPID = FPID;
var Level = Level;
var OPath = window.top.FHIPO;
var RPath = window.top.FHIPR;
var DefaultShop = 0;
var Shop = 0;
var Processing = 0;
var LastID = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(pid, rc, Itty, PictureID) {
	LastID = pid;
}

function AvC2(pid, Itty, l, pp, pid2, Itty2, l2, pp2, pid3, Itty3, l3, pp3, pid4, Itty4, l4, pp4) {
	var Color = '#66ff66';
	document.write('<tr><td width=\'25%\' class=\'nav3\' style="color:' + Color + '; border-left: 1px solid white; border-bottom: 1px solid white; " onmouseover="PC(this, \'' + pp + '\',\'' + Itty + '\', \'II\', \'' + l + '\');" onclick="DC(' + pid + ',' + l + ');" onmouseout="RC(this)"><center><img src="' + RPath + pp + '"></center></td>' + (pid2 == 0 ? '<td></td><td width=\'75%\' colspan=3></td>' : '<td><img src="' + IPath + 'rt.gif"></td><td width=\'25%\' class=\'nav3\' style="color:' + Color + '; border-bottom: 1px solid white" onmouseover="PC(this, \'' + pp2 + '\',\'' + Itty2 + '\', \'III\', \'' + l2 + '\');" onclick="DC(' + pid2 + ',' + l2 + ');" onmouseout="RC(this)"><center><img src="' + RPath + pp2 + '"></center></td>' + (pid3 == 0 ? '<td></td><td width=\'50%\' colspan=2></td>' : '<td><img src="' + IPath + 'rt.gif"></td><td width=\'25%\' class=\'nav3\' style="color:' + Color + '; border-bottom: 1px solid white" onmouseover="PC(this, \'' + pp3 + '\',\'' + Itty3 + '\', \'IV\', \'' + l3 + '\');" onclick="DC(' + pid3 + ',' + l3 + ');" onmouseout="RC(this)"><center><img src="' + RPath + pp3 + '"></center></td>' + (pid4 == 0 ? '<td></td><td width=\'25%\' class=\'nav3\'></td>' : '<td><img src="' + IPath + 'rt.gif"></td><td width=\'25%\' class=\'nav3\' style="color:' + Color + '; border-bottom: 1px solid white" onmouseover="PC(this, \'' + pp4 + '\',\'' + Itty4 + '\', \'V\', \'' + l4 + '\');" onclick="DC(' + pid4 + ',' + l4 + ');" onmouseout="RC(this)"><center><img src="' + RPath + pp4 + '"></center></td></tr>'))));
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}
function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff, p, i, t, l) {
	window.top.InfoTip('' + RPath + p, '<b>' + i + '</b><br>Tier ' + t + ' Race<br>Required Level: ' + l)
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function Tipsfor(stuff) {
	return '<b>' + stuff.i + '</b><br>Tier ' + stuff.t + ' Race<br>Required Level: ' + stuff.l;
}

function DC(r, l) {
	window.frames['ResultsOfit'].location.replace('Ez.asp?test=' + r + '&bonus=' + l);
}