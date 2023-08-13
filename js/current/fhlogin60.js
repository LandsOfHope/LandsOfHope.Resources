var isCtrl = false;
var isAlt = false;
var ImprovedMouse = 1;
var ArrowMove = 1;
var PlotLevels = 0;
var LastMonsterID = -1;
var LevelMap = 0;
var Quick = new Array()
var MyCN = '';
var fullx = 38;
var fully = 28;
var LastL1 = '';
var LastTN = '';
var LastL2 = '';
var LastPlotURL = '';
var LastPlotTimer = -1;
var SR = SR;
var ALG = 0;
var SH = 1;
var ME = ME;
var MH = 1;
var TR = 1;
var DA = DA;
var DA2 = DA2;
var DA3 = DA3;
var Proffy = Pr;
var CUF = 0;
var LastVessel = '';
var FHVC = 0;
var LastSelectedVessel = -1;
var Vessels = new Array();

var popupmenu = -1;
var NPCsShown = 1;
var PlayersShown = 1;
var PetsShown = 0;
var BuildingsShown = 1;
var FHIC = 0;
var FHHC = 0;
var FHCC = 0;
var FHBC = 0;
var Ded = 0;
var DoingStuff = 0;
var fogon = 1;
var CurrentMapID = 0;
var titleshow = -1;
var CurrentBuildingID = 0;
var movetime = 0;
var Deaded = 0;
var lastmenuid = 0;
var lastmail = 0;
var scriptreload = 0;
var SystemUser = SystemUser;
var FHIP = FHIP;
var TileName = '';
var LeaveChannel = '';
var swx = 800;
var shx = 600;
var FHIPI = FHIP + 'i/';
var FHIPH = FHIP + 'h/';
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';
var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
var FHIPP = FHIPP;
var hp = 0;
var maxhp = 0;
var mana = 0;
var maxmana = 0;
var ex = 0;
var maxex = 0;
var stam = 0;
var maxstam = 0;
var MapStartX = 0;
var MapStartY = 0;
var LastMapX = 0;
var LastMapY = 0;
var LastBX = 0;
var LastBY = 0;
var LastBZ = 0;
var LastBuildingID = 0;
var Menu = 0;
var counter = 0;
var Menus = new Array();
var Games = new Array();
var Chars = new Array();
var Buildings = new Array();
var Items = new Array();
var Hands = new Array();
var Macros = new Array(19);

Menus[1] = new Array();
Menus[2] = new Array();
Menus[3] = new Array();
Menus[4] = new Array();
var Mapz = new Array(100);
var Bz = new Array(50);

if (parseInt(navigator.appVersion) > 3) {
	swx = screen.width;
	shx = screen.height;
}
else if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 3 && navigator.javaEnabled()) {
	var jToolkit = java.awt.Toolkit.getDefaultToolkit();
	var jScreenSize = jToolkit.getScreenSize();
	swx = jScreenSize.width;
	shx = jScreenSize.height;
}

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

function gMenu(GameID, GameName, GameAbbv) {
	this.GameID = GameID;
	this.GameName = GameName;
	this.GameAbbv = GameAbbv;
}

function AG(GameID, GameName, GameAbbv) {
	if (Games[GameID] == null) {
		Games[GameID] = new Array();
		Games[GameID] = new gMenu(GameID, GameName, GameAbbv);
	} else {
		Games[GameID].GameID = GameID
		Games[GameID].GameName = GameName
		Games[GameID].GameAbbv = GameAbbv
	}
}


function tgl(MenuNum, Menin) {
	if (getObj(MenuNum).innerHTML == '') {
		if (MenuNum == 'Spells') {
			DrawPMenu(Menin, MenuNum);
		} else {
			DrawMenu(Menin, MenuNum);
		}
	}
	else {
		getObj(MenuNum).innerHTML = '';
	}
}

function DrawMenu(MenuNum, DivIn) {
	var strout = '';
	var y = 0;
	for (y = 0; y < Menus[MenuNum].length; y++) {
		strout = strout + Menus[MenuNum][y];
	}
	if (getObj(DivIn) == null) {
	}
	else {
		getObj(DivIn).innerHTML = '<table width=\'100%\' cellpadding=1 cellspacing=0>' + (MenuNum == 2 ? '<tr>' + strout + '</tr>' : strout) + '</table>';
	}
}

function DrawMMenu(MenuNum, DivIn, PageNum) {
	var strout = '';
	var strFill = '<div class="tbtn" style="float: left; color: #ff6666; width: 30px;height: 30px; margin: 0px; padding: 0px;" id="Macrox" title="Empty Button" onmouseover="this.className = \'tbtn btnhov\'; window.top.InfoTip(\'\',\'Empty shortcut button\');" onmouseout="this.className = \'tbtn\'" onclick="window.top.Interface.location.replace(\'fhmacro.asp\');">';
	var strFill2 = '</div>';
	var y = 0;
	var mmax = 0;
	var mmin = 0;
	mmin = ((PageNum * 10) - 10);

	if (Menus[MenuNum].length <= (PageNum * 10)) {
		mmax = Menus[MenuNum].length
	} else {
		mmax = PageNum * 10
	}
	mmax = mmin + 20;

	for (y = mmin; y < mmax; y++) {
		var charx = (y >= 10 ? String.fromCharCode(((y - 10) + 65)) : y);
		if (Menus[MenuNum][y] == null) {
			strout = strout + strFill + charx + strFill2;
		} else {
			strout = strout + Menus[MenuNum][y];
		}
	}

	for (y = mmax; y < mmin + 20; y++) {
		var charx = (y >= 10 ? String.fromCharCode(((y - 10) + 65)) : y);
		strout = strout + strFill + charx + strFill2;
	}

	if (getObj(DivIn) == null) {
	} else {

		getObj(DivIn).innerHTML = '' + strout + '<div id=Hand1 style="float: left; height: 30; width: 30px;"></div><div id=Hand2 style="float: left; height: 30; width: 30px;"></div><div id=Hand3 style="float: left; height: 30; width: 30px;"></div>';

	}
}

function DrawPMenu(MenuNum, DivIn) {
	var strout = '<tr>';
	var pp = 0;
	var y = 0;
	for (y = 0; y < Menus[MenuNum].length; y++) {

		strout = strout + Menus[MenuNum][y];
		pp = pp + 1
	}
	if (getObj(DivIn) == null) {
	} else {
		getObj(DivIn).innerHTML = '<table width=\'100%\' id=\'hpm' + MenuNum + '\' cellpadding=0 cellspacing=1>' + strout + '<td width=\'' + ((10 - pp) * 20) + '\'></td></tr></table>';
	}
}

function DisableInterface() {
	var wtt = window.top;
	wtt.spellcounter = 0;
	wtt.Spells.length = 0;
	wtt.DrawSpells;

	if (window.top.getObj('Map2') != null) {
		window.top.getObj('Map2').innerHTML = '';
	}
	if (window.top.getObj('Map3') != null) {
		window.top.getObj('Map3').innerHTML = '';
	}

}

function ReM(slot) {
	getObj('Macro' + slot).style.backgroundColor = '';
	getObj('Macro' + slot).style.border = '1px solid #333333';
	if (Macros[slot] != 0) {
		clearTimeout(Macros[slot]);
		Macros[slot] = 0;
	}
}

function Maccy() {
	Menu = 2;
	counter = 0;
	Menus[Menu] = new Array;
}

function DoMove(md) {
	var movenow = new Date();
	var dmok = 0;
	var mt = 0;
	if (movenow.getTime() - 1000 >= window.top.movetime) {
		dmok = 1
	}

	if (md >= 37 && md <= 40 && window.top.STUCK == 0 && dmok == 1) {
		window.top.movetime = movenow.getTime();

		if (window.top.BuildingID != 0) {
			mt = 1;
		}

		// mt = 1 ' Building, mt = 0 'Map


		var y = my;
		var x = mx;
		if (mt == 0) {
			x = (LastMapX);
			y = (LastMapY);
		}
		var z = mz;
		var p = 0;
		var e = 0;
		//This is the current tile
		if (md == 37) {
			// Left Arrow
			if (mt == 1) {
				if (Bz[x - 1] != null) {
					if (Bz[x - 1][y][z] != null) {
						if (Bz[x - 1][y][z].nm == 0 && Bz[x - 1][y][z].Hidden == 0) {
							x = x - 1;
							MBg(Bz[x][y][z].BuildingID, x, y, Bz[x][y][z].Go2B, 0, mz);
						}
					}
				}
			} else {
				if (Mapz[x - 1] != null) {
					if (Mapz[x - 1][y] != null) {
						x = x - 1;
						MM(Mapz[x][y].MapX, Mapz[x][y].MapY);
					}
				}
			}
		} else if (md == 38) {
			// Up Arrow
			if (mt == 1) {
				if (Bz[x][y - 1][z] != null) {
					if (Bz[x][y - 1][z].nm == 0 && Bz[x][y - 1][z].Hidden == 0) {
						y = y - 1;
						MBg(Bz[x][y][z].BuildingID, x, y, Bz[x][y][z].Go2B, 0, mz);
					}
				}
			} else {
				if (Mapz[x][y - 1] != null) {
					y = y - 1;
					MM(Mapz[x][y].MapX, Mapz[x][y].MapY);
				}
			}
		} else if (md == 39) {
			// Right Arrow
			if (mt == 1) {
				if (Bz[x + 1] != null) {
					if (Bz[x + 1][y] != null) {
						if (Bz[x + 1][y][z].nm == 0 && Bz[x + 1][y][z].Hidden == 0) {
							x = x + 1;
							MBg(Bz[x][y][z].BuildingID, x, y, Bz[x][y][z].Go2B, 0, mz);
						}
					}
				}
			} else {
				if (Mapz[x + 1] != null) {
					if (Mapz[x + 1][y] != null) {
						x = x + 1;
						MM(Mapz[x][y].MapX, Mapz[x][y].MapY);
					}
				}
			}
		} else if (md == 40) {
			// Down Arrow
			if (mt == 1) {
				if (Bz[x][y + 1] != null) {
					if (Bz[x][y + 1][z].nm == 0 && Bz[x][y + 1][z].Hidden == 0) {
						y = y + 1;
						MBg(Bz[x][y][z].BuildingID, x, y, Bz[x][y][z].Go2B, 0, mz);
					}
				}
			} else {
				if (Mapz[x][y + 1] != null) {
					y = y + 1;
					MM(Mapz[x][y].MapX, Mapz[x][y].MapY);
				}
			}
		}
	}
	return false;

}

function DoMacroOff(e) {
	e = e || window.event;
	var r = true
	if (e != null) {
		var k = e.keyCode;
		if (k == 17) isCtrl = false;
		if (k == 18) isAlt = false;
	}
}

function ToggleDragResize() {
	var r = (dragresize.enabled == true ? false : true);
	dragresize.enabled = r;
	window.top.SendCommand('Window Resizing turned ' + (r == true ? 'on' : 'off'));
}

function TogglePlotLevels() {
	var r = (PlotLevels == true ? false : true);
	PlotLevels = r;
	SaveWindows();
	window.top.SendCommand('Marker Levels turned ' + (r == true ? 'on' : 'off'));
}

function ToggleArrowMove() {
	var r = (ArrowMove == true ? false : true);
	ArrowMove = r;
	SaveWindows();
	window.top.SendCommand('Arrow Key movement turned ' + (r == true ? 'on' : 'off'));
}

function ToggleImprovedMouse() {
	var r = (ImprovedMouse == true ? false : true);
	ImprovedMouse = r;
	SaveWindows();
	window.top.SendCommand('Improved mouse turned ' + (r == true ? 'on' : 'off'));
}

function DoMacro(e) {
	e = e || window.event;
	var r = true
	if (e != null) {
		var k = e.keyCode;
		if (k == 17) isCtrl = true;
		if (k == 18) isAlt = true;

		if (e.altKey != null) {
			isAlt = e.altKey;
		}

		if (k == 27) {
			HideSubMenu(-4);
			getObj('Compass').style.display = 'none';
			window.top.HM3(0, 0, 0);
			e.returnValue = false;
			r = false;
		} else if (k == 113) { //f2
			if (getObj('message') != null) {
				getObj('message').focus();
			}
		} else if (k == 82 && isAlt != 0) { //Alt + R
			ToggleDragResize();
			isAlt = false;
		} else if (k == 77 && isAlt != 0) { //Alt + M
			TogglePlotLevels();
			isAlt = false;
		} else if (k == 78 && isAlt != 0) { //Alt + N
			ToggleArrowMove();
			isAlt = false;
		} else if (k == 79 && isAlt != 0) { //Alt + O
			ToggleImprovedMouse();
			isAlt = false;
		} else if (k >= 37 && k <= 40 && ArrowMove == 1) {
			var dmk = k;
			e.returnValue = false;
			e.cancelBubble = true;
			window.top.DoMove(dmk)
		} else {
			var Slot = (k - 48);
			if ((Slot >= 0 && Slot < 10) && isAlt != 0) {
				if (window.top.getObj('Macro' + Slot) != null) {
					window.top.getObj('Macro' + Slot).onclick();
					e.returnValue = false;
					r = false;
				}
				isAlt = false;
			} else {
				var Slot = (k - 65);
				if ((Slot >= 0 && Slot < 10) && isAlt != 0) {
					Slot = Slot + 10;
					if (window.top.getObj('Macro' + Slot) != null) {
						window.top.getObj('Macro' + Slot).onclick();
						e.returnValue = false;
						r = false;
					}
					isAlt = false;
				}
			}
		}
	}
	return r;
}

