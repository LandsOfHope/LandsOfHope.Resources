var tmpMenu = new Array();
var tmpMenuC = 0;
var FormatCount = 0;
var Welcome = 'Welcome to <b>Lands of Hope</b><br><br><b>Links:</b><br>None';
var ButtonDirty = 0;
var FC = new Array(20);

if (window.top.Tip == null) {
	var ToolTipOn = 0;
} else {
	var ToolTipOn = window.top.Tip;
}

if (window.top.Theme == null) {
	var Theme = "Hope";
} else {
	var Theme = window.top.Theme;
}

if (window.top.BGCOLOR != null) {
	var BGCOLOR = window.top.BGCOLOR;
	var BGCOLOR_S = window.top.BGCOLOR_S;
	//Text Colors
	var COLOR1 = window.top.COLOR1;
	var COLOR1_S = window.top.COLOR1_S;
	//Border Colors
	var BORDER1 = window.top.BORDER1;
	var BORDER1_S = window.top.BORDER1_S;
	var LITE = window.top.LITE;
	var DARK = window.top.DARK;
} else {
	var BGCOLOR = '#333333';
	var BGCOLOR_S = '#444444';
	//Text Colors
	var COLOR1 = 'RGB(140,140,178)';
	var COLOR1_S = 'rgb(183, 197, 206)';
	//Border Colors
	var BORDER1 = '#444444';
	var BORDER1_S = '#444444';
	var LITE = 'white';
	var DARK = 'black';
}

document.write('<script src="https://lohcdn.com/js/current/tooltip.js" language="JavaScript"></script>');
document.write('<script src="https://lohcdn.com/js/current/keystroke.js" language="JavaScript"></script>');
document.write('<script src="https://lohcdn.com/js/current/prompts.js" language="JavaScript"></script>');

var strButtonF = "font-weight: normal; font-family: Helvetica; font-size: 11px; vertical-align:top"
var strButtonx = "cursor: pointer; " + strButtonF;
var strButtonz = "height: 15px; cursor: pointer; " + strButtonF;

var strClicksns = FormatS();
var strClicks = " " + FormatS();
var strClicky = "button style=\"width:54px;\"" + strClicks
var strClicky2 = "button style=\"width:79px;\"" + strClicks
var strClicky3 = "button style=\"width:104px;\"" + strClicks
var strClicky4 = "button style=\"width:134px;\"" + strClicks
var strClicky5 = "button style=\"width:204px;\"" + strClicks
var strClicky1 = "button style=\"width:44px;\"" + strClicks
var strClicky0 = "button style=\"width:24px;padding: 0px; margin: 0px;\"" + strClicks
var strClickyx = "button style=\"width:34px;\"" + strClicks
window.history.forward(1);


function clickIE4() {
	if (event.button == 2) {
		return false;
	}
}

function clickNS4(e) {
	if (document.layers || document.getElementById && !document.all) {
		if (e.which == 2 || e.which == 3) {
			return false;
		}
	}
}

if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) {
	document.onmousedown = clickIE4;
}

document.oncontextmenu = function anonymous(event) { return false; }


function FormatS() {
	return " class=\"tbtn\" onmouseover=\"this.className = \'tbtn btnhov\';\" onmouseout=\"this.className = \'tbtn\';\"";
}

function AdBr() {
	document.write("<br>");
}

function AdB(Actions, Titles, Names) {
	document.write("<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3))) + " type=button id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");window.location.replace(\'" + Actions + "\');\" title=\"" + Titles + "\">" + Names + "</button>");
	FormatCount = FormatCount + 1
}

function AdFB(Actions, Titles, Names) {
	document.write("<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3))) + " type=button id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");OKDOKE = 0; window.location.replace(\'" + Actions + "\');\" title=\"" + Titles + "\">" + Names + "</button>");
	FormatCount = FormatCount + 1
}

function ButtonC(stuff, fcin) {
	window.top.ButtonDirty = 1;
	//	stuff.disabled=true;
	ReF(fcin);
}

