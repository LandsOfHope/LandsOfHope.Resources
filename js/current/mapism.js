// Global variables
var OX = OX - 1;
var OY = OY - 1;
var ResCount = 0;
var Type2 = Type2;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var t = 1;
var strYoyo = '';
var X = 0;
var Y = 0;
var skill = 5000;
var MC = 0;
var Markers = new Array();
var GC = 0;
var Groups = new Array();
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

function Plt(IType, lx, Named, Picture, X, Y) {
	if (Picture == '') { Picture = 'na.gif' }
	if (Picture.indexOf('/') != -1) { } else { Picture = '' + IPath + Picture }
	if (lx == 0) { lx = 1 }

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(IType, lx, Named, Picture, X, Y);

	document.write('<img src=\'' + Picture + '\'  id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid gold;left: ' + (((X - OX) * 12) - 8) + '; top: ' + (((Y - OY) * 12) + 10) + ';\' onclick="Go(' + X + ', ' + Y + ')" OnMouseOver="smy(' + MC + ');">')
	strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + X + ", " + Y + ")\"><td width=10><img src=\'" + Picture + "\' width=10 height=10></td><td style='width: 100%'>" + Named + " * " + IType + " (" + lx + ")</td></tr>";
	MC = MC + 1;
}


function newMarker(IType, lx, Named, Picture, X, Y) {
	this.i = IType;
	this.t = Named;
	this.l = lx;

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
	window.top.InfoTip('' + Markers[v].p, '<b>' + Markers[v].t + '</b><br>X: ' + Markers[v].mx + ', ' + Markers[v].my)
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
	document.write('<div style=\'height: 300; overflow: auto\'><table height=295 id=Yoyo class=\'weakercell\'>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
}

function BuildSearch() {
	var str = '<table width=\'100%\' height=\'100%\' valign=top cellpadding=1 cellspacing=0><tr><td><table cellpadding=1 cellspacing=0 class=\'nav4\'>';

	if (GameID <= 10) {
		str += '' + BBBS(-323, '5988.gif', 'Star Meteorites', 1)
	}

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
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'Up.png" align=center ></td></tr>';
	str += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'Lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'Rt.png"></td></tr>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'Dn.png" align=center ></td></tr>';
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

	window.location.replace("?StartX=" + xx + "&StartY=" + yy + "&Type=" + Type2 + "&StartZ=" + GameID);
}

function BBBS(number, PictureID, desc, sv) {
	var strTest = '';
	if (ResCount == 0) {
		strTest = '</tr>'
	}
	//' + desc + '

	strTest += '<td id=\'G" + GC + "\'  title=\'Track ' + desc + '\' class="btn" ' + (sv > skill ? 'onmousemove="sv2(' + GC + ');" style="width:21; background-Color: #ff6666; border: 1px outset ' + BGCOLOR + '; font-weight: bold"' : (number != Type2 && sv <= skill ? 'onmouseover="rsmy(' + GC + ');this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:21" onclick="GoP(' + number + ')"' : ' disabled style="width:21; background-Color: ' + BGCOLOR_S + '; border: 1px inset ' + BORDER1_S + '; font-weight: bold"')) + '><img src=\'' + IPath + PictureID + '\' style=\'height: 20; width: 20\'></td>'
	if (Groups[GC] == null) {
		Groups[GC] = new Array();
	}
	Groups[GC] = new newGroup(number, PictureID, desc, sv);

	GC = GC + 1;

	if (ResCount == 1) {
		strTest += '</tr>';
		ResCount = 0;
	} else {
		ResCount = ResCount + 1
	}
	return strTest;
}

function newGroup(number, PictureID, desc, sv) {
	this.t = desc;
	this.n = number;
	this.p = PictureID;
	this.sv = sv;
}


function sv2(v) {
	window.top.InfoTip('' + IPath + Groups[v].p, '<b>' + Groups[v].t + '</b>.')

}

function rsmy(v) {
	window.top.InfoTip('' + IPath + Groups[v].p, '<b>' + Groups[v].t + '</b><br>If you click this button the map will display ' + Groups[v].t + ' map items.')

}

function GoP(type3) {
	window.location.replace('?Type=' + type3 + '&StartX=' + (OX / 25) + '&StartY=' + (OY / 25) + '&StartZ=' + GameID);
}

function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
}