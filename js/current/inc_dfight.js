var IPath = window.top.FHIPI;
var LPath = window.top.FHIPL;
var RPath = window.top.FHIPR;
var BigRPath = window.top.FHIPR + 'big/';
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
var AbilityCount = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

var OKDOKE = 1;
var CheckTurnTimer = 0;

function CheckTurn() {
	clearTimeout(CheckTurnTimer);
	CheckTurnTimer = setTimeout(CheckTurn2, 5000);
}

function CheckTurn2() {
	window.top.EnterContent2('fhfcheck.asp?s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1)
	clearTimeout(CheckTurnTimer);
	CheckTurnTimer = setTimeout(CheckTurn2, 5000);
}


function UnloadTest() {
}

function ShowButtons(how) {
}

function DC(v) {
	if (Fighters[v].s == Side) {
		fr0 = Fighters[v].i;
		rix = Fighters[v].ri;
		fs = Fighters[v].s;
		fn = Fighters[v].nu
		fp = Fighters[v].pa
		fdp = Fighters[v].dp
	} else {
		fr1 = Fighters[v].i;
		fs2 = Fighters[v].s;
	}
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
	//toggleDisabled(getObj('Buttons'), v);
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
	//window.frames['ResultsOfit'].location.replace(strURL);
}

function FAC(v, action) {
	if (Processing == 0) {
		aa = action;
		SelE();
		Go1('?type=' + action + '&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1, v);
	} else {

	}
}

function Statty(ss) {
	getObj('StatusText').innerHTML = ss;
}

function PromptReturn(returnVal, pb) {
}

function setFight1(s) {
	getObj('Fight1').innerHTML = s;
}

function setFight2(s) {
	getObj('Fight2').innerHTML = s;
}

function AC(s, i, CharName, Picture, l, d, hp1, hp2, mana1, mana2, stam1, stam2, nu, pa, rp, pp, ri, dp, cf) {
	var Color = LITE;
	AbilityCount = 0;
	if (Fighters[FightCounter] == null) {
		Fighters[FightCounter] = new Array();
	}
	Fighters[FightCounter] = new Fighter(s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, rp, pp, ri, hp2, mana2, stam2, dp, cf);

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

	document.write('<tr width="100%"><td onmouseover="PC(' + FightCounter + ')" onmouseout="RC(this)" width="80px"><img src="' + BigRPath + (Picture == '' ? 'na.gif' : Picture) + '" onerror="onImgErrorSmall(this,\'' + (Picture == '' ? 'na.gif' : Picture) + '\')" width=80 height=80></td><td width="100%" style="color: ' + Color + '" id="Fighter' + FightCounter + '" onclick="DC(' + FightCounter + ')"><table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0 width="100%"><tr><td colspan=2><b>' + CharName + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxSmall(120, hp1p, 'red', '' + hp2 + '/' + hp1) + '</td></tr><tr><td>PP:</td><td>' + GetPower(cf, pp) + '</td></tr><tr><td colspan=2 id=FightButtons' + FightCounter + '></td></tr></table></td></tr>');
	FightCounter = FightCounter + 1;
}



function onImgErrorSmall(source, picture2) {
	source.src = RPath + picture2;
	source.onerror = '';
	return true;
}

function GetPower(f, p) {
	var x = 0;
	var ret = '';
	var w = 16;
	w = 10;
	for (x = 0; x < p; x++) {
		ret = ret + '<div style=\'float: left; width:' + w + 'px; height: ' + w + 'px;\'><img src=\'https://lohcdn.com/game/h/' + f + '.gif\' width=' + w + ' height=' + w + '></div>';
		if (x > 40) {
			ret = ret + '<div style=\'float: left; width:60px; height: ' + w + 'px;\'><img src=\'https://lohcdn.com/game/h/' + f + '.gif\' width=' + w + ' height=' + w + '> * ' + (p - 40) + '</div>';
			break;
		}
	}
	return ret;
}

function GetPower2(f, p) {
	var ret = '';
	var w = 10;
	ret = ret + '<div class=\'weakercell\'><center><b>' + p + '</b><img src=\'https://lohcdn.com/game/h/' + f + '.gif\' width=' + w + ' height=' + w + '></center></div>';
	return ret;
}

function Finish() {
	var x = 0;
	for (x = 0; x < Fighters.length; x++) {
		getObj('FightButtons' + x).innerHTML = GetAbilities(x);
	}

	if (lngsel0 >= 0) {
		DC(lngsel0);
	}
	if (lngsel1 >= 0) {
		DC(lngsel1);
	}
}

function Fighter(s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, rp, pp, ri, hp2, mana2, stam2, dp, cf) {
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
	this.pp = pp;
	this.ri = ri;
	this.hp2 = hp2;
	this.mana2 = mana2;
	this.stam2 = stam2;
	this.cf = cf;
	this.dp = dp;
	this.hp1p = window.top.GetPerc(hp1, hp2);
	this.mana1p = window.top.GetPerc(mana1, mana2);
	this.stam1p = window.top.GetPerc(stam1, stam2);
	this.abilities = new Array();
}

function ACA(id, name, cost, powertype, duration, ev, sub, pp) {
	var lf = FightCounter - 1;
	if (Fighters[lf].abilities[AbilityCount] == null) {
		Fighters[lf].abilities[AbilityCount] = new Array();
	}
	Fighters[lf].abilities[AbilityCount] = new Abilityx(id, name, cost, powertype, duration, ev, sub, pp);
	AbilityCount = AbilityCount + 1;
}


function GetAbilities(f) {
	var x = 0;
	var retVal = '';
	if (Fighters[f].s == Side && f == 0) {
		retVal = retVal + '<div class="btn" onclick="FAC(' + f + ', -10)" style="float: left; width: 34px; height: 40px; background-image: URL(https://lohcdn.com/game/s/meat.png); background-repeat: no-repeat; background-position: top center;" title="Consume Healing item" onmouseover="PC3(this)" onmouseout="RC2(this)" align=bottom>&nbsp;</div>'
		retVal = retVal + '<div class="btn" onclick="FAC(' + f + ', -20)" style="float: left; width: 34px; height: 40px; background-image: URL(https://lohcdn.com/game/s/potion.png); background-repeat: no-repeat; background-position: top center;" title="Consume Power item" onmouseover="PC3(this)" onmouseout="RC2(this)" align=bottom>&nbsp;</div>'

		for (x = 0; x < Fighters[f].abilities.length; x++) {
			retVal = retVal + '<div class="btn" onclick="FAC(' + f + ', ' + Fighters[f].abilities[x].id + ')" style="float: left; width: 34px; height: 40px; color: white;" title="' + Fighters[f].abilities[x].name + '" onmouseover="PC2(this,' + f + ',' + x + ')" onmouseout="RC2(this)" align=center valign=bottom><table cellpadding=0 cellspacing=0 width="32"><tr><td><center><img src="https://lohcdn.com/game/dp/' + Fighters[f].abilities[x].pp + '" width=20 height=20></center></td></tr><tr><td>' + GetPower2(Fighters[f].cf, Fighters[f].abilities[x].cost) + '</td></tr></table></div>'
		}
	}
	return retVal;
}


function Abilityx(id, name, cost, powertype, duration, ev, sub, pp) {
	this.id = id;
	this.name = name;
	this.cost = cost;
	this.powertype = powertype;
	this.duration = duration;
	this.ev = ev;
	this.sub = sub;
	this.pp = pp;
}

function RC(stuff) {
	stuff.style.cursor = '';
	//stuff.style.backgroundColor='';
	//stuff.style.color=LITE;
}

function CharInfo(v) {
	return '<table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td colspan=4><b>' + Fighters[v].CharName + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxSmall(120, Fighters[v].hp1p, 'red', '' + Fighters[v].hp2 + '/' + Fighters[v].hp1) + '</td></tr><tr><td>SP:</td><td>' + window.top.PercentBoxSmall(120, Fighters[v].stam1p, 'yellow', '' + Fighters[v].stam2 + '/' + Fighters[v].stam1) + '</td></tr><tr><td>MP:</td><td>' + window.top.PercentBoxSmall(120, Fighters[v].mana1p, 'blue', '' + Fighters[v].mana2 + '/' + Fighters[v].mana1) + '</td></tr><tr><td colspan=2>Level: ' + Fighters[v].l + '</td></tr></table>';
}

function PC(v) {
	window.top.InfoTip(RPath + (Fighters[v].p == '' ? 'na.gif' : Fighters[v].p), CharInfo(v));
	//getObj('Info').innerHTML = CharInfo(v);
	getObj('Fighter' + v).style.cursor = 'pointer';
	//getObj('Fighter' + v).style.backgroundColor=BGCOLOR_S
}

function RC2(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC2(stuff, f, x) {
	window.top.InfoTip('https://lohcdn.com/game/dp/' + Fighters[f].abilities[x].pp + '', '<table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td><b>' + Fighters[f].abilities[x].name + ' (' + Fighters[f].abilities[x].sub + ')</b></td></tr><tr><td>Cost: ' + Fighters[f].abilities[x].cost + ' ' + Fighters[f].abilities[x].powertype + '</td></tr></table>');
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function PC3(stuff) {
	window.top.InfoTip('', 'Use Dragon Item');
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}