function ASC(MType, Title, ID, Slot, PictureID, PP) {
	counter = Slot - 1;
	if (counter == 0) {
		Menus[Menu].length = 0;
		Menus[Menu] = new Array;
	}
	Menus[Menu][counter] = new Array();
	var Slot2 = Slot - 1;
	Macros[Slot2] = 0;
	var charx = (Slot2 >= 10 ? String.fromCharCode(((Slot2 - 10) + 65)) : Slot2);
	var charx2 = (Slot2 >= 10 ? 'Alt + ' + String.fromCharCode(((Slot2 - 10) + 65)) : 'Alt + ' + Slot2);
	Menus[Menu][counter] = '<div class="tbtn" style="float: left; color: ' + (Slot2 >= 10 ? 'gold' : '#66ff66') + '; font-weight: bold; width: 30px;height: 30px; padding: 0px; margin: 0px;' + (PictureID.length > 2 != '' ? 'background-image: URL(\'' + FHIP + PP + '/' + PictureID + '\');' : '') + 'background-repeat: no-repeat; background-position: bottom center;" id="Macro' + Slot2 + '" title="' + Title + ' (' + charx2 + ')" onmouseover="this.className=\'tbtn btnhov\'; window.top.InfoTip(\'\',\'' + 'Press ' + charx2 + ' or click this button to execute the ' + Title + ' shortcut\');" onmouseout="this.className=\'tbtn\'" onclick="if (window.top.Macros[' + Slot2 + '] == 0) {' + (Slot != 'M' ? 'Macros[' + Slot2 + '] = setTimeout(\'ReM(' + Slot2 + ')\', 1200);' : '') + (MType == 0 ? 'window.top.Interface.location.replace(\'fhuse.asp?InventoryItemID=' + ID + '&ItemTypeID=1\')' : (MType == 1 ? 'window.top.Interface.location.replace(\'fhspell3.asp?CharsAt=' + ID + '\')' : (MType == 5 ? 'window.top.Interface.location.replace(\'fhmac.asp?CharsAt=' + ID + '\')' : (MType == 2 || MType == 3 ? 'window.top.PF(0,' + ID + ')' : (MType == 3 ? 'window.PF(0,' + ID + ')' : (MType == 4 ? 'window.top.Interface.location.replace(\'fhmact.asp?CharsAt=' + ID + '\')' : (MType == 6 ? 'window.top.Interface.location.replace(\'fhmacp.asp?CharsAt=' + ID + '\')' : (MType == 7 ? 'window.top.Interface.location.replace(\'fhinv.asp?F=' + ID + '\')' : 'window.top.Interface.location.replace(\'fhMess.asp\')')))))))) + '}">' + ASCII(charx) + '</div>';

	counter = counter + 1;
}

function GetPerc(MaxP, CurP) {
	if (CurP <= 0) {
		return 0
	} else {
		if (CurP > MaxP) {
			return 100
		} else {
			return Math.floor((100 / MaxP) * CurP)
		}
	}

}

function GetPerc2(MaxP, CurP) {
	if (CurP <= 0) {
		return 0
	} else {
		if (CurP >= MaxP) {
			return 100
		} else {
			return Math.floor((100 / MaxP) * CurP)
		}
	}

}

function SetBars(inhp, inmaxhp, inmana, inmaxmana, inex, inmaxex, instam, inmaxstam) {
	if (inhp == 0 && inmaxhp == 0 && inmana == 0 && inmaxmana == 0 && instam == 0 && inmaxstam == 0) {
	} else {
		hp = inhp;
		maxhp = inmaxhp;
		mana = inmana;
		maxmana = inmaxmana;
		stam = instam;
		maxstam = inmaxstam;
	}
	ex = inex;
	maxex = inmaxex;
	LoadBars();
}

function LoadBars() {
	if (hp == 0 && maxhp == 0 && mana == 0 && maxmana == 0 && stam == 0 && maxstam == 0) {
	} else {
		var hpp = GetPerc(maxhp, hp)
		var hpt = GetPerc2(maxhp, hp) + '% health ' + hp + '/' + maxhp;
		var mpt = GetPerc2(maxmana, mana) + '% mana ' + mana + '/' + maxmana;
		var mpp = GetPerc(maxmana, mana)
		var spt = GetPerc2(maxstam, stam) + '% stamina ' + stam + '/' + maxstam;
		var spp = GetPerc(maxstam, stam)

		if (Deaded != 0) {
			window.top.getObj('hp1').innerHTML = PercentBoxSmallx(120, 100, 'bigred.png', "Dead");
			hpt = "Dead"
		} else {
			window.top.getObj('hp1').innerHTML = PercentBoxSmallx(120, hpp, 'bigred.png', hp + '/' + maxhp);
		}
		window.top.getObj('ma1').innerHTML = PercentBoxSmallx(120, mpp, 'bigblue.png', mana + '/' + maxmana);
		window.top.getObj('sp1').innerHTML = PercentBoxSmallx(120, spp, 'bigyellow.png', stam + '/' + maxstam);
		window.top.getObj('hp1').title = hpt;
		window.top.getObj('ma1').title = mpt;
		window.top.getObj('sp1').title = spt;

	}
	maxex = Math.round(maxex)
	ex = Math.round(ex)
	if (maxex == 55555555) {
		window.top.getObj('xp1').title = '';
		window.top.getObj('xp1').innerHTML = '';
	} else {
		var mpt = '';
		var tnl = 0;
		var xpt = '';
		if (ex > maxex) {
			var xpp = 100
			xpt = 'n/a'
			tnl = 'n/a';
		} else {
			var xpp = GetPerc(maxex, ex)
			xpt = GetPerc2(maxex, ex) + '% ' + ex + '/' + maxex
			tnl = maxex - ex + ' TNL';
		}
		window.top.getObj('xp1').innerHTML = PercentBoxSmall(190, xpp, 'bigorange.png', xpp + '%, ' + tnl);
		window.top.getObj('xp1').title = xpt;
	}
}

function PercentBoxR(PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return PercentBoxS(100, PercentValue, Color, caption);
}

function PercentBoxSmall(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return '<div style="width: ' + pwidth + 'px; height: 10px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 10px; position: static; background: URL(https://lohcdn.com/images/' + Color + (Color.indexOf('.') > 0 ? '' : '.gif') + ') repeat-x"><div class=perc style="position: absolute; width:' + pwidth + 'px;">' + caption + '</div></div></div>';
}

function PercentBoxSmallx(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return '<div style="width: ' + pwidth + 'px; height: 15px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + (Color.indexOf('.') > 0 ? '' : '.gif') + ') repeat-x"><div class=perc style="position: absolute; width:' + pwidth + 'px;">' + caption + '</div></div></div>';
}

function PercentBoxS(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return '<div style="width: ' + pwidth + 'px; height: 12px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 12px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc style="position: absolute; width:' + pwidth + 'px">' + caption + '</div></div></div>';
}

function SetMoney(mmin) {
	var m1 = BSGM2(mmin);
	var m2 = '';
	var mwidth = 160;
	m2 = BSGM3(mmin);
	window.top.getObj('Gold').innerHTML = "<table cellspacing=0 cellpadding=0 style='height: 12px; width: " + mwidth + "px; text-align: right' align=right><tr id=ts style=\"font-weight: normal\" class='weakcell'><td title=\"Money: " + m1 + "\">" + m2 + "</td></tr></table>";
}

function SetBounty(mmin) {
	if (mmin == 0) {
		window.top.getObj('Bounty').innerHTML = "";
	} else {
		var m1 = BSGM2(mmin);
		var m2 = '';
		var mwidth = 160;
		m2 = BSGM3(mmin);
		window.top.getObj('Bounty').innerHTML = "<table cellspacing=0 cellpadding=0 style='height: 12px; width: " + mwidth + "px; text-align: right' align=right><tr id=ts style=\"color: #ff6666; font-weight: normal\" class=\"weakcell\"><td title=\"Bounty: " + m1 + "\">" + m2 + "</td></tr></table>";
	}
}

function BSGM(mmin) {
	return BSGMX(mmin, 0);
}

function BSGMX(mmin, moneyformat) {
	var harhar = mmin;
	var m = Math.floor(harhar / 1000000)
	var g = Math.floor(harhar / 10000) - (m * 100)
	var s = Math.floor(harhar / 100) - Math.floor(((g * 100) + (m * 10000)))
	var b = Math.floor(harhar) - Math.floor(((s * 100) + (g * 10000) + (m * 1000000)))
	var strout = "";
	if (moneyformat == 0) {
		strout = "" + (m > 0 ? "<b>" + (m) + "</b>pp " : "") + (g > 0 ? "<b>" + (g) + "</b>gp " : "") + (s > 0 ? "<b>" + (s) + "</b>sp " : "") + (b >= 0 ? "<b>" + (b) + "</b>bp " : "");
	} else if (moneyformat == 3) {
		strout = "" + m + "<img width=10 height=10 src=\"" + FHIPO + "gkp.gif\" alt=\"pp\"> " + g + "<img width=10 height=10 src=\"" + FHIPO + "gp.gif\" alt=\"gp\"> " + s + "<img width=10 height=10 src=\"" + FHIPO + "sp.gif\" alt=\"sp\"> " + b + "<img width=10 height=10 src=\"" + FHIPO + "bp.gif\" alt=\"bp\">";
	} else {
		strout = "" + (m > 0 ? "" + (m) + "pp " : "") + (g > 0 ? "" + (g) + "gp " : "") + (s > 0 ? "" + (s) + "sp " : "") + (b >= 0 ? "" + (b) + "bp " : "");
	}
	return strout;
}

function BSGM3(mmin) {
	return BSGMX(mmin, 3);
}

function BSGM2(mmin) {
	return BSGMX(mmin, 1);
}

function PSGM(mmin) {
	return PSGMX(mmin, 0);
}

function PSGMX(mmin, moneyformat) {
	var harhar = mmin;
	var rt = 0;

	var m = Math.floor(harhar)

	var strout = "";
	if (moneyformat == 0) {
		strout = "<table class=\"weakercell\" cellpadding=0 cellspacing=0 style=\"padding-left:0px; width: 150px\"><tr><td style=\"border: 1px inset " + BORDER1 + "\" width=\"40\">" + addCommas(m) + "</td><td width=14><img src=\"game/pirate/c4.png\" title=\"Doubloons\"></td></tr></table>";
	} else {
		strout = "" + (m > 0 ? "" + addCommas(m) + "<img src=\"game/pirate/c4.png\" title=\"Doubloons\">" : "");
	}
	return strout;
}

function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function PSGM3(mmin) {
	return PSGMX(mmin, 3);
}

function PSGM2(mmin) {
	return PSGMX(mmin, 1);
}

function HSM(harhar) {
	var wholedays = Math.floor((harhar / 3600) / 24);
	var d = (Math.floor((harhar / 3600) / 24));
	var h = Math.floor((harhar / 3600) - (d * 24))
	var m = Math.floor((harhar / 60) - Math.floor((h * 60) + ((d * 24) * 60)))
	var s = Math.floor(harhar) - Math.floor((m * 60) + (h * 3600) + ((d * 24) * 3600))

	var strout = '' + (d > 0 ? '<b>' + (d) + '</b>d, ' : '') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 ? '<b>' + (m) + '</b>mins ' : '') + (s > 0 ? '<b>' + (s) + '</b>secs' : '');
	return strout;
}
function ShowStatusBars(PK, CharacterName, Allegiance, av, Dead, Visible, Jailed, MountedID, PosessedID, Following, Level, ProfessionID, RaceID, Bounty, GameID, pp, pp2, UnreadMail) {
	var strnew = '';
	var strnew2 = '';
	if (PK > 0) {
		strnew2 += "" + CharacterName + " - You have /pvp turned on.";
	} else {
		strnew2 += "" + CharacterName + "";
	}

	if (MountedID != 0) {
		if (pp2 == null) { pp2 = 'na.gif' };
		if (pp2 == '0') { pp2 = 'na.gif' };
		if (pp2 == '') { pp2 = 'na.gif' };
	} else {
		pp2 = "";
	}

	if (PosessedID > 0) {
		if (pp == null) { pp = '0' };
		if (pp == '0') { pp = 'na.gif' };
		if (pp == '') { pp = 'na.gif' };

	} else {
		pp = "";
	}

	if (Allegiance > 0) {
		var als = GetAImg(Allegiance);
		var alst = GetAName(Allegiance);
	} else {
		var als = FHIPO + 'p.gif';
		var alst = '';
	}

	strnew += "<table cellspacing=0 cellpadding=0 class='weakcell' style='width: 200px; padding-left: 0px'><tr><td colspan=4><b>" + ASCII(CharacterName, (PK > 0 ? 2 : 1)) + "</b></td></tr><tr><td " + (Visible != 0 && Dead == 0 ? " class='trans' onclick='javascript:PF(" + PosessedID + ", 76)'" : "") + " style=\"" + (Dead == 0 ? "background-image: URL(" + FHIPP + "); background-repeat: no-repeat;" : "") + " cursor: pointer; width: 40px; height: 40px;\" title=\"" + strnew2 + "\" align=center valign=center>" + (Dead != 0 ? "<img src='" + FHIP + "icons/dead.png' width=36 height=36>" : "") + "</td><td width=120 valign=top><table cellpadding=0 cellspacing=0 class='weakercell'>";
	MyCN = CharacterName;
	window.top.document.title = "" + CharacterName + " - " + TileName;

	if (Jailed > 0) {
		window.top.ASMX(1, 1, '-3', 'Jail Timer', '18', Jailed, 'fhstat.asp');
	}


	strnew += '<tr><td width=120><table class="weakercell" cellpadding=0 cellspacing=0><tr><td id=hp1>??</td></tr><tr><td id=ma1>??</td></tr><tr><td id=sp1>??</td></tr></table></td></tr>';

	strnew += "</table></td><td width='40'>" + (pp != "" ? "<img style=\"cursor:pointer;\" onclick=\"javascript:PF(" + PosessedID + ", 73)\" title=\"Possessed - Click to return to your body\" width=40 height=40 src='" + FHIPR + pp + "'>" : (pp2 != "" ? "<img width=40 height=40 src=\"" + FHIPR + pp2 + "\" onclick=\"javascript:PF(" + MountedID + ", 74)\" title=\"Mounted - Click to Dismount\" style=\"cursor:pointer;\">" : "")) + "</td></tr><tr><td valign=top width=160 colspan=3><table class='weakercell' cellpadding=0 cellspacing=0><tr><td id=xp1 colspan=2>??</td></tr><tr><td width='80'>" + (Dead != 0 ? "DEAD" : "Level: " + Level + " <img name=al1 src='" + als + "' title='" + alst + "' width=10 height=10>") + "</td><td>" + (UnreadMail != 0 ? "<img width=16 height=16 src='" + FHIP + 'icons/email.png' + "'  onclick=\"GetMessages();\" title=\"You have " + UnreadMail + " unread mail messages !\" style=\"cursor:pointer;\">" : "") + "</td></tr></table></td></tr></table>"
	window.top.getObj('CharInfo1').innerHTML = strnew;

	SetBounty(Bounty);
	LoadBars();
	lastmail = UnreadMail;
}

