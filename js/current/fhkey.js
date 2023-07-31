
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(Color, PictureID, v, Itty, q, x, y, g) {
PictureID = 'ky1.gif'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, v, Itty, q, x, y, g);
// q=' + q + ' x=' + x + ' y=' + y + ' g=' + g + ' v=' + v + ' p="' + PictureID + '"

document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath  + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + (q > 1 ? ' * ' + q : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, v, Itty, q, x, y, g) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.t = Itty;
this.q = q;
this.x = x;
this.y = y;
this.g = g;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) , '' + Infos[v].t + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Quantity: ' + Infos[v].q;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fhkey2.asp?map.g=' + Infos[v].g + '&mapx=' + Infos[v].x +'&mapy=' + Infos[v].y + '&P=' + PageNo + '\')}" style=\'width: 65\'>Map</button>' + (Infos[v].t.indexOf('(Q)') == -1 ? '<' + strClicky + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'?ItemID=-' + Infos[v].v + '&P=' + PageNo + '\')}" style=\'width: 65\'>Drop</button>' : '');
}
