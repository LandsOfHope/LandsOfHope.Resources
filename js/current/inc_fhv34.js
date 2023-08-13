var LastCharacter = '';
var UseArrow = 1;
var FHSP = '';
var SH = 1;
var ME = ME;
var DA = DA;
var MH = 1;
var TR = 1;
var SR = SR;
var PFING = 0;
var FHIP = FHIP;
var UseAdvanced = 0;
var UseSounds = 0;

var FHIPI = FHIP + 'i/';
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';
var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPH = FHIP + 'h/';
var FHIPIM = FHIP + 'images/';
var FHIPV = FHIP + 'v/';
var FHIPF = FHIP + 'flags/';
var FHIPL = FHIP + 'l/';
var FHIPS = FHIP + 's/';
var FHIPA = FHIP + 'a/';
var FHIPPR = FHIP + 'p/';
var FHIPP = FHIPP;

var mainx = mainx;
var Tiles = Tiles;
var mainy = mainy;
var mainz = mainz;
var mx = mx;
var my = my;
var mz = mz;
var BuildingID = BuildingID;
var AllowMove = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


rnd.today = new Date();
rnd.seed = rnd.today.getTime();


function FinishMap() {
	window.top.getObj('Map2').innerHTML = window.top.LoadMap(500, 0, 'black', 100, 0, 0, 1000);
	if (window.top.LastMapX > 0 && window.top.LastMapY) {
		Go2(window.top.LastMapX, window.top.LastMapY);
	}
}

function FinishBuilding() {
	window.top.getObj('Map2').innerHTML = window.top.LoadB(500, 0, 'black', 100, 0, LastBX, LastBY, LastBZ, 0);
	if (window.top.CurrentBuildingID > 0 && window.top.mx > 0 && window.top.my > 0) {
		MB2(window.top.CurrentBuildingID, window.top.mx, window.top.my, window.top.mz);
	}
}

function rnd() {
	rnd.seed = (rnd.seed * 9301 + 49297) % 233280;
	return rnd.seed / (233280.0);
}

function rand(number) {
	return Math.ceil(rnd() * number);
}

function RDS(h, m, s) {
	window.top.ticktock = 0;
	window.top.fhh = h;
	window.top.fhm = m;
	window.top.fhs = s;
	AllowMove = setTimeout(RDS2, 200);
}

function RDS2() {
	clearTimeout(AllowMove);
	window.top.DoingStuff = 0;
}



function mMenu(ColorM, CaptionM, PictureM, ObjectM, MapXm, MapYm, Levelm, SafeZonem) {
	this.Color = ColorM;
	this.Caption = CaptionM;
	this.Picture = PictureM;
	this.ObjectM = ObjectM;
	this.MapX = MapXm;
	this.MapY = MapYm;
	this.Level = Levelm;
	this.Plot = '';
	this.PlotInfo = new Array(2);
	this.SafeZone = SafeZonem;
}

function MMP(ColorM, CaptionM, PictureM, ObjectM, MapXm, MapYm, Levelm, SafeZonem) {
	var xm = MapXm;
	var ym = MapYm;
	if ('' + PictureM != '') {
		PictureM += '.gif';
	}
	if ('' + ObjectM != '') {
		ObjectM += '.gif';
	}
	if (SafeZonem == null) {
		SafeZonem = 0;
	}
	if (window.top.Mapz[xm] == null) {
		window.top.Mapz[xm] = new Array();
	}
	if (window.top.Mapz[xm][ym] == null) {
		window.top.Mapz[xm][ym] = new mMenu(ColorM, CaptionM, PictureM, ObjectM, MapXm, MapYm, Levelm, SafeZonem);
	}
	else {
		window.top.Mapz[xm][ym].Caption = CaptionM;
		window.top.Mapz[xm][ym].Color = ColorM;
		window.top.Mapz[xm][ym].Picture = PictureM;
		window.top.Mapz[xm][ym].ObjectM = ObjectM;
		window.top.Mapz[xm][ym].MapX = MapXm;
		window.top.Mapz[xm][ym].MapY = MapYm;
		window.top.Mapz[xm][ym].Level = Levelm;
		window.top.Mapz[xm][ym].Plot = '';
		window.top.Mapz[xm][ym].PlotInfo = new Array(2);
		window.top.Mapz[xm][ym].SaveZonem = SafeZonem;
	}
}
function bMenu(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, dun, bowner, nc, nm, floor, owner) {
	this.Color = ColorB;
	this.Caption = NameB;
	this.Picture = ImgB1;
	this.Picture2 = ImgB2;
	this.ObjectM = ObjectM;
	this.BuildingID = BID;
	this.Go2B = GoB;
	this.Hidden = HiB;
	this.OB = OB;
	this.Dungeon = dun;
	this.Owner = owner;
	this.nc = nc;
	this.nm = nm;
	this.backimage = '';
	this.foreimage = '';
	this.floor = floor;
	this.visited = 0;
	this.Plot = '';
	this.PlotInfo = new Array(2);
}

