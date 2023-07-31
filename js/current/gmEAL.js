var PageNo = PageNo;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(l, c, p, i, lt, ld) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, l, c, p, i, lt, ld);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (p == '' ? 'na.gif' : p) + '\' width=15 height=15></td><td width=\'100%\'>' + lt + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, l, c, p, i, lt, ld) {
this.color = Color;
this.ld = ld;
this.t = lt;
this.l = l;
this.p = p;
this.c = c;
this.i = i;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Date: ' + Infos[v].ld + '<br>IP: ' + Infos[v].i;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = ''
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}