// Global variables
var OX = OX - 1;
var OY = OY - 1;
var Processing = 0;
var skill = skill;
var ResCount = 0;
var Type2 = Type2;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPB;
var OPath = window.top.FHIPO;
var MaxLevel = MaxLevel;
var MinLevel = MinLevel;
var t = 1;
var strYoyo = '';
var X = 0;
var Y = 0;
var MC = 0;
var Markers = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function smy(v) {
	if (getObj('TitleOf') != null) {
		getObj('TitleOf').innerHTML = Markers[v].t + '<br>X: ' + (Math.floor(Markers[v].mx) + OX) + ', Y: ' + (Math.floor(Markers[v].my) + OY);
		getObj('PicZoom').innerHTML = '<img src=\'' + Markers[v].p + '\' width=20 height=20>';
		getObj('ResultsL').style.left = ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
		getObj('ResultsL').style.top = (Markers[v].my * 12) + 'px'
		getObj('ResultsL').style.display = '';
		window.top.InfoTip('' + Markers[v].p, 'X: ' + (Math.floor(Markers[v].mx) + OX) + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
	}
}

function Plt(lx1, lx2, Named, Picture, X, Y, rc) {
	if (Picture == '') { Picture = 'na.gif' }
	if (Picture.indexOf('/') != -1) { } else { Picture = '' + IPath + Picture }
	if (lx1 == 0) {
		lx1 = 1;
	}
	if (lx2 == 0) {
		lx2 = 1;
	}

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(lx1, lx2, Named, Picture, X, Y, rc);

	// l1=' + lx1 + ' rc=' + rc + ' l2=' + lx2 + ' mx=' + (X - OX) + ' my=' + (Y - OY) + ' t="' + Named + '" 1}
	document.write('<img src=\'' + Picture + '\'  id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid gold;left: ' + (((X - OX) * 12) - 8) + '; top: ' + (((Y - OY) * 12) + 10) + ';\' onclick="Go(' + X + ', ' + Y + ')" OnMouseOver="smy(' + MC + ');">')
	strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + X + ", " + Y + ")\"><td><img src=\'" + Picture + "\' width=10 height=10></td><td style='width: 100%'>(" + rc + ") " + Named + " (" + lx1 + "-" + lx2 + ")</td><tr>";
	MC = MC + 1;
}


function newMarker(lx1, lx2, Named, Picture, X, Y, rc) {
	this.rc = rc;
	this.lx2 = lx2;
	this.lx1 = lx1;
	this.t = Named;

	this.p = Picture;
	this.mx = (X - OX);
	this.my = (Y - OY);
}


function RC(v) {
	getObj('M' + v).style.backgroundColor = '';
	getObj('M' + v).style.cursor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('' + Markers[v].p, '<b>' + Markers[v].t + '</b><br>Level: ' + Markers[v].l1 + ' - ' + Markers[v].l2 + '<br>Skill: ' + (Markers[v].l1 * 5) + '<br>X: ' + Markers[v].mx + ', ' + Markers[v].my)
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}


function MM(e) {
	e = e || window.event;
	if (e.pageX == null) {
		X = e.clientX;
		Y = e.clientY;
	} else {
		X = e.pageX;
		Y = e.pageY;
	}
	X = (X) + 5;
	Y = (Y) - 10;
	if (X < 12) { X = 12 }
	if (Y < 12) { Y = 12 }
	if (X > 300) { X = 300 }
	if (Y > 300) { Y = 300 }
	X = ((Math.floor(X / 12)) + (OX));
	Y = (Math.floor(Y / 12) + (OY))
	window.top.InfoTip('', 'X: ' + X + ' Y:' + Y)
}

function MMV(e) {
	getObj('map').onmousemove = null;
	getObj('map').onclick = null;
	MM(e);
	Go(X, Y);
}

function BuildSearch2() {
	document.write('<div style=\'height: 300; overflow: auto\'><form action=\'maptd.asp\' method=post style=\'marging: 0px\'><input type=hidden name=StartX value=' + ((OX) / 25) + '><input type=hidden name=StartY value=' + ((OY) / 25) + '><input type=hidden name=StartZ value=' + GameID + '><table height=295 id=Yoyo class=\'weakercell\' cellpadding=1 cellspacing=1><tr><td></td><td class=\'weakercell\'>Level Range: <input name=L2 size=3 maxlength=4 value=' + MinLevel + '> to <input name=L size=3 maxlength=4 value=' + MaxLevel + '>');
	Adf('', 'Track', 'Track');
	document.write('</td><tr>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></form></div>');
}

function BuildSearch() {
	var str = '<table width=\'100%\' height=\'100%\' valign=top cellpadding=1 cellspacing=0><tr><td><table cellpadding=1 cellspacing=0 class=\'nav4\'>';

	var v = 0;
	var i = 0;

	var x = Math.floor((OX) / 25)
	var y = Math.floor((OY) / 25)
	if (x <= 0) {
		x = 0
	}
	if (y <= 0) {
		y = 0
	}
	if (y > 3) {
		y = 3
	}
	if (x > 3) {
		x = 3
	}

	str += '</table></td></tr><tr><td height=\'100%\' width=60 valign=bottom class=\'\'><table class="itemtext" cellpadding=0 cellspacing=0>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';
	str += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';
	str += '</table></td></tr></table>';
	document.write(str);
}

function GoXY(xx, yy) {
	if (xx <= 0) {
		xx = 0
	}
	if (yy <= 0) {
		yy = 0
	}
	if (yy > 3) {
		yy = 3
	}
	if (xx > 3) {
		xx = 3
	}

	window.location.replace("?StartX=" + xx + "&StartY=" + yy + "&L=" + MaxLevel + "&L2=" + MinLevel + "&Type=" + Type2 + "&StartZ=" + GameID);
}


function GoP(type3) {
	window.location.replace('?Type=' + type3 + '&StartX=' + (OX / 25) + '&StartY=' + (OY / 25) + '&L=' + MaxLevel + '&L2=' + MinLevel + '&StartZ=' + GameID);
}

function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
}