function tempMenu(Actions, Titles, PictureID, Names) {
	this.Actions = Actions;
	this.Titles = Titles;
	this.PictureID = PictureID;
	this.Names = Names;
}

function Adin(Actions, Titles, PictureID, Names) {
	window.top.tmpMenu[window.top.tmpMenuC] = new tempMenu(Actions, Titles, PictureID, Names);
	window.top.tmpMenuC = window.top.tmpMenuC + 1;
}


function Adi(Actions, Titles, PictureID, Names) {
	document.write("<" + strClicky0 + " type=button id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");" + Actions + ";\" title=\"" + Titles + "\"><img src=\"" + window.top.FHIPO + PictureID.toLowerCase() + ".png\" border=0></button>");
	FormatCount = FormatCount + 1
}

function Adir(Actions, Titles, PictureID, Names) {
	var returnx = '';
	returnx = '<' + strClicky0 + ' type=button id=FC' + FormatCount + ' onclick=\'ButtonC(this, ' + FormatCount + ');' + Actions + ';\' title=\'' + Titles + '\'><img src=\'' + window.top.FHIPO + PictureID.toLowerCase() + '.png\'></button>';
	FormatCount = FormatCount + 1
	return returnx;
}

function Adirf(Titles, PictureID, Names) {
	var returnx = '';
	returnx = '<' + strClicky0 + ' type=submit id=FC' + FormatCount + ' title=\'' + Titles + '\'><img src=\'' + window.top.FHIPO + PictureID.toLowerCase() + '.png\'></button>';
	FormatCount = FormatCount + 1
	return returnx;
}

function ActionList() {
	AddButton(-3, 'Text', 'Text', 'Picture');
	var y = 0;
	for (y = 0; y < window.top.tmpMenuC; y++) {
		var m = window.top.tmpMenu[y];
		if (m != null) {
			window.top.AddSubMenu(-3, m.Titles, '', '', m.Actions, window.top.FHIPO + m.PictureID.toLowerCase() + ".png");
		}
	}
	//AddSubMenu(-3, Names, '', '', Actions);
	//window.top.tmpMenuC = 0;
	window.top.ShowSubMenu(-3, 'actionlist', 0);
}

function ReF(slot) {
	var obj = getObj('FC' + slot);
	if (obj == null) {
	} else {
		obj.style.color = '#ff6666';
		FC[slot] = obj.onclick;
		setTimeout(() => ReF2(slot), 5000);
		obj.onclick = null;
	}
}

function ReF2(slot) {
	var obj = getObj('FC' + slot);
	if (obj == null) {
	} else {
		obj.style.color = '';
		if (FC[slot] != '') {
			obj.onclick = FC[slot];
			FC[slot] = '';
		}
	}
}


function Pages(Count, CurPage) {
	PagesL(Count, CurPage, 12, 0);
}

function AddPageButton(i, CurPage, ii, pagebox) {
	return '<td ' + (CurPage != i ? ' class="btn" onmouseover="this.className = \'btn btnhov\'" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoP(' + i + ',\'' + pagebox + '\');"' : ' class="btn btnhov" style="width:20; font-weight: bold; border: 1px dotted ' + COLOR1 + '"') + '>' + ii + '</td>';
}


function AddNavButton(CurPage, Count, PageLimit, ii, offsetp, pagebox) {
	return '<td class="btn" onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="PagesL(' + Count + ',' + CurPage + ',' + PageLimit + ',' + offsetp + ',\'' + pagebox + '\')">' + ii + '</td>';
}

function AddPageButton2() {
	return '<td class="btn" style="width:20; font-weight: bold; border: 1px dotted ' + COLOR1 + '">1</td>';
}