function GetMessages() {
	window.top.Interface.location.href = 'fhmess2.asp';
}


function LevelColor(curlevelx, maplevelx) {
	if (curlevelx < maplevelx - 2) {
		return "c2249983";
	} else if ((curlevelx >= maplevelx - 2) && (curlevelx <= maplevelx + 2)) {
		return "c5820911";
	} else if (curlevelx > maplevelx + 10) {
		return "c6381921";
	} else {
		return "c2651456";
	}
}

function LevelColor2(curlevelx, maplevelx) {
	if (curlevelx < maplevelx - 2) {
		return "red";
	} else if ((curlevelx >= maplevelx - 2) && (curlevelx <= maplevelx + 2)) {
		return "gold";
	} else if (curlevelx > maplevelx + 10) {
		return "grey";
	}
}

function ClearFloor(y, x) {
	var s = 0;
	for (s = 1; s <= 5; s++) {
		if (Bz[x] != null) {
			if (Bz[x][y] != null) {
				if (Bz[x][y][s] != null) {
					var m = Bz[x][y][s];
					if (m.Plot != '') {
						m.Plot = '';
						m.PlotInfo = new Array(2);
					}
				}
			}
		}
	}
}

function ClearPlots() {
	var y = 0;
	var x = 0;
	var xx = 0;
	var yy = 0;
	for (y = 1; y <= 100; y++) {
		yy = yy + 1;
		xx = 0;
		for (x = 1; x <= 100; x++) {
			xx = xx + 1;
			if (Mapz[x] != null) {
				if (Mapz[x][y] != null) {
					var m = Mapz[x][y];
					if (m.Plot != '') {
						m.Plot = '';
						m.PlotInfo = new Array(2);
					}
				}
			}
			if (yy <= 50 && xx <= 50) {
				ClearFloor(yy, xx);
			}
		}
	}

}

function LoadMap(lngwidth, isjailed, gbgcolor, lngtiles, deadx, xlevelmap, currentlevel) {
	var strmap = '';
	var y = 0;
	var x = 0;
	window.top.BuildingID = 0;

	strmap = "";
	var sx = mainx - parseInt((fullx / 2) - 1);
	var sy = mainy - parseInt((fully / 2) - 1);
	if (sx < 1) {
		sx = 1;
	}
	if (sy < 1) {
		sy = 1;
	}
	if (sy + fully > 100) {
		sy = 100 - fully;
	}
	if (sx + fullx > 100) {
		sx = 100 - fullx;
	}
	window.top.MapStartX = sx;
	window.top.MapStartY = sy;
	var plotting = new Array(200);
	var plotcounter = 0;
	var xx = 0;
	var yy = 0;
	var Plots = '';
	for (y = sy; y <= sy + fully; y++) {
		yy = yy + 1;
		xx = 0;
		for (x = sx; x <= sx + fullx; x++) {
			xx = xx + 1;
			if (Mapz[x] != null) {
				if (Mapz[x][y] != null) {
					var m = Mapz[x][y];
					strmap += "<div id=\"X" + m.MapX + "Y" + m.MapY + "\"";

					strmap += "class=\"c" + m.Color + "\" ";

					strmap += " style=\"position: absolute; left:" + ((xx - 1) * 20) + "; top:" + ((yy - 1) * 20) + "; width: 20; height: 20;\" ";


					if (m.Caption != '') {
						strmap += "onmouseover=\"InfoMap('" + m.Picture + "','" + m.ObjectM + "','" + m.Color + "','<b>" + m.Caption + "</b><br>X: " + m.MapX + " Y: " + m.MapY + "<br>Level: " + m.Level + "<br>" + (Math.abs(m.SafeZone) != 0 ? "<b>Safe Zone</b>" : "") + (m.PlotInfo[0] != null ? "<br><b>" + m.PlotInfo[0] + "</b><br>Level: " + m.PlotInfo[1] + ", Skill: " + (m.PlotInfo[1] * 5) : "") + "');\" onmouseout=\"hideTip();\"";
						if (m.Caption != '.' && isjailed == 0) {
							strmap += " onclick=\"MM(" + m.MapX + ", " + m.MapY + "); return false;\"";
						}
					}
					strmap += ">" + (m.Picture != "" ? "<div style=\"width: 20px; height: 20px; background-image: URL(" + FHIPM + m.Picture + ");\">" : "") + " " + (m.ObjectM != "" ? "<img src='" + FHIPM + m.ObjectM + "' width=20 height=20>" : "") + (m.Picture != "" ? "</div>" : "") + (LevelMap != 0 ? "<div style=\"width: 5px; height: 5px; position: relative; left:0; top:-10; background-color: " + LevelColor2(LevelMap, Math.abs(m.Level)) + "; border: 1px solid black;\"></div>" : "") + "</div>";
					if (m.PlotInfo[0] != null) {
						plotting[plotcounter] = new Array(2);
						plotting[plotcounter][0] = "<tr><td class=\"weakercell\" style=\"width: 190px; cursor: pointer; color: white;\" onclick=\"MM(" + m.MapX + ", " + m.MapY + "); return false;\"><b>" + m.PlotInfo[0] + "</b><br>Level: " + m.PlotInfo[1] + ", Skill: " + (m.PlotInfo[1] * 5) + "</td></tr>";
						plotting[plotcounter][1] = m.PlotInfo[1];
						//Plots = Plots + "<tr><td class=\"weakercell\" style=\"width: 190px; cursor: pointer; color: white;\" onclick=\"MM(" + m.MapX + ", " + m.MapY + "); return false;\"><b>" + m.PlotInfo[0] + "</b><br>Level: " + m.PlotInfo[1] + ", Skill: "  + (m.PlotInfo[1] * 5) + "</td></tr>";
						plotcounter++
					}

					strmap += (m.Plot != "" ? "<div " + (m.Caption != "" && m.Caption != "." && isjailed == 0 ? " onclick=\"MM(" + m.MapX + ", " + m.MapY + "); return false;\"" : "") + " style=\"width: 10px; height: 10px; position: absolute; left:" + ((xx - 1) * 20) + "; top:" + ((yy - 1) * 20) + ";\">" + m.Plot + "</div>" : "");
				}
			}
		}
	}
	strmap += ""
	getObj('Map2').style.display = '';
	getObj('Map3').style.display = '';
	if (getObj('PlotResults') != null) {
		if (plotcounter > 0) {
			plotting.sort(function (a, b) { a = a[1]; b = b[1]; return a == b ? 0 : (a < b ? 1 : -1) });
			for (y = 0; y < plotcounter; y++) {
				Plots += plotting[y][0];
			}
			getObj('PlotResults').innerHTML = '<table>' + Plots + '</table>';
		} else {
			getObj('PlotResults').innerHTML = '';
		}
	}
	return strmap;
}

function CB() {
	window.top.Bz.length = 0;
	window.top.Bz = new Array(50);
}

function TabButtons() {
	var strout = '';
	strout = '<table cellpadding=1 cellspacing=0 style=\'width: 190px;\'><tr><td>' + Adac('ShowElements();', 'World', '', 'buttonc', null, null, 'world.png') + '</td><td>' + Adac('ShowResourceChoice();', 'Resources', '', 'buttonc', null, null, 'asterisk_yellow.png') + '</td><td>' + Adac('ShowTrackRadar();', 'Track', '', 'buttonc', null, null, 'compass.png') + '</td><td>' + Adac('ShowTravelElements();', 'Travel', '', 'buttonc', null, null, 'map.png') + '</td><td>' + Adac('ShowCraftElements();', 'Craft', '', 'buttonc', null, null, 'wrench.png') + '</td><td>' + Adac('ShowQuestElements();', 'Quests', '', 'buttonc', null, null, 'cup_16.png') + '</td></tr></table>';
	getObj('tabs2').innerHTML = strout;
}

function Adac(Actions, Titles, Names, classx, imgx, fl, img2) {
	if (classx == null) {
		classx = "buttonc";
		imgx = "circle1b.png";
	}
	if (imgx == null) {
		imgx = "circle1b.png";
	}
	if (img2 == null) {
		img2 = '';
	}
	imgx = (fl != null ? 'float: left;' : '')
	return "<a class=\"" + classx + "\" style=\"" + imgx + "\" href=\"javascript:void(0);\"  onclick=\"" + Actions + ";\" title=\"" + Titles + "\">" + (img2 != "" ? "<div style=\"width: 28; height: 28; background-position: 5 5; " + (Actions != "" ? "cursor: pointer;" : "") + " background-image: url(https://lohcdn.com/game/icons/" + img2 + "); background-repeat: no-repeat;\">" + ASCII2(Names) + "</div>" : "<center>" + ASCII2(Names) + "</center>") + "</a>";
}

function getAColor(c) {
	var AC = '';
	if (c <= 1) {
		AC = 'white';
	} else {
		if (c == 2) {
			AC = '#00FF00';
		} else if (c == 3) {
			AC = '#FF0000';
		} else if (c == 4) {
			AC = 'yellow';
		} else if (c == 5) {
			AC = 'cyan';
		} else if (c == 6) {
			AC = 'gold';
		} else if (c == 7) {
			AC = '#CC66CC';
		} else if (c == 8) {
			AC = '#66FF99';
		} else if (c == 9) {
			AC = '#CC6600';
		} else if (c == 10) {
			AC = '#FF9900';
		} else if (c == 11) {
			AC = '#CCFF00';
		} else if (c == 12) {
			AC = '#9966FF';
		} else if (c == 13) {
			AC = '#FF80FF';
		} else if (c == 14) {
			AC = '#2BBFA6';
		} else if (c == 15) {
			AC = '#BE542C';
		}
	}
	return AC;
}

function getAColor2(c) {
	var AC = '';
	if (c <= 1) {
		AC = 'RGB(156, 140, 103)';
	} else {
		AC = 'RGB(153, 77, 46)';
	}
	return AC;
}

function ASCII(text, c, f, r) {

	return ASCII2(text, c, f, r);
}

function ASCII2(text, c, f, r, fw) {
	if (c == null) {
		//	c = 1;
	}
	if (r == null) {
		r = 0;
	}
	var strout = '';
	var x = 0;
	var p = 2;

	if (f == null) {
		f = '2';
	}

	//

	if (r == 0) {
		var c2 = getAColor(c);
		//class="word" 
		strout = '<span class="glow' + f + '" style="' + (fw != null ? 'font-size: ' + fw + 'pt;' : '') + (c != null ? 'color: ' + c2 : '') + ';">';
		strout += text;
		strout += '</span>';
	} else {
		if (text != null) {
			if (text.replace != null) {
				text = text.replace(/<br>/gi, "|");
			}
		}
		strout = '<span class="glow' + f + '">';
		for (x = 0; x < text.length; x++) {
			if (text.charAt(x) == "|") {
				strout += '<br>';
			} else if (text.charAt(x) == " ") {
				strout += ' ';
			} else {

				strout += '<span style="' + (fw != null ? 'font-size: ' + fw + 'pt;' : '') + 'color: ' + getAColor((r == -1 ? (rand(6) + 1) : p)) + '; padding-right: 1px;">' + text.charAt(x) + '</span>'
				p = p + 1;
				if (p > 15) {
					p = 2;
				}
			}
		}
		strout += '</span>';
	}
	return strout;
}

