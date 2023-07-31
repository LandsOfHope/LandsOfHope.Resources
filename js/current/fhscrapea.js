
var Type2 = Type2;
var PageNo = PageNo;
var MT = MT;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIP
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?MT=' + MT + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].pp + '/' + Infos[v].p,Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AM(i, n, p, pp) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, i, n, p, pp);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="padding-left: 5px;"><td width=15><img src="' + IPath + pp + '/' + p + '" width=15 height=15></td><td>' + n + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, i, n, p, pp) {
this.c = Color;
this.i = i;
this.n = n;
this.p = p;
this.pp = pp;
}

function DC(v) {
	window.location.replace('?MT=' + MT + '&Type=' + Type2 + '&ID=' + Infos[v].i + '&IP=' + Infos[v].p + '&N=' + Infos[v].n)
}