function PagesL(Count, CurPage, PageLimit, offsetp, pagebox) {
	var strTest = '';
	var v = 0;
	var startp = 1;
	var endp = Count;
	var starth = '';
	var endh = '';
	var minp = Math.floor(PageLimit / 2);
	var maxp = PageLimit + minp;
	var i = 0;
	if (offsetp == 0) { offsetp = CurPage }
	if (offsetp > Count) { offsetp = Count - minp }
	if (pagebox == null) {
		pagebox = 'Pages';
	}
	if (Count > PageLimit + minp) {
		startp = offsetp - minp;
		if (startp < 1) { startp = 1 };
		if (offsetp < 1) { offsetp = 1 };
		endp = startp + maxp;
		if (endp > Count) {
			endp = Count;
		}
		starth = AddNavButton(CurPage, Count, PageLimit, '<<', 1, pagebox) + AddNavButton(CurPage, Count, PageLimit, '<', (startp - PageLimit) - 1, pagebox);
		endh = AddNavButton(CurPage, Count, PageLimit, '>', (endp + minp) + 1, pagebox) + AddNavButton(CurPage, Count, PageLimit, '>>', Count - PageLimit, pagebox);
	}
	if (Count == 0) {
		strTest += AddPageButton2();
	} else {
		for (i = startp; i <= endp; i++) {
			strTest += AddPageButton(i, CurPage, i, pagebox);

		}
	}
	if (getObj(pagebox) != null) {
		getObj(pagebox).innerHTML = '<table><tr><td class=\'weakercell\'>Page: </td>' + starth + '' + strTest + '' + endh + '</tr></table>';
	}
}


function Ada(Actions, Titles, Names) {
	document.write("<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 3 ? strClicky1 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3)))) + " type=button id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");" + Actions + ";\" title=\"" + Titles + "\">" + Names + "</button>");
	FormatCount = FormatCount + 1
}

function Ads(Actions, Titles, Names) {
	document.write("<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 3 ? strClicky1 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3)))) + " type=button id=FC" + FormatCount + " onclick=\"" + Actions + ";\" title=\"" + Titles + "\">" + Names + "</button>");
	FormatCount = FormatCount + 1
}

function Adf(Actions, Titles, Names) {
	document.write("<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 3 ? strClicky1 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3)))) + " type=submit id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");" + Actions + "\" title=\"" + Titles + "\">" + Names + "</button>");
	FormatCount = FormatCount + 1
}

function Adf2(Actions, Titles, Names) {
	var returnx = '';
	returnx = "<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 3 ? strClicky0 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3)))) + " type=submit id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");" + Actions + "\" title=\"" + Titles + "\">" + Names + "</button>";
	FormatCount = FormatCount + 1
	return returnx;
}

function Adr2(Actions, Titles, Names) {
	var returnx = '';
	returnx = '<' + (Names.length <= 1 ? strClicky0 : (Names.length <= 3 ? strClicky1 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3)))) + ' type=button id=FC' + FormatCount + ' onclick=\'ButtonC(this, ' + FormatCount + ');' + Actions + ';\' title=\'' + Titles + '\'>' + Names + '</button>';
	FormatCount = FormatCount + 1
	return returnx;
}


function Adr(Actions, Titles, Names) {
	var returnx = '';
	returnx = "<" + (Names.length <= 1 ? strClicky0 : (Names.length <= 3 ? strClicky1 : (Names.length <= 5 ? strClicky : (Names.length <= 8 ? strClicky2 : strClicky3)))) + " type=button id=FC" + FormatCount + " onclick=\"ButtonC(this, " + FormatCount + ");" + Actions + ";\" title=\"" + Titles + "\">" + Names + "</button>";
	FormatCount = FormatCount + 1
	return returnx;
}

function AdH() {
	var ahh = window.onhelp;
	if (ahh != null) {
		ahh = ahh.toString()
		ahh = ahh.substr(ahh.indexOf("{") + 1);
		ahh = ahh.substr(1, ahh.length - 2);
		Adi(ahh + ';', 'Display relevant help', 'help', '');
	}
	ahh = window.top.Interface.location.href;
	if (ahh != null) {
		Adi('window.top.PopupHelper(\'' + ahh + '\');', 'Helper tutorial', 'information', '');
	}
}