function AFV(a, vid, vpid, vcolor, vcid, vname, vlevel, vdisabled, vw, vb, nnpc, vt, vflag, vflagc, anchor) {

	var Extra = '' + (nnpc == 1 ? 'Your ' + vt : (a == window.top.CUF && window.top.CUF != 0 ? 'Ally' : 'Enemy') + ' ' + vt) + '<br>' + (vb > 1 ? '' + window.top.PSGM(vb) : '');
	var agc = GetAImg(a);
	var agct = GetAName(a);

	if (window.top.Vessels[window.top.FHVC] == null) {
		window.top.Vessels[window.top.FHVC] = new Array();
	}
	window.top.Vessels[window.top.FHVC] = new newVessel(a, vid, vpid, vcolor, vcid, vname, vlevel, vdisabled, vw, vb, nnpc, vt, vflag, vflagc, agc, Extra, agct, anchor);
	window.top.FHVC = window.top.FHVC + 1;
}

function newVessel(a, vid, vpid, vcolor, vcid, vname, vlevel, vdisabled, vw, vb, nnpc, vt, vflag, vflagc, agc, Extra, agct, anchor) {
	this.c = vcolor;
	this.vflag = vflag;
	this.vflagc = vflagc;
	this.vt = vt;
	this.a = a;
	this.vw = vw;
	this.nnpc = nnpc;
	this.vb = vb;
	this.i = vname;
	this.vpid = vpid;
	this.p2 = vpid;
	this.vc = vcolor;
	this.vid = vid;
	this.vcid = vcid;
	this.vl = vlevel;
	this.anchor = anchor;
	this.Extra = Extra;
	this.vd = vdisabled;
}

function decimalToHex(rgb) {
	var colorObj = new Object();
	colorObj.red = (rgb & (255 << 16)) >> 16;
	colorObj.green = (rgb & (255 << 8)) >> 8;
	colorObj.blue = (rgb & 255);
	return 'RGB(' + colorObj.blue + ',' + colorObj.green + ',' + colorObj.red + ');'
}

function BMP(BID, NameB, ColorB, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, xm, ym, dun, bowner, nc, nm, floor, owner) {
	var Color2 = decimalToHex(parseFloat(ColorB));
	if (window.top.Bz[xm] == null) {
		window.top.Bz[xm] = new Array();
	}
	if (window.top.Bz[xm][ym] == null) {
		window.top.Bz[xm][ym] = new Array();
	}
	if (window.top.Bz[xm][ym][floor] == null) {
		window.top.Bz[xm][ym][floor] = new bMenu(BID, NameB, Color2, ImgB1, ImgB2, ObjectM, GoB, HiB, OB, dun, bowner, nc, nm, floor, owner);
	} else {
		window.top.Bz[xm][ym][floor].Caption = NameB;
		window.top.Bz[xm][ym][floor].Color = Color2;
		window.top.Bz[xm][ym][floor].Picture = ImgB1;
		window.top.Bz[xm][ym][floor].Picture2 = ImgB2;
		window.top.Bz[xm][ym][floor].BuildingID = BID;
		window.top.Bz[xm][ym][floor].ObjectM = ObjectM;
		window.top.Bz[xm][ym][floor].Go2B = GoB;
		window.top.Bz[xm][ym][floor].Hidden = HiB;
		window.top.Bz[xm][ym][floor].OB = OB;
		window.top.Bz[xm][ym][floor].Dungeon = dun;
		window.top.Bz[xm][ym][floor].Owner = owner;
		window.top.Bz[xm][ym][floor].nc = nc;
		window.top.Bz[xm][ym][floor].nm = nm;
		window.top.Bz[xm][ym][floor].backimage = '';
		window.top.Bz[xm][ym][floor].foreimage = '';
		window.top.Bz[xm][ym][floor].floor = floor;
		window.top.Bz[xm][ym][floor].visited = 0;
		window.top.Bz[xm][ym][floor].Plot = '';
		window.top.Bz[xm][ym][floor].PlotInfo = new Array(2);

	}
}

