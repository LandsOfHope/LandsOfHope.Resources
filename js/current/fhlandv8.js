var Processing = 0;
var IPath = window.top.FHIPB;
var PageNo = PageNo;
var lg = lg;
var ln = ln;

var MC = 0;
var Markers = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DBX(fid, fn, fc) {
//fid=" + fid + " fn='" + fn + "' c='" + fc + "' fc='" + fc + "' 
document.write("<tr><td style=\"" + strButtonx + "; width: 110; color: " + fc + "\" " + strClicksns + " onclick=\"DB(" + fid + ");\">" + fn + "</td></tr>");
}

function DrawLT() {
	DBX(-1, 'All', 'white')
	DBX(0, 'Area of Interest', 'yellow')
	DBX(1, 'Player Dungeon', '#ff6666')
	DBX(2, 'NPC Dungeon', 'red')
	DBX(3, 'Player Town', '#ff66ff')
	DBX(4, 'NPC Town', '#ff66ff')
	DBX(5, 'Place of Interest', 'white')
//	DBX(6, 'Allegiance', '#ff66ff')
	DBX(7, 'NPC Outpost', 'orange')
}

function DB(fid) {
	if (fid == 1) {
		window.location.replace('fhlandd.asp?ln=' + ln + '&lg=' + lg + '&lat=' + fid);
	} else {
		window.location.replace('?ln=' + ln + '&lg=' + lg + '&lat=' + fid);
	}
}

function AC(d, ItemName, ItemID, GameID, mapx, mapy, lt, r, a ,s, l,ml, PictureID, Color) {
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(PictureID, Color, d, ItemName, ItemID, GameID, mapx, mapy, lt, 0, a, s, l, ml);

document.write('<tr id="M' + MC + '" onmouseover="PC(' + MC + ')" onmouseout="RC(' + MC + ')"  onclick="DC(' + MC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'160\'>' + (lt != 1 && lt != 3 ? '<b>' : '') +  ItemName + (lt != 1 && lt != 3 ? '</b>' : '') + '</td><td>' + (l > 0 ?  l + (ml > l ? ' - ' + ml : '') : '') + '</td></tr>');
MC = MC + 1;
}

function AC2(d, ItemName, ItemID, GameID, mapx, mapy, lt, r, a ,s, l,ml, PictureID, Color) {
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(PictureID, Color, d, ItemName, ItemID, GameID, mapx, mapy, lt, 1, a, s, l, ml);

document.write('<tr id="M' + MC + '" onmouseover="PC(' + MC + ')" onmouseout="RC(' + MC + ')"  onclick="DC(' + MC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'160\'>' + (lt != 1 && lt != 3 ? '<b>' : '') +  ItemName + (lt != 1 && lt != 3 ? '</b>' : '') + '</td><td>' + (l > 0 ?  l + (ml > l ? ' - ' + ml : '') : '') + '</td></tr>');
MC = MC + 1;
}

function newMarker(PictureID, Color, d, ItemName, ItemID, GameID, mapx, mapy, lt, u, a, s, l, ml) {
this.c = Color;
this.tn = ItemName;
this.p = PictureID;
this.d = d;
this.v = ItemID;
this.t = lt;
this.g = GameID;
this.x = mapx;
this.y = mapy;
this.u = u;
this.a = a;
this.s = s;
this.l = l;
this.ml = ml;
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
	getObj('Stuff2').innerHTML = '<b style=\"color: ' + Markers[v].c + '\">' + Markers[v].tn + '</b><br><b>' + GetLT(Math.abs(Markers[v].t)) + '</b><br>Recommended for: ' + strx + (Markers[v].a != 0 ? '<br>Monster Allegiance: ' + GetAName(Markers[v].a) : '') + '<br>Level: ' + Markers[v].l + (Markers[v].ml > Markers[v].l ? ' - ' + Markers[v].ml : '') + '<br>Location: ' + Markers[v].x + ', ' + Markers[v].y + ' ' + GetRealm(Markers[v].g) + (Markers[v].u == 0 ? '<br>' + Markers[v].d : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Markers[v].p == '' ? 'na.gif' : Markers[v].p) + "'>";
	getObj('Buttons').innerHTML = "" +  (Markers[v].u == 1 ? "<table class=\"weakcell\"><tr><td><input type='hidden' name=li id=li value='" + Markers[v].v + "'>Min Level: </td><td><input name=ll id=ll size=4 maxlength=4 value='" + Markers[v].l + "'></td><Td>Max: </td><td><input name=ml id=ml size=4 maxlength=4 value='" + Markers[v].ml + "'></td></tr><tr><td colspan=4>Description:</td></tr><tr><td colspan=4><textarea id=ld name=ld cols='30' rows='5'>" + Markers[v].d  + "</textarea></td></tr><tr><td colspan=4>" + Adf2("","Save changes","Change") + Adr('getObj(\'ld\').value = \'DELETE\';this.form.submit();','Delete Landmark','Delete') + "": "") + Adr('if (Processing == 0) {Processing = 1; window.top.HideInterface(); window.top.Ninja.location.replace(\'fh.asp?Redraw=1&x=' + Markers[v].x + '&y=' + Markers[v].y + '&MapNum=' + Markers[v].g + '\');};','Recall','Recall') + (Markers[v].c == "red" ? Adr('window.open(\'http://www.landsofhope.com/dungeons/' + Markers[v].tn + '.html\',\'_new\',\'\');','Info','Info') : "") + "</td></tr></table>"; 
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

function GoP(PageNo) {
window.location.replace('?lg=' + lg + '&lat=' + lt + '&P=' + PageNo + '');
}


function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor='';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('', '' + Markers[v].tn + '');
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor=BGCOLOR_S;
}
