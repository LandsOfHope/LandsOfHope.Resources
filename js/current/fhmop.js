var Processing = 0;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(Itty, ID, p2, d, Color) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Itty, ID, p2, d, Color);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (p2 == '' ? 'na.gif' : p2) + '\' width=15 height=15></td><td width=\'100%\'style="color: ' +  Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Itty, ID, p2, d, Color) {
this.c = Color;
this.t = Itty;
this.p2 = p2;
this.v = ID;
this.d = d;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>' + Infos[v].d;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p2 == '' ? 'na.gif' : Infos[v].p2) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&ItemID=' +Infos[v].v + '\');}','Save','Save');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p2,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}