
var Type2 = Type2;
var Mask = Mask;
var PageNo = PageNo;
var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(v, l, n, r, PictureID, Itty, s, a) {
var Color = GetAColor(a);
if (Color == '') {Color = 'yellow'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, l, n, r, PictureID, Itty, s, a);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, l, n, r, PictureID, Itty, s, a) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.a = a;
this.s = s;
this.r = r;
this.n = n;
this.l = l;
this.t = Itty;
}


function GoP(PageNo) {
window.location.replace('?Type=' + Type2 + '&P=' + PageNo + '&Match=' + Mask + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].t + '<br>Level: ' + Infos[v].l + '<br>Race: ' + Infos[v].r + '<br>Profession: ' + Infos[v].n + '<br>Allegiance: ' + GetAName(Infos[v].a) + '<br>Server: ' + Infos[v].s;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Type=9&P=' + PageNo + '&CharsAt=' + Infos[v].v + '\');}', 'Possess', 'Possess');
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