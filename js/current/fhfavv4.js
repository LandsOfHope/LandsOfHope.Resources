var Special = 0;
var counter = 0;
var t = 1;
var OKR = OKR;
var Processing = 0;
var IPath = window.top.FHIP;
var SPath = window.top.FHIPS;
var OPath = window.top.FHIPO;
// Global variables
var OX = OX - 1;
var OY = OY - 1;
var MapSrc = MapSrc;
var GameID = GameID;
var MPath = window.top.FHIPM;
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
		getObj('PicZoom').style.backgroundColor = Markers[v].c;
		getObj('ResultsL').style.left = ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
		getObj('ResultsL').style.top = (Markers[v].my * 12) + 'px'
		getObj('ResultsL').style.display = '';
		window.top.InfoTip('' + Markers[v].p, 'X: ' + (Math.floor(Markers[v].mx) + OX) + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
	}
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

function Go(v) {


	getObj('Stuff2').innerHTML = '';
	getObj('Buttons').innerHTML = '';
	if (Markers[v] != null) {
		getObj('Stuff3').innerHTML = "<table cellspacing=0 class=\'weakcell\' cellpadding=0 border=0><tr id=\'M" + v + "\' onmouseover='PC(" + v + ")' onmouseout='RC(" + v + ")' onclick=\"DC(" + v + ")\"><td width=20 style='width: 20; height: 20; background-color: " + Markers[v].c + ";' valign=top><img src=\'" + Markers[v].p + "\' width=20 height=20><td style='cursor: pointer; color: " + Markers[v].c + "; width: 100%'><b>" + Markers[v].t + "</b><Br>X: " + (Markers[v].mx + OX) + ", Y: " + (Markers[v].my + OY) + "</td><tr></table>";
		DC(v);
	}
}

function RC(v) {
	getObj('M' + v).style.backgroundColor = '';
	getObj('M' + v).style.cursor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('' + Markers[v].p, '<b>' + Markers[v].t + '</b><br>X: ' + (Markers[v].mx + OX) + ', ' + (Markers[v].my + OY))
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}

function DC(v) {
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

	getObj('Stuff2').innerHTML = '<font style=\'color:' + Markers[v].c + '\'><b>' + Markers[v].t + '</b></font><br>' + (Markers[v].b == 0 ? 'World Location' : 'Building Location') + (Markers[v].f != 0 ? '<br>On your Quick List' : '');

	var strwhat = '';

	strwhat += "<" + strClicky + " OnClick=\"if (Processing == 0) {Processing = 1; window.location.replace('fhfav.asp?StartX=" + x + "&StartY=" + y + "&StartZ=" + GameID + "&ID=-" + Markers[v].value + "')};\">Remove</button>";

	if (OKR != '0') {
		strwhat += "<" + strClicky + " OnClick=\"prompt(\'Please enter the new name for this Marked location?\'," + v + ",\'" + Markers[v].t + "\');\">Rename</button>";
	}
	if (Markers[v].f != 0) {
		strwhat += "<br><" + strClicky2 + " OnClick=\"if (Processing == 0) {Processing = 1; window.location.replace('fhfav.asp?StartX=" + x + "&StartY=" + y + "&StartZ=" + GameID + "&ID2=-" + Markers[v].value + "');}\">Quick Off</button>";
	} else {
		strwhat += "<br><" + strClicky2 + " OnClick=\"if (Processing == 0) {Processing = 1; window.location.replace('fhfav.asp?StartX=" + x + "&StartY=" + y + "&StartZ=" + GameID + "&ID2=" + Markers[v].value + "&name=" + Markers[v].t + "');}\">Quick On</button>";
	}
	strwhat += "<" + strClicky2 + " OnClick=\"if (Processing == 0) {Processing = 1; window.location.replace('fhfavi.asp?StartX=" + x + "&StartY=" + y + "&StartZ=" + GameID + "&IID=" + Markers[v].value + "&g=" + Markers[v].g + "');}\">Image</button>"

	if (Markers[v].b != 0) {
		getObj('Buttons').innerHTML = "<" + strClicky + " OnClick=\"if (Processing == 0) {Processing = 1; window.top.HideInterface(); window.top.Ninja.location.replace('fh.asp?Redraw=1&BuildingID=" + Markers[v].b + "');}\">Recall</button>" + strwhat;
	} else {
		getObj('Buttons').innerHTML = "<" + strClicky + " OnClick=\"if (Processing == 0) {Processing = 1; window.top.HideInterface(); window.top.Ninjalocation.replace('fh.asp?Redraw=1&x=" + (Math.abs(Markers[v].mx) + OX) + "&y=" + (Math.abs(Markers[v].my) + OY) + "&MapNum=" + Markers[v].g + "');}\">Recall</button>" + strwhat;
	}
}

