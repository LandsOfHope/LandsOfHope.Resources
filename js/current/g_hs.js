var IC = 0;
var Infos = new Array();
var Type2 = Type2;
var IPath = window.top.FHIPR;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Score: ' + Infos[v].s;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AM(v, Picture, Named, s) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Picture, Named, s);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td><img width=15 height=15 src=\'' + IPath + (Picture == '' ? 'na.gif' : Picture) + '\'></td><td width="100%">' + Named + '</td><td>' + s + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Picture, Named, s) {
this.c = Color;
this.v = v;
this.p = Picture;
this.n = Named;
this.s = s;
}
