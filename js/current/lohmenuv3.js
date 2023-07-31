var HideGameMenu = -1;
var Theme = Theme;
var ThemeP = 'https://res.landsofhope.com/images/' + Theme + '/';
var lastmenu = 0;
var mymenu = new Array();
var verticalmenu = 0;
var timeindex = 'Time';
var ShadowColor = (COLOR1_S == 'black' ? 'white' : 'black');
var menuwidth = 0;

function getObj(objn) {
	if (document.getElementsByName(objn).length <= 1) {
		return document.getElementById(objn);
	} else {
		return document.getElementsByName(objn);
	}


}

function UnloadMenu() {
	if (getObj("menubar_m1") != null) {
		getObj("menubar_m1").innerHTML = "";
	}

	var x = 0;
	if (mymenu != null) {
		for (x = 1; x < mymenu.length; x++) {
			if (getObj("smn" + x) != null) {
				getObj("smn" + x).innerHTML = '';
			}
		}

	}

	lastmenu = 0;
	mymenu.length = 0;
	mymenu = new Array();
}

function adsm(nodename, nodeurl, nodeframe, nodeparent, nodeimage) {
	lastmenu = lastmenu + 1;
	if (mymenu[lastmenu] == null) {
		mymenu[lastmenu] = new Array();
	}
	mymenu[lastmenu] = new NewMenu(lastmenu, nodename, nodeurl, nodeframe, nodeparent, (nodeparent != null ? 1 : 0), nodeimage);
}

function NewMenu(lm, nodename, nodeurl, nodeframe, nodeparent, popup, nodeimage) {
this.lm = lm;
this.nodename = nodename;
this.nodeurl = nodeurl;
this.nodeframe = nodeframe;
this.nodeparent = nodeparent;
this.popup = popup;
this.nc = 0;
this.nodeimage = nodeimage;
this.shown = 0;
}