function MM(xc, yc) {
	if (window.top.STUCK == 1) {
		S2c('<font color=cyan>You must solve the puzzle to continue.</font>')
	} else if (window.top.STUCK == 2) {
		S2c('<font color=cyan>You must kill all the monsters here.</font>');
	} else if (window.top.STUCK == 3) {
		S2c('<font color=cyan>You must trigger or disarm the trap to continue.</font>');
	} else if (window.top.STUCK == 4) {
		S2c('<font color=cyan>Only the living may pass here..</font>');
	} else if (window.top.DoingStuff == 0) {
		if (xc >= window.top.MapStartX + (window.top.fullx) || xc <= window.top.MapStartX || yc >= window.top.MapStartY + (window.top.fully) || yc <= window.top.MapStartY) {
			window.top.DoingStuff = 1;
			MM2(xc, yc);
		} else {
			if (xc <= 100 && yc <= 100 && xc >= 1 && yc >= 1) {
				window.top.DoingStuff = 1;
				Go2(xc, yc);
				window.top.Ninja.location.replace('fh.asp?x=' + xc + '&y=' + yc + '');
			} else {
				window.top.DoingStuff = 0;
			}
		}
	} else if (window.top.DoingStuff == 1) {
		S2c('The previous action has not yet completed, <a href="javascript:void(0);" onclick="window.top.DoingStuff = 0;">[Cancel Action]</a>.</font>');
	}
}

function MM2(i, s) {
	window.top.LastMapX = i;
	window.top.LastMapY = s;
	window.top.Ninja.location.replace('fh.asp?Redraw=1&x=' + i + '&y=' + s + '');
}

function XYBox(xc, yc) {
	if (window.top.Jailed != 0) {
		window.top.getObj("Map3").innerHTML = "<table width=420 cellpadding=0 cellspacing=0 class='weakercell'><tr><td align=left>" + ASCII("Jailed", 1) + "</td><td style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 80px; text-align: center;font-weight: bold; cursor: pointer;' onclick='RefreshWindow();' title='Refresh Game Window'>" + ASCII("Refresh", 2) + "</td><td id=actionlist style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 120px; text-align: center;font-weight: bold; cursor: pointer;' title='World Action Choices' onclick='ActionList();'>" + ASCII("World Actions", 6) + "</td><td id=OptionCog style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 20px; text-align: center;font-weight: bold; cursor: pointer;' onclick='OptionCogMenu();' title='Option Menu'><img src='https://lohcdn.com/game/icons/cog.png'></td></tr></table></form>"
	} else if (xc == 0 && yc == 0) {
		window.top.getObj("Map3").innerHTML = "<table width=420 cellpadding=0 cellspacing=0 class='weakercell'><tr><td align=left>" + Adir("window.top.Interface.location.replace(\"fhrest.asp\");", "Rest to regenerate health/mana/stamina", "heart", "") + "</td><td align=right>" + Adir("window.top.Ninja.location.replace(\"fh.asp?Redraw=1&BuildingID=-1&R=41\");", "Exit the current building", "world_go", "") + "</td><td style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 80px; text-align: center;font-weight: bold; cursor: pointer;' onclick='RefreshWindow();' title='Refresh Game Window'>" + ASCII("Refresh", 2) + "</td><td id=actionlist style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 120px; text-align: center;font-weight: bold; cursor: pointer;' title='World Action Choices' onclick='ActionList();'>" + ASCII("World Actions", 6) + "</td><td id=OptionCog style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 20px; text-align: center;font-weight: bold; cursor: pointer;' onclick='OptionCogMenu();' title='Option Menu'><img src='https://lohcdn.com/game/icons/cog.png'></td></tr></table></form>"
	} else {
		window.top.getObj("Map3").innerHTML = "<form name=Goto id=Goto ACTION='fh.asp?Redraw=1' METHOD='post' target='Ninja' style='margin: 0px;'><table width=420 cellpadding=0 cellspacing=0 class='weakercell'><tr><td>x:</td><td><input class='input' name=x id=x value='" + xc + "'  autocomplete='off'  length=2 size=2 onkeypress='return fxkp(event);' maxlength=3 style='width:25px'>y:</td><td><input class='input' name=y id=y value='" + yc + "' onkeypress='return fxkp(event);' length=2 size=2 maxlength=3 autocomplete='off'  style='width:25px'></td><td class='bottombuttons'>" + Adirf("Goto x/y coordinates", "house_go", "") + Adir("window.top.Interface.location.replace(\"map.asp\");", "Map", "world", "") + Adir("window.top.Interface.location.replace(\"fhrest.asp\");", "Rest to regenerate health/mana/stamina", "heart", "") + Adir("PF(0, 121)", "Explore the tile", "Explore", "Explore") + Adir("PF(0, 241)", "Appraise this tile", "info", "i") + "</td><td style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 80px; text-align: center;font-weight: bold; cursor: pointer;' title='Refresh Game Window' onclick='RefreshWindow();'>" + ASCII("Refresh", 2) + "</td><td id=actionlist title='World Action Choices' style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 120px; text-align: center;font-weight: bold; cursor: pointer;' onclick='ActionList();'>" + ASCII("World Actions", 6) + "</td><td id=OptionCog style='background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 20px; text-align: center;font-weight: bold; cursor: pointer;' onclick='OptionCogMenu();' title='Option Menu'><img src='https://lohcdn.com/game/icons/cog.png'></td></tr></table></form>"
	}
}

function RefreshWindow() {
	window.top.Ninja.location.replace('fh.asp');
}

