var SystemUser = SystemUser;
var CharsAt = CharsAt;
var UseArrow = 1;
var Floor = Floor;
var t = t;
var xx = x;
var yy = y;
var lastx = lastx;
var lasty = lasty;
var lastz = Floor;
var lastb = CharsAt;
var lastlw = 0;
var lastlt = 0;
var lastlx = 0;
var lastly = 0;
var lastlz = 0;
var Special = Special;
var Processing = 0;
var Bz = new Array(50);
var FHIP = window.top.FHIP;
var FHIPI = FHIP + 'i/';
var FHIPH = FHIP + 'h/';
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';

var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
var FHIPP = FHIPP;
var deffun = deffun;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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
	this.backimage = '';
	this.foreimage = '';
}

function BMD(BID) {
	FindB(BID, 1)

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
		Bz[xm][ym].backimage = '';
		Bz[xm][ym].foreimage = '';
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

function LoadB3(lob) {
	if (lob != 0) {
		lastb = lob;
	}
	getObj("Bob").innerHTML = LoadB2()
}

function FindB(b, dodelete) {
	var y = 0;
	var x = 0;
	var lngtiles = lastlt;
	var lngstartx = lastlx;
	var lngstarty = lastly;

	for (y = lngstarty; y < ((lngstarty + lngtiles)); y++) {
		for (x = lngstartx; x < (lngstartx + lngtiles); x++) {
			if (Bz[x] != null) {
				if (Bz[x][y] != null) {
					if (Bz[x][y].BuildingID == b) {
						matchx = x;
						matchy = y;
						if (dodelete != 0) {
							Bz[x][y] = null
							lastb = 0;
							lastx = 0;
							lasty = 0;
						}
						return true;
						break;
					}
				}
			}
		}
	}
	return false;
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
		for (x = lngstartx; x < (lngstartx + lngtiles); x++) {
			if (Bz[x] != null && Bz[x][y] != null) {
				strmap += DrawRoom(x, y, lngstartz, e, p);
			}
			else {
				strmap += "<td id=\"B" + x + "-" + y + "\" style=\"cursor:pointer\" onmouseover=\"InfoMap('','','','<b>Empty Tile</b><br>X: " + x + " Y: " + y + " Floor: " + lngstartz + "');\" class=\"mapcolb\" onclick=\"MBg(0, " + x + ", " + y + " , 0, " + p + ", " + e + ")\" onmouseout=\"window.top.hideTip();\"></td>";
			}
			e = e + 1;
		}
		strmap += "</tr>";
		p = p + 1;
	}
	strmap += "</table>"

	strmap1 = "<table valign=top halign=middle cellpadding=0 cellspacing=0 border=0 width=" + ((lngtiles) * lngwidth) + " height=" + ((lngtiles) * lngwidth) + " style=\"background-color: black;\" id=OldBuild>";
	strmap = strmap1 + strmap

	return strmap;
}


function SetPicture(x, y, strPic) {
	if (Bz[x][y] != null) {
		if (strPic == 'na.gif') {
			strPic = '';
			getObj("B" + Bz[x][y].BuildingID).background = '';
		} else {
			getObj("B" + Bz[x][y].BuildingID).background = FHIPM + strPic;
		}
		Bz[x][y].Picture = strPic;
	}
}


function SetColor(x, y, strColor) {
	if (Bz[x][y] != null) {
		getObj("B" + Bz[x][y].BuildingID).style.backgroundColor = strColor;
	}
}

function SetColor2(x, y, strColor) {
	Bz[x][y].Color = strColor;
	getObj("B" + Bz[x][y].BuildingID).style.backgroundColor = strColor;
}

function SetPictureM(x, y, strPic) {
	if (strPic == 'na.gif') {
		strPic = '';
	}

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
	Bz[x][y].backimage = strImgb1;
	Bz[x][y].foreimage = strImgb2;
	getObj("B" + Bz[x][y].BuildingID).innerHTML = (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "'>" : ""))
}

