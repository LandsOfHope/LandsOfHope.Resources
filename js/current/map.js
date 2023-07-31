// Global variables
var OX = OX - 1;
var OY = OY - 1;
var t = 1;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPM;
var OPath = window.top.FHIPO;

var strYoyo = '';
var X = 0;
var Y = 0;
var lastx = 0;
var lasty = 0;
var MC = 0;
var Markers = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function smy(v) {
	if (getObj('TitleOf') != null) {
		getObj('TitleOf').innerHTML = Markers[v].t + '<br>X: ' + (Math.floor(Markers[v].mx) + OX) + ', Y: ' + (Math.floor(Markers[v].my) + OY);
		getObj('PicZoom').innerHTML = '<img src=\'' + IPath + Markers[v].p + '\' style=\'background-image: URL(' + IPath + Markers[v].p2 + ')\' width=20 height=20>';
		getObj('PicZoom').className = 'c' + Markers[v].xc;
		getObj('ResultsL').style.left = ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
		getObj('ResultsL').style.top = (Markers[v].my * 12) + 'px'
		getObj('ResultsL').style.display = '';
		window.top.InfoMap('' + Markers[v].p, Markers[v].p2, Markers[v].xc, 'X: ' + (Math.floor(Markers[v].mx) + OX) + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
	}
}

function Plt(Named, Color2, Picture, Picture2, X, Y) {
	var Special = 0;
	if (Picture == '') {
		Picture = 'p2.gif';
	}
	if (Picture2 == '') {
		Picture2 = 'p2.gif';
	}
	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(Color2, Named, Picture, Picture2, X, Y);

	// xc="' + Color2 + '" p2="' + Picture2 +'" p="' + Picture +'" mx=' + (X - OX) + ' my=' + (Y - OY) + ' t="' + Named + '"
	document.write('<img src=\'' + IPath + Picture + '\'  id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid ' + (Picture2 == 'ayou.gif' ? 'red' : 'gold') + ';left: ' + (((X - OX) * 12) - 8) + '; top: ' + (((Y - OY) * 12) + 10) + ';\' onclick="Go(' + X + ', ' + Y + ')" OnMouseOver="smy(' + MC + ');">')
	strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + X + ", " + Y + ")\"><td width=10 class='c" + Color2 + "' style='width: 10; height: 10'><img src=\"" + IPath + Picture + "\" style=\"background-image: URL(" + IPath + Picture2 + ")\" width=10 height=10><td style='width: 100%'>" + Named + "</td><tr>";
	MC = MC + 1;
}


function newMarker(Color2, Named, Picture, Picture2, X, Y) {
	this.xc = Color2;
	this.t = Named;

	this.p = Picture;
	this.p2 = Picture2;
	this.mx = (X - OX);
	this.my = (Y - OY);
}


function RC(v) {
	getObj('M' + v).style.backgroundColor = '';
	getObj('M' + v).style.cursor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoMap(Markers[v].p, Markers[v].p2, Markers[v].xc, '<b>' + Markers[v].t + '</b>');
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}

function Floors() {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '<tr><td colspan=2>Map</td></tr>';
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
	strTest += '<tr height="100%"><td colspan=2>&nbsp;</td></tr>';
	strTest += '</tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px;" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px;" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';
	strTest += '</table></td></tr>'
	getObj('Pages').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
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
	if (lastx != X || lasty != Y) {
		window.top.InfoTip('', 'X: ' + X + ' Y:' + Y)
	}
	lastx = X;
	lasty = Y;
}

function MMV(e) {
	getObj('map').onmousemove = null;
	getObj('map').onclick = null;
	MM(e);
	Go(X, Y);
}

function BuildSearch2() {
	document.write('<div style=\'height: 300; overflow: auto\'><table height=295 id=Yoyo class=\'weakercell\' cellpadding=1 cellspacing=1>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
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

	window.location.replace("?StartX=" + xx + "&StartY=" + yy + "&StartZ=" + GameID);
}

function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
}