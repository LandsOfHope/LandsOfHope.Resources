var IPath = window.top.FHIPI;
var LPath = window.top.FHIPL;
var RPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var Tutorial = Tutorial;
var fr1 = 0;
var rix = 0;
var fs = 0;
var fs2 = 0;
var fr0 = 0;
var fp = 0;
var fn = 0;
var aa = 0;
var fdp = 0;
var Processing = 0;
var Side = Side;
var checkleave = 0;
var leaveokay = 0;
var Fighters = new Array();
var FightCounter = 0;
var lngsel0 = -1;
var lngsel1 = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

var OKDOKE = 1;
var CheckTurnTimer = 0;

window.onunload = function (evt) {
	window.onunload = null;
	if (OKDOKE == 0) {
	} else {
		clearTimeout(CheckTurnTimer);
		//window.location.replace('fhfloss.asp?side=' + Side);
	}
}

function CheckTurn() {
	clearTimeout(CheckTurnTimer);
	CheckTurnTimer = setTimeout('CheckTurn2();', 5000);
}

function CheckTurn2() {
	window.top.EnterContent2('fhfcheck.asp?s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1)
	clearTimeout(CheckTurnTimer);
	CheckTurnTimer = setTimeout('CheckTurn2();', 5000);
}


function UnloadTest() {
}

function ShowButtons(how) {
	if (how == 0) {
		getObj("Buttons").style.visibility = 'hidden';
	} else {
		getObj("Buttons").style.visibility = 'visible';
	}
}

function DC(v) {
	getObj('Info').innerHTML = CharInfo(v)
	if (Fighters[v].s == Side && aa != 3 && aa != 35 && aa != 4 && aa != 44) {
		fr0 = Fighters[v].i;
		rix = Fighters[v].ri;
		fs = Fighters[v].s;
		fn = Fighters[v].nu
		fp = Fighters[v].pa
		fdp = Fighters[v].dp
		getObj('Pic0').innerHTML = "<img " + (Fighters[v].d != 0 ? "style='filter: Gray'" : "") + " title='" + Fighters[v].CharName + "' src='" + RPath + (Fighters[v].p == '' ? 'na.gif' : Fighters[v].p) + "'>";
	} else {
		fr1 = Fighters[v].i;
		fs2 = Fighters[v].s;
		getObj('Pic1').innerHTML = "<img " + (Fighters[v].d != 0 ? "style='filter: Gray'" : "") + " title='" + Fighters[v].CharName + "' src='" + RPath + (Fighters[v].p == '' ? 'na.gif' : Fighters[v].p) + "'>";
	}
	getObj('Buttons').innerHTML = '' + (fr0 != 0 && fr1 != 0 && Fighters[v].d == 0 ? (fp == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 1)\' title=\'Attack enemy\'><img src=\'' + OPath + 'sword.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 41)\' title=\'Attack with readied melee styles (Abilities > Ready Styles)\'><img src=\'' + OPath + 'sword_add.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 33)\' title=\'Attack with Ranged only\'><img src=\'' + OPath + 'sound.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 43)\' title=\'Attack with readied ranged styles (Abilities > Ready Styles)\'><img src=\'' + OPath + 'sound_add.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 31)\' title=\'Attack with left hand only\'><img src=\'' + OPath + 'sword_back.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 32)\' title=\'Attack with right hand only\'><img src=\'' + OPath + 'sword_next.png\' width=16 height=16></button><br>' : '<' + strClicky2 + ' onclick=\'FAC(' + v + ', 10)\' title=\'Attempt to break Paralysis\'>Un-paralyse</button><br>') + (fn == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 2)\' title=\'Cast offensive spell on Target\'><img src=\'' + OPath + 'orb.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 22)\' title=\'Cast readied offensive spell on target (Abilities > Ready Spell)\'><img src=\'' + OPath + 'orb_add.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 7)\' title=\'Cast Defensive spell on Target\'><img src=\'' + OPath + 'compass.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 27)\' title=\'Cast readied defensive spell on target (Abilities > Ready Spell)\'><img src=\'' + OPath + 'compass_add.png\' width=16 height=16></button>' + (fdp > 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 70)\' title=\'Activate Demon power\'><img src=\'' + OPath + 'the-storybook_16.png\' width=16 height=16></button>' : '') + '<br><' + strClicky0 + ' onclick=\'FAC(' + v + ', 3)\' title=\'Cast a Heal or Cure spell\'><img src=\'' + OPath + 'heart.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 35)\' title=\'Cast a readied heal or cure spell (Abilities > Ready Spell)\'><img src=\'' + OPath + 'heart_add.png\' width=16 height=16></button>' : '<' + strClicky2 + ' onclick=\'FAC(' + v + ', 9)\' title=\'Attempt to break nulification\'>Un-nulify</button>') + (fp == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 4)\' title=\'Use a Bandage, Potion or Food from Inventory\'><img src=\'' + OPath + 'ruby.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 44)\' title=\'Use a readied item (Inventory > Actions > Ready Item)\'><img src=\'' + OPath + 'ruby_add.png\' width=16 height=16></button>' + (Tutorial == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 14)\' title=\'Use a combat offensive item.\'><img src=\'' + OPath + 'heart_delete.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 60)\' title=\'Use Scare Tactics - Terror.\'><img src=\'' + OPath + 'scare.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 80)\' title=\'Use Targeted attack.\'><img src=\'' + OPath + 'chart_line.png\' width=16 height=16></button>' : '') : '') + '<br><' + strClicky0 + ' onclick=\'FAC(' + v + ', 5)\' title=\'Skip this turn with 100% regenerate boost\'><img src=\'' + OPath + 'resultset_last.png\' width=16 height=16></button>' : '');
}

