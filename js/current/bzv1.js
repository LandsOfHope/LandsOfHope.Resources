var SystemUser = SystemUser;
var CharsAt = CharsAt;
var Floor = Floor;
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
var AA = AA;

var Processing = 0;
var Bz = new Array(50);
var FHIP = 'https://lohcdn.com/game/';

var FHIPI = FHIP + 'i/';
var FHIPH = FHIP + 'h/';
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';

var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
//var FHIPP = FHIPP;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function bMenu(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, dun, bowner, nc, nm, ls) {
	this.Color = ColorB;
	this.Caption = NameB;
	this.Picture = ImgB1;
	this.Picture2 = ImgB2;
	this.ObjectM = ObjectM;
	this.BuildingID = BID;
	this.Go2B = GoB;
	this.Hidden = 0;
	this.OB = OB;
	this.Dungeon = dun;
	this.Owner = bowner;
	this.nc = nc;
	this.nm = nm;
	this.light = ls;
}

function BMD(BID) {

}

function BMP(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, xm, ym, dun, bowner, nc, nm, ls) {
	if (Bz[xm] == null) {
		Bz[xm] = new Array();
	}
	if (Bz[xm][ym] == null) {
		Bz[xm][ym] = new bMenu(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, dun, bowner, nc, nm, ls);
	}
	else {
		Bz[xm][ym].Caption = NameB;
		Bz[xm][ym].Color = ColorB;
		Bz[xm][ym].Picture = ImgB1;
		Bz[xm][ym].Picture2 = ImgB2;
		Bz[xm][ym].BuildingID = BID;
		Bz[xm][ym].ObjectM = ObjectM;
		Bz[xm][ym].Go2B = GoB;
		Bz[xm][ym].Hidden = 0;
		Bz[xm][ym].OB = OB;
		Bz[xm][ym].Dungeon = dun;
		Bz[xm][ym].Owner = bowner;
		Bz[xm][ym].nc = nc;
		Bz[xm][ym].nm = nm;
		Bz[xm][ym].light = ls;
	}
}

function LoadB(lngwidth, lngtiles, lngstartx, lngstarty, lngstartz) {
	var strmap = '';
	lastlw = lngwidth
	lastlt = lngtiles
	lastlx = lngstartx
	lastly = lngstarty
	lastlz = lngstartz
	strmap = LoadB2()
	return strmap;

}

function LoadB3() {
	getObj("Bob").innerHTML = LoadB2()
}

function LoadB2() {
	var strmap = '';
	var lngwidth = lastlw;
	var lngtiles = lastlt;
	var lngstartx = lastlx;
	var lngstarty = lastly;
	var lngstartz = lastlz;
	var strmap = '';
	var strmap1 = '';
	var y = 0;
	var x = 0;
	var p = 0;
	var e = 0;
	for (y = lngstarty; y < ((lngstarty + lngtiles)); y++) {
		e = 0;
		strmap += "<tr>";
		for (x = lngstartx; x < ((lngstartx + lngtiles)); x++) {
			if (Bz[x] != null && Bz[x][y] != null) {
				strmap += DrawRoom(x, y, lngstartz, e, p);
			}
			else {
				strmap += "<td class=\"mapcolb\"></td>";

			}
			e = e + 1;
		}
		strmap += "</tr>";
		p = p + 1;
	}
	strmap += "</table>"

	strmap1 = "<table valign=top halign=middle cellpadding=0 cellspacing=0 border=0 width=" + ((lngtiles) * lngwidth) + " height=" + ((lngtiles) * lngwidth) + " style=\"background-color: 0\" id=OldBuild newc=0 name=0>";
	strmap = strmap1 + strmap

	return strmap;
}

function SetPicture(x, y, strPic) {
	Bz[x][y].Picture = strPic;
	getObj("B" + Bz[x][y].BuildingID).background = FHIPM + strPic;
}

function SetPictureM(x, y, strPic) {
	Bz[x][y].ObjectM = strPic;
	var strImgb2 = "";
	var strImgb1 = "";

	if (Bz[x][y].ObjectM != "") {
		if (Bz[x][y].nc > 0) {
			strImgb2 = FHIPM + Bz[x][y].ObjectM;
			strImgb1 = FHIPM + "nyou.gif";
		} else {
			strImgb1 = FHIPM + Bz[x][y].ObjectM;
			strImgb2 = "";
		}
	}
	getObj("B" + Bz[x][y].BuildingID).i1 = strImgb1
	getObj("B" + Bz[x][y].BuildingID).i2 = strImgb2
	getObj("B" + Bz[x][y].BuildingID).innerHTML = (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "'>" : ""))
}

