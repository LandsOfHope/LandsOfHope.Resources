// Global variables
var OX = OX - 1;
var t = 1;
var OY = OY - 1;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPM;
var OPath = window.top.FHIPO;

var strYoyo = '';
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

function Plt(IType, Named, Color2, Picture, Picture2, Y, X) {
	if (Picture == '') {
		Picture = 'p2.gif';
	}
	if (Picture2 == '') {
		Picture2 = 'p2.gif';
	}

	//if (Picture.indexOf('/')!=-1) {} else {Picture = '' + IPath + Picture}
	// mx=' + (X - OX) + ' my=' + (Y - OY) + ' t="' + Named + '"
	//document.write('<img src=\'' + IPath + Picture + '\' style=\'position: absolute; width: 10; height: 10; cursor: pointer; border: 1 solid gold;left: ' + (((X - OX) * 12) - 8) + '; top: ' + (( (Y - OY) * 12) + 10) + ';\' onclick="Go(' +  IType + ')" OnMouseOver="smy(this);">')
	//strYoyo += "<tr><td width=10 class='" +  Color2 + "' style='width: 10; height: 10'>" + (Picture != "" || Picture2 != "" ? "<img src=\"" + (Picture == "" && Picture2 != "" ? IPath + (Picture2 == "" ? "na.gif" : Picture2) : IPath + (Picture == "" ? "na.gif" : Picture)) + "\" style=\"" + (Picture2 != "" && Picture != "" ? "background-image: URL(" + IPath + (Picture2 == "" ? "na.gif" : Picture2) + ")" : "") + "\" width=10 height=10>" : "") + "<td onmouseover='PC(this)' onmouseout='RC(this)' c='white' style='color: white' xc='" + Color2 + "' p2='" + Picture2 +"' p='" + Picture +"' style='width: 100%' onclick=\"Go(" + IType + ")\">" + Named + "</td><tr>";

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}

	Markers[MC] = new newMarker(IType, Named, Color2, Picture, Picture2, Y, X);

	document.write('<img src=\'' + IPath + Picture + '\'  id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid ' + (Picture2 == 'ayou.gif' ? 'red' : 'gold') + ';left: ' + (((X - OX) * 12) - 8) + '; top: ' + (((Y - OY) * 12) + 10) + ';\' onclick="Go(' + IType + ')" OnMouseOver="smy(' + MC + ');">')
	strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + IType + ")\"><td width=10 class='c" + Color2 + "' style='width: 10; height: 10'><img src=\"" + IPath + Picture + "\" style=\"background-image: URL(" + IPath + Picture2 + ")\" width=10 height=10><td style='width: 100%'>" + Named + "</td><tr>";
	MC = MC + 1;
}

function newMarker(IType, Named, Color2, Picture, Picture2, Y, X) {
	this.c = LITE;
	this.t = Named;
	this.p = Picture;
	this.p2 = Picture2;
	this.i = IType;
	this.xc = Color2;
	this.mx = (X - OX);
	this.my = (Y - OY);
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


function RC(v) {
	getObj('M' + v).style.backgroundColor = '';
	getObj('M' + v).style.cursor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoMap('' + Markers[v].p2, '' + Markers[v].p, '' + Markers[v].xc, '<b>' + Markers[v].t + '</b><br>X: ' + Markers[v].mx + ', ' + Markers[v].my)
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}


function BuildSearch2() {
	document.write('<div style=\'height: 300; overflow: auto\' class=\'nav4\'><table height=295 cellspacing=1 cellpadding=1 class=\'weakercell\' id=Yoyo>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
}

function Go(yy) {
	window.location.replace('fhuse.asp?ItemTypeID=1&InventoryItemID=' + yy);
}

function Floors(GArray, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '<tr><td colspan=2>Realm</td></tr>';
	strTest += '<tr><td colspan=2><table>';
	for (i = 1; i < GArray.length + 1; i++) {
		if (GArray[i - 1] > 0) {
			strTest += '<tr><td class="btn" onmouseover="InfoTip(\'\',\'<b>' + GetRealm(i) + '</b><br>' + GArray[i - 1] + ' portal destinations\');' + (CurPage != i ? 'this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ')"' : '" style="width:13; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + GetRealma(i) + '</td></tr>';
			v = v + 1
		}
	}
	strTest += '</table></td></tr>'
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
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center ></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center ></td></tr>';
	strTest += '</table></td></tr>'
	getObj('Pages').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
}

function GoP(PageNo) {
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
	window.location.replace("fhpor.asp?StartX=" + x + "&StartY=" + y + "&StartZ=" + PageNo);
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