function SelE() {
	var r = GetFirstFighter(Side)
	if (r >= 0) {
		DC(r);
	}
}

function SelS() {
	if (fs2 == fs) {
		var r = GetFirstFighter((Side == 0 ? 1 : 0))
		if (r >= 0) {
			DC(r);
		}
	}
}

function GetFirstFighter(side) {
	var x = 0;
	var retVal = -1;
	for (x = 0; x < Fighters.length; x++) {
		if (Fighters[x].s == side && retVal == -1) {
			retVal = x;
		}

	}
	return retVal;
}

function disablebuttons(v) {
	toggleDisabled(getObj('Buttons'), v);
}

function toggleDisabled(el, v) {
	try {
		el.disabled = v;
	}
	catch (E) { }
	if (el.childNodes && el.childNodes.length > 0) {
		for (var x = 0; x < el.childNodes.length; x++) {
			toggleDisabled(el.childNodes[x], v);
		}
	}
}

function Go1(strURL, v) {
	disablebuttons(true);
	Processing = 1;
	OKDOKE = 0;
	window.location.replace(strURL);
}

function Go2(strURL) {
	window.frames['ResultsOfit'].location.replace(strURL);
}

function FAC(v, action) {
	if (Processing == 0) {
		aa = action;
		if (action != 6) {
			if (action == 4) {
				SelE();
				Go2('fhfturni.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 3) {
				SelE();
				Go2('fhfturns.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 80) {
				SelE();
				Go2('fhfturntarg.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 35 || action == 44) {
				SelE();
				Go1('?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1, v);
			} else if (action == 60) {
				SelS();
				Go2('fhfturnt.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 2 || action == 7) {
				SelS();
				Go2('fhfturnc.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 8) {
				SelS();
				Go2('fhfturnp.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 31 || action == 1 || action == 32 || action == 33) {
				SelS();

				Go2('fhfturna.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 14) {
				SelS();
				Go2('fhfturni2.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else {
				if (fs2 == fs) {
					SelS();
				} else {
					Go1('?type=' + action + '&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1, v);
				}
			}
		} else {
			Go1('?type=' + action + '&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1, v);
		}
	} else {

	}
}

function Statty(ss) {
	window.frames['ResultsOfit'].document.open();
	window.frames['ResultsOfit'].document.write("<HTML><HEAD><TITLE></TITLE><LINK REL='stylesheet' TYPE='text/css' HREF='" + window.parent.parent.Theme + ".css'></HEAD><body class='fight' leftmargin=0 topmargin=0>" + ss + "<div id=Info></div></body></HTML>");
	window.frames['ResultsOfit'].document.close();
}

function PromptReturn(returnVal, pb) {
}

function setFight1(s) {
	getObj('Fight1').innerHTML = s;
}

function setFight2(s) {
	getObj('Fight2').innerHTML = s;
}

function AC(s, i, CharName, Picture, l, d, hp1, hp2, mana1, mana2, stam1, stam2, nu, pa, rp, tp, ri, dp) {
	var Color = LITE;
	if (Fighters[FightCounter] == null) {
		Fighters[FightCounter] = new Array();
	}
	Fighters[FightCounter] = new Fighter(s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, rp, tp, ri, hp2, mana2, stam2, dp);

	if (hp1 > 0) {
		if (s == 0 && lngsel0 < 0) {
			lngsel0 = FightCounter
		} else if (lngsel1 < 0 && s == 1) {
			lngsel1 = FightCounter
		}
	}

	var hp1p = window.top.GetPerc(hp1, hp2);
	var mana1p = window.top.GetPerc(mana1, mana2);
	var stam1p = window.top.GetPerc(stam1, stam2);

	document.write('<tr width="100%"><td><img src="' + RPath + (Picture == '' ? 'na.gif' : Picture) + '" width=40 height=40></td><td width="100%" style="color: ' + Color + '" id="Fighter' + FightCounter + '" onclick="DC(' + FightCounter + ')" onmouseover="PC(' + FightCounter + ')" onmouseout="RC(this)"><table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td colspan=2><b>' + CharName + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxSmall(120, hp1p, 'red', '' + hp2 + '/' + hp1) + '</td></tr><tr><td>SP:</td><td>' + window.top.PercentBoxSmall(120, stam1p, 'yellow', '' + stam2 + '/' + stam1) + '</td></tr><tr><td>MP:</td><td>' + window.top.PercentBoxSmall(120, mana1p, 'blue', '' + mana2 + '/' + mana1) + '</td></tr><tr><td colspan=2>' + (rp > 0 ? '<img src="' + OPath + 'user_red.png" title="Rage points">:' + rp : '') + '' + (tp > 0 ? '<img src="' + OPath + 'scare.png" title="Terror points">:' + tp : '') + '</td></tr></table></td></tr>');
	FightCounter = FightCounter + 1;
}


function Finish() {
	if (lngsel0 >= 0) {
		DC(lngsel0);
	}
	if (lngsel1 >= 0) {
		DC(lngsel1);
	}
}

function Fighter(s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, rp, tp, ri, hp2, mana2, stam2, dp) {
	this.s = s;
	this.i = i;
	this.CharName = CharName;
	this.p = Picture;
	this.l = l;
	this.d = d;
	this.hp1 = hp1;
	this.mana1 = mana1;
	this.stam1 = stam1;
	this.nu = nu;
	this.pa = pa;
	this.rp = rp;
	this.tp = tp;
	this.ri = ri;
	this.hp2 = hp2;
	this.mana2 = mana2;
	this.stam2 = stam2;
	this.dp = dp;
	this.hp1p = window.top.GetPerc(hp1, hp2);
	this.mana1p = window.top.GetPerc(mana1, mana2);
	this.stam1p = window.top.GetPerc(stam1, stam2);

}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
	stuff.style.color = LITE;
}

function CharInfo(v) {
	return '<table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td colspan=4><b>' + Fighters[v].CharName + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxSmall(120, Fighters[v].hp1p, 'red', '' + Fighters[v].hp2 + '/' + Fighters[v].hp1) + '</td></tr><tr><td>SP:</td><td>' + window.top.PercentBoxSmall(120, Fighters[v].stam1p, 'yellow', '' + Fighters[v].stam2 + '/' + Fighters[v].stam1) + '</td></tr><tr><td>MP:</td><td>' + window.top.PercentBoxSmall(120, Fighters[v].mana1p, 'blue', '' + Fighters[v].mana2 + '/' + Fighters[v].mana1) + '</td></tr><tr><td colspan=2>Level: ' + Fighters[v].l + '</td></tr></table>';
}

function PC(v) {
	getObj('Info').innerHTML = CharInfo(v);
	getObj('Fighter' + v).style.cursor = 'pointer';
	getObj('Fighter' + v).style.backgroundColor = BGCOLOR_S
}
