var SystemUser = SystemUser;
var CharsAt = CharsAt;
var GameID = GameID;
var t = t;
var xx = x;
var yy = y;
var lastx = 0;
var lasty = 0;
var lastz = 0;
var lastlw = 0;
var lastlt = 0;
var lastlx = 0;
var lastly = 0;
var lastlz = 0;
var server = server;
var Special = Special;
var Processing = 0;
var MapT = new Array(50);
var FHIP = window.top.FHIP;
var FHIPI = FHIP + 'i/';
var FHIPH = FHIP + 'h/';
var FHIPO = window.top.FHIPO;;
var FHIPM = FHIP + 'm/';
var OPath = window.top.FHIPO;;

var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
//var FHIPP = FHIPP;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function mMenu(MS, ForSale, MapID, ts, ColorM, CaptionM, PictureM, ObjectM, MapXm, MapYm) {
	this.Sale = ForSale;
	this.Color = ColorM;
	this.Caption = CaptionM;
	this.Picture = PictureM;
	this.ObjectM = ObjectM;
	this.MapX = MapXm;
	this.MapY = MapYm;
	this.MapID = MapID;
	this.ts = ts;
	this.Server = MS;
}

function MMP(MS, ForSale, MapID, ts, ColorM, CaptionM, PictureM, ObjectM, MapXm, MapYm, xm, ym) {
	if (MapT[xm] == null) {
		MapT[xm] = new Array();
	}
	if (MapT[xm][ym] == null) {
		MapT[xm][ym] = new mMenu(MS, ForSale, MapID, ts, ColorM, CaptionM, PictureM, ObjectM, MapXm, MapYm);
	}
	else {
		MapT[xm][ym].Caption = CaptionM
		MapT[xm][ym].Sale = ForSale;
		MapT[xm][ym].Color = ColorM
		MapT[xm][ym].Picture = PictureM
		MapT[xm][ym].ObjectM = ObjectM
		MapT[xm][ym].MapX = MapXm
		MapT[xm][ym].MapY = MapYm
		MapT[xm][ym].MapID = MapID;
		MapT[xm][ym].ts = ts;
		MapT[xm][ym].Server = MS;
	}
}

function LoadM(lngtwidth, lngttiles, lngtstartx, lngtstarty, lngtstartz) {
	var strmap = '';
	lastlw = lngtwidth
	lastlt = lngttiles
	lastlx = lngtstartx
	lastly = lngtstarty
	lastlz = lngtstartz
	strmap = LoadM2()
	return strmap;

}

function LoadM3() {
	getObj("Bob").innerHTML = LoadB2()
}

function LoadM2() {
	var strmap = '';
	var lngtwidth = lastlw;
	var lngttiles = lastlt;
	var lngtstartx = lastlx;
	var lngtstarty = lastly;
	var lngtstartz = lastlz;
	var strmap = '';
	var strmap1 = '';
	var y = 0;
	var x = 0;
	var p = 0;
	var e = 0;
	for (y = lngtstarty - 1; y < ((lngtstarty + lngttiles)) - 1; y++) {
		e = 0;
		strmap += "<tr>";
		for (x = lngtstartx - 1; x <= (lngtstartx + lngttiles) - 1; x++) {
			if (MapT[x] != null && MapT[x][y] != null) {
				strmap += DrawTile(x, y, lngtstartz, e, p);
			}
			else {
				strmap += "<td id=\"B" + x + "-" + y + "\" class=\"mapcolb\"></td>";
			}
			e = e + 1;
		}
		strmap += "</tr>";
		p = p + 1;
	}
	strmap += "</table>"

	strmap1 = "<table align=center valign=middle cellpadding=0 cellspacing=0 border=0 width=" + ((lngttiles) * lngtwidth) + " height=" + ((lngttiles) * lngtwidth) + " style=\"background-color: black;\" id=OldBuild>";
	strmap = strmap1 + strmap

	return strmap;
}

function BMD(t) {
	FindB(t);
}

function FindB(b) {
	var y = 0;
	var x = 0;
	var lngtwidth = lastlw;
	var lngttiles = lastlt;
	var lngtstartx = lastlx;
	var lngtstarty = lastly;
	var lngtstartz = lastlz;

	for (y = lngtstarty - 1; y < ((lngtstarty + lngttiles)) - 1; y++) {
		for (x = lngtstartx - 1; x <= (lngtstartx + lngttiles) - 1; x++) {
			if (MapT[x] != null) {
				if (MapT[x][y] != null) {
					if (MapT[x][y].MapID == b) {
						getObj('X' + MapT[x][y].MapX + 'Y' + MapT[x][y].MapY).style.backgroundColor = 'purple';
						getObj('X' + MapT[x][y].MapX + 'Y' + MapT[x][y].MapY).onclick = null;
						return true;
						break;
					}
				}
			}
		}
	}
	return false;
}

