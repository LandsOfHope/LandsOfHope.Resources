var MapID = MapID;
var PageNo = PageNo;
var Type2 = Type2;
var Processing = 0;
var IPath = window.top.FHIPM;
var IPath2 = window.top.FHIPI;
var IC = 0;
var Infos= new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Color, v,f, Itty, PictureID, y, x, g) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v,f, Itty, PictureID, y, x, g);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=12><img width=12 height=12 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v,f, Itty, PictureID, y, x, g) {
this.c = Color;
this.f = f;
this.p = PictureID;
this.t = Itty;
this.value = v;
this.y = y;
this.x = x;
this.g = g;
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

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Location: ' + Infos[v].x + '. ' + Infos[v].y + ' ' + GetRealm(Infos[v].g)
getObj('Pic').innerHTML = "<img src='"  + IPath2 + "po5.gif'>";
if (Processing == 0) {
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'?Type=' + Infos[v].value + '&MapID=' + MapID + '&CharsAt=' + Infos[v].f + '\');}','Place ' + Infos[v].t,'Place');
} else {
	getObj('Buttons').innerHTML = '';
}
}

function GoP(p) {
	window.location.replace('?P=' + p + '&MapID=' + MapID);
}