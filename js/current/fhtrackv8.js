// Global variables
var Processing = 0;
var OPath = window.top.FHIPO;
var HPath = window.top.FHIPH;
var Skill = Skill;
var IPath = window.top.FHIPR;
var t = 1;
var OX = OX - 1;
var OY = OY - 1;
var MapNPC = MapNPC;
var MapPC = MapPC;
var MapSrc = MapSrc;
var GameID = GameID;
var Action = Action;
var strYoyo = '';
var BCounter = 0;
var Type2 = Type2;
var X = 0;
var Y = 0;
var MaxLevel = MaxLevel;
var MinLevel = MinLevel;
var Skill = Skill;

var MC = 0;
var Markers = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function Floors() {
	var strTest = '';
	var v = 0;
	var i = 0;
	strTest += '';
	var x = Math.floor((OX) / 25)
	var y = Math.floor((OY) / 25)
	if (x <= 0) {
		x = 0
	}
	if (y <= 0) {
		y = 0
	}
	if (y > 3) {
		y = 3
	}
	if (x > 3) {
		x = 3
	}
	strTest += '<tr height="100%" valign=top><td colspan=2 valign=top align=middle><table class="itemtext" cellpadding=1 cellspacing=1>';
	strTest += '<tr><td align=center title="Track Beasts" colspan=3 class="btn" ' + (Type2 != 'BEAST' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'BEAST\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'stm.gif" width=30 height=30 ' + (Type2 == 'BEAST' ? 'disabled' : '') + '></td></tr>';
	strTest += '<tr><td align=center title="Track Demons" colspan=3 class="btn" ' + (Type2 != 'DEMON' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'DEMON\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'ld1.gif" width=30 height=30 ' + (Type2 == 'DEMON' ? 'disabled' : '') + '></td></tr>';
	strTest += '<tr><td align=center title="Track Humanoids" colspan=3 class="btn" ' + (Type2 != 'HUMANOID' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'HUMANOID\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'sohum5.gif" width=30 height=30 ' + (Type2 == 'HUMANOID' ? 'disabled' : '') + '></td></tr>';
	strTest += '<tr><td align=center title="Track Magicals" colspan=3 class="btn" ' + (Type2 != 'MAGICAL' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'MAGICAL\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'ws2.gif" width=30 height=30 ' + (Type2 == 'MAGICAL' ? 'disabled' : '') + '></td></tr>';
	strTest += '<tr><td align=center title="Track Undeads" colspan=3 class="btn" ' + (Type2 != 'UNDED' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'UNDED\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'gum.gif" width=30 height=30 ' + (Type2 == 'UNDEAD' ? 'disabled' : '') + '></td></tr>';
	strTest += '<tr><td align=center title="Track Plants" colspan=3 class="btn" ' + (Type2 != 'PLANTS' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'PLANTS\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'manf.gif" width=30 height=30 ' + (Type2 == 'PLANT' ? 'disabled' : '') + '></td></tr>';
	strTest += '<tr><td align=center title="Track Insects" colspan=3 class="btn" ' + (Type2 != 'INSECT' ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoTr(\'INSECT\')"' : ' style="background-Color: ' + BGCOLOR_S + '; border: 1px inset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + IPath + 'kwm.gif" width=30 height=30 ' + (Type2 == 'INSECT' ? 'disabled' : '') + '></td></tr>';
	strTest += '</table></td></tr>';

	strTest += '</tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';
	strTest += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:20; background-Color: ' + BGCOLOR_S + '; border: 1px outset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:20" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:20; background-Color: ' + BGCOLOR_S + '; border: 1px outset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';
	strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset rgb(85, 98, 106); font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';
	strTest += '</table></td></tr>'
	getObj('Pages').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
}

function GoXY(xx, yy) {
	if (xx <= 0) {
		xx = 0
	}
	if (yy <= 0) {
		yy = 0
	}
	if (yy > 3) {
		yy = 3
	}
	if (xx > 3) {
		xx = 3
	}

	window.location.replace("?Type=" + Type2 + "&Action=" + Action + "&NPC=" + MapNPC + "&PC=" + MapPC + "&L=" + MaxLevel + "&L2=" + MinLevel + "&StartX=" + xx + "&StartY=" + yy + "&StartZ=" + GameID);
}

function smy(v) {
	if (getObj('TitleOf') != null) {
		getObj('TitleOf').innerHTML = Markers[v].t + '<br>Level: ' + Markers[v].ll + '<br>X: ' + (Math.floor(Markers[v].mx) + OX) + ', Y: ' + (Math.floor(Markers[v].my) + OY);
		getObj('PicZoom').innerHTML = '<img src=\'' + Markers[v].p + '\' width=20 height=20>';
		getObj('PicZoom').className = 'c' + Markers[v].xc;
		getObj('ResultsL').style.left = ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
		getObj('ResultsL').style.top = (Markers[v].my * 12) + 'px'
		getObj('ResultsL').style.display = '';
		window.top.InfoTip('' + Markers[v].p, 'Max Level: <b>' + MaxLevel + '</b><br>X: ' + (Math.floor(Markers[v].mx) + OX) + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
	}
}

function Plt(IType, l, Named, Picture, X, Y, a, pvpstatus) {
	if (IType >= 9) { IType = IType / 10; var Special = 1 } else { var Special = 0; }
	if (Picture == '') { Picture = 'na.gif' }
	if (Picture.indexOf('/') != -1) { } else { Picture = '' + IPath + Picture }

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(IType, l, Named, Picture, X, Y, a, pvpstatus);

	document.write('<img src=\'' + Picture + '\' id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid ' + window.top.GetAColor(a) + '; left: ' + (((X - OX) * 12) - 4) + '; top: ' + (((Y - OY) * 12) + 6) + ';\' onclick="Go(' + X + ',' + Y + ')" OnMouseOver="smy(' + MC + ');">')

	strYoyo += "<tr id='M" + MC + "' onmouseover='PCX(" + MC + ")' onmouseout='RCX(" + MC + ")' onclick='Go(" + X + ", " + Y + ")'><td width=10 style='width: 10; height: 10' valign=top><img src='" + Picture + "' width=10 height=10>" + (a > 0 ? "<br><img src='" + HPath + a + ".gif' width=10 height=10>" : "") + "</td><td style='cursor: pointer; color: " + window.top.GetAColor(a) + "; width: 100%'><b>" + Named + "</b><Br>X: " + X + ", Y: " + Y + ", Level: " + l + "</td><td>" + (pvpstatus != 0 ? "<img src='" + OPath + "/heart.png' title='PVP Enabled' width=16 height=16>" : "") + "</td></tr>";
	MC = MC + 1;
}


function MM(e) {
	e = e || window.event;
	if (e.pageX == null) {
		X = e.clientX;
		Y = e.clientY;
	} else {
		X = e.pageX;
		Y = e.pageY;
	}
	X = (X) + 5;
	Y = (Y) - 10;
	if (X < 12) { X = 12 }
	if (Y < 12) { Y = 12 }
	if (X > 300) { X = 300 }
	if (Y > 300) { Y = 300 }
	X = ((Math.floor(X / 12)) + (OX));
	Y = (Math.floor(Y / 12) + (OY))
	window.top.InfoTip('', 'Max Level: <B>' + MaxLevel + '</B><br>X: ' + X + ' Y:' + Y)
}

function MMV(e) {
	getObj('map').onmousemove = null;
	getObj('map').onclick = null;
	MM(e);
	Go(X, Y);
}

function BuildSearch2() {
	document.write('<div style=\'height: 300; overflow: auto\'><form action=\'fhtrack.asp\' id=editform name=editform method=post style=\'margin: 0px;\'><input type=hidden name=type value="' + Type2 + '"><input type=hidden name=Action id=Action value="' + Action + '"><input type=hidden name=StartX value=' + ((OX) / 25) + '><input type=hidden name=StartY value=' + ((OY) / 25) + '><input type=hidden name=StartZ value=' + GameID + '><table height=295 id=Yoyo class=\'weakercell\' cellpadding=2 cellspacing=0><tr><td></td><td class=\'weakercell\' colspan=2>Level Range: <input name=L2 size=3 maxlength=4 value=' + MinLevel + '> to <input name=L size=3 maxlength=4 value=' + MaxLevel + '>' + Adr('if (Processing == 0) {Processing = 1;getObj(\'editform\').submit()}', 'Track', 'Track') + (Action == 0 ? '<br>Display Non Player Characters (NPC): <input type=checkbox name=NPC ' + (MapNPC == 1 ? 'checked' : '') + ' value=1 style="width: 12px; height: 12px"><br>Display Player Characters (PC): <input type=checkbox style="width: 12px; height: 12px" name=PC value=1 ' + (MapPC == 1 ? 'checked' : '') + '>' : '') + '</td></tr><tr><td></td>' + (Type2 != 'HIDDEN' && Type2 != 'CRIMINAL' && Type2 != 'ENEMY' ? '<td class=\'btn\' onmouseover="this.className=\'btn btnhov\';" onmouseout="this.className =\'btn\';" style=\'width: 100%; color: gold\' colspan=2 onclick=\'Go2(' + (Action == 0 ? '1' : '0') + ')\'>' + (Action == 0 ? 'Track Map Spawns' : 'Track Active Spawns') + '</td></tr>' : '') + '' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></form></div>');
}

function newMarker(IType, l, Named, Picture, X, Y, a, pvpstatus) {
	this.xc = window.top.GetAColor(a);
	this.t = Named;
	this.a = a;
	this.i = IType;
	this.ll = l;
	this.p = Picture;
	this.mx = (X - OX);
	this.my = (Y - OY);
	this.pvpstatus = pvpstatus;
}


function RCX(v) {
	getObj('M' + v).style.backgroundColor = '';
	getObj('M' + v).style.cursor = '';
	window.top.hideTip();
}

function PCX(v) {
	window.top.InfoTip('' + Markers[v].p, '<b>' + Markers[v].t + '</b><br>Level: ' + Markers[v].ll + '<br>X: ' + Markers[v].mx + ', ' + Markers[v].my)
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}

function Go2(a) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('fhtrack.asp?Type=' + Type2 + '&L=' + MaxLevel + '&L2=' + MinLevel + '&NPC=' + MapNPC + '&PC=' + MapPC + '&Action=' + a + '&StartX=' + ((OX) / 25) + '&StartY=' + ((OY) / 25) + '&StartZ=' + GameID);
	}
}

function GoTr(a) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('fhtrack.asp?Type=' + a + '&L=' + MaxLevel + '&L2=' + MinLevel + '&NPC=' + MapNPC + '&PC=' + MapPC + '&Action=' + Action + '&StartX=' + ((OX) / 25) + '&StartY=' + ((OY) / 25) + '&StartZ=' + GameID);
	}
}

function Go(xx, yy) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
	}
}
