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
var mx = mx;
var my = my;
var mz = mz;
var Special = Special;
var Processing = 0;
var Bz = new Array(50);
var FHIP = window.top.FHIP;
var FHIPI = window.top.FHIPI;
var FHIPO = window.top.FHIPO;
var FHIPM = window.top.FHIPM;
var FHIPB = window.top.FHIPB;
//var FHIPP = FHIPP;
var BuildingID = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function bMenu(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, dun, bowner, nc, nm, ls, h) {
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
	this.Hidden = h;
	this.backimage = '';
	this.foreimage = '';
}

function BMD(BID) {
	var BDelete = getObj("B" + BID)
	if (BDelete != null) {
		Bz[BDelete.x][BDelete.y] = null
	}

}

function BMP(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, xm, ym, dun, bowner, nc, nm, ls, h) {
	if (Bz[xm] == null) {
		Bz[xm] = new Array();
	}
	if (Bz[xm][ym] == null) {
		Bz[xm][ym] = new bMenu(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, dun, bowner, nc, nm, ls, h);
	}
	else {
		Bz[xm][ym].Caption = NameB;
		Bz[xm][ym].Color = ColorB;
		Bz[xm][ym].Picture = ImgB1;
		Bz[xm][ym].Picture2 = ImgB2;
		Bz[xm][ym].BuildingID = BID;
		Bz[xm][ym].ObjectM = ObjectM;
		Bz[xm][ym].Go2B = GoB;
		Bz[xm][ym].Hidden = h;
		Bz[xm][ym].OB = OB;
		Bz[xm][ym].Dungeon = dun;
		Bz[xm][ym].Owner = bowner;
		Bz[xm][ym].nc = nc;
		Bz[xm][ym].nm = nm;
		Bz[xm][ym].light = ls;
		Bz[xm][ym].backimage = '';
		Bz[xm][ym].foreimage = '';
	}
}

function LoadBI(lngwidth, lngtiles, lngstartx, lngstarty, lngstartz) {
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
				strmap += "<td id=\"B" + x + "-" + y + "\" class=\"mapcolb\"></td>";
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

function SetHidden(x, y, h, p, e) {
	Bz[x][y].Hidden = h;
	var bb = getObj("B" + Bz[x][y].BuildingID);

	if (h == 0) {
		bb.className = "mapcolb";
	} else {
		bb.className = "mapcolh";
	}
	if (window.top.Bz[x] != null) {
		if (window.top.Bz[x][y] != null) {
			window.top.Bz[x][y][lastlz].Hidden = h
			var bb = window.top.getObj("B" + Bz[x][y].BuildingID);
			if (bb != null) {
				if (h == 0) {
					bb.className = "mapcolb";
				} else {
					bb.className = "mapcolh";
				}


			}
		}
	}
}


function DrawRoom(x, y, z, e, p) {
	var strmap = ''

	strmap += "<td " + (Bz[x][y].Hidden != 0 ? " class=\"mapcolh\"" : " class=\"mapcolb\"") + " id=B" + Bz[x][y].BuildingID;
	strmap += " bgcolor=\"" + Bz[x][y].Color + "\" style=\"cursor:pointer;\"  onmouseover=\"Infox(" + x + "," + y + "," + z + ");\" onmouseout=\"window.top.hideTip();\" ";
	if (Bz[x][y].Picture != '') {
		strmap += "background=\"" + FHIPM + Bz[x][y].Picture + "\" ";
	}
	strmap += " onclick=\"MBg(" + Bz[x][y].BuildingID + ", " + x + ", " + y + " , " + Bz[x][y].Go2B + ", " + p + ", " + e + ")\"";
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
	Bz[x][y].backimage = strImgb1
	Bz[x][y].foreimage = strImgb2
	strmap += " align=center valign=center>" + (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "'>" : "")) + "</td>";
	return strmap;
}
function Infox(x, y, z) {
	InfoMap(Bz[x][y].Picture, Bz[x][y].ObjectM, Bz[x][y].Color, "<b>" + Bz[x][y].Caption + "</b>" + (Bz[x][y].Hidden != 0 ? "<br>Stealth: " + Bz[x][y].Hidden : "") + "<br>X: " + x + " Y: " + y + " Floor: " + z);
}
function MBg(BuildingID2, xx, yy, go2b, p, e) {
	//Clicked on the remodel map

	lastx = xx;
	lasty = yy;
	lastz = Floor;

	var Testit = getObj('B' + BuildingID2)
	Testit.newc = Testit.style.backgroundColor;
	var pph = 20;
	var strImgb1 = '<img src=\'' + (window.top.UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=' + pph + ' height=' + pph + '>';
	if (Bz[xx][yy].backimage != '') {
		strImgb1 = '<img src=\'' + (window.top.UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=' + pph + ' height=' + pph + ' style=\'background-Image: URL("' + Bz[xx][yy].backimage + '")\'>';
	}
	Testit.innerHTML = strImgb1;
	Testit.disabled = true;
	//	TileName = Testit.title;
	if (BuildingID != 0 && BuildingID != BuildingID2) {
		var Testit2 = getObj('B' + BuildingID);
		Testit2.innerHTML = '' + (Bz[mx][my].backimage != '' ? '<img src=\'' + Bz[mx][my].backimage + '\' width=20 height=20' + (Bz[mx][my].foreimage != '' ? ' style=\'background-Image: URL("' + Bz[mx][my].foreimage + '")\'' : '') + '>' : '');
		Testit2.disabled = false;
	}
	BuildingID = BuildingID2;
	mx = xx;
	my = yy;
	mz = Floor;
	if (BuildingID == 0) {
	} else {
		InfoTip('', 'Clicked ' + Bz[xx][yy].Caption);
		if (Special > 0) {
			window.frames['ResultsOfit'].location.replace("fhbsmr.asp?Special=" + Special + "&CharsAt=" + BuildingID)
		} else {
			window.frames['ResultsOfit'].location.replace("fhbsms.asp?Special=" + Special + "&CharsAt=" + BuildingID)
		}
	}
}

function Floors(Count, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '<tr><td colspan=2><table cellpadding=0 cellspacing=0>';
	for (i = 0; i <= Count; i++) {
		strTest += '<tr><td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ')"' : ' style="width:13; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + i + '</td></tr>';
		v = v + 1
	}
	strTest += '</table></td></tr>'
	strTest += '</tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(yy) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + xx + ',' + (yy - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'up.png" align=center></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(xx) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx - t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(xx) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx + t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'rt.png"></td></tr>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(yy) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + xx + ',' + (yy + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'dn.png" align=center></td></tr>';
	strTest += '</table></td></tr>'

	getObj('Pages').innerHTML = '<table class="copyright" cellpadding=0 cellspacing=0 height="100%">' + strTest + '</table>';
}

function GoP(PageNo) {
	window.location.replace("?CharsAt=" + CharsAt + "&Special=" + Special + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + PageNo);
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

	window.location.replace("?CharsAt=" + CharsAt + "&Special=" + (Special >= 10 ? 10 : 0) + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + Floor);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}


function DB(v, i) {
	if (Processing == 0) {
		getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="Processing = 1;window.location.replace(\'?Type=' + v + '\');">OK</button>';
		getObj('Stuff2').innerHTML = '<font class="weakcell"><b>' + i + '</b></font>';
		getObj('Pic').innerHTML = '';
	}
}
