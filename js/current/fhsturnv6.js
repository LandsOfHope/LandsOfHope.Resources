var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var LPath = window.top.FHIPL;
var BPath = window.top.FHIPB;
var RPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var fr1 = 0;
var fs = 0;
var fs2 = 0;
var fr0 = 0;
var fp = 0;
var fn = 0;
var aa = 0;
var Processing = 0;
var OKDOKE = 1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function SelE() {
	var r = GetFirstFighter(0)
	if (r >= 0) {
		DC(r);
	}

}

function SelS() {
	if (fs2 == fs) {
		var r = GetFirstFighter(1)
		if (r >= 0) {
			DC(r);
		}
	}
}

function GetFirstFighter(side) {
	var x = 0;
	var retVal = -1;
	for (x = 0; x < Infos.length; x++) {
		if (Infos[x].s == side) {
			retVal = x;
		}

	}
	return retVal;
}

function DC(v) {
	getObj('Info').innerHTML = CharInfo(v)
	if (Infos[v].s == 0 && aa != 3 && aa != 4) {
		fr0 = Infos[v].v;
		fs = Infos[v].s;
		fn = Infos[v].nu
		fp = Infos[v].pa
		getObj('Pic0').innerHTML = "<img " + (Infos[v].d != 0 ? "style='filter: Gray'" : "") + " title='" + Infos[v].cn + "' src='" + (Infos[v].s == 1 ? BPath : RPath) + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	} else {
		fr1 = Infos[v].v;
		fs2 = Infos[v].s;
		getObj('Info').innerHTML = getObj('Info').innerHTML;
		getObj('Pic1').innerHTML = "<img " + (Infos[v].d != 0 ? "style='filter: Gray'" : "") + " title='" + Infos[v].cn + "' src='" + (Infos[v].s == 1 ? BPath : RPath) + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	}
	getObj('Buttons').innerHTML = '' + (fr0 != 0 && fr1 != 0 && Infos[v].d == 0 ? (fp == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 1)\' title=\'Attack Building\'><img src=\'' + OPath + 'sword.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 41)\' title=\'Attack with Readied Siege Style\'><img src=\'' + OPath + 'sword_add.png\' width=16 height=16></button><br>' : '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 10)\' title=\'Attempt to break Paralysis\'><img src=\'' + OPath + 'status_offline.png\' width=16 height=16></button><br>') + (fn == 0 ? '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 2)\' title=\'Cast offensive spell on Target\'><img src=\'' + OPath + 'orb.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 22)\' title=\'Cast readied offensive spell on Target\'><img src=\'' + OPath + 'orb_add.png\' width=16 height=16></button><' + strClicky0 + ' onclick=\'FAC(' + v + ', 3)\' title=\'Cast a Heal or Cure spell\'><img src=\'' + OPath + 'heart.png\' width=16 height=16></button>' : '<' + strClicky0 + ' onclick=\'FAC(' + v + ', 9)\' title=\'Attempt to break nulification\'><img src=\'' + OPath + 'shield_delete.png\' width=16 height=16></button>') + (fp == 0 ? '<br><' + strClicky0 + ' onclick=\'FAC(' + v + ', 4)\' title=\'Use a Bandage, Potion or Food from Inventory\'><img src=\'' + OPath + 'ruby.png\' width=16 height=16></button>' : '') + '<br><' + strClicky0 + ' onclick=\'FAC(' + v + ', 5)\' title=\'Skip this turn with 100% regenerate boost\'><img src=\'' + OPath + 'resultset_last.png\' width=16 height=16></button>' : '');
}

function FAC(v, action) {
	if (Processing == 0) {
		aa = action;
		if (action != 6) {
			if (action == 4) {
				SelE();
				window.ResultsOfit.location.replace('fhsturni.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 3) {
				if (action == 3) {
					SelE();
				}
				window.ResultsOfit.location.replace('fhsturns.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 2 || action == 7) {
				SelS();
				window.ResultsOfit.location.replace('fhsturnc.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 8) {
				SelS();
				window.ResultsOfit.location.replace('fhsturnp.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else if (action == 31 || action == 1 || action == 32 || action == 33) {
				SelS();
				window.ResultsOfit.location.replace('fhsturna.asp?type=' + action + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1);
			} else {
				if (fs2 == fs) {
					//Need to reselect targets
					SelS();
				} else {
					Processing = 1;
					window.location.replace('?type=' + action + '&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1);
				}
			}
		} else {
			Processing = 1;
			window.location.replace('?type=' + action + '&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1);
		}
	} else {

	}
}

function Statty(ss) {
	window.frames['ResultsOfit'].document.open();
	window.frames['ResultsOfit'].document.write("<HTML><HEAD><TITLE></TITLE><LINK REL='stylesheet' TYPE='text/css' HREF='https://lohcdn.com/css/" + window.parent.parent.Theme + ".css'></HEAD><body class='fight' leftmargin=0 topmargin=0>" + ss + "<div id=Info></div></body></HTML>");
	window.frames['ResultsOfit'].document.close();
}

function AC(s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, al) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, al);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img ' + (d != 0 ? 'style="filter: Gray"' : '') + ' src="' + (s == 1 ? BPath : RPath) + (Picture == '' ? 'na.gif' : Picture) + '" width=40 height=40></td><td width="100%" style="color: ' + Color + '"><table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td colspan=2><b>' + CharName + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxR(hp1, 'red', '' + hp1 + '%') + '</td></tr><tr><td>SP:</td><td>' + window.top.PercentBoxR(stam1, 'yellow', '' + stam1 + '%') + '</td></tr><tr><td>MP:</td><td>' + window.top.PercentBoxR(mana1, 'blue', '' + mana1 + '%') + '</td></tr><tr><td colspan=2>' + GetAName(al) + '</td></tr></table></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, s, i, CharName, Picture, l, d, hp1, mana1, stam1, nu, pa, al) {
	// cn="' + CharName + '" hp=' + hp1 + ' mp=' + mana1 + ' sp=' + stam1 + ' pa=' + pa + ' nu=' + nu + ' d=' + d + ' l=' + l + '
	// s=' + s + ' v=' + i+ ' ' + (Picture != '' ? 'p="' + Picture + '"' : 'p=""') + ' c="' + Color + '"
	this.c = Color;
	this.p = Picture;
	this.cn = CharName;
	this.hp = hp1;
	this.mp = mana1;
	this.sp = stam1;
	this.pa = pa;
	this.nu = nu;
	this.d = d;
	this.l = l;
	this.s = s;
	this.v = i;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function CharInfo(v) {
	return '<table class="weakercell" style="padding-left: 3px" cellpadding=0 cellspacing=0><tr><td colspan=4><b>' + Infos[v].cn + '</b></td></tr><td>HP:</td><td>' + window.top.PercentBoxR(Infos[v].hp, 'red', '' + Infos[v].hp + '%') + '</td></tr><tr><td>SP:</td><td>' + window.top.PercentBoxR(Infos[v].sp, 'yellow', '' + Infos[v].sp + '%') + '</td></tr><tr><td>MP:</td><td>' + window.top.PercentBoxR(Infos[v].mp, 'blue', '' + Infos[v].mp + '%') + '</td></tr><tr><td colspan=2>Level: ' + Infos[v].l + '</td></tr></table>';
}

function PC(v) {
	getObj('Info').innerHTML = CharInfo(v);
	if (Infos[v].s == 1) {
		getObj('Info').innerHTML = getObj('Info').innerHTML;
	}
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
