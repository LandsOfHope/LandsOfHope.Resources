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
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';

var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
var deffun = deffun;
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

function SetPicture(x, y, strPic) {
	MapT[x][y].Picture = strPic;
	getObj("X" + MapT[x][y].MapX + "Y" + MapT[x][y].MapY).background = FHIPM + strPic;
}

function SetColor(x, y, strPic) {
	MapT[x][y].Color = strPic;
	getObj("X" + MapT[x][y].MapX + "Y" + MapT[x][y].MapY).className = 'c' + strPic;
}

function SetPictureM(x, y, strPic) {
	if (strPic == 'na.gif') {
		strPic = '';
	}
	MapT[x][y].ObjectM = strPic;
	var strImgb2 = "";
	var strImgb1 = "";
	if (MapT[x][y].ObjectM != "") {
		strImgb1 = FHIPM + MapT[x][y].ObjectM;
		strImgb2 = "";
	}
	getObj("X" + MapT[x][y].MapX + "Y" + MapT[x][y].MapY).innerHTML = (MapT[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "'>" : "")
}

function BMD(BID) {
}

function DrawTile(x, y, z, e, p) {
	var strmap = '';
	var markit = 0;
	if (MapT[x][y] != null) {
		strmap += "<td id=X" + MapT[x][y].MapX + "Y" + MapT[x][y].MapY + "  ";
		strmap += "class=\"c" + MapT[x][y].Color + "\" ";

		if (MapT[x][y].Picture != '') {
			strmap += "background=\"" + FHIPM + MapT[x][y].Picture + "\" ";
		}

		if (MapT[x][y].Caption != '') {
			strmap += "onmouseover=\"window.top.InfoMap('" + MapT[x][y].Picture + "','" + MapT[x][y].ObjectM + "','" + MapT[x][y].Color + "','<b>" + MapT[x][y].Caption + "</b><br>X: " + MapT[x][y].MapX + " Y: " + MapT[x][y].MapY + (MapT[x][y].ts == 0 ? "<br>Not your land" : "<br>You own this land") + (MapT[x][y].Sale > 0 ? "<br><b>For Sale</b>" : "") + "');\" onmouseout=\"window.top.hideTip();\"";

			if ((((MapT[x][y].ts != 0 && Special == 0) || (MapT[x][y].Sale > 0 && Special > 0)) && (MapT[x][y].Server == 0 || MapT[x][y].Server == server)) || SystemUser != 0) {
				markit = 1;
				strmap += " style=\"" + (MapT[x][y].ts > 1 ? "border: 1px solid red;" : "") + "\" onclick=\"MBg(" + MapT[x][y].MapID + ", " + x + ", " + y + ")\"";
			}
		}
		strmap += " align=center valign=center>"

		if (markit == 1) {
			strmap += "<img src='" + FHIPM + "nyou.gif'";
			if (MapT[x][y].ObjectM != "") {
				strmap += " style='background-image: URL(" + FHIPM + MapT[x][y].ObjectM + ");'";
			}
			strmap += ">";
		} else {
			strmap += (MapT[x][y].ObjectM != "" ? "<img src='" + FHIPM + MapT[x][y].ObjectM + "'>" : "")
		}
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
		var v = 0;
		var i = 0;
		for (i = 0; i < 5; i++) {
			if (getObj('Draw2')[i] != null) {
				if (getObj('Draw2')[i].checked == true) {
					v = getObj('Draw2')[i].value
					if (v == 1) {
						window.frames['ResultsOfit'].location.replace("fhmlme2.asp?Special=" + Special + "&CharsAt=" + BuildingID)
					} else if (v == 2) {
						window.frames['ResultsOfit'].location.replace("fhmlme3.asp?x=" + x + "&Special=" + Special + "&z=" + GameID + "&y=" + y + "&CharsAt=" + BuildingID)
					} else if (v == 3) {
						window.frames['ResultsOfit'].location.replace("fhmlmed.asp?x=" + x + "&Special=" + Special + "&z=" + GameID + "&y=" + y + "&CharsAt=" + BuildingID)
					} else if (v == 5) {
						window.frames['ResultsOfit'].location.replace("fhmlmeb.asp?x=" + x + "&Special=" + Special + "&z=" + GameID + "&y=" + y + "&CharsAt=" + BuildingID)
					} else if (v == 7) {
						window.frames['ResultsOfit'].location.replace("fhmlmet.asp?x=" + x + "&Special=" + Special + "&z=" + GameID + "&y=" + y + "&CharsAt=" + BuildingID)
					} else if (v == 8) {
						window.frames['ResultsOfit'].location.replace("fhmlmes.asp?x=" + x + "&Special=" + Special + "&z=" + GameID + "&y=" + y + "&CharsAt=" + BuildingID)
					} else {
						window.frames['ResultsOfit'].location.replace("fhmlme.asp?Special=" + Special + "&CharsAt=" + BuildingID)
					}
				}
			}
		}
	}
}

function Floors(Count, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '</tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td align=center colspan=3 class="btn" ' + (Math.abs(yy) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 4px" onclick="GoXY(' + xx + ',' + (yy - t) + ')"' : ' style="padding-left: 4px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Up.png"></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(xx) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx - t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Lt.png"></td><td></td><td class="btn" ' + (Math.abs(xx + t) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx + t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Rt.png"></td></tr>';
	strTest += '<tr><td align=center colspan=3 class="btn" ' + (Math.abs(yy + t) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 4px" onclick="GoXY(' + xx + ',' + (yy + t) + ')"' : ' style="padding-left: 4px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Dn.png"></td></tr>';
	strTest += '</table></td></tr>'
	strTest += '<tr height="100%"><td colspan=2></td></tr>'
	strTest += '<tr><td colspan=2>Mode</td></tr>';
	if (Special == 0) {
		strTest += '<tr height="100%" colspan=2><td><center>Edit<br><input class="btn" name=Draw2 id=Draw2  ' + (deffun == 0 ? 'checked' : '') + ' type=radio value=0 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
		strTest += '<tr height="100%" colspan=2><td><center>Town<br><input class="btn" name=Draw2 id=Draw2 ' + (deffun == 7 ? 'checked' : '') + ' type=radio value=7 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
		if (SystemUser != 0) {
			strTest += '<tr height="100%" colspan=2><td><center>Terrain<br><input class="btn" name=Draw2 ' + (deffun == 2 ? 'checked' : '') + ' id=Draw2 type=radio value=2 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
			strTest += '<tr height="100%" colspan=2><td><center>Image<br><input class="btn" name=Draw2 ' + (deffun == 1 ? 'checked' : '') + ' id=Draw2 type=radio value=1 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
		}
		strTest += '<tr height="100%" colspan=2><td><center>Delete<br><input class="btn" name=Draw2 id=Draw2 ' + (deffun == 3 ? 'checked' : '') + ' type=radio value=3 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
	} else {
		strTest += '<tr height="100%" colspan=2><td><center>Buy<br><input class="btn" name=Draw2 id=Draw2 ' + (deffun == 5 ? 'checked' : '') + ' type=radio value=5 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
		strTest += '<tr height="100%" colspan=2><td><center>Appraise<br><input class="btn" name=Draw2 id=Draw2 ' + (deffun == 6 ? 'checked' : '') + ' type=radio value=6 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
	}
	getObj('Pages').innerHTML = '<table class="weakercell" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
}

function GoP(PageNo) {
	d = GetDef();
	window.location.replace("fhmlm.asp?CharsAt=" + CharsAt + "&deffun=" + d + "&Special=" + Special + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + PageNo);
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
	d = GetDef();
	window.location.replace("fhmlm.asp?CharsAt=" + CharsAt + "&deffun=" + d + "&Special=" + Special + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + GameID);
}

function GetDef() {
	var v = 0;
	var i = 0;
	for (i = 0; i < 5; i++) {
		if (getObj('Draw2')[i] != null) {
			if (getObj('Draw2')[i].checked == true) {
				v = getObj('Draw2')[i].value;
			}
		}
	}
	return v;
}
