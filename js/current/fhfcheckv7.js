
var IPath = window.top.FHIPI;
var LPath = window.top.FHIPL;
var RPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var outty = '';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function ClearStuff() {
	window.top.Interface.setFight1('');
	window.top.Interface.setFight2('');
}

function ClearOutty() {
	outty = '';
}

function SetInv() {
	//height='" + window.top.Interface.document.getObj('Inv').height + "' 
	outty = "<table width='100%' class='itemText' id=Inv cellspacing=1 cellpadding=2 border=0>" + outty;
	outty = outty + "</script><tr height='100%'><td colspan=2></td></tr></table>";
	window.top.Interface.setFight1(outty);
	//.getObj('Fight1').innerHTML = outty;
}

function SetInv2() {
	// height='" + window.top.Interface.document.getObj('Inv2').height + "'
	outty = "<table width='100%' class='itemText' id=Inv2 cellspacing=1 cellpadding=2 border=0>" + outty;
	outty = outty + "</script><tr height='100%'><td colspan=2></td></tr></table>";
	window.top.Interface.setFight2(outty);
	//	window.top.Interface.getObj('Fight2').innerHTML = outty;
}

function AC(s, i, CharName, Picture, l, d, hp1, hp2, mana1, mana2, stam1, stam2, nu, pa, rp, tp, ri, dp) {
	var Color = LITE;
	if (window.top.Interface.Fighters[window.top.Interface.FightCounter] == null) {
		window.top.Interface.Fighters[window.top.Interface.FightCounter] = new Array();
	}
	window.top.Interface.Fighters[window.top.Interface.FightCounter] = new window.top.Interface.Fighter(s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, rp, tp, ri, hp2, mana2, stam2, dp);

	var hp1p = window.top.GetPerc(hp1, hp2);
	var mana1p = window.top.GetPerc(mana1, mana2);
	var stam1p = window.top.GetPerc(stam1, stam2);

	outty = outty + '<tr width="100%"><td><img src="' + RPath + (Picture == '' ? 'na.gif' : Picture) + '" width=40 height=40></td><td width="100%" style="color: ' + Color + '" id="Fighter' + window.top.Interface.FightCounter + '" onclick="DC(' + window.top.Interface.FightCounter + ')" onmouseover="PC(' + window.top.Interface.FightCounter + ')" onmouseout="RC(this)"><table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td colspan=2><b>' + CharName + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxSmall(120, hp1p, 'red', '' + hp2 + '/' + hp1) + '</td></tr><tr><td>SP:</td><td>' + window.top.PercentBoxSmall(120, stam1p, 'yellow', '' + stam2 + '/' + stam1) + '</td></tr><tr><td>MP:</td><td>' + window.top.PercentBoxSmall(120, mana1p, 'blue', '' + mana2 + '/' + mana1) + '</td></tr><tr><td colspan=2>' + (rp > 0 ? '<img src="' + OPath + 'user_red.png" title="Rage points">:' + rp : '') + '' + (tp > 0 ? '<img src="' + OPath + 'scare.png" title="Terror points">:' + tp : '') + '</td></tr></table></td></tr>';
	window.top.Interface.FightCounter = window.top.Interface.FightCounter + 1;
}

function disablebuttons(v) {
	toggleDisabled(window.top.Interface.getObj('Buttons'), v);
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