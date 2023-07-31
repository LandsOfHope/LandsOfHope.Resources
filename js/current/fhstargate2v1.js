var SystemUser = SystemUser;
var CharsAt = CharsAt;
var isDungeon = isDungeon;
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
var FHIPO = FHIP + 'o/';
var FHIPM = FHIP + 'm/';

var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
var FHIPP = FHIPP;
var deffun = deffun;

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
this.backimage = '';
this.foreimage = '';
}

function BMD(BID) {
	FindB(BID, 1)
	
}

function FindB(b, dodelete) {
var y = 0;
var x= 0;
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
var x= 0;
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
				strmap += "<td id=\"B" + x + "-" + y + "\" style=\"cursor:pointer\" onmouseover=\"InfoMap('','','','<b>Empty Tile</b><br>X: " + x + " Y: " + y + " Floor: " + lngstartz + "');\" class=\"mapcolb\" " + (x <= 51 && y <= 51 ? "onclick=\"MBg(0, " + x + ", " + y + " , 0, " + p + ", " + e + ")\"" : "") + " onmouseout=\"window.top.hideTip();\"></td>";
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


function SetPicture(x,y,strPic) {
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

function SetColor(x,y,strColor) {
	if (Bz[x][y] != null) {
		getObj("B" + Bz[x][y].BuildingID).style.backgroundColor = strColor;
	}
}

function SetColor2(x,y,strColor) {
	Bz[x][y].Color = strColor;
	getObj("B" + Bz[x][y].BuildingID).style.backgroundColor = strColor;
}

function SetPictureM(x,y,strPic) {
	if (strPic == 'na.gif') {
		strPic = '';
	}
	Bz[x][y].ObjectM = strPic;
	var strImgb2 = "";
	var strImgb1 = "";

	if (Bz[x][y].ObjectM != "") {
		if (Bz[x][y].nc > 0 ) {
			strImgb2= FHIPM + Bz[x][y].ObjectM;
			strImgb1 = FHIPM + "nyou.gif";
		} else {
			strImgb1= FHIPM + Bz[x][y].ObjectM;
			strImgb2 = "";
		}
	}
	Bz[x][y].backimage = strImgb1;
	Bz[x][y].foreimage = strImgb2;
	getObj("B" + Bz[x][y].BuildingID).innerHTML = (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "'>" :  ""))
}

function DrawRoom(x, y, z, e, p) {
	var strmap = '';
	var lngstartz = lastlz;
	strmap += "<td " + (Bz[x][y].Hidden != 0 ? " class=\"mapcolh\"" : " class=\"mapcolb\"") + " id=B" + Bz[x][y].BuildingID;
	if (Bz[x][y].nm == 0 || Bz[x][y].nm == 2) {
		strmap += " " + (Bz[x][y].nm == 0 ? "style=\"background-color: " + (Bz[x][y].Go2B != 0 ?  'gold' : Bz[x][y].Color) + ";cursor:pointer;\" onmouseover=\"InfoMap('" + Bz[x][y].Picture + "','"  + Bz[x][y].ObjectM + "','" + Bz[x][y].Color + "','<b>" + Bz[x][y].Caption + "</b>" + (Bz[x][y].Hidden != 0 ? "<br>Stealth: " + Bz[x][y].Hidden : "") + "<br>X: " + x + " Y: " + y + " Floor: " + lngstartz + "');\" onmouseout=\"hideTip();\" " : "style=\"background-color: " + Bz[x][y].Color + ";\" ");
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
		if (Bz[x][y].nc > 0 ) {
			strImgb2= FHIPM + Bz[x][y].ObjectM;
			strImgb1 = FHIPM + "nyou.gif";
		} else {
			strImgb1= FHIPM + Bz[x][y].ObjectM;
			strImgb2 = "";
		}
	}
	Bz[x][y].backimage = strImgb1
	Bz[x][y].foreimage = strImgb2
	strmap += " align=center valign=center>" + (Bz[x][y].ObjectM != "" ? "<img src='" + strImgb1 + "' style='background-Image: URL(\"" + strImgb2 + "\")'>" : (Bz[x][y].nc > 0 ? "<img src='" + strImgb1 + "' width=20 height=20>" :  "")) + "</td>";
	return strmap;
}
function MBg(BuildingID2,x,y ,go2b, p, e) {
	//Clicked on the remodel map

	if (BuildingID2 > 0) {
		var Testit = getObj('B'+BuildingID2)
		var pph = 20;
		var strImgb1 = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=' + pph + ' height=' + pph + '>';
		if (Bz[x][y].backimage != '') {
			strImgb1 = '<img src=\'' + (UseArrow != 0 ? FHIPM + 'ayou.gif' : FHIPP) + '\' border=0 width=' + pph + ' height=' + pph + ' style=\'background-Image: URL("' + Bz[x][y].backimage + '")\'>';
		}
		Testit.innerHTML = strImgb1;
		TileName = Testit.title;
	}
	if (lastb!=0 && lastb != BuildingID2 && lastx > 0 && lasty > 0) {
		var Testit2 = getObj('B'+lastb);
		Testit2.innerHTML = '' + (Bz[lastx][lasty].backimage != '' ? '<img src=\'' + Bz[lastx][lasty].backimage + '\' width=20 height=20' + (Bz[lastx][lasty].foreimage != '' ? ' style=\'background-Image: URL("' + Bz[lastx][lasty].foreimage + '")\'' : '') + '>' :'');
	} else if (lastb == 0 && lastx > 0 && lasty > 0) {
		var Testit2 = getObj("B" + lastx + "-" + lasty);
		if (Bz[lastx] == null) {
			Testit2.innerHTML = '';
		} else if (Bz[lastx][lasty] == null) { 
			Testit2.innerHTML = '';
		} else {
			Testit2.innerHTML = '' + (Bz[lastx][lasty].backimage != '' ? '<img src=\'' + Bz[lastx][lasty].backimage + '\' width=20 height=20' + (Bz[lastx][lasty].foreimage != '' ? ' style=\'background-Image: URL("' + Bz[lastx][lasty].foreimage + '")\'' : '') + '>' :'');
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
	} else if (CharsAt == BuildingID2) {
		alert('You can not use the Stargate on this room.');
	} else {
		InfoTip('', 'Clicked ' + TileName);
		if (Bz[x][y].Go2B != 0) {
			window.location.replace("fhstargate.asp?CharsAt=" + BuildingID2 + "&Dest=-1");
		} else {
			window.location.replace("fhstargate.asp?CharsAt=" + CharsAt + "&Dest=" + BuildingID2);
		}
	}
}

function Floors(Count, CurPage) {
var strTest = '';
var v = 0;
var i = 0;
strTest += '<tr><td colspan=2 class="navmenu2" style="font-size: 9px; height: 12; padding: 0px; margin: 0px">Floors</td></tr>';   
strTest += '<tr><td colspan=2><table cellpadding=0 cellspacing=0><tr><td><table cellpadding=0 cellspacing=0>';        
for (i = 0; i <= Count; i++) 
{         
	if (v == 0) {
		strTest += '<tr>'
	}
	strTest += '<td title="Show Floor ' + i + '" class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ')"' : ' style="width:13; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + i + '</td>';        
	v = v + 1
	if (v == 2) {
		strTest += '</tr>'
		v = 0

	}
}
strTest += '</table></td></tr><tr><td colspan=2 class="navmenu2" style="font-size: 9px; height: 12; padding: 0px; margin: 0px">View</td></tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';        
strTest += '<tr><td title="Move North" align=center colspan=3 class="btn" ' + (Math.abs(yy) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10; width:7" onclick="GoXY(' + xx + ',' + (yy - t) + ')"' : ' style="padding-left: 7; width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Up.gif"></td></tr>';        
strTest += '<tr><td title="Move West" class="btn" ' + (Math.abs(xx) > 1 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx - t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Lt.gif"></td><td></td><td title="Move East" class="btn" ' + (Math.abs(xx) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (xx + t) + ',' + yy + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'rt.gif"></td></tr>';        
strTest += '<tr><td title="Move South" align=center colspan=3 class="btn" ' + (Math.abs(yy) < 100 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10; width:7" onclick="GoXY(' + xx + ',' + (yy + t) + ')"' : ' style="padding-left: 7; width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + FHIPO + 'Dn.gif"></td></tr>';        
strTest += '</table></td></tr></table></td></tr>'
strTest += '<tr height="100%"><td colspan=2>&nbsp;</td></tr>';
getObj('Pages').innerHTML = '<table class="copyright" cellpadding=0 cellspacing=0 height="100%">' + strTest + '</table>';
}

function GoP(PageNo) {
	window.location.replace("fhstargate2.asp?CharsAt=" + CharsAt + "&Special=" + (Special >= 10 ? 10 : 0) + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + PageNo);
}

function GoXY(xx,yy) {
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
	window.location.replace("fhstargate2.asp?CharsAt=" + CharsAt + "&Special=" + (Special >= 10 ? 10 : 0) + "&StartX=" + xx + "&StartY=" + yy + "&TestZ=" + Floor);
}
