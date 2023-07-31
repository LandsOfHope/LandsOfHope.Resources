var CharsAt = CharsAt;
var North = North;
var South = South;
var East = East;
var West = West;
var Special = Special;
var Invx = 0;
var strWord = (Special == 0 ? 'Construction' : 'Dungeon Mastery')
var IPath = window.top.FHIPI;
var BPath = window.top.FHIPB;
var FHIPO = window.top.FHIPO;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function CS(vin2, vin) {
if (Processing == 0) {
	Processing = 1;
	var x = window.parent.lastx;
	var y = window.parent.lasty;
	var z = window.parent.lastz;
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo  +'&Special=' + Special  + '&CharsAt2=' + vin + '&x=' + x + '&y=' + y + '&z=' + z + '&Type=' + vin2);
}
}

function GoP(PageNo) {
	var x = window.parent.lastx;
	var y = window.parent.lasty;
	var z = window.parent.lastz;
	window.location.replace("?CharsAt=" + CharsAt + "&Special=" + Special + "&X=" + x + "&Y=" + y + "&Z=" + z + "&P=" + PageNo);
}

function DC(v) {
getObj('Selected').innerHTML = '<center><font class=\'weakcell\'>' + Infos[v].t + '</font></center>'
getObj('Buttons').innerHTML = (CharsAt == 0 ? Adir('CS("", ' + Infos[v].v + ');','Build the selected room at this location','brick','Build') : (North == 1 ? Adir('CS("N", ' + Infos[v].v + ');','Build this room to the North','up','North') : '') + (South == 1 ? Adir('CS("S", ' + Infos[v].v + ');','Build this room to the South','dn','South') : '') + (East == 1 ? Adir('CS("E", ' + Infos[v].v + ');','Build this room to the east','rt','East') : '') + (West == 1 ? Adir('CS("W", ' + Infos[v].v + ');','Build this room to the west','lt','West') : '')) + (CharsAt != 0 ? Adir('CS("H", ' + Infos[v].v + ');','Upgrade the selected room','bricks','Upgrade') : '');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(BPath + Infos[v].p,'<b>' + Infos[v].t + '</b><br>' + strWord);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(PictureID, v, Itty) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, v, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=10><img width=10 height=10 src="' + BPath + '' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="250" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, v, Itty) {
this.c = Color;
this.v = v;
this.t = Itty;
this.p = PictureID;
}