function LoadB(lngwidth, isjailed, lngcolx, lngtiles, tests, lngstartx, lngstarty, lngstartz, deadx) {
	var strmap = '';
	strmap = "";

	var strmap1 = '';
	var y = 0;
	var x = 0;
	var tmpbp = 0;
	var tmpbe = 0;
	var strImgb1 = '';
	var strImgb2 = '';
	var sx = mainx - parseInt((fullx / 2) - 1);
	var sy = mainy - parseInt((fully / 2) - 1);

	if (sx < 1) {
		sx = 1;
	}
	if (sy < 1) {
		sy = 1;
	}
	if (sy + fully > 100) {
		sy = 100 - fully;
	}
	if (sx + fullx > 100) {
		sx = 100 - fullx;
	}
	window.top.MapStartX = sx;
	window.top.MapStartY = sy;
	window.top.LastBuildingID = 0;
	window.top.BuildingID = 0;
	var xx = 0;
	var yy = 0;
	fogon = 0;
	var hidefog = 0;
	for (y = sy; y <= sy + fully; y++) {
		tmpbe = 0;
		yy = yy + 1;
		xx = 0;
		for (x = sx; x <= (sx + fullx); x++) {
			xx = xx + 1;
			var b = null;
			if (Bz[x] != null) {
				if (Bz[x][y] != null) {
					var b = Bz[x][y][window.top.mainz];
				}
			}
			if (b != null) {
				if (b.Dungeon != 0) {
					fogon = 1;
				}
				if (b.Owner == mycharid && b.Dungeon != 0 && b.Dungeon != 3) {
					hidefog = 1;
				}
				if (b.floor == window.top.mainz) {
					strmap += "<div " + (b.Hidden != 0 ? " class=\"mapcolh\"" : " class=\"mapcolb\"") + " id=B" + b.BuildingID;

					if (b.Plot == '' && b.nc > 0) {
						b.Plot = '<img src=\"' + FHIPM + "nyou.gif" + '\" width=10 height=10>'
						b.PlotInfo[0] = "A place of Interest";
						b.PlotInfo[1] = 1;
					}

					if (b.nm == 0 || b.nm == 2) {
						strmap += " " + (b.nm == 0 ? "style=\"position: absolute; left:" + ((xx - 1) * 20) + "; top:" + ((yy - 1) * 20) + "; width: 20; height: 20;" + (b.visited > 0 ? "z-index: 1001;" : "") + "background-color: " + b.Color + ";cursor:pointer;\" onmouseover=\"InfoMap('" + b.Picture + "','" + b.ObjectM + "','" + b.Color + "','<b>" + b.Caption + "</b>" + (b.Hidden != 0 ? "<br>Stealth: " + b.Hidden : "") + "<br>X: " + x + " Y: " + y + " Floor: " + window.top.mainz + (b.PlotInfo[0] != null ? "<br><b>" + b.PlotInfo[0] + "</b><br>Level: " + b.PlotInfo[1] + ", Skill: " + (b.PlotInfo[1] * 5) : "") + "');\" onmouseout=\"hideTip();\" " : "style=\"position: absolute; left:" + ((xx - 1) * 20) + "; top:" + ((yy - 1) * 20) + "" + (b.visited > 0 ? "z-index: 1001;" : "") + "; width: 20; height: 20; background-color: " + b.Color + ";\" ");
					} else {
						strmap += " style=\"position: absolute; left:" + ((xx - 1) * 20) + "; top:" + ((yy - 1) * 20) + "; width: 20; height: 20;\" ";
					}

					if (isjailed == 0 && b.nm == 0) {
						strmap += " onclick=\"MBg(" + b.BuildingID + ", " + x + ", " + y + " , " + b.Go2B + ", " + tmpbp + ", " + tmpbe + ");\"";
					}

					strImgb1 = ""; // (b.nc > 0 ? FHIPM + "nyou.gif" : "");
					strImgb2 = "";

					if (b.ObjectM != "") {
						//if (b.nc > 0 ) {
						//	strImgb2= FHIPM + b.ObjectM;
						//	strImgb1 = FHIPM + "nyou.gif";
						//} else {
						strImgb1 = FHIPM + b.ObjectM;
						strImgb2 = "";
						//}
					}
					b.backimage = strImgb1
					b.foreimage = strImgb2

					strmap += ">" + (b.Picture != "" ? "<div style=\"width: 20px; height: 20px; background-image: URL(" + FHIPM + b.Picture + ");\">" : "") + (strImgb2 != "" ? "<img src='" + strImgb1 + "' style=\"background-image: URL('" + strImgb2 + "');\">" : (strImgb1 != "" ? "<img src='" + strImgb1 + "' width=20 height=20>" : "")) + (b.Picture != "" ? "</div>" : "") + "</div>";
					strmap += (b.Plot != "" ? "<div " + (isjailed == 0 && b.nm == 0 ? " onclick=\"MBg(" + b.BuildingID + ", " + x + ", " + y + " , " + b.Go2B + ", " + tmpbp + ", " + tmpbe + ");\"" : "") + " style=\"width: 10px; height: 10px; position: absolute; left:" + ((xx - 1) * 20) + "; top:" + ((yy - 1) * 20) + ";\">" + b.Plot + "</div>" : "");

				}
			}
			tmpbe = tmpbe + 1;
		}
		tmpbp = tmpbp + 1;
	}

	strmap += "<div id=fog style='position: absolute; left: 0px; top: 0px;z-index: 100; width: 780; height: 580; background-image: URL(https://lohcdn.com/images/fog4.png); background-color: transparent; background-repeat: repeat;background-Position:" + (((mx - window.top.MapStartX) * 20) - 110) + "px " + (((my - window.top.MapStartY) * 20) - 110) + "px;" + (fogon == 0 || hidefog == 1 ? "display: none;" : "") + "' onmousemove='Moving(event);' onclick='Clicking(event);'></div>";
	strmap = strmap1 + strmap;
	getObj('Map3').style.display = '';
	getObj('Map2').style.display = '';
	return strmap;
}

function Moving(e) {
	var evt = (window.event || e);
	if (e.pageX == null) {
		var x = e.clientX - 20;
		var y = e.clientY - 60;
	} else {
		var x = e.pageX - 20;
		var y = e.pageY - 60;
	}
	x = parseInt((x) / 20) + window.top.MapStartX;
	y = parseInt((y) / 20) + window.top.MapStartY;
	var bx = window.top.mx;
	var by = window.top.my;
	getObj('fog').style.cursor = '';
	if (window.top.Bz[x] != null) {
		if (window.top.Bz[x][y] != null) {
			if (((mx > x - 2 && mx < x + 2) && my == y) || ((my > y - 2 && my < y + 2)) && mx == x) {
				var b = window.top.Bz[x][y][window.top.mz];
				if (b != null) {
					if (b.nm == 0) {
						InfoMap(b.Picture, b.ObjectM, b.Color, '<b>' + b.Caption + '</b>' + (b.Hidden != 0 ? '<br>Stealth: ' + b.Hidden : '') + '<br>X: ' + x + ' Y: ' + y + ' Floor: ' + window.top.mz + '<br><b>' + (b.PlotInfo[0] != null ? b.PlotInfo[0] + '</b><br>Level: ' + b.PlotInfo[1] + ', Skill: ' + (b.PlotInfo[1] * 5) : ''));
						getObj('fog').style.cursor = 'pointer';
					}
				}
			}
		}
	}
}

function Clicking(e) {
	var evt = (window.event || e);
	if (e.pageX == null) {
		var x = e.clientX - 20;
		var y = e.clientY - 60;
	} else {
		var x = e.pageX - 20;
		var y = e.pageY - 60;
	}
	x = parseInt((x) / 20) + window.top.MapStartX;
	y = parseInt((y) / 20) + window.top.MapStartY;
	var bx = window.top.mx;
	var by = window.top.my;

	if (window.top.Bz[x] != null) {
		if (window.top.Bz[x][y] != null) {
			if (((mx > x - 2 && mx < x + 2) && my == y) || ((my > y - 2 && my < y + 2)) && mx == x) {
				var b = window.top.Bz[x][y][window.top.mz];
				if (b != null) {
					if (b.nm == 0) {
						MBg(b.BuildingID, x, y, b.Go2B, 0, 0);
					} else {
					}
				}
			}
		}
	}
}

function ShowInterface() {
	window.top.getObj('framediv').style.display = '';
}

function HideInterface() {
	window.top.getObj('framediv').style.display = 'none';
}

function Die() {
	if (Deaded == 0) {
		Deaded = 1
		LoadBars();
	}
}

function UnDie() {
	if (Deaded == 1) {
		Deaded = 0;
		LoadBars();
	}
}

function SetMainTitle(t) {
	var m = window.top.getObj('MainTitle');
	m.innerHTML = t;
	m.style.display = '';
	window.top.TileName = t;
	window.top.document.title = "" + MyCN + " - " + t;
	clearTimeout(titleshow);
	titleshow = setTimeout(HideTitle, 5000);
}

function HideTitle() {
	var m = window.top.getObj('MainTitle');
	m.style.display = 'none';
}


function O(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function B(v) {
	clearTimeout(popupmenu);
	var Ded2 = Ded;
	var DA2 = 0;
	if (Ded2 == null) { Ded2 = 0; }
	if (DA2 == null) { DA2 = 0; }

	if (DA2 == 1 && DoingStuff == 0 && Ded2 == 0 && Buildings[v].s == 1) {
		DoingStuff = 1;
		PF(Buildings[v].v, 57);
	} else {
		if (DoingStuff == 0) {
			DoingStuff = 1;
			PF(Buildings[v].v, 51)
		}
	}
}

function BB_m(v, e) {
	e = e || window.event;
	if (e.button != null) {
		if (e.button == 2) {
			BC_popup(v);
			return false;
		} else {
			B(v);
		}
	} else {
		B(v);
	}
}

function ToggleTransparency(din) {
	var d = getObj(din);
	if (d != null) {
		if (d.style.opacity == null) {
			if ('' + d.style.filter == '') {
				d.style.filter = 'alpha(opacity=50);';
			} else {
				d.style.filter = '';
			}
		} else {
			if ('' + d.style.opacity == '') {
				d.style.opacity = '0.5';
			} else {
				d.style.opacity = '';
			}
		}
	}
}

function BC(v) {
	if (DoingStuff == 0) {
		getObj('B' + v).style.cursor = 'pointer';
		getObj('B' + v).style.backgroundColor = BGCOLOR_S
		var LastBuilding = Buildings[v].Itty;
		window.top.InfoTip(FHIPB + Buildings[v].p2, '<font style="color: ' + Buildings[v].Color + '"><b>' + Buildings[v].Itty + '</b></font>' + (Buildings[v].n != 0 ? '<Br><i>NPC Owned</i>' : '<Br><i>Player Owned<br>') + (Math.abs(Buildings[v].a) == 0 ? '' : '<br>' + GetAName(Buildings[v].a)) + '<br>' + (Buildings[v].s == 1 ? 'Siegeable' : '') + (Buildings[v].l != 0 ? '<br>Need a key or be on the Friends list to enter' + (Buildings[v].s == 1 ? ' or you can siege it.' : '') : '<br>Click on the Building to enter'))

		HideSubMenu(-4);
		clearTimeout(popupmenu);
	} else {
		HideSubMenu(-4);
	}
}


function OptionCogMenu() {
	AddButton(-4, 'Text', 'Text', 'Picture');
	AddSubMenu(-4, 'Toggle Resize (Alt + R)', '', '', 'ToggleDragResize();');
	AddSubMenu(-4, 'Toggle Arrow Keys (Alt + N)', '', '', 'ToggleArrowMove();');
	AddSubMenu(-4, 'Mouse Sticky Features (Alt + O)', '', '', 'ToggleImprovedMouse();');
	AddSubMenu(-4, 'Toggle Resource Levels (Alt + M)', '', '', 'TogglePlotLevels();FinishMap();');
	AddSubMenu(-4, 'RESET WINDOW POSITION', '', '', 'getObj(\'WindowSize\').value = \'alert("Your Interface window positions have been reset. You should now reposition your window elements using Alt + R.");\';alert(\'Please wait a few seconds, then refresh your game window using F5 (browser specific) or click the game Time indicator at the top of the screen.\');');
	AddSubMenu(-4, 'SAVE WINDOW POSITION', '', '', 'window.top.SaveWindows();');
	AddSubMenu(-4, 'Large Map Size', '', '', 'window.top.fullx = 38; window.top.fully = 28;RefreshAll();MapResizeCheck();');
	AddSubMenu(-4, 'Medium Map Size', '', '', 'window.top.fullx = (38 / 2); window.top.fully = (28 / 2) - 1;RefreshAll();MapResizeCheck();');
	AddSubMenu(-4, 'Small Map Size', '', '', 'window.top.fullx = 8; window.top.fully = 7;RefreshAll();MapResizeCheck();');

	AddSubMenu(-4, 'Options', '', '', 'window.top.Interface.location.replace(\'fhoption.asp\');');
	ShowSubMenu(-4, 'OptionCog', 0);
}


function BC_popup(v) {
	var b = Buildings[v];
	if (b != null) {
		AddButton(-4, 'Text', 'Text', 'Picture');
		AddSubMenu(-4, 'Enter', '', '', 'PF(' + b.v + ',51);');
		if (Math.abs(SR) == 20) {
			AddSubMenu(-4, 'Edit [GM]', '', '', 'PF(' + b.v + ',126);');
		}
		if (b.l == 2 && b.Color != '#5151dc') {
			AddSubMenu(-4, 'Pick Lock', '', '', 'PF(' + b.v + ',48);');
		}
		if (Math.abs(b.s == 1)) {
			AddSubMenu(-4, 'Siege', '', '', 'PF(' + b.v + ',57);');
		}
		if (b.n == 0) {
			if (TR != 0 && b.p != 'bgh.gif' && Buildings[v].n == 0 && Buildings[v].l > 0) {
				AddSubMenu(-4, 'Tinker', '', '', 'PF(' + b.v + ',28);');
			}
			if (b.Color == 'gold') {
				AddSubMenu(-4, 'Destroy', '', '', 'confirm("Are you sure you wish to destroy ' + b.Itty + '?", ' + b.v + ');');
			}
		}
		AddSubMenu(-4, 'Info', '', '', 'PF(' + b.v + ', 83);');

		ShowSubMenu(-4, 'aB' + v, 0);
	}
}

function I(v) {
	clearTimeout(popupmenu);
	if (DoingStuff == 0) {
		DoingStuff = 1;
		PF(Items[v].v, 60);
	}
}

function IU(v) {
	clearTimeout(popupmenu);
	if (DoingStuff == 0) {
		DoingStuff = 1;
		PF(Hands[v].v, 119);
	}
}

function IC(v) {
	if (DoingStuff == 0) {
		getObj('I' + v).style.cursor = 'pointer';
		getObj('I' + v).style.backgroundColor = BGCOLOR_S
		HideSubMenu(-4);
		clearTimeout(popupmenu);
		InfoTip(Items[v].p, '<b>' + Items[v].n + '</b></font><br>This item is on the ground at this location. Click on it to Interact with it.' + (Items[v].ml > 0 ? '<br>Level: ' + Items[v].ml + ' (' + Items[v].ml * 5 + ')' : '') + (Items[v].s != '' ? '<br>Stored:' + Items[v].s : '') + (Items[v].l != 0 ? '<br><b>Locked</b>' : '') + '' + (Items[v].d != '' ? '<br>' + Items[v].d : ''));

	} else {
		HideSubMenu(-4);
	}
}

function IC2(v) {
	if (DoingStuff == 0) {
		getObj('I' + v).style.cursor = 'pointer';
		getObj('I' + v).style.backgroundColor = BGCOLOR_S
		InfoTip(Items[v].p, '<b>' + Items[v].n + '</b>' + (Items[v].s != '' ? '<br>Stored:' + Items[v].s : '') + (Items[v].l != 0 ? '<br><b>Locked</b>' : '') + '' + (Items[v].d != '' ? '<br>' + Items[v].d : '<Br>Click item to use it'));

		HideSubMenu(-4);
		clearTimeout(popupmenu);
		popupmenu = setTimeout(() => IC2_popup(v), 1200);
	} else {
		HideSubMenu(-4);
	}
}

function IC2_popup(v) {
	var i = Items[v];
	if (i != null) {
		AddButton(-4, 'Text', 'Text', 'Picture');
		AddSubMenu(-4, 'Use', '', '', 'PF(' + i.v + ',60);');
		AddSubMenu(-4, 'Admin', '', '', 'PF(' + i.v + ',70);');
		AddSubMenu(-4, 'Secure', '', '', 'PF(' + i.v + ',47);');
		ShowSubMenu(-4, 'I' + v, 0);
	}
}

function IC3(v) {
	if (DoingStuff == 0) {
		getObj('HI' + v).style.cursor = 'pointer';
		getObj('HI' + v).style.backgroundColor = BGCOLOR_S

		InfoTip(FHIPI + Hands[v].p, '<b>' + Hands[v].n + '</b></font><br>This item is equipped to your <b>' + (Hands[v].l == 7 ? 'Left Hand' : (Hands[v].l == 8 ? 'Right Hand' : 'Ammo Slot')) + '</b>, use your Inventory > Equipment screen to change it.');
		HideSubMenu(-4);

	} else {
		HideSubMenu(-4);
	}
}

function IC3_popup(v) {
	var i = Items[v];
	if (i != null) {
		AddButton(-4, 'Text', 'Text', 'Picture');
		AddSubMenu(-4, 'Use', '', '', 'PF(' + i.v + ',119);');
		ShowSubMenu(-4, 'I' + v, 0);
	}
}

function VO(v) {
	getObj('V' + v).style.cursor = '';
	getObj('V' + v).style.backgroundColor = '';
}

function V(v) {
	clearTimeout(popupmenu);
	if (Vessels[v].vd == 0) {
		window.top.DoingStuff = 1;
		if (Vessels[v].nnpc == 1) {
			PF(Vessels[v].vid, 263)
		} else {
			if ((Vessels[v].a == CUF && CUF != 0) || Vessels[v].vcid > 0) {
				PF(Vessels[v].vcid, 101)
			} else {
				PF(Vessels[v].vid, 256)
			}
		}
	} else {
		//Target is dead
	}

}

function VV_m(v, e) {

	e = e || window.event;
	if (e.button != null) {
		if (e.button == 2) {
			VV_popup(v);
			return false;
		} else {
			V(v);
		}
	} else {
		V(v);
	}
}

function VV(v) {
	if (window.top.DoingStuff == 0) {
		LastSelectedVessel = v;
		var thev = Vessels[v];
		getObj('V' + v).style.cursor = 'pointer';
		getObj('V' + v).style.backgroundColor = BGCOLOR_S
		var ccol = thev.c;
		var isNPC = (thev.vcid <= 0 ? 1 : 0);

		HideSubMenu(-4);
		clearTimeout(popupmenu);

		LastVessel = thev.i;
		window.top.InfoTip(FHIPV + thev.p2, '<font color="' + ccol + '"><b>' + thev.i + '</b></font><br>Click on the vessel to initiate its default action, or use the Action buttons to trigger a specific one.' + (isNPC != 0 ? '' : ''))

	} else {
		HideSubMenu(-4);
	}
}

function VesselPicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("vpicker.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 180, PromptReturnV, null, title, pb);
}

function EmotePicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("vemote.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 180, PromptReturnV, null, title, pb);
}


function PromptReturnV(returnVal, pb) {
	var v = LastSelectedVessel;
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1 && v >= 0) {
				Processing = 1;
				window.top.Interface.location.replace('fhtradev.asp?ItemTypeID=' + returnVal + '&CharsAt=' + Vessels[v].vid);
			} else if (pb == -1) {
				v = LastSelectedCharacter;
				if (v >= 0) {
					Processing = 1;
					window.Ninja.location.replace('fh.asp?EmoteID=' + returnVal + '&other=' + Chars[v].v);
				}
			} else if (pb == 2 && v >= 0) {
				Processing = 1;
				window.Ninja.location.replace('fh.asp?o=-' + returnVal + '&other=' + Vessels[v].vid);
			}
		}
	}
}