function DrawRoom(x, y, z, e, p) {
	var strmap = '';
	strmap += "<td x=" + x + " y=" + y + " e=" + e + " p=" + p + " class=\"mapcolb\" l=" + Bz[x][y].light + " n=" + Bz[x][y].nc + " id=B" + Bz[x][y].BuildingID;
	strmap += " bgcolor=\"" + Bz[x][y].Color + "\" style=\"cursor:pointer\" i=\"" + Bz[x][y].Caption + "\" onmouseover=\"InfoMap('" + Bz[x][y].Picture + "','" + Bz[x][y].ObjectM + "','" + Bz[x][y].Color + "','<b>" + Bz[x][y].Caption + "</b><br>X: " + x + " Y: " + y + " Floor: " + z + "');\" onmouseout=\"window.top.hideTip()\" ";
	if (Bz[x][y].Picture != '') {
		strmap += "background=\"" + FHIPM + Bz[x][y].Picture + "\" ";
	}
	strmap += " onclick=\"MBg(this, " + Bz[x][y].BuildingID + ", " + x + ", " + y + " , " + Bz[x][y].Go2B + ", " + p + ", " + e + ")\"";
	var strImgb1 = (Bz[x][y].nc > 0 ? FHIPM + "nyou.gif" : "");
	var strImgb2 = "";
	if (Bz[x][y].ObjectM != "") {
		if (Bz[x][y].nc > 0) {
			strImgb2 = FHIPM + Bz[x][y].ObjectM;
			strImgb1 = FHIPM + "nyou.gif";
		} else {
			strImgb1 = FHIPM + Bz[x][y].ObjectM;
			strImgb2 = "";
		}
	}

	strmap += " i1=\"" + strImgb1 + "\" i2=\"" + strImgb2 + "\" align=center valign=center>" + (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "'>" : "")) + "</td>";
	return strmap;
}
function MBg(stuff, BuildingID, x, y, go2b, p, e) {
	window.frames['ResultsOfit'].location.replace('bz2.asp?CharsAt=' + BuildingID + '&A=' + AA)
}

function Floors(Count, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '<tr><td colspan=2>Floor</td></tr>';
	strTest += '<tr><td colspan=2><table>';
	for (i = 0; i <= Count; i++) {
		if (v == 0) {
			strTest += '<tr>'
		}
		strTest += '<td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ')"' : ' style="width:13; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + i + '</td>';
		v = v + 1
		if (v == 1) {
			strTest += '</tr>'
			v = 0

		}
	}
	//alert(y)
	strTest += '</table></td></tr>'
	strTest += '</tr><tr><td colspan=5><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td align=center colspan=3 class="btn" ' + (Math.abs(yy) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10; width:7" onclick="GoXY(' + xx + ',' + (yy - t) + ')"' : ' style="padding-left: 7; width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Up.gif"></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(xx) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx - t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Lt.gif"></td><td></td><td class="btn" ' + (Math.abs(xx) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx + t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'rt.gif"></td></tr>';
	strTest += '<tr><td align=center colspan=3 class="btn" ' + (Math.abs(yy) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10; width:7" onclick="GoXY(' + xx + ',' + (yy + t) + ')"' : ' style="padding-left: 7; width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Dn.gif"></td></tr>';
	strTest += '</table></td></tr><tr height="100%"><td colspan=2>&nbsp;</td></tr>';
	getObj('Pages2').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0>' + strTest + '</table>';
}

function GoP(PageNo) {
	window.location.replace("?CharsAt=" + CharsAt + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + PageNo + '&A=' + AA);
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

	window.location.replace("?CharsAt=" + CharsAt + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + Floor + '&A=' + AA);
}

function SendLink(v, Name, Piccy) {
	//fhlink.asp?Type=B&CharsAt=" & CharsAt & "&Name=" & strWord & "&l1=b&l2=" & Piccy & "
	window.top.sendRequest('fhlink.asp?Type=B&CharsAt=' + v + '&Name=' + Name + '&c=brown&l1=i&l2=' + Piccy);
}