function Go2(xc, yc) {
	window.top.XYBox(xc, yc);


	var Testit = getObj('yourarrow');
	if (Testit != null) {
		Testit.style.left = ((xc - window.top.MapStartX) * 20) + 20;
		Testit.style.top = ((yc - window.top.MapStartY) * 20) + 60;
		Testit.style.display = '';
	}
	if (getObj('X' + xc + 'Y' + yc) != null) {
		TileName = getObj('X' + xc + 'Y' + yc).title;
	} else {
		TileName = 'Unknown';
	}
	getObj('x').value = '' + xc;
	getObj('y').value = '' + yc;
	window.top.LastMapX = xc;
	window.top.LastMapY = yc;

}

function S2c(cstatus) {
	window.parent.SendCommand('' + cstatus + '');
}

function MBg(s, x, y, p, v, z) {
	var xm = mx //+ mainx;
	var ym = my //+ mainy;
	var MoveOK = 1;
	var Dungy = 0;
	if (Bz[xm] != null && Bz[xm][ym] != null && Bz[xm][ym][mz] != null) {
		Dungy = window.top.Bz[xm][ym][mz].Dungeon;
	}
	if (window.top.SystemUser != 0) {
		window.top.STUCK = 0;
		Dungy = 0;
	}
	var ii = window.top.Bz[x][y][mz].Caption;
	var hh = window.top.Bz[x][y][mz].Hidden;
	if (hh == 0) {
		if (window.top.STUCK == 1) {
			S2c('<font color=cyan>You must solve the puzzle to continue.</font>')
		} else if (window.top.STUCK == 2) {
			S2c('<font color=cyan>You must kill all the monsters here.</font>');
		} else if (window.top.STUCK == 3) {
			S2c('<font color=cyan>You must trigger or disarm the trap to continue.</font>');
		} else if (window.top.STUCK == 4) {
			S2c('<font color=cyan>Only the living may pass here.</font>');
		} else if (window.top.DoingStuff == 0) {
			window.top.DoingStuff = 1;
			if (p > 0) {
				window.top.Ninja.location.replace('fh.asp?Redraw=1&BuildingID=' + p + '');
			} else {
				if (x >= window.top.MapStartX + (window.top.fullx) || x <= window.top.MapStartX || y >= window.top.MapStartY + (window.top.fully) || y <= window.top.MapStartY) {
					MMB2(s);
				} else {
					MB2(s, x, y, mz);
					window.top.Ninja.location.replace('fh.asp?BuildingID=' + s + '');
				}
			}
		} else if (window.top.DoingStuff == 1) {
			S2c('You are already moving.</font>');
		}
	} else {
		window.top.Ninja.location.replace('fhquickreveal.asp?BuildingID=' + s + '');
		//S2c('You need to reveal ' + ii + ' before moving into it.</font>');
	}
}


function MoveWhere() {
	var dirs = '';
	var xm = window.top.mx; //window.top.LastBX;
	var ym = window.top.my; //window.top.LastBY;
	var z = window.top.mz;
	var objx = null;

	if (window.top.Bz[xm][z] != null) {
		if (window.top.Bz[xm][ym - 1][z] != null) {
			objx = window.top.Bz[xm][ym - 1][z]
			if (objx.nm == 0 && objx.Hidden == 0) {
				dirs += '<b>north</b> ' + MoveWhere2(objx.BuildingID, 'to ' + objx.Caption) + ', ';
			}
		}
		if (window.top.Bz[xm][ym + 1][z] != null) {
			objx = window.top.Bz[xm][ym + 1][z]
			if (objx.nm == 0 && objx.Hidden == 0) {
				dirs += '<b>south</b> ' + MoveWhere2(objx.BuildingID, 'to ' + objx.Caption) + ', ';
			}
		}
	}
	if (window.top.Bz[xm + 1] != null) {
		if (window.top.Bz[xm + 1][ym][z] != null) {
			objx = window.top.Bz[xm + 1][ym][z]
			if (objx.nm == 0 && objx.Hidden == 0) {
				dirs += '<b>east</b> ' + MoveWhere2(objx.BuildingID, 'to ' + objx.Caption) + ', ';
			}
		}
	}
	if (window.top.Bz[xm - 1] != null) {
		if (window.top.Bz[xm - 1][ym][z] != null) {
			objx = window.top.Bz[xm - 1][ym][z]
			if (objx.nm == 0 && objx.Hidden == 0) {
				dirs += '<b>west</b> ' + MoveWhere2(objx.BuildingID, 'to ' + objx.Caption) + ', ';
			}
		}
	}
	if (dirs != '') {
		S2c('<font color=\'#666600\'>You can move ' + dirs.substr(0, dirs.length - 2) + '.</font>')
	}
}