function DrawRoom(x, y, z, e, p) {
	var strmap = '';
	var lngstartz = lastlz;
	strmap += "<td " + (Bz[x][y].Hidden != 0 ? " class=\"mapcolh\"" : " class=\"mapcolb\"") + " id=B" + Bz[x][y].BuildingID;
	if (Bz[x][y].nm == 0 || Bz[x][y].nm == 2) {
		strmap += " " + (Bz[x][y].nm == 0 ? "style=\"background-color: " + Bz[x][y].Color + "; cursor:pointer;\" onmouseover=\"InfoMap('" + Bz[x][y].Picture + "','" + Bz[x][y].ObjectM + "','c" + Bz[x][y].Color + "','<b>" + Bz[x][y].Caption + "</b>" + (Bz[x][y].Hidden != 0 ? "<br>Stealth: " + Bz[x][y].Hidden : "") + "<br>X: " + x + " Y: " + y + " Floor: " + lngstartz + "');\" onmouseout=\"hideTip();\" " : "style=\"background-color: " + Bz[x][y].Color + ";\" ");
	} else {
		strmap += " ";
	}
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
	strmap += " align=center valign=center>" + (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "' width=20 height=20>" : "")) + "</td>";
	return strmap;
}
function MBg(BuildingID2, x, y, go2b, p, e) {
	//Clicked on the remodel map

	if (BuildingID2 > 0) {
		var Testit = getObj('B' + BuildingID2)
		Testit.newc = Testit.style.backgroundColor;
		var pph = 20;
		var strImgb1 = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=' + pph + ' height=' + pph + '>';
		if (Bz[x][y].backimage != '') {
			strImgb1 = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=' + pph + ' height=' + pph + ' style=\'background-Image: URL("' + Bz[x][y].backimage + '")\'>';
		}
		Testit.innerHTML = strImgb1;
		Testit.disabled = true;
		TileName = Testit.title;
	}
	if (lastb != 0 && lastb != BuildingID2 && lastx > 0 && lasty > 0) {
		var Testit2 = getObj('B' + lastb);
		Testit2.innerHTML = '' + (Bz[lastx][lasty].backimage != '' ? '<img src=\'' + Bz[lastx][lasty].backimage + '\' width=20 height=20' + (Bz[lastx][lasty].foreimage != '' ? ' style=\'background-Image: URL("' + Bz[lastx][lasty].foreimage + '")\'' : '') + '>' : '');
		Testit2.disabled = false;
	} else if (lastb == 0 && lastx > 0 && lasty > 0) {
		var Testit2 = getObj("B" + lastx + "-" + lasty);
		if (Bz[lastx] == null) {
			Testit2.innerHTML = '';
		} else if (Bz[lastx][lasty] == null) {
			Testit2.innerHTML = '';
		} else {
			Testit2.innerHTML = '' + (Bz[lastx][lasty].backimage != '' ? '<img src=\'' + Bz[lastx][lasty].backimage + '\' width=20 height=20' + (Bz[lastx][lasty].foreimage != '' ? ' style=\'background-Image: URL("' + Bz[lastx][lasty].foreimage + '")\'' : '') + '>' : '');
		}
	}

	lastb = BuildingID2;
	lastx = x;
	lasty = y;
	lastz = Floor;

	if (BuildingID2 == 0) {
		InfoTip('', 'Clicked Empty tile at ' + x + ', ' + y);
		var Testit2 = getObj("B" + x + "-" + y);
		Testit2.innerHTML = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=20 height=20>';

		window.frames['ResultsOfit'].location.replace("gmblme3.asp?x=" + x + "&Special=10&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
	} else {
		InfoTip('', 'Clicked ' + TileName);

		var v = 0;
		var i = 0;
		for (i = 0; i < 10; i++) {
			if (getObj('Draw2')[i].checked == true) {
				v = getObj('Draw2')[i].value
				if (v == 1) {
					window.frames['ResultsOfit'].location.replace("gmblme2.asp?Special=" + Special + "&CharsAt=" + BuildingID2)
				} else if (v == 6) {
					window.frames['ResultsOfit'].location.replace("gmblmep.asp?Special=" + Special + "&CharsAt=" + BuildingID2)
				} else if (v == 2) {
					window.frames['ResultsOfit'].location.replace("gmblme3.asp?x=" + x + "&Special=" + Special + "&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
				} else if (v == 12) {
					window.frames['ResultsOfit'].location.replace("gmblme3.asp?x=" + x + "&Special=10&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
				} else if (v == 3) {
					window.frames['ResultsOfit'].location.replace("gmblmed.asp?x=" + x + "&Special=" + Special + "&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
				} else if (v == 15) {
					window.frames['ResultsOfit'].location.replace("gmblmes.asp?x=" + x + "&Special=" + Special + "&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
				} else if (v == 16) {
					window.location.replace("fh.asp?Redraw=1&BuildingID=" + BuildingID2)
				} else if (v == 5) {
					window.frames['ResultsOfit'].location.replace("gmblmef.asp?x=" + x + "&Special=" + Special + "&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
				} else if (v == 7) {
					window.frames['ResultsOfit'].location.replace("gmblmec.asp?x=" + x + "&Special=" + Special + "&z=" + Floor + "&y=" + y + "&CharsAt=" + BuildingID2)
				} else {
					window.frames['ResultsOfit'].location.replace("gmblme.asp?Special=" + Special + "&CharsAt=" + BuildingID2)
				}
			}
		}
	}
}

function Floors(Count, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '<tr><td colspan=2><table cellpadding=0 cellspacing=0><tr><td><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td align=center colspan=3 class="btn" ' + (Math.abs(yy) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + xx + ',' + (yy - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'up.png"></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(xx) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx - t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(xx) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx + t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'rt.png"></td></tr>';
	strTest += '<tr><td align=center colspan=3 class="btn" ' + (Math.abs(yy) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + xx + ',' + (yy + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'dn.png"></td></tr>';
	strTest += '</table></td><td><table cellpadding=0 cellspacing=0>';
	for (i = 0; i <= Count; i++) {
		strTest += '<tr><td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ')"' : ' style="width:13; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + i + '</td></tr>';
	}
	//alert(y)
	strTest += '</table></td></tr></table></td></tr>';
	strTest += '<tr><td align=right>Edit</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 0 ? 'checked' : '') + ' value=0 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Image</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 1 ? 'checked' : '') + ' value=1 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Preview</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 6 ? 'checked' : '') + ' value=6 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Fast</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 12 ? 'checked' : '') + ' value=12 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Build All</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 2 ? 'checked' : '') + ' value=2 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Items</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 5 ? 'checked' : '') + ' value=5 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Color</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 7 ? 'checked' : '') + ' value=7 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Spawns</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 15 ? 'checked' : '') + ' value=15 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Move</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 16 ? 'checked' : '') + ' value=16 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	strTest += '<tr><td align=right>Delete</td><td><input class="btn" name=Draw2 id=Draw2 type=radio ' + (deffun == 3 ? 'checked' : '') + ' value=3 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></td></tr>';
	getObj('Pages').innerHTML = '<table class="copyright" cellpadding=0 cellspacing=0 height="100%">' + strTest + '</table>';
}

function GoP(PageNo) {
	var d = GetDef();
	window.location.replace("gmblm.asp?CharsAt=" + CharsAt + "&deffun=" + d + "&Special=" + (Special >= 10 ? 10 : 0) + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + PageNo);
}

function GetDef() {
	var v = 0;
	var i = 0;
	for (i = 0; i < 10; i++) {
		if (getObj('Draw2')[i].checked == true) {
			v = getObj('Draw2')[i].value;
		}
	}
	return v;
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
	var d = GetDef();

	window.location.replace("gmblm.asp?CharsAt=" + CharsAt + "&deffun=" + d + "&Special=" + (Special >= 10 ? 10 : 0) + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + Floor);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff) {
	InfoTip('', '' + stuff.i + '');
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
