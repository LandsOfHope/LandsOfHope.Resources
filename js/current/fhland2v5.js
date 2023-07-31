var Processing = 0;
var IPath = window.top.FHIPR;
var Countt = 0;
var PageNo = PageNo;
var ll = ll;
var l2 = l2;
var ln = ln;
var MC = 0;
var Markers = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemName, ItemID, GameID, mapx, mapy, level, level2, r, e, pd, a, t, PictureID) {
	var Color = GetAColor(a);

	// v=' + ItemID + ' pd=' + pd + ' a=' + a + ' t=' + t + ' r="' + r + '" e=' + e + ' l=' + level + ' l2=' + level2 + ' g=' + GameID + ' x=' + mapx + ' y=' + mapy + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" 

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(Color, ItemName, ItemID, GameID, mapx, mapy, level, level2, r, e, pd, a, t, PictureID);

	document.write('<tr id="M' + MC + '" onmouseover="PC(' + MC + ')" onmouseout="RC(' + MC + ')"  onclick="DC(' + MC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'230\'>' + ItemName + '</td><td width=\'70\'>' + level + '-' + level2 + '</td></tr>');
	MC = MC + 1;
}

function newMarker(Color, ItemName, ItemID, GameID, mapx, mapy, level, level2, r, e, pd, a, t, PictureID) {
	this.c = Color;
	this.tn = ItemName;
	this.p = PictureID;
	this.pd = pd;
	this.v = ItemID;
	this.g = GameID;
	this.x = mapx;
	this.y = mapy;
	this.a = a;
	this.t = t;
	this.r = r;
	this.e = e;
	this.l = level;
	this.l2 = level2;
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
	getObj('Stuff2').innerHTML = '<b style=\"color: ' + Markers[v].c + '\">' + Markers[v].tn + '</b><br><b>' + GetLT(Math.abs(Markers[v].t)) + '</b><br>Race: ' + Markers[v].r + '<br>Spawn Level Range: ' + Markers[v].l + '-' + Markers[v].l2 + '<br>Spawns: ' + Markers[v].e + '<br>Recommended for: ' + strx + (Markers[v].a != 0 ? '<br>Monster Allegiance: ' + GetAName(Markers[v].a) : '') + '<br>Location: ' + Markers[v].x + ', ' + Markers[v].y + ' ' + GetRealm(Markers[v].g);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Markers[v].p == '' ? 'na.gif' : Markers[v].p) + "'>";
	getObj('Buttons').innerHTML = "<" + strClicky + " OnClick=\"if (Processing == 0) {this.disabled = true; Processing = 1; window.location.replace('fh.asp?Redraw=1&x=" + Markers[v].x + "&y=" + Markers[v].y + "&MapNum=" + Markers[v].g + "')};\">Recall</button>";
}

function GoP(PageNo) {
	window.location.replace('?ln=' + ln + '&ll=' + ll + '&l2=' + l2 + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip(IPath + (Markers[v].p == '' ? 'na.gif' : Markers[v].p), '' + Markers[v].tn + '');
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S
}


function GetLT(x) {
	var strLT = 'Area of Interest';
	if (x == 0) {
	} else if (x == 1) {
		strLT = 'Player Dungeon';
	} else if (x == 2) {
		strLT = 'NPC Dungeon';
	} else if (x == 3) {
		strLT = 'Player Town';
	} else if (x == 4) {
		strLT = 'NPC Town';
	} else if (x == 7) {
		strLT = 'NPC Outpost';
	} else if (x == 5) {
		strLT = 'Place of Interest';
	} else if (x == 6) {
		strLT = 'Allegiance Location';
	} else {
		strLT = 'Unknown';
	}
	return strLT;
}