var Processing = 0;
var IPath = window.top.FHIPB;
var PageNo = PageNo;
var lg = lg;
var ln = ln;
var il1 = il1;
var il2 = il2;
var MC = 0;
var Markers = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function AC(d, ItemName, ItemID, GameID, mapx, mapy, l1, l2, a, s, puzzles, traps, chests, quests, PictureID, Color, sc) {
	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	if (quests > 0) {
		Color = 'orange';
	}
	Markers[MC] = new newMarker(PictureID, Color, d, ItemName, ItemID, GameID, mapx, mapy, l1, l2, a, s, puzzles, traps, chests, quests, sc);

	document.write('<tr id="M' + MC + '" onmouseover="PC(' + MC + ')" onmouseout="RC(' + MC + ')"  onclick="DC(' + MC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'160\'>' + ItemName + '</td><td>' + l1 + ' to ' + l2 + '</td><td style="font-weight: bold;">' + (quests > 0 ? 'Q' : '') + (puzzles > 0 ? 'P' : '') + (traps > 0 ? 'T' : '') + (chests > 0 ? 'C' : '') + '</td></tr>');
	MC = MC + 1;
}

function newMarker(PictureID, Color, d, ItemName, ItemID, GameID, mapx, mapy, l1, l2, a, s, puzzles, traps, chests, quests, sc) {
	this.c = Color;
	this.tn = ItemName;
	this.p = PictureID;
	this.d = d;
	this.v = ItemID;
	this.l1 = l1;
	this.l2 = l2;
	this.g = GameID;
	this.x = mapx;
	this.y = mapy;
	this.a = a;
	this.s = s;
	this.puzzles = puzzles;
	this.traps = traps;
	this.chests = chests;
	this.quests = quests;
	this.sc = sc;
}


function DC(v) {
	var strx = '';
	if (Markers[v].a == 0) {
		strx = 'Any';
	} else {
		if (Markers[v].a == 1) {
			strx = 'Society or Reapers'
		}
		if (Markers[v].a == 2) {
			strx = 'Exiles or Reapers'
		}
		if (Markers[v].a == 3) {
			strx = 'Exiles or Society'
		}

	}
	getObj('Stuff2').innerHTML = '<b style=\"color: ' + Markers[v].c + '\">' + Markers[v].tn + '</b><br>Recommended for: ' + strx + (Markers[v].a != 0 ? '<br>Monster Allegiance: ' + GetAName(Markers[v].a) : '') + (Markers[v].quests > 0 || Markers[v].traps > 0 || Markers[v].puzzles > 0 || Markers[v].chests > 0 ? '<br>Bonuses: ' + (Markers[v].quests > 0 ? 'Quests ' : '') + (Markers[v].puzzles > 0 ? 'Puzzles ' : '') + (Markers[v].traps > 0 ? 'Traps ' : '') + (Markers[v].chests > 0 ? 'Chests ' : '') : '') + '<br>' + Markers[v].d;
	getObj('Stuff2').style.backgroundImage = "URL('" + IPath + (Markers[v].p == '' ? 'na.gif' : Markers[v].p) + "')";
	getObj('Stuff2').style.backgroundRepeat = "no-repeat";
	getObj('Stuff2').style.backgroundPosition = "top right";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.top.Interface.location.replace(\'fh.asp?Redraw=1&x=' + Markers[v].x + '&y=' + Markers[v].y + '&MapNum=' + Markers[v].g + '\')};', 'Recall', 'Recall');
}

function GoP(PageNo) {
	window.location.replace('?lg=' + lg + '&il1=' + il1 + '&il2=' + il2 + '&ln=' + ln + '&P=' + PageNo + '');
}


function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('', '' + Markers[v].tn + '');
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}