function AM(PictureID, Color, Named, SpecialID, MX, MY, GameID, BuildingID, Fav, p2) {
	var strURL = '';
	if (BuildingID != 0) {
		strURL = "fh.asp?Redraw=1&BuildingID=" + BuildingID
	} else {
		strURL = "fh.asp?Redraw=1&x=" + MX + "&y=" + MY + "&MapNum=" + GameID;
	}

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	PictureID = IPath + (BuildingID == 0 ? 'm' : 'b') + '/' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID);
	Markers[MC] = new newMarker(PictureID, Color, Named, SpecialID, MX, MY, GameID, BuildingID, Fav, p2, strURL);

	document.write('<img src=\'' + PictureID + '\' id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid gold; left: ' + (((MX - OX) * 12) - 9) + '; top: ' + (((MY - OY) * 12) + 15) + ';\' ondblclick="window.location.replace(\'' + strURL + '\');" onclick="Go(' + MC + ')" OnMouseOver="smy(' + MC + ');">')
	MC = MC + 1;
}

function PromptReturn(returnVal, pb) {
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

	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhfav.asp?StartX=' + x + '&StartY=' + y + '&StartZ=' + Markers[pb].g + '&name=' + returnVal + '&id=' + Markers[pb].value);
		}
	}
}

function newMarker(PictureID, Color, Named, SpecialID, MX, MY, GameID, BuildingID, Fav, p2, strURL) {
	this.c = Color;
	this.t = Named;
	this.p = PictureID;
	this.p2 = p2;
	this.b = BuildingID;
	this.value = SpecialID;
	this.g = GameID;
	this.f = Fav;
	this.url = strURL;
	this.mx = (MX - OX);
	this.my = (MY - OY);
}



function Floors(GArray, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '<tr><td colspan=2><table cellpadding=1 cellspacing=1>';
	for (i = 1; i < GArray.length + 1; i++) {
		if (GArray[i - 1] > 0) {
			strTest += '<tr><td class="btn" onmouseover="InfoTip(\'\',\'<b>' + GetRealm(i) + '</b><br>' + GArray[i - 1] + ' Travel destinations\');' + (CurPage != i ? 'this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ')"' : '" style="width:13; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + GetRealma(i) + '</td></tr>';
			v = v + 1
		}
	}
	strTest += '</table></td></tr>'
	var x = Math.floor((OX) / 25)
	var y = Math.floor((OY) / 25)
	if (x <= 0) {
		x = 0;
	}
	if (y <= 0) {
		y = 0;
	}
	if (y > 3) {
		y = 3;
	}
	if (x > 3) {
		x = 3;
	}
	strTest += '<tr height="100%"><td colspan=2>&nbsp;</td></tr>';
	strTest += '</tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';
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
	window.location.replace("fhfav.asp?StartX=" + x + "&StartY=" + y + "&StartZ=" + PageNo);
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

	window.location.replace("fhfav.asp?StartX=" + xx + "&StartY=" + yy + "&StartZ=" + GameID);
}
