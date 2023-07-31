var CharsAt = CharsAt;
var North = North;
var South = South;
var East = East;
var West = West;
var Special = Special;
var strWord = (Special == 0 ? 'Construction' : 'Dungeon Mastery')
var IPath = window.top.FHIPI;
var BPath = window.top.FHIPB;
var FHIPO = window.top.FHIPO;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function CS(vin2, v) {
if (Processing == 0) {
	Processing = 1
	var x = window.parent.lastx;
	var y = window.parent.lasty;
	var z = window.parent.lastz;
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo  +'&Special=' + Special  +'&InventoryItemID=' + Infos[v].v2 + '&CharsAt2=' + Infos[v].v + '&x=' + x + '&y=' + y + '&z=' + z + '&Type=' + vin2);
}
}

function GoP(PageNo) {
	var x = window.parent.lastx;
	var y = window.parent.lasty;
	var z = window.parent.lastz;
	window.location.replace("?CharsAt=" + CharsAt + "&Special=" + Special + "&X=" + x + "&Y=" + y + "&Z=" + z + "&P=" + PageNo);
}

function DC(v) {
if (LastV >= 0) {
	getObj('I' + LastV).style.color = 'white';
}
LastV = v;

getObj('I' + v).style.color = 'gold';
getObj('Buttons').innerHTML = (CharsAt == 0 ? Adir('CS("", ' + v + ');','Build','brick','Build') : (North == 1 ? Adir('CS("N", ' + v + ');','Build this room to the North','up','North') : '') + (South == 1 ? Adir('CS("S", ' + v + ');','Build this room to the South','dn','South') : '') + (East == 1 ? Adir('CS("E", ' + v + ');','Build this room to the east','rt','East') : '') + (West == 1 ? Adir('CS("W", ' + v + ');','Build this room to the west','lt','West') : '')) + (CharsAt != 0 ? Adir('CS("H", ' + v + ');','Upgrade the selected room','bricks','Upgrade') : '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(BPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t + '<br>' + strWord + ' ' + Infos[v].sv);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(PictureID, v, v2, Itty, sv) {
var Color = LITE;

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, v, v2, Itty, sv);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=10><img width=10 height=10 src="' + BPath + '' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="250">' + Itty + '</td><td>' + sv +'</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, v, v2, Itty, sv) {
this.c = Color;
this.sv = sv;
this.p = PictureID;
this.t = Itty;
this.v2 = v2;
this.v = v;
}