function MoveWhere2(b, c) {
	var dirs = '';
	if (b == window.top.LastBuildingID) {
		dirs = ' you came from this direction'
	} else {
		dirs = c;
	}
	return dirs;
}

function MMB2(s) {
	window.top.Ninja.location.replace('fh.asp?Redraw=1&BuildingID=' + s + '');
}

function MB2(BuildingID2, xx, yy, zz) {
	window.top.XYBox(0, 0);
	PGS2('istep' + rand(3) + '.wav', 'istep' + rand(3) + '.wav', 300);
	window.top.LastBuildingID = BuildingID;
	window.top.LastBX = mx;
	window.top.LastBY = my;
	window.top.LastBZ = mz;
	var Testit = getObj('yourarrow');
	if (Testit != null) {
		Testit.style.left = ((xx - window.top.MapStartX) * 20) + 20;
		Testit.style.top = ((yy - window.top.MapStartY) * 20) + 60;
		Testit.style.display = '';
	}

	var Testit = getObj('fog');
	if (Testit != null) {
		Testit.style.backgroundPosition = (((xx - window.top.MapStartX) * 20) - 110) + 'px ' + (((yy - window.top.MapStartY) * 20) - 110) + 'px';
	}

	if (getObj('B' + BuildingID2) != null) {
		TileName = getObj('B' + BuildingID2).title;
		getObj('B' + BuildingID2).style.zIndex = 1000;

	} else {
		TileName = 'Unknown';
	}

	BuildingID = BuildingID2;
	mx = xx;
	my = yy;
	mz = zz;
}

function MB3() {
	if (window.top.LastBuildingID != 0) {
		var BuildingID3 = window.top.LastBuildingID;
		var xmx = window.top.LastBX;
		var xmy = window.top.LastBY;
		var xmz = window.top.LastBZ;
		MB2(BuildingID3, xmx, xmy, xmz);
	}
}