function VV_popup(v) {
	var thev = Vessels[v];
	if (thev != null) {
		AddButton(-4, 'Text', 'Text', 'Picture');
		if (Math.abs(SR) == 20) {
			AddSubMenu(-4, 'Edit [GM]', '', '', 'PF(' + thev.vid + ',262);');
			AddSubMenu(-4, 'Trade [GM]', '', '', 'VesselPicker("Select the vessel to trade from:",1, null, "Trade From");');
		}
		if (thev.vcid != 0) {
			AddSubMenu(-4, 'Signal / Message', '', '', 'PF(' + thev.vcid + ',101);');
			AddSubMenu(-4, 'Emote', '', '', 'EmotePicker("Select the emote to send to ' + LastVessel + ':",2,null,"Emote ' + LastVessel + '");');
		}
		if (thev.nnpc == 1) {
			AddSubMenu(-4, 'Transfer Cargo', '', '', 'window.top.Interface.location.replace("fhcargo.asp?ItemTypeID=' + thev.vid + '");');
			AddSubMenu(-4, 'Manage', '', '', 'PF(' + thev.vid + ',263);');
		} else {
			if (thev.a == CUF && CUF != 0) {
				AddSubMenu(-4, 'Transfer Goods', '', '', 'VesselPicker("Select the vessel to trade from:",1, null, "Trade From");');
			}
		}
		if ((thev.a == CUF && CUF != 0) || thev.nnpc == 1 || thev.vcid > 0) {
		} else {
			if (Math.abs(thev.vd) == 0) {
				AddSubMenu(-4, 'Attack', '', '', 'PF(' + thev.vid + ',256);');
				AddSubMenu(-4, 'Sabotage', '', '', 'PF(' + thev.vid + ',259);');
			} else {
				AddSubMenu(-4, 'Scupper', '', '', 'PF(' + thev.vid + ',266);');
				AddSubMenu(-4, 'Plunder', '', '', 'PF(' + thev.vid + ',258);');
				if (thev.vb > 0) {
					AddSubMenu(-4, 'Impound', '', '', 'PF(' + thev.vid + ',260);');
				}
			}

		}
		AddSubMenu(-4, 'Inspect', '', '', 'PF(' + thev.vid + ',255);');
		ShowSubMenu(-4, 'aV' + v, 0);
	}
}


function C(v) {
	var c = window.top.Chars[v];

	clearTimeout(popupmenu);

	var Ded2 = Ded;
	if (Ded2 == null) { Ded2 = 0; }
	if (DA == null) { DA = 0; }
	if (DA3 == null) { DA3 = 0; }
	if ((DA != 0 || DA3 != 0) && window.top.DoingStuff == 0 && Ded2 == 0) {
		window.Interface.location.replace('fhda.asp?CharsAt=' + c.v);
	} else {

		if ((Ded2 != 0 && window.top.DoingStuff == 0) || c.d != 0) {
			window.top.DoingStuff = 1;
			PF(c.v, 4)
		} else if (window.top.DoingStuff == 0) {
			if ((((c.m == 0) && (c.k != -1)))) {
				window.top.DoingStuff = 1;
				PF(c.v, 4)
			}
			else {
				window.top.DoingStuff = 1;
				if (c.f >= 1) {
					PF(c.v, 79)
				} else {
					PF(c.v, 1)
				}
			}
		}
	}
}

function ClickMonster() {
	if (LastMonsterID >= 0) {
		C(LastMonsterID);
	}
}


function CC_m(v, e) {

	var c = window.top.Chars[v];
	e = e || window.event;
	if (e.button != null) {
		if (e.button == 2) {
			var isNPC = (c.Extra.indexOf('<b>') != -1 ? 1 : 0);
			if (isNPC != 0) {
				CCnpc_popup(v);
			} else {
				CC_popup(v);
			}
			return false;
		} else {
			C(v);
		}
	} else {
		C(v);
	}
}

function CC(v) {

	var c = window.top.Chars[v];
	if (window.top.DoingStuff == 0 && c) {
		getObj('C' + v).style.cursor = 'pointer';
		getObj('C' + v).style.backgroundColor = BGCOLOR_S
		var ccol = c.Color;
		var isNPC = (c.Extra.indexOf('<b>') != -1 ? 1 : 0);
		var Ded2 = Ded;
		if (Ded2 == null) { Ded2 = 0; }
		var strBasic = '<table height="92px" cellpadding=0 cellspacing=0 class="itemtext"><tr><td style="color: ' + ccol + '"><b>' + c.Itty + '</b></td></tr>'
		strBasic = strBasic + '<tr><td>' + (ccol == '#66ff66' || ccol == 'green' ? 'Friend' : (ccol == 'gold' ? 'Minion' : (ccol == '#c8c8c8' || ccol == 'red' || ccol == 'orange' ? 'Foe' : (ccol == '#ff6666' || ccol == '#d9fb96' ? 'Enemy' : (ccol == '#5151dc' || ccol == '#ff66ff' ? 'Ally' : (ccol == '#6666ff' ? 'Guildie' : 'Neutral')))))) + ''
		LastSelectedCharacter = v;
		LastCharacter = c.Itty;
		var strother = '<tr height="100%"><td></td></tr><tr><td>' + (c.ap != '' ? '<img src="' + FHIPR + c.ap + '" title="Mount">' : '') + '' + (c.ap2 != '' ? '<img src="' + FHIPR + c.ap2 + '" title="Possessive form">' : '') + '</td></tr></table>'

		HideSubMenu(-4);
		clearTimeout(popupmenu);

		if (isNPC != 0) {
			window.top.InfoTip(FHIPR + c.p2, strBasic + (isNPC == 0 ? ' ' + c.o : ' NPC') + (c.d != 0 ? ' Dead' : '') + '</td></tr>' + strother);
		} else {
			var Tame1 = '';
			var Tame2 = '';
			var Tame3 = '';
			var z = Tames(c);
			Tame1 = z[0];
			Tame2 = z[1];
			Tame3 = z[2];

			var actionskill = (c.l * 5) - 5
			if (actionskill <= 0) {
				actionskill = 5
			}
			window.top.InfoTip(FHIPR + c.p2, strBasic + (isNPC == 0 ? ' ' + c.o : ' PC') + (c.d != 0 ? ' Dead' : (c.e > 0 && Tame1 != '' ? '</td></tr><tr><td>' + Tame1 + ': ' + c.e + '' : '</td></tr>')) + (c.k == -1 ? '' : '') + (c.m != 0 && c.l > 5 ? '<tr><td>Skin/Intercede/Soul Trap: ' + actionskill + '</td></tr>' : '') + '<tr><td>' + c.t + '</td></tr>' + (c.f >= 1 ? '<tr><td>Bounty: ' + window.top.BSGM(c.f) + '</td></tr>' : '') + strother);
		}
	} else {
		HideSubMenu(-4);
	}
}

function CCnpc_popup(v) {
	var Ded2 = Ded;
	if (Ded2 == null) { Ded2 = 0; }
	var c = Chars[v];
	if (c != null) {
		LastSelectedCharacter = v;
		LastCharacter = c.Itty;

		AddButton(-4, 'Text', 'Text', 'Picture');
		AddSubMenu(-4, 'Talk', '', '', 'PF(' + c.v + ',14);');
		if (c.Color == 'gold') {
			AddSubMenu(-4, 'Manage', '', '', 'PF(' + c.v + ',' + (Math.abs(c.prof) == 39 ? '205' : '204') + ');');
		}
		if (c.h == 1 && Ded2 == 0) {
			AddSubMenu(-4, 'Reveal', '', '', 'PF(' + c.v + ',90);');
		}
		if (Math.abs(SR) == 20) {
			AddSubMenu(-4, 'Edit [GM]', '', '', 'PF(' + c.v + ',54);');
			AddSubMenu(-4, 'Inventory [GM]', '', '', 'PF(' + c.v + ',69);');
		}
		if (Ded2 == 0) {
			AddSubMenu(-4, 'Quests', '', '', 'PF(' + c.v + ',3);');
		}
		if (c.as != 0 && Ded2 == 0) {
			AddSubMenu(-4, 'Steal', '', '', 'PF(' + c.v + ',18);');
		}
		ShowSubMenu(-4, 'aC' + v, 0);
	}
}

function Tames(c) {
	var Tame1 = '';
	var Tame2 = '';
	var Tame3 = 46;
	if (c.e > 0) {
		if (c.o == 'Beast') {
			Tame1 = 'Beastmastery';
			Tame2 = 'Tame';
		} else if (c.o == 'Undead') {
			Tame1 = 'Necromancy';
			Tame2 = 'Control';
			Tame3 = 122;
		} else if (c.o == 'Demon') {
			Tame1 = 'Demonology';
			Tame2 = 'Control';
			Tame3 = 49;
		} else if (c.o == 'Plant') {
			Tame1 = 'Druid Magic';
			Tame2 = 'Nurture';
			Tame3 = 114;
		} else if (c.o == 'Insect') {
			Tame1 = 'Druid Magic';
			Tame2 = 'Entrap';
			Tame3 = 114;
		} else if (c.o == 'Humanoid') {
			Tame1 = 'Slavemastery';
			Tame2 = 'Enslave';
			Tame3 = 116;
		} else if (c.o == 'Mythical') {
			Tame1 = 'Myth and Legends';
			Tame2 = 'Control';
			Tame3 = 101;
		} else if (c.o == 'Alien') {
			Tame1 = 'Alien Hunting';
			Tame2 = 'Trap';
			Tame3 = 213;
		} else if (c.o == 'Magical') {
			Tame1 = 'Ethereal Trappings';
			Tame2 = 'Bind';
			Tame3 = 110;
		} else if (c.o == 'Toy') {
			Tame1 = 'Toy Snatching';
			Tame2 = 'Snatch';
			Tame3 = 197;
		}
	}
	return [Tame1, Tame2, Tame3];
}

