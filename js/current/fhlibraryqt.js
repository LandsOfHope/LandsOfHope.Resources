var SN = SN;
var CharsAt =CharsAt;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DB(c) {
window.location.replace('?SN=' + SN + '&CharsAt=' + c + '&P=' + PageNo + '');
}

function DC(v) {
var an = window.top.GetAName(Infos[v].a);

getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>' + (an != '' ? '<br>Allegiance: ' + an : '') + (Infos[v].r != 0 ? '<br></b>Repeatable</b>' : '') + '<br>Quest Level: ' + Infos[v].ql + '<br><img src="' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '" align=left>&nbsp;If you wish to take this quest go to <b>' + Infos[v].cn + '</b> at <b>' + Infos[v].x + ', ' + Infos[v].y + ' in ' + window.top.GetRealm(Infos[v].g) + '</b>' + (Math.abs(Infos[v].b) != 0 ? ' and look inside the buildings, you may need to explore a building if you can not find the NPC immediately' : '') + '.';
getObj('Buttons').innerHTML = ''
}

function DrawRealms() {
var y = 0;
for (y = 1; y < window.top.Games.length; y++) {
	document.write("<tr><td style=\"" + strButtonx + "; width: 125px; height: 12px; color: white;  font-size: 7pt\" " + strClicksns + " onclick=\"DB(" + y + ")\">" + window.top.Games[y].GameName + "</td></tr>");
}
}

function AM(ql, v, x,y, g, Named, Picture, CN, b, a, r) {
var Color = window.top.GetAColor(a);
if (Color == '') {
	Color = LITE;
}
if (r == 0) {
	Color = 'orange';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ql, v, x,y, g, Named, Picture, CN, b, a, r);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="*" style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, ql, v, x,y, g, Named, Picture, CN, b, a, r) {
this.c = Color;
this.g = g;
this.p = Picture;
this.a = a;
this.b = b;
this.cn = CN;
this.t = Named;
this.ql = ql;
this.x = x;
this.y = y;
this.v = v;
this.r = r;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}