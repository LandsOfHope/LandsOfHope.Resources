var Theme = Theme;
var lastmenu = 0;
var mymenu = new Array();
var verticalmenu = 1;

function UnloadMenu() {
	if (document.getElementById("menubar_m1") != null) {
		document.getElementById("menubar_m1").innerHTML = "";
	}

	var x = 0;
	if (mymenu != null) {
		for (x = 1; x < mymenu.length; x++) {
			if (document.getElementById("smn" + x) != null) {
				document.getElementById("smn" + x).innerHTML = '';
			}
		}

	}

	lastmenu = 0;
	mymenu.length = 0;
}

function adsm(nodename, nodeurl, nodeframe, nodeparent, nodeimage, nodecolor) {
	lastmenu = lastmenu + 1;
	if (mymenu[lastmenu] == null) {
		mymenu[lastmenu] = new Array();
	}
	mymenu[lastmenu] = new NewMenu(lastmenu, nodename, nodeurl, nodeframe, nodeparent, (nodeparent != null ? 1 : 0), nodeimage, nodecolor);
}

function NewMenu(lm, nodename, nodeurl, nodeframe, nodeparent, popup, nodeimage, nodecolor) {
	this.lm = lm;
	this.nodename = nodename;
	this.nodeurl = nodeurl;
	this.nodeframe = nodeframe;
	this.nodeparent = nodeparent;
	this.popup = popup;
	this.nc = 0;
	this.nodeimage = nodeimage;
	this.c = nodecolor;
	this.shown = 0;
}

function HM(stuff) {
	stuff.style.cursor = '';
}

function Getmymenu(lm, v) {
	var x = 0;
	var tmp = '';

	for (x = 1; x < mymenu.length; x++) {
		if (mymenu[x].nodeparent == lm) {
			tmp += "<tr><td style='font-weight: bold'><a name='" + mymenu[x].nodename + "'></a>" + mymenu[x].nodename + "</td></tr><tr><td align=right><table width='150px'width='100%' style='font-size: 10px; padding-left:19px;' cellspacing=1 cellpadding=1>" + Getmymenu2(x, 0) + "</table></td></tr>"
		}
	}

	if (lm == null) {
		tmp = MenuBox("<table width='160px'width='100%' style='font-size: 10px; padding-left:9px;' cellspacing=1 cellpadding=1>" + tmp + "</table>", 180, '100%')
	}

	return tmp;
}

function SM(stuff) {
	stuff.style.cursor = 'pointer';
}

function Getmymenu2(lm, v) {
	var x = 0;
	var tmp = '';

	for (x = 1; x < mymenu.length; x++) {
		if (mymenu[x].nodeparent == lm) {
			tmp += GetMenu(mymenu[x]);
		}
	}

	return tmp;
}

function GetMenu(menu) {
	var tmp = '';
	var clickurl = "";
	if (menu.nodeframe == "_blank" && menu.nodeurl != "") {
		clickurl = "window.open('" + menu.nodeurl + "');"
	} else if (menu.nodeurl != "") {
		clickurl = "window.location.replace('" + menu.nodeurl + "');"
	}
	var OnStuff = ' onclick="' + clickurl + '" ' + (menu.nodename != '' ? ' onmouseover="SM(this);" onmouseout="HM(this);"' : '') + ' id="mnu' + menu.lm + '" p="' + (menu.popup != 0 ? menu.nodeparent : menu.lm) + '" style="background-image: URL(https://lohcdn.com/dot.gif); color: ' + menu.c + '"';
	tmp = '<tr ' + (menu.nodename != '' ? '' : 'style="height:1px"') + OnStuff + '><td colspan=2 width="150px">' + (menu.nodename == '' ? '' : '' + menu.nodename) + '</td>' + (menu.nc != 0 ? '<td width=15><img src="https://lohcdn.com/images/' + Theme + '/test_m1ia.gif"></td>' : '') + '<tr>';
	return tmp;
}

function MenuBox(content, width, height) {
	return "<table border='0' align='center' cellpadding='0' cellspacing='0' style=' width: " + width + ";" + (height != '' ? "height: " + height : "") + "'><tr><td valign=top>" + content + "</td></tr></table>";
}

function admi(nodename, nodeurl, nodeframe, nodeparent, nodeimage, c) {
	lastmenu = lastmenu + 1;
	if (mymenu[lastmenu] == null) {
		mymenu[lastmenu] = new Array();
	}

	mymenu[lastmenu] = new NewMenu(lastmenu, nodename, nodeurl, nodeframe, nodeparent, 1, nodeimage, c);
	mymenu[nodeparent].nc += 1;
}

function reloadmenu() {
	loadmenu("menubar_m1");
}

function loadmenu(itemname) {
	if (document.getElementById(itemname) != null) {
		document.getElementById(itemname).innerHTML = Getmymenu(null, 0);
	}
}