function CC_popup(v) {
	var Ded2 = Ded;
	if (Ded2 == null) { Ded2 = 0; }

	var c = Chars[v];
	if (c != null) {
		LastSelectedCharacter = v;
		LastCharacter = c.Itty;

		var Tame1 = '';
		var Tame2 = '';
		var Tame3 = '';
		var z = Tames(c);
		Tame1 = z[0];
		Tame2 = z[1];
		Tame3 = z[2];

		AddButton(-4, 'Text', 'Text', 'Picture');
		AddSubMenu(-4, 'Talk', '', '', 'PF(' + c.v + ',14);');
		if (c.d == 0 && Ded2 == 0) {
			if (c.m != 0 || c.k != 0) {
				AddSubMenu(-4, 'Attack', '', '', 'PF(' + c.v + ',1);');
			}
			if (Ded2 == 0 && (c.f >= 1 || ((c.m != 0 && c.o != 'Beast') && (c.k == 0 || c.k == -1)))) {
				AddSubMenu(-4, 'Capture', '', '', 'PF(' + c.v + ',79);');
			}
			if (c.as != 0 && Ded2 == 0) {
				AddSubMenu(-4, 'Appraise [Inv]', '', '', 'PF(' + c.v + ',254);');
				AddSubMenu(-4, 'Steal', '', '', 'PF(' + c.v + ',18);');
			}
			if (Math.abs(c.m) == 0) {
				AddSubMenu(-4, 'Trade Items', '', '', 'PF(' + c.v + ',22);');
				if (Math.abs(c.pl) > 0) {
					AddSubMenu(-4, 'Trade Pets', '', '', 'PF(' + c.v + ',246);');
				}
			}
		}
		if (c.e > 0 && Ded2 == 0) {
			AddSubMenu(-4, Tame2, '', '', 'window.Ninja.location.replace("fh.asp?TameID=' + c.v + '&S2=' + Tame3 + '&L=' + (c.e / 5) + '");');
		}
		if (MH > 0 && Ded2 == 0 && ((c.Color == 'gold' || (c.m != 0)) && (c.o == 'Beast' || c.o == 'Humanoid' || c.o == 'Magic Baked'))) {
			AddSubMenu(-4, 'Care', '', '', 'PF(' + c.v + ',81);');
			AddSubMenu(-4, 'Care [Pet]', '', '', 'PF(' + c.v + ',181);');
		}

		if (c.m == 0) {
			AddSubMenu(-4, 'Message', '', '', 'PF(' + c.v + ',101);');
		}
		if (Math.abs(c.r) != 0) {
			AddSubMenu(-4, 'Mount [Pet]', '', '', 'PF(' + c.v + ',229);');
		}

		AddSubMenu(-4, 'Appraise / Info', '', '', 'PF(' + c.v + ',5);');
		AddSubMenu(-4, 'Emote', '', '', 'CEmotePicker("Select the emote to send to ' + LastCharacter + ':",-1,null,"Emote ' + LastCharacter + '");');




		if (Math.abs(SR) == 20) {
			AddSubMenu(-4, 'Edit [GM]', '', '', 'PF(' + c.v + ',54);');
			AddSubMenu(-4, 'Inventory [GM]', '', '', 'PF(' + c.v + ',69);');
		}

		ShowSubMenu(-4, 'aC' + v, 0);
	}
}

function ChangeElements(v1, v2, v3, v4) {
	if (v1 != null) {
		if (v1 == -1) {
			NPCsShown = (NPCsShown == 0 ? 1 : 0);
		} else {
			NPCsShown = v1;
		}
	}
	if (v2 != null) {
		if (v2 == -1) {
			PlayersShown = (NPCsShown == 0 ? 1 : 0);
		} else {
			PlayersShown = v2;
		}
	}
	if (v3 != null) {
		if (v3 == -1) {
			PetsShown = (PetsShown == 0 ? 1 : 0);
		} else {
			PetsShown = v3;
		}
	}
	if (v4 != null) {
		if (v4 == -1) {
			BuildingsShown = (BuildingsShown == 0 ? 1 : 0);
		} else {
			BuildingsShown = v4;
		}
	}
	ShowElements();

}

function ClearData() {
	FHIC = 0;
	FHBC = 0;
	FHCC = 0;
	FHHC = 0;
	Chars = new Array();
	Buildings = new Array();
	Items = new Array();
	Hands = new Array();
	Vessels = new Array();
	FHVC = 0;

}


function TrackMe(t, l1, l2) {
	var t1 = 3;
	if (getObj('TrackSpawns') != null) {
		if (getObj('TrackSpawns').checked == true) {
			t1 = 4;
		}
	}
	TrackX(t1, null, t);
}

function TrackX(t, t2, t3) {
	if (getObj('LevelStart') != null) {
		LastL1 = getObj('LevelStart').value;
		LastL2 = getObj('LevelEnd').value;
	}
	if (getObj('TrackName') != null) {
		LastTN = getObj('TrackName').value;
	}

	if (DoingStuff == 0) {
		DoingStuff = 1;
		window.top.Ninja.location.replace('plotter.asp?plotter=' + t + '&type2=' + (t3 == null ? '' : '' + t3) + '&type=' + t2 + (getObj('LevelStart') != null ? '&L1=' + getObj('LevelStart').value + '&L2=' + getObj('LevelEnd').value : '') + '&tn=' + window.top.URLencode(LastTN));
	} else {
		window.top.SendCommand('The previous action has not yet completed, <a href="javascript:void(0);" onclick="window.top.DoingStuff = 0;">[Cancel Action]</a>.</font>');
	}
}

function TrackItem(t) {
	TrackX(5, t);
}

function TrackDungeon(t) {
	TrackX(6, t);
}

function ShowCraftElements(t) {
	//Show your crafty stuffz
	if (t == null) {
		t = 0;
	}
	TrackX(10, t);
}

function MoveView(ew, ns) {
	if (window.top.CurrentBuildingID == 0) {
		getObj('yourarrow').style.display = 'none';
		getObj('yourmonster').style.display = 'none';
		if (ew == null) {
			ew = 0;
		}
		if (ns == null) {
			ns = 0;
		}
		if (ew < 0) {
			mainx = mainx - fullx;
		}
		if (ew > 0) {
			mainx = mainx + fullx;
		}
		if (ns < 0) {
			mainy = mainy - fully;
		}
		if (ns > 0) {
			mainy = mainy + fully;
		}
		window.top.getObj('Map2').innerHTML = window.top.LoadMap(500, 0, 'black', 100, 0, 0, 1000);
	}
}

function GetResultBox() {
	return '<tr><td colspan=2><center><div style="background-image: URL(https://lohcdn.com/game/icons/bar_tab3.png); width: 120px; text-align: center;font-weight: bold; cursor: pointer;" title="Toggle Result List" onclick="if (getObj(\'PlotResults\').style.display==\'\') {getObj(\'PlotResults\').style.display=\'none\';} else {getObj(\'PlotResults\').style.display=\'\';}">' + ASCII('List Results', 6) + '</div></center><div style="display: none; width: 185px;" id=PlotResults></div></td></tr>';
}

function ShowQuestElements() {
	//Plot quests
	var strout = '<table style=\'width: 185px;\'><tr><td colspan=2><table><tr><td>Level:</td><td><input type=text name="LevelStart" id="LevelStart" class="input" size=3 onkeypress="return fxkp(event);" maxlength=5 value="' + LastL1 + '" autocomplete="off" ></td><td><input class="input" type=text name="LevelEnd" id="LevelEnd" size=3 onkeypress="return fxkp(event);" autocomplete="off" maxlength=5 value="' + LastL2 + '"></td></tr></table></td></tr>';
	//
	strout += GetResultBox();
	var GC = 0;
	strout += '' + BBBS(289, FHIPB + 'q.gif', 'My Current Trophies', GC, 'Active/Incomplete Trophies.', 'TrackX(11, 4);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 'q.gif', 'My Current Quests', GC, 'Active/Incomplete Quests.', 'TrackX(11, 5);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 'q.gif', 'Trophy Quests', GC, 'Plot Trophy Quests.', 'TrackX(11, 1);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 'q.gif', 'Standard Quests', GC, 'Standard Quests.', 'TrackX(11, 2);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 'q.gif', 'Allegiance Quests', GC, 'Allegiance Quests.', 'TrackX(11, 3);', 20, 6)
	window.top.getObj('tabs').innerHTML = strout + '</table>';

}

function ShowTravelElements() {
	var strout = '<table style=\'width: 185px;\'><tr><td colspan=2><table><tr><td>Level:</td><td><input type=text name="LevelStart" id="LevelStart" class="input" size=3 onkeypress="return fxkp(event);" maxlength=5 value="' + LastL1 + '" autocomplete="off" ></td><td><input class="input" type=text name="LevelEnd" id="LevelEnd" size=3 onkeypress="return fxkp(event);" autocomplete="off" maxlength=5 value="' + LastL2 + '"></td></tr></table></td></tr>';
	strout += GetResultBox();
	var GC = 0;
	strout += '' + BBBS(289, FHIPB + 'm.gif', 'My Marked Spots', GC, 'Marked places', 'TrackX(7, 1);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 't.gif', 'My Tiles', GC, 'Tiles you own', 'TrackX(8, 8);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 'f.gif', 'Tiles for Sale', GC, '', 'TrackX(8, 9);', 20, 6)
	strout += '' + BBBS(289, FHIPB + 'e.gif', 'Exploration', GC, 'Unexplored buildings', 'TrackX(2, 0);', 20, 7)
	strout += '' + BBBS(289, FHIPB + 'darkdepths.gif', 'Area of Interest', GC, 'Areas of Interest', 'TrackX(8, 0);', 20, 7)
	strout += '' + BBBS(289, FHIPB + 'bdun2.gif', 'Player Dungeons', GC, 'Show Player Dungeons', 'TrackX(8, 1);', 20, 3)
	strout += '' + BBBS(289, FHIPB + 'bdun.gif', 'NPC Dungeons', GC, 'Show NPC Dungeons', 'TrackX(8, 2);', 20, 3)
	strout += '' + BBBS(289, FHIPB + 'vil.gif', 'Player Town', GC, 'Show Player Towns', 'TrackX(8, 3);', 20, 2)
	strout += '' + BBBS(289, FHIPB + 'vil.gif', 'NPC Town', GC, 'Show NPC Town', 'TrackX(8, 4);', 20, 2)
	strout += '' + BBBS(289, FHIPB + 'at1.gif', 'Place of Interest', GC, 'Place of Interest', 'TrackX(8, 5);', 20, 8)
	strout += '' + BBBS(289, FHIPB + 'a.gif', 'Allegiance', GC, 'Show Allegiance Places', 'TrackX(8, 6);', 20, 9)
	strout += '' + BBBS(289, FHIPB + 'wt4.gif', 'Outpost', GC, 'Show Outposts', 'TrackX(8, 7);', 20, 10)

	window.top.getObj('tabs').innerHTML = strout + '</table>';
}