function PopupHelper(ahh) {
	window.top.loadwindow2('fhhelper2.asp?url=' + ahh + '', 300, 300, 'iwindow', 'Tutorials');
}

function fxn(stuff) {
	var str = '';
	var s;

	for (s = 0; s < stuff.value.length; s++) {
		if (stuff.value.charCodeAt(s) >= 48 && stuff.value.charCodeAt(s) <= 57) {
			str = str + '' + stuff.value.charAt(s);
		}
	}
	stuff.value = str;
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
	if (stuff.value.length > 1 && stuff.value.charCodeAt(0) == 48) {
		stuff.value = stuff.value.substr(1, stuff.value.length - 1)
	}
}

function fxkp(e) {
	e = e || window.event;
	if (e != null) {
		var f = e.keyCode;
		if (e.which != null && f == 0) {
			f = e.which;
		}

		if ((f < 45 || f > 57) && f != 8 && f != 9 && f != 13) {
			return false;
		} else {
			//	alert(1);
			return true;
		}
	} else {
		return true;
	}
}

function FormMoney(fin, mmin) {
	var harhar = mmin;
	var m = Math.floor(harhar / 1000000)
	var g = Math.floor(harhar / 10000) - (m * 100)
	var s = Math.floor(harhar / 100) - Math.floor(((g * 100) + (m * 10000)))
	var b = Math.floor(harhar) - Math.floor(((s * 100) + (g * 10000) + (m * 1000000)))

	return "<img src=\"" + window.top.FHIPO + "gkp.gif\"><input title=\"pp\" name=cpp" + fin + " id=cpp" + fin + " value=" + m + " size=3 maxlength=3 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\" onkeyup=\"CalcM('" + fin + "', this)\"><img src=\"" + window.top.FHIPO + "gp.gif\"><input title=\"gp\" name=cg" + fin + " id=cg" + fin + " value=" + g + " size=2 maxlength=2 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\" onkeyup=\"CalcM('" + fin + "', this)\"><img src=\"" + window.top.FHIPO + "sp.gif\"><input title=\"sp\" name=cs" + fin + " id=cs" + fin + " value=" + s + " size=2 maxlength=2 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\" onkeyup=\"CalcM('" + fin + "', this)\"> <img src=\"" + window.top.FHIPO + "bp.gif\"><input title=\"bp\" name=cb" + fin + " id=cb" + fin + " value=" + b + " size=2 maxlength=2 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\" onkeyup=\"CalcM('" + fin + "', this)\">";
}

function PFormMoney(fin, mmin) {
	var harhar = mmin;
	var m = Math.floor(harhar)

	return "<img src=\"game/pirate/c4.png\"><input title=\"Doubloons\" name=cpd" + fin + " id=cpd" + fin + " value=" + m + " size=3 maxlength=10 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\" onkeyup=\"CalcM('" + fin + "', this)\">";
}

function CalcM(fin, stuff) {
	if (stuff.name == "cpd" + fin || stuff.name == "cps" + fin || stuff.name == "cpc" + fin || stuff.name == "cpp2" + fin) {
		var m = (stuff.name == "cpd" + fin ? stuff.value : getObj("cpd" + fin).value)
		var g = 0
		var s = 0
		var b = 0
	} else {
		var m = (stuff.name == "cpp" + fin ? stuff.value : getObj("cpp" + fin).value) * 1000000
		var g = (stuff.name == "cg" + fin ? stuff.value : getObj("cg" + fin).value) * 10000
		var s = (stuff.name == "cs" + fin ? stuff.value : getObj("cs" + fin).value) * 100
		var b = (stuff.name == "cb" + fin ? stuff.value : getObj("cb" + fin).value)
	}
	getObj("" + fin).value = Math.abs(m) + Math.abs(g) + Math.abs(s) + Math.abs(b)
}