function DrawTile(x, y, z, e, p) {
	var strmap = '';
	var markit = 0;
	if (MapT[x][y] != null) {
		strmap += "<td id=X" + MapT[x][y].MapX + "Y" + MapT[x][y].MapY + "  ";

		if (MapT[x][y].Picture != '') {
			strmap += "background=\"" + FHIPM + MapT[x][y].Picture + "\" ";
		}

		if (MapT[x][y].Caption != '') {
			strmap += "onmouseover=\"window.top.InfoMap('" + MapT[x][y].Picture + "','" + MapT[x][y].ObjectM + "','" + MapT[x][y].Color + "','<b>" + MapT[x][y].Caption + "</b><br>X: " + MapT[x][y].MapX + " Y: " + MapT[x][y].MapY + (MapT[x][y].ts == 0 ? "<br>Not your land" : "<br>You own this land") + (MapT[x][y].Sale > 0 ? "<br><b>For Sale</b>" : "") + "');\" onmouseout=\"window.top.hideTip();\"";

			if ((((MapT[x][y].ts != 0 && Special == 0) || (MapT[x][y].Sale > 0 && Special > 0)) && (MapT[x][y].Server == 0 || MapT[x][y].Server == server))) {
				markit = 1;
				strmap += " style=\"" + (MapT[x][y].ts > 1 ? "border: 1px solid red;" : "") + "\" onclick=\"MBg(" + MapT[x][y].MapID + ", " + x + ", " + y + ")\"";
			} else {
				strmap += " style=\"background-color: purple;\"";
			}
		}
		if (markit == 0) {
			//strmap += "class=\"c" + MapT[x][y].Color + "\" ";
		} else {
			strmap += "class=\"c" + MapT[x][y].Color + "\" ";
		}
		strmap += " align=center valign=center>"

		strmap += (MapT[x][y].ObjectM != "" ? "<img src='" + FHIPM + MapT[x][y].ObjectM + "'>" : "")
		strmap += "</td>";
	}
	return strmap;

}


function MBg(BuildingID, x, y) {
	//Clicked on the remodel map
	var UseArrow = 1;
	if (lastx != 0) {
		var Testit2 = getObj('X' + MapT[lastx][lasty].MapX + 'Y' + MapT[lastx][lasty].MapY);
		if (Testit2 != null) {
			Testit2.innerHTML = '' + (MapT[lastx][lasty].ObjectM != '' ? '<img src=\'' + FHIPM + MapT[lastx][lasty].ObjectM + '\' width=20 height=20>' : '');
			Testit2.disabled = false;
		}
	}

	var Testit = getObj('X' + MapT[x][y].MapX + 'Y' + MapT[x][y].MapY);
	if (MapT[x][y].ObjectM) {
		Testit.innerHTML = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' width=20 height=20 style=\'background-Image: URL("' + FHIPM + MapT[x][y].ObjectM + '")\'>';
	} else {
		Testit.innerHTML = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' width=20 height=20>';
	}

	lastx = x;
	lasty = y;
	lastz = GameID;

	if (BuildingID == 0) {
		InfoTip('', 'Clicked Empty tile at ' + x + ', ' + y);
	} else {
		InfoTip('', 'Clicked ' + MapT[x][y].Caption);
		window.frames['ResultsOfit'].location.replace("fholmeb.asp?x=" + x + "&Special=" + Special + "&z=" + GameID + "&y=" + y + "&CharsAt=" + BuildingID)
	}
}

function Floors(Count, CurPage) {
	var str = '';
	var v = 0;
	var i = 0;
	str += '<tr><td height=\'100%\' width=60 valign=bottom class=\'\'><table class="itemtext" cellpadding=0 cellspacing=0>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10;" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';
	str += '<tr><td class="btn" ' + (Math.abs(x) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x + t) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y + t) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10;" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';
	str += '</table></td></tr><tr height="100%"><td colspan=2></td></tr>';
	getObj('Pages').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + str + '</table>';
}

function GoP(PageNo) {
	window.location.replace("fholm.asp?CharsAt=" + CharsAt + "&ItemID=" + Special + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + PageNo);
}

function GoXY(xx, yy) {
	if (xx <= 0) {
		xx = 1
	}
	if (yy <= 0) {
		yy = 1
	}
	if (yy > 100) {
		yy = 100
	}
	if (xx > 100) {
		xx = 100
	}

	window.location.replace("fholm.asp?CharsAt=" + CharsAt + "&ItemID=" + Special + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + GameID);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}