// Global variables
var OX = OX - 1;
var OY = OY - 1;
var ResCount = 0;
var Type2 = Type2;
var Pet = Pet;
var MapSrc = MapSrc;
var GameID = GameID;
var Piccy = Piccy;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var RPath = window.top.FHIPR;
var t = 1;
var strYoyo = '';
var X = 0;
var Y = 0;
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

	// l=' + lx + ' i=' + IType + ' mx=' + (X - OX) + ' my=' + (Y - OY) + ' t="' + Named + '"
	document.write('<img src=\'' + Picture + '\' id=\'SM' + MC + '\' style=\'position: absolute; width: 10; height: 10; cursor: pointer;border: 1px solid gold;left: ' + (((X - OX) * 12) - 8) + '; top: ' + (((Y - OY) * 12) + 10) + ';\' onclick="Go(' + X + ',' + Y + ')" OnMouseOver="smy(' + MC + ');">')
	strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + X + ", " + Y + ")\"><td><img src=\'" + Picture + "\' width=10 height=10></td><td style='width: 100%'>" + Named + " * " + IType + " (" + lx + ")</td><tr>";
	MC = MC + 1;
}


function newMarker(IType, lx, Named, Picture, X, Y) {
	this.l = lx;
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
	window.top.InfoTip(Markers[v].p, '<b>' + Markers[v].t + '</b><br>Level: ' + Markers[v].l + ' node<br>Skill: ' + (Markers[v].l * 5));
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
	document.write('<div style=\'height: 300; overflow: auto\'><table height=295 id=Yoyo class=\'weakercell\' cellpadding=1 cellspacing=1>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
}

function Noperoo() {
	var str = '';
	if (GameID <= 10 || GameID == 16) {
		str += '' + BBBS2(289, 'fis.gif', 'Fish', '<b>Fishing</b><br>Click on the Fish symbol on the right of the screen.')
		str += '' + BBBS2(201, 'lg.gif', 'Logs', '<b>Lumberjacking</b><br>Click on the Log symbol on the right of the screen.')
		str += '' + BBBS2(358, 'cro.gif', 'Crops', '<b>Farming</b><Br>Click on the Crop symbol on the right of the screen.')
		str += '' + BBBS2(321, 'vg1.gif', 'Vegetable', '<b>Foraging for Vegetables</b><Br>Click on the Vegetable symbol on the right of the screen.')
		str += '' + BBBS2(1050, 'fruit.gif', 'Berry', '<b>Foraging for Berries</b><Br>Click on the Berry symbol on the right of the screen.')
		str += '' + BBBS2(222, 'ore.gif', 'Ore', '<b>Mining Ore</b><Br>Click on the Ore symbol on the right of the screen.')
		str += '' + BBBS2(216, 'gm.gif', 'Gem', '<b>Geology</b><Br>Click on the Gem symbol on the right of the screen.')
		str += '' + BBBS2(242, 'flower13.gif', 'Fiber', '<b>Farming</b><Br>Click on the Fiber symbol on the right of the screen.')
		str += '' + BBBS2(373, 'gsb.gif', 'Stone', '<b>Mining Stone</b><Br>Click on the Stone symbol on the right of the screen.')
		str += '<tr><td colspan=2>After selecting a resource use the White arrow buttons to move the displayed area around, for example ore is found in mountains so move the displayed area around till you find mountains.</td></tr>'
	}
	strYoyo = str;
}

function BBBS2(number, PictureID, desc, desc2) {
	var strTest = '';
	strTest = '<tr><td p="' + PictureID + '" t="' + desc + '" width="40"><img src=\'' + IPath + PictureID + '\'></td><td>' + desc2 + '</td></tr>'
	return strTest;
}


function BuildSearch() {
	var str = '<table width=\'100%\' height=\'100%\' valign=top cellpadding=1 cellspacing=0><tr><td><table cellpadding=1 cellspacing=0 class=\'nav4\'>';
	if (GameID <= 10 || GameID == 16) {
		str += '' + BBBS(289, 'fis.gif', 'Fish')
		str += '' + BBBS(201, 'lg.gif', 'Logs')
		str += '' + BBBS(358, 'cro.gif', 'Crops')
		str += '' + BBBS(321, 'vg1.gif', 'Vegetable')
		str += '' + BBBS(1050, 'fruit.gif', 'Berry')
		str += '' + BBBS(222, 'ore.gif', 'Ore')
		str += '' + BBBS(216, 'gm.gif', 'Gem')
		str += '' + BBBS(242, 'flower13.gif', 'Fiber')
		str += '' + BBBS(373, 'gsb.gif', 'Stone')
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

	str += '</table></td></tr><tr><td height=\'100%\' width=60 valign=bottom class=\'\'><table class="itemtext" cellpadding=0 cellspacing=0 id=arrows>';
	str += '<tr><td align=center colspan=3 class="btn" onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="' + (Pet == 0 ? 'GoPXY(' + x + ',' + y + ')' : 'Pet = 0; GoXY(' + x + ',' + y + ')') + '">' + (Pet == 0 ? 'Pets' : 'Master') + '</td></tr>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10;" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';
	str += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10;" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';
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

	window.location.replace("?StartX=" + xx + "&Pet=" + Pet + "&StartY=" + yy + "&Type=" + Type2 + "&StartZ=" + GameID);
}


function BBBS(number, PictureID, desc) {
	var strTest = '';
	if (ResCount == 0) {
		strTest = '</tr>'
	}
	//' + desc + '

	// p="' + PictureID + '" t="' + desc + '" filter: gray(); 
	strTest += '<td id=\'G" + GC + "\' class="btn" ' + (number != Type2 ? 'onmouseover="rsmy(' + GC + ');this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:21" onclick="GoP(' + number + ')"' : ' disabled style="width:21; background-Color: ' + BGCOLOR_S + '; border: 1px inset ' + BORDER1_S + '; font-weight: bold"') + '><img src=\'' + IPath + PictureID + '\' style=\'height: 20; width: 20\'></td>'
	if (Groups[GC] == null) {
		Groups[GC] = new Array();
	}
	Groups[GC] = new newGroup(number, PictureID, desc);

	GC = GC + 1;

	if (ResCount == 1) {
		strTest += '</tr>';
		ResCount = 0;
	} else {
		ResCount = ResCount + 1
	}
	return strTest;
}

function newGroup(number, PictureID, desc) {
	this.t = desc;
	this.n = number;
	this.p = PictureID;
}

function rsmy(v) {
	window.top.InfoTip('' + IPath + Groups[v].p, '<b>' + Groups[v].t + '</b><br>If you click this button the map will display ' + Groups[v].t + ' resource nodes.')

}

function GoP(type3) {
	window.location.replace('?Type=' + type3 + '&Pet=' + Pet + '&StartX=' + (OX / 25) + '&StartY=' + (OY / 25) + '&StartZ=' + GameID);
}

function GoPXY() {
	window.location.replace('maprpp.asp?Type=' + Type2 + '&StartX=' + (OX / 25) + '&StartY=' + (OY / 25) + '&StartZ=' + GameID);
}

function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&NoSpawn=1&x=' + xx + '&y=' + yy);
}