function LoadTips() {
	document.write("<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\"><tr><td class=\"navmenu2\" id=HTips><table width=\"100%\" cellpadding=0 cellspacing=0><tr><td class=\"menul\">&nbsp;&nbsp;&nbsp;</td><td class=\"title\" width=\"100%\" style=\"padding-left: 0px\" align=center>Tips and Info</td><td class=\"menur\">&nbsp;&nbsp;&nbsp;</td></tr></table></td></tr><tr><td id=ToolTip name=ToolTip width=\"100%\"><table class='nav4' style='height: 100%'><tr><td class='weakercell'>" + Welcome + "</td></tr></table></td></tr></table>");
}

function GetRealm(realmid) {
	return window.top.Games[realmid].GameName
}

function GetRealma(realmid) {
	return window.top.Games[realmid].GameAbbv
}

function GetAColor(alin) {
	return (alin == 0 ? 'yellow' : (alin == 1 ? 'white' : (alin == 2 ? 'gold' : 'red')))
}
function GetAImg(alin) {
	return (alin == 0 ? '' : window.top.FHIP + 'h/' + (alin == 1 ? '1' : (alin == 2 ? '2' : '3')) + '.gif')
}

function GetAName(alin) {
	return (alin == 0 ? '' : (alin == 1 ? 'The Exiles' : (alin == 2 ? 'The Society' : 'The Reapers')))
}

function RF(in1, in2) {
	window.top.PF(in1, in2);
}

function DrawImage(imgpath, imgw, imgh) {
	return '<img src=\'' + imgpath + '\' onerror=\'this.src="https://lohcdn.com/na.gif"\'>';
}

function DrawImage2(imgpath, imgw, imgh) {
	return "<img src='" + imgpath + "' onerror='this.src=\"https://lohcdn.com/na.gif\"'>";
}

function PopupMonsterInfo(MID) {
	window.top.loadwindow2('fhstat4.asp?CharsAt=' + MID, 615, 300, 'iwindow', 'Monster Popup');
}

function PopupItemInfo(IIDx, IINx) {
	window.top.loadwindow2('im' + (IIDx > 0 ? '4' : '3') + '.asp?Test=' + Math.abs(IIDx) + '&Bonus=0&Material=', 300, 300, 'iwindow', '' + IINx);
}

function PopupCompare(MID) {
	window.top.loadwindow2('icompare.asp?CharsAt=' + MID, 615, 300, 'iwindow', 'Compare Items');
}

function getObj(objn) {
	if (document.getElementsByName(objn).length <= 1) {
		return document.getElementById(objn);
	} else {
		return document.getElementsByName(objn);
	}
}

function GetFColor(alin) {
	return (alin == 167 ? 'blue' : (alin == 168 ? 'green' : (alin == 169 ? 'white' : (alin == 170 ? 'red' : (alin == 171 ? '#CC3333' : (alin == 172 ? '#3366FF' : (alin == 173 ? 'orange' : (alin == 174 ? 'purple' : 'white'))))))));
}
function GetFImg(alin) {
	return (alin == 0 ? '' : window.top.FHIP + 'h/' + alin + '.gif');
}

function GetFName(alin) {
	return (alin == 167 ? 'Myzan Defenders' : (alin == 168 ? 'Dark Hollow Clan' : (alin == 169 ? 'Council of Truth' : (alin == 170 ? 'Tenth Legion' : (alin == 171 ? 'Pirate League' : (alin == 172 ? 'Myzan Navy' : (alin == 173 ? 'Traders Alliance' : (alin == 174 ? 'Drakgard' : 'No Faction'))))))));
}

function SendLink2(ltype, lvalue, lp, lpp, ls, ln, lc, la) {
	window.top.sendRequest('fhlink2.asp?Type=' + ltype + '&CharsAt=' + lvalue + '&Name=' + ln + (ls != 0 ? '&s=' + ls : '') + (la != null ? '&a=' + la : '') + '&c=' + encodeURIComponent(lc) + '&l1=' + lp + '&l2=' + lpp);
}