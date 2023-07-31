var IPath = window.top.FHIPI;
var LPath = window.top.FHIPL;
var RPath = window.top.FHIPR;
var VPath = "game/v/"
var FPath = "game/flags/"
var OPath = window.top.FHIPO;
var fr1 = 0;
var rix = 0;
var fs = 0;
var fs2 = 0;
var fr0 = 0;

var Processing = 0;
var Side = Side;
var checkleave = 0;
var leaveokay = 0;
var Sides = new Array(1);
Sides[0] = new Array();
Sides[1] = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


var OKDOKE = 1;
var CheckTurnTimer = 0;

function CheckTurn() {
	clearTimeout(CheckTurnTimer);
	CheckTurnTimer = setTimeout('CheckTurn2();', 5000);
}

function CheckTurn2() {
	window.top.EnterContent2('fhfcheck.asp?s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1)
	clearTimeout(CheckTurnTimer);
	CheckTurnTimer = setTimeout('CheckTurn2();', 5000);
}


function UnloadTest(s) {
	if (OKDOKE == 0) {
	}
	else {
		clearTimeout(CheckTurnTimer);
		//window.parent.EnterContent2('fhfloss.asp?side=' + s)
	}
}

function ShowButtons(how) {
	if (how == 0) {
		getObj("Buttons").style.visibility = 'hidden';
	} else {
		getObj("Buttons").style.visibility = 'visible';
	}
}

function Go1(strURL, s, y) {
	var stuff = getObj("fightwindow");
	stuff.disabled = true;
	Processing = 1;
	OKDOKE = 0;
	window.location.replace(strURL);
}

function Go2(strURL) {
	window.frames['ResultsOfit'].location.replace(strURL);
}

function Statty(ss) {
	window.frames['ResultsOfit'].document.open();
	window.frames['ResultsOfit'].document.write("<HTML><HEAD><TITLE></TITLE><LINK REL='stylesheet' TYPE='text/css' HREF='" + window.top.Theme + ".css'></HEAD><body class='fight' leftmargin=0 topmargin=0 style='padding-left: 0px;'><table class='fight' id='theal' style='padding-left: 0px;'>" + ss + "</table><div id=Info></div></body></HTML>");
	window.frames['ResultsOfit'].document.close();
}

function AC(s, i, VesselName, d, x, Picture, FlagPicture, FlagColor, Integrity, hpm, selected, cm, lc, mc, hc) {
	if (Sides[s][i] == null) {
		Sides[s][i] = new SideVars(s, i, VesselName, d, x, Picture, FlagPicture, FlagColor, Integrity, hpm, selected, cm, lc, mc, hc)
	} else {
		Sides[s][i].i = i;
		Sides[s][i].VesselName = VesselName;
		Sides[s][i].d = d;
		Sides[s][i].x = x;
		Sides[s][i].Picture = Picture;
		Sides[s][i].FlagPicture = FlagPicture;
		Sides[s][i].FlagColor = FlagColor;
		Sides[s][i].Integrity = Integrity;
		Sides[s][i].hpm = hpm;
		Sides[s][i].hpp = Math.round((100 / hpm) * Integrity);
		Sides[s][i].side = s;
		Sides[s][i].Color = LITE;
		Sides[s][i].Selected = selected;
		Sides[s][i].Hover = 0;
		Sides[s][i].Action = "";
		Sides[s][i].ActionData = 0;
		Sides[s][i].ActionActual = 0;
		Sides[s][i].ActionTarget = 0;
		Sides[s][i].ActionTargetSide = -1;
		Sides[s][i].cm = cm;
		Sides[s][i].lc = lc;
		Sides[s][i].mc = mc;
		Sides[s][i].hc = hc;
	}
}

function GetSelected(s) {
	var x = 0;
	for (x = 1; x <= 4; x++) {
		if (Sides[s][x] == null) {
		} else {
			if (Sides[s][x].Selected != 0) {
				return x;
			}
		}
	}
	return 0;
}

function GetFirstVessel(s) {
	var x = 0;
	for (x = 1; x <= 4; x++) {
		if (Sides[s][x] == null) {
		} else {
			if (Sides[s][x].d == 0) {
				return x;
			}
		}
	}
	return 0;
}

function DC(s, y) {
	var x = 0;
	for (x = 1; x <= 4; x++) {
		if (Sides[s][x] == null) {
		} else {
			if (Sides[s][x].Selected != 0) {
				Sides[s][x].Selected = 0;
			} else if (y == x) {
				Sides[s][x].Selected = 1;
			}
		}
	}

	DrawSides();
}

function GetSides(s) {
	var strout = '';
	var strbox = '';
	var y = 0;
	for (y = 1; y <= 4; y++) {
		if (Sides[s][y] == null) {
		} else {
			strbox = '<td width=40 height=40 style="width: 40px; height: 40px;' + (Sides[s][y].d != 0 ? 'filter: Grey();' : '') + 'background-repeat: no-repeat; background-image: URL(' + VPath + (Sides[s][y].Picture == '' ? 'na.gif' : 't_' + Sides[s][y].Picture) + ')"><table cellpadding=0 cellspacing=0 width=50 height=50><tr height=34><td colspan=2></td></tr><tr><td width=34></td><td style="background-color: ' + Sides[s][y].FlagColor + '"><img src="' + FPath + Sides[s][y].FlagPicture + '" width=16 height=16></td></tr></table></td>'
			strout = strout + '' + '<tr width="100%" id="box' + s + 'y' + y + '">' + (s == 0 ? '' + strbox : '') + '<td width="160" style="color: ' + Sides[s][y].Color + '" onclick="DC(' + s + ',' + y + ')" onmouseover="PC(' + s + ',' + y + ')" onmouseout="RC(' + s + ',' + y + ')"><table class="weakercell" style="padding-left: 3px;" cellpadding=0 cellspacing=0><tr><td colspan=2 style="' + (Sides[s][y].Selected != 0 ? 'color: gold' : '') + '"><b>' + Sides[s][y].VesselName + '</b></td></tr><tr><td colsan=2><table class="weakcell" style="font-size: 9px;" cellpadding=0><tr><td>HP:</td><td>' + (Sides[s][y].d != 0 ? 'Disabled' : window.top.PercentBoxS(40, Sides[s][y].hpp, 'red', '' + Sides[s][y].hpp + '%')) + '</td><td>CM:</td><td>' + window.top.PercentBoxS(40, Sides[s][y].cm, 'green', '' + Sides[s][y].cm + '%') + '</td></tr></table></td></tr><tr><td colsan=2><table class="weakcell" style="font-size: 9px;" cellpadding=0 cellspacing=0 width-"100%"><tr><td width="16%">LC:</td><td>' + Sides[s][y].lc + '</td><td width="16%">MC:</td><td>' + Sides[s][y].mc + '</td><td width="16%">HC:</td><td>' + Sides[s][y].hc + '</td></tr></table></td></tr></table></td>' + (s == 1 ? '' + strbox : '') + '</tr>';
			if (s == Side) {
				strout = strout + '<tr><td colspan=2><table class="weakcell" style="font-size: 9px;" cellpadding=0 cellspacing=0><tr><td>' + '<' + strClicky0 + ' onclick=\'FAC(' + s + ', ' + y + ', 3)\' title=\'Use Item\'><img src=\'' + OPath + 'ruby.png\'></button><' + strClicky0 + ' onclick=\'FAC(' + s + ', ' + y + ', 2)\' title=\'Repair\'><img src=\'' + OPath + 'wrench.png\'></button>' + (Sides[s][y].ActionTarget != 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + s + ', ' + y + ', 4)\' title=\'Cancel\'><img src=\'' + OPath + 'user_go.png\'></button>' : '') + '</td>' + (s == Side ? '<td nowrap style="padding-left: 5px;">' + (Sides[s][y].ActionTargetSide >= 0 ? Sides[s][y].Action + ' Vessel ' + (Sides[s][y].ActionTarget) : '') + '</td>' : '') + '</tr></table></td></tr>';
			} else {
				strout = strout + '<tr><td colspan=2>' + (Sides[s][y].d == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + s + ', ' + y + ', 1)\' title=\'Attack this enemy\'><img src=\'' + OPath + 'attack.png\'></button><' + strClicky0 + ' onclick=\'FAC(' + s + ', ' + y + ', 11)\' title=\'All vessels attack\'><img src=\'' + OPath + 'group_go.png\'></button><' + strClicky0 + ' onclick=\'FAC(' + s + ', ' + y + ', 5)\' title=\'Use Item\'><img src=\'' + OPath + 'ruby.png\'></button>' : '') + '</td></tr>';
			}
		}
	}
	return strout;
}

function FAC(s, y, action) {
	var x = 0;
	if (action == 1) {
		//Attack
		var s1 = GetSelected(Side);
		if (s1 == 0) {
			s1 = 1;
		}
		Sides[Side][s1].Action = "Attack";
		Sides[Side][s1].ActionActual = action;
		Sides[Side][s1].ActionData = 0;
		Sides[Side][s1].ActionTarget = y;
		Sides[Side][s1].ActionTargetSide = s;
	} else if (action == 11) {
		//Attack
		for (x = 1; x <= 4; x++) {
			if (Sides[Side][x] == null) {
			} else {
				Sides[Side][x].Action = "Attack";
				Sides[Side][x].ActionData = 0;
				Sides[Side][x].ActionActual = action;
				Sides[Side][x].ActionTarget = y;
				Sides[Side][x].ActionTargetSide = s;
			}
		}
	} else if (action == 2) {
		//Repair
		Sides[s][y].Action = "Repair";
		Sides[s][y].ActionData = 0;
		Sides[s][y].ActionActual = action;
		Sides[s][y].ActionTarget = y;
		Sides[s][y].ActionTargetSide = s
	} else if (action == 3) {
		//Use defensive Item
		Go2('fhnturni.asp?type=' + action + '&s=' + s + '&s2=' + s + '&left=' + y + '&right=' + y);
	} else if (action == 5) {
		//Use offensive Item
		var s1 = GetSelected(Side);
		if (s1 == 0) {
			s1 = 1;
		}
		Go2('fhnturni.asp?type=' + action + '&s=' + Side + '&s2=' + s + '&left=' + s1 + '&right=' + y);
	} else if (action == 4) {
		Sides[s][y].Action = "";
		Sides[s][y].ActionData = 0;
		Sides[s][y].ActionActual = 0
		Sides[s][y].ActionTarget = 0;
		Sides[s][y].ActionTargetSide = -1;
	} else if (action == 0) {
		var stuff = '';
		for (x = 1; x <= 4; x++) {
			if (Sides[Side][x] == null) {
				stuff = stuff + "&a=0&ad=0&at=0&ats=-1"
			} else {
				stuff = stuff + "&a=" + Sides[Side][x].ActionActual + "&ad=" + Sides[Side][x].ActionData + "&at=" + Sides[Side][x].ActionTarget + "&ats=" + Sides[Side][x].ActionTargetSide
			}
		}
		Go1('?s=' + Side + '&s2=' + (Side == 0 ? 1 : 0) + stuff, s, y);
	}
	DrawSides();
}

function DrawSides() {
	var strout = '';
	var Side0 = '' + GetSides(0);
	var Side1 = '' + GetSides(1);

	getObj('fightwindow').innerHTML = '<table width=400 cellpadding=1 cellspacing=0 height=290><tr height=268><td width="50%" id=sideh0 valign=top><table>' + Side0 + '</table></td><td width="50%" id=sideh1 valign=top><table>' + Side1 + '</table></td></tr><tr valign=bottom><td valign=bottom><' + strClicky3 + ' onclick=\'FAC(' + Side + ', 0, 0)\' title=\'Take Turn\'>Take Turn</button></td><td><' + strClicky0 + ' onclick=\'ChangeBack("ocean1.jpg")\' title=\'Change ocean appearance\'>1</button><' + strClicky0 + ' onclick=\'ChangeBack("ocean2.jpg")\' title=\'Change ocean appearance other\'>2</button><' + strClicky0 + ' onclick=\'ChangeBack("ocean3.jpg")\' title=\'Change ocean appearance other 2\'>3</button><' + strClicky0 + ' onclick=\'ChangeBack("ocean4.jpg")\' title=\'Change ocean appearance old style\'>4</button></td></tr></table>';
}

function ChangeBack(newback) {
	window.top.sbattle = newback;
	getObj('fightwindow').style.background = 'URL(https://lohcdn.com/game/v/' + window.top.sbattle + ')';
}

function SideVars(sidex, i, VesselName, d, x, Picture, FlagPicture, FlagColor, Integrity, hpm, selected, cm, lc, mc, hc) {
	this.i = i;
	this.VesselName = VesselName;
	this.d = d;
	this.x = x;
	this.Picture = Picture;
	this.FlagPicture = FlagPicture;
	this.FlagColor = FlagColor;
	this.Integrity = Integrity;
	this.hpm = hpm;
	this.hpp = Math.round((100 / hpm) * Integrity);
	this.side = sidex;
	this.Color = LITE;
	this.Selected = selected;
	this.Hover = 0;
	this.Action = '';
	this.ActionData = 0;
	this.ActionTarget = 0;
	this.ActionActual = 0;
	this.ActionTargetSide = -1;
	this.cm = cm;
	this.lc = lc;
	this.mc = mc;
	this.hc = hc;

}

function AutoAttack() {
	var x = 0;
	for (x = 1; x <= 4; x++) {
		if (Sides[Side][x] == null) {
		} else {
			if (Sides[Side][x].ActionActual == 0) {
				var fv = GetFirstVessel((Side == 0 ? 1 : 0));
				if (fv > 0) {
					Sides[Side][x].Action = "Attack";
					Sides[Side][x].ActionData = 0;
					Sides[Side][x].ActionActual = 1;
					Sides[Side][x].ActionTarget = fv;
					Sides[Side][x].ActionTargetSide = (Side == 0 ? 1 : 0);
				}
			}
		}
	}
}

function RC(s, y) {
	var stuff = getObj("box" + s + "y" + y);
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
	stuff.style.color = Sides[s][y].Color;
}


function PC(s, y) {
	var stuff = getObj("box" + s + "y" + y);
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}