function ShowTrackRadar() {
	var strout = '<table style=\'width: 185px;\'><tr><td colspan=2><table><tr><td>Level:</td><td><input type=text name="LevelStart" id="LevelStart" class="input" size=3 onkeypress="return fxkp(event);" maxlength=5 value="' + LastL1 + '" autocomplete="off" ></td><td><input class="input" type=text name="LevelEnd" id="LevelEnd" size=3 onkeypress="return fxkp(event);" autocomplete="off" maxlength=5 value="' + LastL2 + '"></td><td><input type=checkbox id=TrackSpawns name=TrackSpawns value=1 title="Track possible spawns when ticked, otherwise track current spawns."></td></tr><tr><td>Race:</td><td colspan=3><input type=text name="TrackName" id="TrackName" class="input" size=10 maxlength=15 value="' + LastTN + '" autocomplete="off" ></td></tr></table></td></tr>';
	strout += GetResultBox();
	var GC = 0;
	strout += '' + BBBS(289, FHIPR + 'eprat.gif', 'Beasts', GC, 'Track beasts req.', 'TrackMe(\'BEAST\');', 20)
	strout += '' + BBBS(201, FHIPR + 'mpblmm.gif', 'Demons', GC, 'Demonology req.', 'TrackMe(\'DEMON\');', 20)
	strout += '' + BBBS(358, FHIPR + 'sohuf3.gif', 'Humanoids', GC, 'Track humanoids req.', 'TrackMe(\'HUMANOID\');', 20)
	strout += '' + BBBS(321, FHIPR + 'unf.gif', 'Magicals', GC, 'Ethereal trappings req.', 'TrackMe(\'MAGICAL\');', 20)
	strout += '' + BBBS(1050, FHIPR + 'sk1.gif', 'Undeads', GC, 'Track undead req.', 'TrackMe(\'UNDEAD\');', 20)
	strout += '' + BBBS(222, FHIPR + 'mpcref.gif', 'Plants', GC, 'Druid magic req.', 'TrackMe(\'PLANT\');', 20)
	strout += '' + BBBS(216, FHIPR + 'dram.gif', 'Insects', GC, 'Druid magic req.', 'TrackMe(\'INSECT\');', 20)
	strout += '' + BBBS(242, FHIPR + 'mjpws.gif', 'Toys', GC, 'Toy snatching req.', 'TrackMe(\'TOY\');', 20)

	strout += '<tr><td colspan=2><table><tr>'
	if (CurrentMapID == 20) {
		strout += '' + BBBS(-373, FHIPI + '6684.gif', 'Godly Things', 1, 'TrackItem(-373);')
	}
	strout += '' + BBBS2(-104, FHIPI + 'ba.gif', 'Bags and Boxes', 1, 'TrackItem(-104);')
	strout += '' + BBBS2(-311, FHIPI + 'soil.gif', 'Soil and Seeds', 1, 'TrackItem(-311);')
	strout += '' + BBBS2(-50, FHIPI + 'me1.gif', 'Treasure Maps', 100, 'TrackItem(-50);')
	strout += '' + BBBS2(-250, FHIPI + 'ycc.gif', 'Crystals and Herbs', 500, 'TrackItem(-250);')
	strout += '' + BBBS2(-256, FHIPI + 'sc1.gif', 'Battered Chest', 1000, 'TrackItem(-256);')
	if (CurrentMapID == 13) {
		strout += '' + BBBS2(-114, FHIPI + 'musr14.gif', 'Mushrooms', 3000, 'TrackItem(-114);')
	}
	if (CurrentMapID == 14) {
		strout += '' + BBBS2(-263, FHIPI + 'crack5.gif', 'Unstable Areas', 250, 'TrackItem(-263);')
		strout += '' + BBBS2(-213, FHIPI + 'soil3.gif', 'Rare Resources', 50, 'TrackItem(-213);')
		strout += '' + BBBS2(-117, FHIPI + 'wreck.gif', 'Wreckage', 1, 'TrackItem(-117);')
	}

	strout += '</tr></table></td></tr>'
	strout += '' + BBBS(242, FHIPB + 'bdun.gif', 'Dungeons', GC, '', 'TrackDungeon(1);', 20)
	strout += '' + BBBS(242, FHIPR + 'prom.gif', 'Criminals', GC, 'Track criminals req.', 'TrackMe(\'CRIMINAL\');', 20)
	strout += '' + BBBS(242, FHIPB + 'h.gif', 'Hidden', GC, 'Detect hidden req.', 'TrackMe(\'HIDDEN\');', 20)
	strout += '' + BBBS(242, FHIPR + 'mjpgladm4.gif', 'Combatants', GC, 'Track combatants req.', 'TrackMe(\'PVP\');', 20)

	if (ALG > 0) {
		strout += '' + BBBS(242, FHIPB + 'a.gif', 'Enemies', GC, 'Allegiance req.', 'TrackMe(\'ENEMY\');', 20)
		strout += '' + BBBS(242, FHIPB + 'o.gif', 'Outposts', GC, 'Allegiance req.', 'GetResources(242);', 20)
	}

	window.top.getObj('tabs').innerHTML = strout + '</table>';
}

function ShowResourceChoice() {
	var strout = '<table style=\'width: 185px;\'><tr><td colspan=2><table><tr><td>Level:</td><td><input type=text name="LevelStart" id="LevelStart" class="input" size=3 onkeypress="return fxkp(event);" maxlength=5 value="' + LastL1 + '" autocomplete="off" ></td><td><input class="input" type=text name="LevelEnd" id="LevelEnd" size=3 onkeypress="return fxkp(event);" autocomplete="off" maxlength=5 value="' + LastL2 + '"></td></tr><tr><td>Material:</td><td colspan=3><input type=text name="TrackName" id="TrackName" class="input" size=15 maxlength=15 value="' + LastTN + '" autocomplete="off" ></td></tr><tr><td colspan=3><select id=PetChoice name=PetChoice style="width: 180px;"><option value=0>You</option>' + GetPetOptions() + '</select></td></tr></table></td></tr>';
	strout += GetResultBox();
	var GC = 0;
	if (CurrentMapID == 14) {
		strout += '' + BBBS(-1, FHIPI + 'fis.gif', 'Marine Husbandry', GC, 'Marine husbandry skill req.', 'GetResources(-1);')
	} else {
		strout += '' + BBBS(289, FHIPI + 'fis.gif', 'Fish', GC, 'Fishing skill req.', 'GetResources(289);')
		strout += '' + BBBS(201, FHIPI + 'lg.gif', 'Logs', GC, 'Lumberjacking skill req.', 'GetResources(201);')
		strout += '' + BBBS(358, FHIPI + 'cro.gif', 'Crops', GC, 'Farming skill req.', 'GetResources(358);')
		strout += '' + BBBS(321, FHIPI + 'vg1.gif', 'Vegetable', GC, 'Foraging skill req.', 'GetResources(321);')
		strout += '' + BBBS(1050, FHIPI + 'fruit.gif', 'Berry', GC, 'Foraging skill req.', 'GetResources(1050);')
		strout += '' + BBBS(222, FHIPI + 'ore.gif', 'Ore', GC, 'Mining skill req.', 'GetResources(222);')
		strout += '' + BBBS(216, FHIPI + 'gm.gif', 'Gem', GC, 'Geology skill req.', 'GetResources(216);')
		strout += '' + BBBS(242, FHIPI + 'flower13.gif', 'Fiber', GC, 'Farming skill req.', 'GetResources(242);')
		strout += '' + BBBS(373, FHIPI + 'gsb.gif', 'Stone', GC, 'Geology skill req.', 'GetResources(373);')
	}
	window.top.getObj('tabs').innerHTML = strout + '</table>';
}

function Plot(IType, lx, Named, Picture, X, Y, Z) {
	if (Z == null) {
		var m = Mapz[X][Y];
		if (m != null) {
			if (PlotLevels != 0) {
				m.Plot = '<img src=\'' + Picture + '\' title=\'' + Named + ', Level: ' + lx + ', Skill: ' + (lx * 5) + '\' style=\'width: 5; height: 5; cursor: pointer;\'>' + (PlotLevels != 0 ? ASCII('<small><b>' + lx + '</b></small>', 1) : '');
			} else {
				m.Plot = '<img src=\'' + Picture + '\' title=\'' + Named + ', Level: ' + lx + ', Skill: ' + (lx * 5) + '\' style=\'width: 10; height: 10; cursor: pointer;border: 1px solid gold;\'>' + (PlotLevels != 0 ? ASCII('<small>' + lx + '</small>') : '');
			}
			m.PlotInfo[0] = Named //'<b>' + Named + '</b><br>Level: ' + lx + ', Skill: ' + (lx * 5);
			m.PlotInfo[1] = lx;
			//m.PlotInfo = '<b>' + Named + '</b><br>Level: ' + lx + ', Skill: ' + (lx * 5);
		}
	} else {
		//Buildings 
		var m = Bz[X][Y][Z];
		if (m != null) {
			m.Plot = '<img src=\'' + Picture + '\' title=\'' + Named + ', Level: ' + lx + ', Skill: ' + (lx * 5) + '\' style=\'width: 10; height: 10; cursor: pointer;border: 1px solid gold;\'>';
			m.PlotInfo[0] = Named //'<b>' + Named + '</b><br>Level: ' + lx + ', Skill: ' + (lx * 5);
			m.PlotInfo[1] = lx;
			//m.PlotInfo = '<b>' + Named + '</b><br>Level: ' + lx + ', Skill: ' + (lx * 5);
		}
	}
}

function GetResources(t) {
	if (getObj('LevelStart').value != null) {
		LastL1 = getObj('LevelStart').value;
		LastL2 = getObj('LevelEnd').value;
	}
	if (getObj('TrackName') != null) {
		LastTN = getObj('TrackName').value;
	}
	if (DoingStuff == 0) {
		DoingStuff = 1;
		window.top.Ninja.location.replace('plotter.asp?plotter=1&type=' + t + '&Pet=' + getObj('PetChoice').value + '&L1=' + getObj('LevelStart').value + '&L2=' + getObj('LevelEnd').value + '&tn=' + window.top.URLencode(LastTN));
	}
}

function BBBS2(number, PictureID, desc, s, url) {
	var size = 20;
	var strTest = '';
	strTest += '<td class="btn" title="' + desc + '" onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:' + (size) + '" onclick="' + url + '"><img src=\'' + PictureID + '\' style=\'height: ' + size + '; width: ' + size + '\'></td>'
	return strTest;
}


function BBBS(number, PictureID, desc, GC, t, url, size, c) {
	if (size == null) {
		size = 36;
	}
	if (c == null) {
		c = 1;
	}
	var strTest = '';
	strTest += '<tr id=\'G" + GC + "\' class="btn" onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:' + (size) + '" onclick="' + url + '"><td><img src=\'' + PictureID + '\' style=\'height: ' + size + '; width: ' + size + '\'></td><td width=\'100%\'><b>' + ASCII('' + desc, c) + '</b>' + (t != '' ? '<br>' + ASCII('<small>' + t + '</small>', 1) : '') + '</td></tr>'
	GC = GC + 1;
	return strTest;
}