function PF(id, varin) {
	if (getObj('Buttons') != null) {
		getObj('Buttons').innerHTML = '';
	}
	var strword = '';
	var strfile = '';
	PFING = 1;
	var InWin = window.top.Interface.location;
	if (varin == 2) {
		strword = 'Fight';
		strfile = 'fhf.cgi';
	}
	if (varin == 1) {
		strfile = 'fhpref.asp';
	}
	if (varin == 79) {
		strfile = 'fhprec.asp';
	}
	if (varin == 3) {
		strfile = 'fhshopq2.asp';
	}
	if (varin == 4) {
		strfile = 'fhtalk.asp';
	}
	if (varin == 5) {
		strfile = 'fhstat2.asp';
	}
	if (varin == 6) {
		strword = 'Mine';
		strfile = 'fhres.asp';
	}
	if (varin == 7) {
		strword = 'Chop';
		strfile = 'fhres.asp';
	}
	if (varin == 8) {
		strword = 'Dig';
		strfile = 'fhres.asp';
	}
	if (varin == 11) {
		strword = 'Harvest';
		strfile = 'fhres.asp';
	}
	if (varin == 12) {
		strword = 'Harvest2';
		strfile = 'fhres.asp';
	}
	if (varin == 16) {
		strword = 'Harvest3';
		strfile = 'fhres.asp';
	}
	if (varin == 29) {
		strword = 'Fib';
		strfile = 'fhres.asp';
	}

	if (varin == 13) {
		strword = 'Mine2';
		strfile = 'fhres.asp';
	}
	if (varin == 14) {
		strfile = 'fhtalk.asp';
	}
	if (varin == 24) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?GoD=1');
		PFING = 0;
		return 0;
	}
	if (varin == 15) {
		strword = 'Fish';
		strfile = 'fhres.asp';
	}
	if (varin == 26) {
		strword = 'Harvest4';
		strfile = 'fhres.asp';
	}
	if (varin == 18) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?o=8&other=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 19) {
		strword = 'Quarry';
		strfile = 'fhres.asp';
	}
	if (varin == 25) {
		strword = 'Mine3';
		strfile = 'fhres.asp';
	}
	if (varin == 20) {
		strfile = 'fhbeg.asp';
	}
	if (varin == 121) {
		strfile = 'fhexplore.asp';
	}
	if (varin == 122) {
		window.top.TrackMe('BEAST');
		PFING = 0;
		return 0;
	}
	if (varin == 123) {
		window.top.TrackMe('UNDEAD');
		PFING = 0;
		return 0;
	}
	if (varin == 124) {
		window.top.TrackMe('HUMANOID');
		PFING = 0;
		return 0;
	}
	if (varin == 132) {
		window.top.TrackMe('HIDDEN');
		PFING = 0;
		return 0;
	}
	if (varin == 133) {
		window.top.TrackMe('PVP');
		PFING = 0;
		return 0;

	}
	if (varin == 125) {
		window.top.TrackMe('DEMON');
		PFING = 0;
		return 0;
	}
	if (varin == 134) {
		window.top.TrackMe('CRIMINAL');
		PFING = 0;
		return 0;
	}

	if (varin == 21) {
		strfile = 'fhgum.asp';
	}
	if (varin == 22) {
		strword = 'Trade';
		strfile = 'fhtrade.asp';
	}
	if (varin == 23) {
		strfile = 'fhexplorem.asp';
	}
	if (varin == 27) {
		strfile = 'fhlp.asp';
	}
	if (varin == 28) {
		strfile = 'fhlocks.asp';
	}
	if (varin == 47) {
		strfile = 'fhilocks.asp';
	}
	if (varin == 80) {
		InWin.replace('fhbsm.asp?Special=0&CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 31) {
		strfile = 'fhshopq2.asp';
	}

	if (varin == 51) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?Redraw=1&BuildingID=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 52 || varin == 49) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?Redraw=1&BuildingID=-1&R=' + rand(99));
		PFING = 0;
		return 0;
	}
	if (varin == 48) {
		strfile = 'fhlp.asp';
	}

	if (varin == 53) {
		InWin.replace('fhbup.asp?ItemID=' + id + '&Type=-1');
		PFING = 0;
		return 0;
	}
	if (varin == 82) {
		InWin.replace('fhbups.asp?ItemID=' + id + '&Type=-1');
		PFING = 0;
		return 0;
	}
	if (varin == 55) {
		strfile = 'fhBF.asp';
	}
	if (varin == 56) {
		InWin.replace('fhbm.asp?CharsAt=' + id + '&Type=4');
		PFING = 0;
		return 0;
	}
	if (varin == 109) {
		InWin.replace('fhbcs.asp?CharsAt=' + id + '&Type=4');
		PFING = 0;
		return 0;
	}
	if (varin == 57) {
		InWin.replace('fhsiege.asp?CharsAt=' + id + '&Type=4');
		PFING = 0;
		return 0;
	}
	if (varin == 58) {
	}
	if (varin == 59) {
		strfile = 'fhsup2.asp';
	}
	if (varin == 71) {
		strfile = 'fhaup.asp';
	}
	if (varin == 60) {
		strfile = 'fhwuse.asp';
	}
	if (varin == 61) {
		strfile = 'fhChest.asp';
	}
	if (varin == 62) {
		strfile = 'fhBR.asp';
	}
	if (varin == 63) {
		strfile = 'fhbup.asp';
	}
	if (varin == 64) {
		InWin.replace('fhbm.asp?CharsAt=' + id + '&Type=11');
		PFING = 0;
		return 0;
	}
	if (varin == 65) {
		InWin.replace('fhbm.asp?CharsAt=' + id + '&Type=12');
		PFING = 0;
		return 0;
	}
	if (varin == 66) {
		InWin.replace('fhbm.asp?CharsAt=' + id + '&Type=13');
		PFING = 0;
		return 0;
	}
	if (varin == 67) {
		InWin.replace('fhbm.asp?CharsAt=' + id + '&Type=14');
		PFING = 0;
		return 0;
	}
	if (varin == 68) {
		strfile = 'gmEC.asp';
	}
	if (varin == 54) {
		InWin.replace('gmEC.asp?CharsAt=' + id + '&Mask=*');
		PFING = 0;
		return 0;
	}
	if (varin == 69) {
		InWin.replace('gmECI.asp?CharsAt=' + id + '');
		PFING = 0;
		return 0;
	}
	if (varin == 70) {
		strfile = 'fhBuD.asp';
	}
	if (varin == 72) {
		InWin.replace('fhskill.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 74) {
		InWin.replace('fhmim.asp?CharsAt=' + id + '&Type=6');
		PFING = 0;
		return 0;
	}
	if (varin == 229) {
		InWin.replace('fhmim.asp?CharsAt=' + id + '&Type=3');
		PFING = 0;
		return 0;
	}
	if (varin == 73) {

		window.top.RenderMenu((window.top.SystemUser > 0 ? 2 : 0), 1);
		window.top.refreshTime();
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?Posess=' + id + '&Redraw=1');
		PFING = 0;
		return 0;
	}
	if (varin == 81) {
		strfile = 'fhcare.asp';
	}
	if (varin == 181) {
		strfile = 'fhcare2.asp';
	}
	if (varin == 83) {
		strfile = 'fhstat3.asp';
	}
	if (varin == 200) {
		strfile = 'fhtm.asp';
	}
	if (varin == 201) {
		strfile = 'fhtbm.asp';
	}
	if (varin == 202) {
		strfile = 'fhtnpc.asp';
	}
	if (varin == 203) {
		strfile = 'fhtia.asp';
	}
	if (varin == 204) {
		strfile = 'fhmnpc.asp';
	}
	if (varin == 205) {
		strfile = 'fhminions.asp';
	}
	if (varin == 210) {
		strfile = 'fhspells.asp';
	}
	if (varin == 211) {
		strfile = 'fhstyles.asp';
	}
	if (varin == 212) {
		strfile = 'fhspellse.asp';
	}
	if (varin == 213) {
		strfile = 'fhstylese.asp';
	}
	if (varin == 214) {
		strfile = 'mapr.asp';
	}
	if (varin == 215) {
		strfile = 'mapi.asp';
	}
	if (varin == 216) {
		strfile = 'fhqueue.asp';
	}
	if (varin == 206) {
		strfile = 'fhduel.asp';
	}
	if (varin == 217) {
		strfile = 'fhinscribe.asp';
	}
	if (varin == 218) {
		strfile = 'fhtrap.asp';
	}
	if (varin == 276) {
		strfile = 'fhgrenade.asp';
	}
	if (varin == 219) {
		strfile = 'worldmap.asp';
	}
	if (varin == 220) {
		strfile = 'fhvalue.asp';
	}
	if (varin == 221) {
		strfile = 'fhIFlag.asp';
	}
	if (varin == 222) {
		strfile = 'fhIDrop.asp';
	}
	if (varin == 223) {
		strfile = 'fhdis.asp';
	}
	if (varin == 224) {
		strfile = 'fheat.asp';
	}
	if (varin == 225) {
		strfile = 'fhsplit.asp';
	}
	if (varin == 226) {
		strfile = 'fhstack.asp';
	}
	if (varin == 227) {
		strfile = 'fhunlock.asp';
	}
	if (varin == 228) {
		InWin.replace('fhdisg.asp?Type=0');
		PFING = 0;
		return 0;
	}
	if (varin == 230) {
		InWin.replace('fhrest.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 231) {
		InWin.replace('fhmip.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 232) {
		InWin.replace('fhoption.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 233) {
		InWin.replace('fhals.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 234) {
		InWin.replace('fhtransmogrify.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 235) {
		InWin.replace('fhequip.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 236) {
		InWin.replace('fhmp.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 237) {
		InWin.replace('fhemote.asp?CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 238) {
		InWin.replace('fhtransmogrify.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 240) {
		InWin.replace('fhtrans.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 241) {
		strfile = 'fhtileinfo.asp';
	}
	if (varin == 242) {
		strfile = 'fhtracko.asp';
	}
	if (varin == 243) {
		InWin.replace('fhconf.asp?CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 244) {
		strfile = 'fhtif.asp';
	}
	if (varin == 245) {
		InWin.replace('fhtransform.asp?Type=0');
		PFING = 0;
		return 0;
	}
	if (varin == 246) {
		strword = 'Trade';
		strfile = 'fhtradep.asp';
	}
	if (varin == 247) {
		window.top.TrackMe('INSECT');
		PFING = 0;
		return 0;
	}
	if (varin == 248) {
		window.top.TrackMe('PLANTS');
		PFING = 0;
		return 0;
	}
	if (varin == 249) {
		strfile = 'maptd.asp';
	}
	if (varin == 250) {
		strfile = 'fharch.asp';
	}
	if (varin == 251) {
		strfile = 'fhsubterfuge.asp';
	}
	if (varin == 252) {
		strfile = 'fhpoison.asp';
	}
	if (varin == 253) {
		strfile = 'fhispells.asp';
	}
	if (varin == 254) {
		strfile = 'fhidentify.asp';
	}
	if (varin == 255) {
		strfile = 'fhinspect.asp';
		window.open('fhinspect.asp?CharsAt=' + id, 'gdw', 'width=615, height=395,status=no,toolbar=no,menubar=no,location=no');
		PFING = 0;
		return 0;
	}
	if (varin == 256) {
		strfile = 'fhnavyfight.asp';
	}
	if (varin == 257) {
		strfile = 'fhsignal.asp';
	}
	if (varin == 258) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?o=1&other=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 259) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?o=2&other=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 260) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?o=3&other=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 266) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?o=6&other=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 267) {
		InWin.replace('fhbejewel.asp');
		PFING = 0;
		return 0;
	}
	if (varin == 268) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?o=7&other=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 269) {
		strfile = 'fhtransform.asp';
	}
	if (varin == 270) {
		strfile = 'fhdeception.asp';
	}
	if (varin == 271) {
		strfile = 'fhtb.asp';
	}
	if (varin == 272) {
		strfile = 'fhminionsd.asp';
	}
	if (varin == 273) {
		strfile = 'fhbreed.asp';
	}
	if (varin == 274) {
		strfile = 'fhbreedi.asp';
	}
	if (varin == 275) {
		strfile = 'fhbreedp.asp';
	}
	if (varin == 261) {
		InWin.replace('fhtradev.asp?CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 262) {
		InWin.replace('gmev2.asp?CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 263) {
		strfile = 'fhvm.asp';
	}
	if (varin == 264) {
		strfile = 'fhtalkspecial.asp';
	}
	if (varin == 265) {
		strfile = 'fhcraft.asp';
	}
	if (varin == 207) {
		InWin.replace('fhbsm.asp?Special=1&CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 75) {
		strfile = 'fhstat.asp';
	}
	if (varin == 76) {
		InWin.replace('fhstat.asp?ID=-1');
		PFING = 0;
		return 0;
	}
	if (varin == 77) {
		InWin.replace('fhfriend.asp?Type=6&ID=1');
		PFING = 0;
		return 0;
	}
	if (varin == 86) {
		strfile = 'fhfav.asp';
	}
	if (varin == 87) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?Mark=1');
		PFING = 0;
		return 0;
	}

	if (varin == 130) {
		strfile = 'fhfeature.asp';
	}
	if (varin == 129) {
		strfile = 'fhan.asp';
	}
	if (varin == 88) {
		strfile = 'fhpor.asp';
	}
	if (varin == 89) {
		strfile = 'fhcharc.asp';
	}
	if (varin == 90) {
		strfile = 'fhreveal.asp';
	}
	if (varin == 91) {
		strfile = 'fhrevealb.asp';
	}
	if (varin == 92) {
		strfile = 'fhder.asp';
	}

	if (varin == 119) {
		InWin.replace('fhuse.asp?InventoryItemID=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 120) {
		InWin.replace('fhequip.asp?InventoryItemID=0&CharsAt=0&ItemTypeID=' + id);
		PFING = 0;
		return 0;
	}
	if (varin >= 500) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?GRID=' + (varin - 99))
		PFING = 0;
		return 0;
	}
	if (varin == 84) {
		strfile = 'gmEIS.asp';
	}
	if (varin == 94) {
		strfile = 'gmEB.asp';
	}
	if (varin == 127) {
		strfile = 'fhaut.asp';
	}
	if (varin == 128) {
		strfile = 'fhbug.asp?url=' + window.top.Interface.location.href;
	}
	if (varin == 126) {
		InWin.replace('gmEB.asp?Mask=' + id + '');
		PFING = 0;
		return 0;
	}
	if (varin == 96) {
		InWin.replace('fhblm.asp?CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 97) {
		InWin.replace('fhblm.asp?Special=10&CharsAt=' + id);
		PFING = 0;
		return 0;
	}
	if (varin == 98) {
		strfile = 'fhEDS.asp';
	}
	if (varin == 99) {
		strfile = 'fhEDR.asp';
	}
	if (varin == 106) {
		strfile = 'fhEDF.asp';
	}
	if (varin == 107) {
		strfile = 'fhEDT.asp';
	}
	if (varin == 108) {
		strfile = 'fhEDMSG.asp';
	}
	if (varin == 101) {
		strfile = 'fhmess.asp';
	}
	if (varin == 110) {
		strfile = 'fhmessv.asp';
	}
	if (varin == 115) {
		InWin = window.top.Ninja.location;
		InWin.replace('fh.asp?R=' + rand(99));
		PFING = 0;
		return 0;
	}
	if (varin == 116) {
		//Manage Tile
		strfile = 'fhtm.asp';
	}
	if (varin == 117) {
		//Manage Tile
		strfile = 'fhtbm.asp';
	}
	if (varin == 102) {
		strfile = 'fhcapf.asp';
	}
	if (varin == 103) {
		strfile = 'fhaup2.asp';
	}
	if (varin == 95) {
		strfile = 'gmSpeak.asp';
	}
	if (varin == 78) {
		strfile = 'fhmlm.asp';
	}
	if (varin == 280) {
		InWin.replace('fhbblesscurse.asp?CharsAt=' + id + '');
		PFING = 0;
		return 0;
	}
	if (varin < 0) {
		if (varin == -1) {
			InWin.replace(FHSP + 'fhinvm.asp');
			PFING = 0;
			return 0;
		} else if (varin == -68) {
			InWin.replace(FHSP + 'fhtb.asp');
			PFING = 0;
			return 0;
		} else {
			InWin.replace(FHSP + 'fhinv.asp?InventoryItemID=1&ItemTypeID=' + Math.abs(varin));
			PFING = 0;
			return 0;
		}
	}
	if (!strfile) {
		throw new Error(`Could not find strfile for PF(${id}, ${varin})`);
	}

	if (strword == '') {
		InWin.replace('' + (strfile.indexOf('?') != -1 ? '' + strfile + '&' : '' + strfile + '?') + 'CharsAt=' + id);
	} else {
		if (strfile.indexOf('hres.asp') != -1) {
			InWin.replace('' + strfile + '?Action=' + strword + '&CharsAt=' + id);
		} else {
			InWin.replace('' + strfile + '?wiaction=Something&What=' + strword + '&CharsAt=' + id);
		}
	}
	PFING = 0;
}

function dbg(where) {
	window.top.Interface.location.replace(where);
}