function HM(stuff, lm) {
	stuff.style.color = COLOR1_S;
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function Getmymenu(lm, v) {
	var x = 0;
	var clickurl = "";
	var tmp = '';

	menuwidth = 0;
	if (lm == null) {
		var menubar = getObj("menubar_m1");
		menubar.style.backgroundImage = "URL(" + ThemeP + "menu.gif)";
		menubar.style.backgroundPosition = "top";
		menubar.style.backgroundRepeat = 'repeat-x';
	}
	var ww = getViewportWidth();

	tmp = (lm == null ? '<table cellspacing=0 cellspacing=0 style="font-size: 10px; cursor: pointer;" cellpadding=0 ' + (verticalmenu != 0 ? 'width="170px"' : '') + '><tr style="height: 2px"><td style="height: 2px" colspan="27" onmouseover="HM3(0,0,0);"></td></tr><tr>' : '') + (lm == null && v == 0 ? '<td width=20 onmouseover="HM3(0,0,0);">&nbsp;</td>' : '');
	for (x = 1; x < mymenu.length; x++) {
		if (mymenu[x].nodeparent == lm) {
			tmp += (v != 0 || verticalmenu == 1 ? '<tr>' : '') + GetMenu(mymenu[x]) + (v != 0 || verticalmenu == 1 ? '</tr>' : '')
		}
	}

	if (lm == null && v == 0) {
	//	tmp = tmp + '<td id=Time name=Time style="cursor: pointer; text-align: left; width: 150px; color: ' + COLOR1_S + '; border: 1px dotted ' + COLOR1_S + '" onclick="window.location.replace(\'fhlogin.asp\');" onmouseover="HM3(0,0,0);"></td></tr></table>'
	}
	return tmp;
}

function GetMenu(menu) {
	var tmp = '';
	var clickurl = "";

	if (menu.nodeframe == "_blank" && menu.nodeurl != "") {
		clickurl = "window.open('" + menu.nodeurl + "');"
	} else if (menu.nodeframe == 'Ninja') {
		clickurl = "window.top.Ninja.location.replace('"  + menu.nodeurl + "');"
	} else if (menu.nodeurl != "") {
 		clickurl = "window.top.Interface.location.replace('"  + menu.nodeurl + "');"; //getObj('framediv').style.display='';"
	}
	var mmenuw = (menu.popup == 0 ? (menu.nodename.length * 7) : '120');

	menuwidth = menuwidth + mmenuw;
	var OnStuff = ' onclick="HM3(0,0, 0);' + clickurl + '" ' + (menu.nodename != '' ? ' onmouseover="SM(this, ' + menu.lm + ', ' + menu.popup + ',' + (menu.popup != 0 ? menu.nodeparent : menu.lm) + ');" onmouseout="HM(this, ' + menu.lm + ');"' : '') + ' id="mnu' + menu.lm + '" style="color: ' + COLOR1_S + ';' + (menu.nodename == '' ? 'background-image: URL(https://res.landsofhope.com/images/' + Theme + '/top.gif);' : '') + 'width: ' + mmenuw + 'px;"'; // filter: glow(color=' + ShadowColor + ', strength=2)
	tmp = (menu.popup != 0 ? '<tr ' + (menu.nodename != '' ? '' : 'style="height:3px;font-size: 1px;"') + '><td colspan=2' : '<td') + '' + OnStuff + '>' + (menu.nodename == '' ? '' : window.top.ASCII(menu.nodename, 1)) + '</td>'  + (menu.nc != 0 ? '<td width=15><img src="https://res.landsofhope.com/images/' + Theme + '/' + (menu.nodeparent == null ? 'test_m1iad.gif' : 'test_m1ia.gif') + '"></td>' : '') + (menu.popup != 0 ? '<tr>' : '');	
	return tmp;
}

function SM(stuff, lm, popup, p) {
	var tmp = '';
	stuff.style.color = COLOR1;
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S;
	if (mymenu[lm].nc != 0) {
		if (getObj("smn" + lm) == null) {
			var element = document.createElement("DIV");
			element.setAttribute("name", "smn" + lm);
			element.setAttribute("id", "smn" + lm);

			document.body.appendChild(element);
		}
		var actualof = (popup == 0 && verticalmenu == 0 ? 0 : 160);
		var actuall = getObj("mnu" + p).offsetLeft;
		var actualw = getObj("mnu" + p).offsetWidth;
		var actualo = getObj("menubar_m1").offsetWidth;
		var myMenu = getObj("smn" + lm);
		myMenu.style.display = "none";
		myMenu.style.position = "absolute";
		if ((actuall + actualw + actualof + 10) > actualo) {
			//Left of current menu
			myMenu.style.left = (actuall - actualof) + 'px';
		} else {
			//Right of current menu
			myMenu.style.left = (actuall + actualof) + 'px';
		}
		myMenu.style.top = (stuff.offsetTop + 15) + 'px';
		//myMenu.style.zorder = -1;
		myMenu.style.zIndex = "50000";
		myMenu.style.width = '160px';
		myMenu.style.cursor = 'pointer';

		tmp = Getmymenu(lm, 0) ;
		myMenu.innerHTML = "" + MenuBox("<table width='100%' style='font-size: 10px; padding-left:9px;' cellspacing=1 cellpadding=1 oncontextmenu='HM3(0,0,0);'>" + tmp + "</table>", 170, '') + "";
		mymenu[lm].shown = 1;
		myMenu.style.display = "";

		if (mymenu[lm].nodeparent == null) {
			//Parent node, top bar
			HM3(lm, 0, 0);
		} else if (mymenu[lm].nc > 0) {
			HM3(lm, mymenu[lm].nodeparent,  mymenu[mymenu[lm].nodeparent].nodeparent);
		}
	} else {
		HM3(lm, mymenu[lm].nodeparent,  mymenu[mymenu[lm].nodeparent].nodeparent);
	}
	clearTimeout(HideGameMenu);
	HideGameMenu = setTimeout('window.top.HM3(0,0,0);', 1500);
}

function HM3(lm, lm2, lm3) {
	var x = 0;
	var clickurl = "";
	for (x = 1; x < mymenu.length; x++) {
		if (mymenu[x].shown == 1 && x != lm && x != lm2 && x != lm3) {
			HM2(x);
		}
	}	
}

function HM2(lm) {
	if (lm > 0) {
		//Hide old menu
		mymenu[lm].shown = 0;
		if (getObj("smn" + lm) != null) {
			var olddiv = document.getElementById("smn" + lm);
			document.body.removeChild(olddiv);
			//getObj("smn" + lm).innerHTML = '';
		}
	}
}

function MenuBox(content, width, height) {
	return "<table border='0' align='center' cellpadding='0' cellspacing='0' style='background-image: URL(" + ThemeP + "darkback.gif); width: " + width + ";" + (height != '' ? "height: " + height : "") + "'><tr height=11 valign=top><td colspan=3 width='100%'><table cellpadding='0' cellspacing='0' style='background-image: URL(" + ThemeP + "top.gif); height: 11px; width: 100%; background-repeat: repeat-x;'><td><img src='" + ThemeP + "tlc.gif'></td><td width='100%' colspan=3></td><td align=right><img src='" + ThemeP + "trc.gif'></td></tr></table></td></tr><tr><td style='background-image: URL(" + ThemeP + "left.gif); width: 11px;background-repeat: repeat-y; background-position: left;'></td><td valign=top>" + content + "</td><td style='background-image: URL(" + ThemeP + "right.gif); width: 11px;background-repeat: repeat-y; background-position: right;'></td></tr><tr height=11 valign=bottom><td colspan=3><table style='background-image: URL(" + ThemeP + "bottom.gif); height: 11px; width: 100%; background-repeat: repeat-x;background-position: bottom;' cellpadding='0' cellspacing='0'><td><img src='" + ThemeP + "blc.gif'></td><td width='100%'></td><td><img src='" + ThemeP + "brc.gif'></td></tr></table></td></tr></table>";
}

function admi(nodename, nodeurl, nodeframe, nodeparent, nodeimage) {
	lastmenu = lastmenu + 1;
	if (mymenu[lastmenu] == null) {
		mymenu[lastmenu] = new Array();
	}

	mymenu[lastmenu] = new NewMenu(lastmenu, nodename, nodeurl, nodeframe, nodeparent, 1, nodeimage);
	mymenu[nodeparent].nc += 1;
}

function reloadmenu() {
	loadmenu("menubar_m1");
}

function loadmenu(itemname) {
	if (getObj(itemname) != null) {
		getObj(itemname).innerHTML = Getmymenu(null, 0);
	}
}