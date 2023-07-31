
var PageNo = PageNo;
var MPath = window.top.FHIPM;
var Processing = 0;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
window.top.hideTip();
}

function PC(v) {
window.top.InfoMap(Infos[v].p,'','', '<b>' + Infos[v].t + '</b><br>Location: ' + Infos[v].t + '<br>Realm: ' + GetRealm(Infos[v].g) + '<br>Tile Item Limit: ' + Infos[v].mil);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	if (Processing == 0) {
		Processing = 1;
		window.parent.Interface.location.replace('fh.asp?Redraw=1&x=' + Infos[v].x + '&y=' + Infos[v].y + '&MapNum=' + Infos[v].g + '');
	}
}

//onclick="DC(this)" 

function AI(Color, PictureID, ItemName, ItemID, x, y, g, at, an, ab, ai, mil) {
if (PictureID == '0') {PictureID = ''}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, x, y, g, at, an, ab, ai, mil);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td width=15 bgcolor=\'' + Color + '\'>' + (PictureID == '' ? '' : '<img src=\'' + MPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15>') + '</td><td width=\'200\' style="color: ' +  Color + '; padding-left: 5px;">' + ItemName + '</td><td width=100>' + x + ', ' + y + ' ' + window.top.GetRealma(g) + '</td><td width=60>' + mil + '</td><td><' + strClicky1 + ' onclick="window.parent.Interface.location.replace(\'fh.asp?Redraw=1&x=' + x + '&y=' + y + '&MapNum=' + g + '\');" title=\'Go\'>Go</button>' + (an != 0 ? '<' + strClicky1 + ' onclick="window.parent.Interface.location.replace(\'fhtnpc.asp?MapID=' + ItemID + '\');" title=\'NPCs\'>NPC</button>' : '') + '' + (ab != 0 ? '<' + strClicky2 + ' onclick="window.parent.Interface.location.replace(\'fhtbm.asp?MapID=' + ItemID + '\');" title=\'Buildings\'>Buildings</button>' : '') + '' + (at != 0 ? '<' + strClicky2 + ' onclick="window.parent.Interface.location.replace(\'fhtif.asp?MapID=' + ItemID + '\');" title=\'Friends\'>Friends</button>' : '') + '' + (ai != 0 ? '<' + strClicky1 + ' onclick="window.parent.Interface.location.replace(\'fhtia.asp?MapID=' + ItemID + '\');" title=\'Items\'>Items</button>' : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, x, y, g, at, an, ab, ai, mil) {
this.c = Color;
this.t = ItemName;
this.p = PictureID;
this.v = ItemID;
this.at = at;
this.an = an;
this.ab = ab;
this.ai = ai;
this.x = x;
this.y = y;
this.g = g;
this.mil = mil;
}
