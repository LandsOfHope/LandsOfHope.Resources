var CharsAt = CharsAt;
var North = North;
var South = South;
var East = East;
var West = West;
var Special = Special;
var Invx = 0;
var strWord = 'Spawn'
var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPO;
var PageNo = PageNo;
var RRC = 0;
var Races = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');
document.write('<script src="https://lohcdn.com/js/current/races.js" language="JavaScript"></script>');

function CS(vin2, vin) {
	if (Processing == 0) {
		Processing = 1;
		var x = window.parent.lastx;
		var y = window.parent.lasty;
		var z = window.parent.lastz;
		window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '&Special=' + Special + '&CharsAt2=' + vin + '&x=' + x + '&y=' + y + '&z=' + z + '&Type=' + vin2);
	}
}

function GoP(PageNo) {
	var x = window.parent.lastx;
	var y = window.parent.lasty;
	var z = window.parent.lastz;
	window.location.replace("?CharsAt=" + CharsAt + "&Special=" + Special + "&X=" + x + "&Y=" + y + "&Z=" + z + "&P=" + PageNo);
}

//function DC(v) {
//getObj('Buttons').innerHTML = (CharsAt == 0 ? '<' + strClicky1 + ' id=Sp7 onclick="CS(\'\', ' + stuff.v + ', this)" style=\'width: 85; height: 22\'><img src="' + FHIPO + 'brick.gif">Build</button>' : (North == 1 ? '<' + strClicky1 + ' id=Sp1 onclick="CS(\'N\', ' + stuff.v + ', this)" style=\'width: 85\'><img src="' + FHIPO + 'Up.gif">' + ((window.parent.lasty) - 1) + '</button>' : '') + (South == 1 ? '<' + strClicky1 + ' id=Sp2 onclick="CS(\'S\', ' + stuff.v + ', this)" style=\'width: 85\'><img src="' + FHIPO + 'Dn.gif">' + ((window.parent.lasty) + 1) + '</button>' : '') + (East == 1 ? '<' + strClicky1 + ' id=Sp3 onclick="CS(\'E\', ' + stuff.v + ', this)" style=\'width: 85\'><img src="' + FHIPO + 'rt.gif">' + ((window.parent.lastx) + 1) + '</button>' : '') + (West == 1 ? '<' + strClicky1 + ' id=Sp4 onclick="CS(\'W\', ' + stuff.v + ', this)" style=\'width: 85\'><img src="' + FHIPO + 'Lt.gif">' + ((window.parent.lastx) - 1) + '</button>' : '')) + (CharsAt != 0 ? '<' + strClicky2 + ' id=Sp5 onl//ick="CS(\'H\', ' + stuff.v + ', this)" style=\'width: 85; height: 22\'><img src="' + FHIPO + 'tinker.gif">Upgrade</button>' : '');
//}


function DC(v) {
	getObj('Buttons').innerHTML = (CharsAt == 0 ? Adir('CS("", ' + Races[v].v + ');', 'Build the selected room at this location', 'brick', 'Build') : (North == 1 ? Adir('CS("N", ' + Races[v].v + ');', 'Build this room to the North', 'up', 'North') : '') + (South == 1 ? Adir('CS("S", ' + Races[v].v + ');', 'Build this room to the South', 'dn', 'South') : '') + (East == 1 ? Adir('CS("E", ' + Races[v].v + ');', 'Build this room to the east', 'rt', 'East') : '') + (West == 1 ? Adir('CS("W", ' + Races[v].v + ');', 'Build this room to the west', 'lt', 'West') : '')) + (CharsAt != 0 ? Adir('CS("H", ' + Races[v].v + ');', 'Upgrade the selected room', 'bricks', 'Upgrade') : '');
}


function RCR(v) {
	getObj('R' + v).style.cursor = '';
	getObj('R' + v).style.backgroundColor = '';
}

function PCR(v) {
	getObj('R' + v).style.cursor = 'pointer';
	getObj('R' + v).style.backgroundColor = BGCOLOR_S
}

function AVR(v, Itty, PicM, PicF) {
	var Color = LITE;
	if (Races[RRC] == null) {
		Races[RRC] = new Array();
	}
	Races[RRC] = new newInfo(Color, v, Itty, PicM, PicF);
	document.write('<tr id="R' + RRC + '" onmouseover="PCR(' + RRC + ')" onmouseout="RCR(' + RRC + ')" onclick="DC(' + RRC + ')"><td><img width=15 height=15 src="' + IPath + (PicM == '' || PicM == '0' ? 'na.gif' : PicM) + '"><img width=15 height=15 src="' + IPath + (PicF == '' || PicF == '0' ? 'na.gif' : PicF) + '"></td><td width="315" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	RRC = RRC + 1;
}

function newInfo(Color, v, Itty, PicM, PicF) {
	this.c = Color;
	this.i = Itty;
	this.f = PicF;
	this.m = PicM;
	this.v = v;
}