function ShowElements() {
	var y = 0;

	var strout = '<table cellpadding=0 cellspacing=0 style=\'width: 180px;\'><tr><td>' + Adac('ChangeElements(1, 1, 1, 1);', 'Show All', '', 'buttonc2', null, null, 'bar_button_all.png') + '</td><td>' + Adac('ChangeElements(-1);', 'Toggle NPCs', '', 'buttonc2', null, null, 'bar_npcs.png') + '</td><td>' + Adac('ChangeElements(null, -1);', 'Toggle Players', '', 'buttonc2', null, null, 'bar_players.png') + '</td><td>' + Adac('ChangeElements(null, null, -1);', 'Toggle Pets', '', 'buttonc2', null, null, 'bar_pets.png') + '</td><td>' + Adac('ChangeElements(null, null, null, -1);', 'Toggle Buildings', '', 'buttonc2', null, null, 'bar_building.png') + '</td><td></td></tr></table>';
	var monster = '';
	LastMonsterID = -1;
	if (NPCsShown + PlayersShown + PetsShown > 0) {
		for (y = 0; y < FHCC; y++) {
			var b = window.top.Chars[y];
			if (b != null) {
				var p3 = FHIPR + b.p2;
				var p4 = '';
				var Color3 = '';

				if (b.FC1 != '') {
					Color3 = b.FC1;
				}

				if (b.nmc > 0 && b.Extra.indexOf('<b>') == -1 && PetsShown == 0) {
				} else if ((b.nmc < 0 || (b.nmc > 0 && b.Extra.indexOf('<b>') != -1)) && NPCsShown == 0) {
				} else if (b.nmc == 0 && PlayersShown == 0) {
				} else {
					var charfil = '';
					var CharImage2 = '' + (b.afid != 0 ? '<img title="Faction" src="https://lohcdn.com/game/h/' + b.afid + '.gif" width=20 height=20><br>' : '');;
					var CharImage = '' + (b.d != '' ? '' : (b.k == '-1' ? '<img title="Active Criminal" src="' + FHIPO + 'bomb.png"><br>' : (b.k == '1' ? '<img title="PVP Enabled" src="' + FHIPO + 'heart.png"><br>' : '')) + '' + (b.agc != '' ? '<img title="' + b.agct + '" src="' + b.agc + '" style="filter: Glow(Color=#000000, Strength=2);"><br>' : '')) + (b.f > 0 ? '<img title="Wanted Criminal" src="' + FHIPO + 'money.png">' : '')

					if (b.ap != 'na.gif' && b.ap != '') {
						CharImage2 = CharImage2 + '<img title="Mounted Pet" height=20 width=20 src="' + FHIPR + (b.ap != '' ? b.ap : 'na.gif') + '">'
					}
					if (b.ap2 != 'na.gif' && b.ap2 != '') {
						CharImage2 = CharImage2 + '<img title="Possessed" width=20 height=20 src="' + FHIPR + (b.ap2 != '' ? b.ap2 : 'na.gif') + '">'
					}

					var CharTD = '<td ' + (b.nmc > 0 ? 'style="border: 1px dotted gold;"' : (b.nmc < 0 ? 'style="border: 1px dotted orange;"' : (b.m != 0 ? 'style="border: 1px dotted red;"' : ''))) + '><img src="' + p3 + '" ' + (b.h != '' ? ' class="trans"' : '') + '></td>'

					var Itty2 = b.Itty.substr(0, 30);
					var Extra = b.Extra.substr(0, 30);

					if (b.spawner == 1) {
						Extra += '<br><b>Your spawn</b>';
					}

					strout += '<table cellpadding=0 cellspacing=0 width="100%"><tr><td width=10 id="aC' + y + '"><div onmouseover="' + (b.Extra.indexOf('<b>') != -1 ? 'CCnpc_popup(' + y + ');' : 'CC_popup(' + y + ');') + '" style="height: 15; background-color: ' + (b.nmc > 0 ? 'gold' : (b.nmc < 0 ? 'orange' : (b.m != 0 ? 'red' : 'cyan'))) + '; color: black; cursor: pointer; opacity: 0.5;filter:alpha(opacity=50); font-weight: bold;" class="transparent">&#187;</div></td><td width="100%"><table cellpadding=1 cellspacing=1 width="100%"><tr id=C' + y + ' style="color: ' + b.Color + '" onmousedown="CC_m(' + y + ', event);" onmouseover="CC(' + y + ');" onmouseout="O(this);">' + CharTD + '<td valign=top width="100%"><table style="color: ' + b.Color + '; width: 100%" class="itemText" cellspacing=0 cellpadding=0><tr><td ' + (Color3 != '' || b.FN1 != '' || b.FS1 != 0 ? 'style=\'' + (Color3 != '' ? 'color: ' + Color3 : '') + (b.FN1 != '' ? '; font-family:' + b.FN1 : '') + (b.FS1 != 0 ? '; font-size:' + b.FS1 + 'pt' : '') + '\'' : '') + '>' + ASCII(Itty2) + '</td></tr><tr><td>' + Extra + '</td></tr><tr><td>' + CharImage + CharImage2 + '</td></tr></table></td></tr></table></td></tr></table>';

					if (b.m != 0 && ImprovedMouse != 0) {
						LastMonsterID = y;
						var Testit = getObj('yourmonster');
						if (Testit != null) {
							Testit.style.left = (((CurrentBuildingID <= 0 ? LastMapX : mx) - window.top.MapStartX) * 20) + 45;
							Testit.style.top = (((CurrentBuildingID <= 0 ? LastMapY : my) - window.top.MapStartY) * 20) + 55;
							Testit.style.display = '';
							Testit.innerHTML = '<img src="' + p3 + '" onclick="ClickMonster();" width=20 height=20>';
							Testit.title = Itty2;
						}

						monster = 'X';
					}
				}
			}
		}

		for (y = 0; y < FHVC; y++) {
			var b = window.top.Vessels[y];
			if (b != null) {
				var Itty2 = b.i.substr(0, 30);
				var CharTD = '<td width="40" height="40" style="background-image: url(' + FHIPV + b.vpid + '); background-Position: left; background-Repeat: no-repeat; ' + ('' + b.vd != '' && '' + b.vd != '0' ? 'filter:gray' : '') + '">' + (b.vflag != 't.png' ? '<table><tr height=24><td colspan=2></td></tr><tr><td width=24></td><td width=16 bgcolor=\'' + b.vflagc + '\'><img src=\'https://lohcdn.com/game/flags/' + b.vflag + '\' width=16 height=16></td></table>' : '<table><tr><td width=40 heigh=40></td></tr></table>') + '</td>'
				strout += '<table cellpadding=0 cellspacing=0 width="100%"><tr><td width=10 id="aV' + y + '"><div onmouseover="VV_popup(' + y + ');" style="height: 15;background-color: ' + ('' + b.vd != '' && '' + b.vd != '0' ? 'gray' : 'red') + '; color: black; cursor: pointer; opacity: 0.5;filter:alpha(opacity=50); font-weight: bold; text-align: center;" class="transparent">&#187;</div></td><td width="100%"><table cellpadding=1 cellspacing=1 width="100%"><tr id="V' + y + '" onmousedown="VV_m(' + y + ', event);" onmouseover="VV(' + y + ');" onmouseout="VO(' + y + ');">' + CharTD + '<td style="color: ' + b.c + ';padding: 2px" valign=top><table class="itemText" cellspacing=0 cellpadding=0><tr><td style="color: ' + b.c + '"><b>' + Itty2 + (b.anchor != 0 ? ' (A)' : '') + '</b></td></tr><tr><td>' + b.Extra + '</td></tr></table></td></tr></table></td></tr></table>';
				if (ImprovedMouse != 0 && b.vcid <= 0 && b.npc != 1) {
					var Testit = getObj('yourmonster');
					if (Testit != null) {
						Testit.style.left = (((CurrentBuildingID <= 0 ? LastMapX : mx) - window.top.MapStartX) * 20) + 45;
						Testit.style.top = (((CurrentBuildingID <= 0 ? LastMapY : my) - window.top.MapStartY) * 20) + 55;
						Testit.style.display = '';
						Testit.innerHTML = '<img src="' + FHIPV + b.vpid + '" onmousedown="VV_m(' + y + ', event);" width=20 height=20>';
						Testit.title = Itty2;
					}
					monster = 'X';
				}
			}
		}
	}

	if (monster == '') {
		var Testit = getObj('yourmonster');
		if (Testit != null) {
			Testit.style.display = 'none';
		}

	}

	var Testit = getObj('yourarrow');
	if (Testit != null) {
		Testit.style.left = (((CurrentBuildingID <= 0 ? LastMapX : mx) - window.top.MapStartX) * 20) + 20;
		Testit.style.top = (((CurrentBuildingID <= 0 ? LastMapY : my) - window.top.MapStartY) * 20) + 60;
		Testit.style.display = '';
	}


	if (FHIC > 0) {
		strout += '<div style="width: 185px;">'
		for (y = 0; y < FHIC; y++) {
			var b = window.top.Items[y];
			if (b != null) {
				var tmppath = StrToPath(b.pp);
				strout += '<div style="float: left; width: 40px; height: 40px; padding: 1px; margin: 1px;" id="I' + y + '" onclick="I(' + y + ');" onmouseover="IC' + (b.ad != 0 ? '2' : '') + '(' + y + ');" onmouseout="O(this);" align=center><img width=40 height=40 src="' + b.p + '"></div>'
			}
		}
		strout += '</div>'
	}

	if (BuildingsShown > 0) {
		strout += '<div style="float: left;">';
		for (y = 0; y < FHBC; y++) {
			var b = window.top.Buildings[y];
			if (b != null) {
				var Alleg = '<table cellpadding=0 cellspacing=0 width=38 height=38 ' + (b.p2 != b.p ? 'style="background-image: url(' + FHIPB + b.p + '); background-Position: left; background-Repeat: no-repeat;"' : '') + '><tr height=28><td colspan=4></td></tr><tr><td width=10>' + (b.l != '' ? '<img src="' + FHIPO + (b.l == 1 || b.l == 2 ? 'lock.png">' : 'eye.png" width=10 height=10>') : (b.needpaid != 0 ? '<img src="' + FHIPO + 'coins.png">' : '')) + '</td><td width=8></td><td width=10>' + '</td><td width=10 title="' + b.agct + '">' + (b.agc != '' ? '<img title="' + b.agct + '" src="' + b.agc + '">' : '') + '</td></tr></table>'
				var CharTD = '<td width="40" height="40" style="background-image: url(' + FHIPB + b.p2 + '); background-Position: left; background-Repeat: no-repeat; ' + (b.h != 0 ? 'filter:Alpha(opacity=45); opacity: 0.5;' : '') + '">' + Alleg + '</td>'
				strout += '<table cellpadding=0 cellspacing=0 width="100%"><tr><td id="aB' + y + '"><div width=10 onmouseover="BC_popup(' + y + ');" style="height: 15;background-color: green; color: black; cursor: pointer; opacity: 0.5;filter:alpha(opacity=50); font-weight: bold; text-align: center;" class="transparent">&#187;</div></td><td><table cellpadding=1 cellspacing=1 width="100%" ><tr>' + CharTD + '<td class="itemText" id="B' + y + '" style="color: ' + b.Color + '" onmousedown="BB_m(' + y + ', event);" onmouseover="BC(' + y + ');" onmouseout="O(this);">' + (b.n != 0 ? '<b>' + ASCII(b.Itty) + '</b>' : b.Itty) + (b.bt != '' ? '<br>' + b.bt : '') + (b.dd != '' ? '<br>Disappears in <b>' + b.dd + 'mins</b>' : '') + '<br>' + (b.agct != '' ? b.agct + '<br>Level: ' + b.lv : '') + '</td></tr></table></td></tr></table>';
			}
		}
		strout += "</div>"
	}
	window.top.getObj('tabs').innerHTML = strout;
}


function GetPetOptions() {
	var strout = '';
	strout = ''

	for (y = 0; y < FHCC; y++) {
		var b = window.top.Chars[y];
		if (b != null) {
			if (b.nmc > 0 && b.nmc == mycharid) {
				strout += '<option value=' + b.v + '>' + b.Itty + '</option>';
			}
		}
	}
	//	
	return strout;
}


function StrToPath(thestr) {
	var strout = '';
	strout = 'game/' + thestr + '/'
	return strout;
}

function CEmotePicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("emote.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 220, PromptReturn, null, title, pb);
}

function PromptReturn(returnVal, pb) {
	var v = LastSelectedCharacter;
	if (returnVal != null) {
		if (pb != null) {
			if (pb == -1 && v >= 0) {
				//Processing = 1;
				window.Ninja.location.replace('fh.asp?EmoteID=' + returnVal + '&other=' + window.top.Chars[v].v);
			} else {
				PF(pb, 56);
			}
		}
	}
}


function ml4(URL, stuff) {
	Processing = 1;
	stuff.disabled = true;
	setTimeout(() => getObj(stuff.id).disabled = false, 2000);
	window.parent.Interface.location.replace('fhmess.asp?CharsAt=' + URL);
}

function ml3(x, y, g, b, stuff) {
	Processing = 1;
	stuff.disabled = true;
	setTimeout(() => getObj(stuff.id).disabled = false, 2000);
	if (b > 0) {
		window.parent.Ninja.location.replace('fh.asp?Redraw=1&BuildingID=' + b + '');
	} else {
		window.parent.Ninja.location.replace('fh.asp?Redraw=1&x=' + x + '&y=' + y + '&MapNum=' + g + '');
	}
}

function ml2(URL, p) {
	if (URL != 0) {
		window.top.DisableInterface();
		window.top.FHIPP = window.top.FHIPR + p;
		window.top.Interface.location.replace('fhCharC.asp?CharsAt=' + URL);
	}
}

function qRC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function qPC(v) {
	window.top.InfoTip('' + Quick[v].p, '' + Quick[v].n + '');
	getObj('QB' + v).style.cursor = 'pointer';
	getObj('QB' + v).style.backgroundColor = BGCOLOR_S
}

function qPCF(v) {
	window.top.InfoTip('' + Quick[v].p, '' + Quick[v].n + '<br>' + Quick[v].fn);
	getObj('QB' + v).style.cursor = 'pointer';
	getObj('QB' + v).style.backgroundColor = BGCOLOR_S
}

function qPC2(v) {
	window.top.InfoTip('' + Quick[v].p, '' + Quick[v].n + '<br>' + window.top.GetRealm(Quick[v].g) + '<br>X: ' + Quick[v].x + ', Y: ' + Quick[v].y);
	getObj('QB' + v).style.cursor = 'pointer';
	getObj('QB' + v).style.backgroundColor = BGCOLOR_S
}

function ForceBuildingCache(b) {
	var head = document.getElementsByTagName('head')[0];
	if (getObj("mapper") != null) {
		head.removeChild(document.getElementById("mapper"));
	}
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '/js/buildings/building' + b + '.js?' + (new Date()).getTime();
	script.id = "mapper";
	head.appendChild(script);
	FinishBuilding();
}

function MapResize() {
	getObj('tabs').style.top = 190;
	getObj('tabs2').style.top = 160;
	getObj('CharInfo1').style.top = 55;

	if (window.top.fullx == 8) { //small
		getObj('tabs').style.left = 200;
		getObj('tabs2').style.left = 200;
		getObj('CharInfo1').style.left = 200;

		getObj('StatusWindow').style.left = 710;
		getObj('StatusWindow').style.top = 315;
		getObj('StatusWindow').style.width = 270;
		getObj('StatusWindow').style.height = 230;
		getObj('ChatWindow').style.left = 710;
		getObj('ChatWindow').style.top = 60;
		getObj('ChatWindow').style.width = 270;
		getObj('ChatWindow').style.height = 250;

		getObj('iQuickBar').style.left = 415;
		getObj('iQuickBar').style.top = 60;
		getObj('iQuickBar').style.width = 290;
		getObj('iQuickBar').style.height = 500;

		getObj('Macros').style.left = 20;
		getObj('Macros').style.top = 320;
		getObj('Macros').style.width = 180;
		getObj('Macros').style.height = 200;
	} else if (window.top.fullx == 38) { //large
		getObj('tabs').style.left = 800;
		getObj('tabs2').style.left = 800;
		getObj('CharInfo1').style.left = 800;

		getObj('StatusWindow').style.left = 30;
		getObj('StatusWindow').style.top = 500;
		getObj('StatusWindow').style.width = 400;
		getObj('StatusWindow').style.height = 150;
		getObj('ChatWindow').style.left = 450;
		getObj('ChatWindow').style.top = 500;
		getObj('ChatWindow').style.width = 400;
		getObj('ChatWindow').style.height = 150;

		getObj('iQuickBar').style.left = 1040;
		getObj('iQuickBar').style.top = 60;
		getObj('iQuickBar').style.width = 200;
		getObj('iQuickBar').style.height = 500;

		getObj('Macros').style.left = 20;
		getObj('Macros').style.top = 665;
		getObj('Macros').style.width = 800;
		getObj('Macros').style.height = 44;
	} else { //medium
		getObj('tabs').style.left = 410;
		getObj('tabs2').style.left = 410;
		getObj('CharInfo1').style.left = 410;
		getObj('tabs').style.width = 200;
		getObj('tabs2').style.width = 200;
		getObj('CharInfo1').style.width = 200;
		getObj('StatusWindow').style.left = 20;
		getObj('StatusWindow').style.top = 340;
		getObj('StatusWindow').style.height = 280;
		getObj('StatusWindow').style.width = 400;
		getObj('ChatWindow').style.left = 920;
		getObj('ChatWindow').style.top = 60;
		getObj('ChatWindow').style.width = 200;
		getObj('ChatWindow').style.height = 500;

		getObj('iQuickBar').style.left = 625;
		getObj('iQuickBar').style.top = 60;
		getObj('iQuickBar').style.width = 290;
		getObj('iQuickBar').style.height = 500;

		getObj('Macros').style.left = 20;
		getObj('Macros').style.top = 665;
		getObj('Macros').style.width = 800;
		getObj('Macros').style.height = 44;
	}
}


function MapResizeCheck() {
	confirmspecial("Would you like the game to <b>try</b> to resize/reposition elements to fit around your map?", 1);
}

function confirmspecial(message, pb, title, icon, c1, c2) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (c1 == undefined) {
		c1 = 'OK';
	}
	if (c2 == undefined) {
		c2 = 'Cancel';
	}
	window.top.showPopWin("confirm.asp?message=" + message + "&title=" + title + "&c1=" + c1 + "&c2=" + c2 + "&icon=" + icon, 350, 130, PromptReturnSpecial, null, title, pb);
}

function PromptReturnSpecial(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (returnVal != false) {
				MapResize();
			}
		}
	}
	SaveWindows();
}

function RefreshAll() {
	if (CurrentBuildingID > 0) {
		FinishBuilding();
	} else {
		FinishMap();

	}
}