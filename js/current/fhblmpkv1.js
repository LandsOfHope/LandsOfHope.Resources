var Special = Special;
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var Processing = 0;
var Infos = new Array();
var IC = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, v, Itty, a, ox, oy) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, v, Itty, a, ox, oy);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" style="color: ' + Color + '; padding-left: 5px;">' + Itty + ' (' + ox + ', ' + oy + ')</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, v, Itty, a, ox, oy) {
this.c = Color;
this.ox = ox;
this.p = PictureID;
this.t = Itty;
this.oy = oy;
this.v = v;
this.a = a;
}

function Tipz(v) {
	window.top.InfoTip(IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].t + '</b><br>Room X/Y: ' + Infos[v].ox + ', ' + Infos[v].oy);
}

function DC(v) {
	Tipz(v);

	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&a=' + Infos[v].a + '&Special=' + Special + '&Type=' + Infos[v].v + '\');}','Place','Place') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&Special=' + Special + '&Type=-1\');}','Delete Key','Delete');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}