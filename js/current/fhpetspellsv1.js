var CharsAt = CharsAt;
var lasts = 0;
var Type2 = Type2;
var Type3 = Type3;
var AOK = AOK;
var Special = 0;
var counter = 0;
var PageNo = PageNo;
var Piccy = Piccy;
var IPath = window.top.FHIPS;
var IPath2 = window.top.FHIPR;
var Specials = new Array();
var SC = 0;
var Spells = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?T=' + Type3 + '&CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function SM(Color, Named, Value, PictureID, Action) {
	if (Specials[counter] == null) {
		Specials[counter] = new Array();
	}
	Specials[counter] = new newSpecial(Color, Named, Value, PictureID, Action);

	document.write('<div id="H' + counter + '" onmouseover="window.top.InfoTip(\'' + IPath + Specials[counter].p2 + '\', \'' + Specials[counter].n + '\'); this.style.cursor=\'pointer\'; this.style.backgroundColor = \'' + BGCOLOR_S + '\';" onmouseout="this.style.cursor = \'\'; this.style.backgroundColor = \'\';" onclick="window.location.replace(\'?T=' + Value + '&CharsAt=' + CharsAt + '&Type=' + Action + '\')" style="float: left; width: 16px; height:16px; padding: 2px; margin: 2px;"><img border=0 title="' + Named + '" src=\'' + IPath + PictureID + '.png\' width=\'16\' height=\'16\'></div>');
	counter = counter + 1;
}

function newSpecial(Color, Named, Value, PictureID, Action) {
	this.c = Color;
	this.n = Named;
	this.p2 = PictureID + '.png';
}

function SMM(Color, v, i, mc, d, h, t, b, Named, n) {
	var PictureID = '';
	if (i.indexOf('.') != -1) {
		i = '';
		PictureID = i;
	}

	if (Spells[SC] == null) {
		Spells[SC] = new Array();
	}
	Spells[SC] = new Spell(Color, v, i, mc, d, h, t, b, Named, n, Piccy, PictureID);

	document.write('<tr id="S' + SC + '" onmouseover="PC(' + SC + ')" onmouseout="RC(this)" onclick="DC(' + SC + ')" style="cursor: pointer; color: ' + Color + ';"><td width=15 height=15><img border=0 width=15 height=15 src="' + IPath + Piccy + '"></td><td width=250>' + Named + '</td></tr>');
	SC = SC + 1;
}

function Spell(Color, v, i, mc, d, h, t, b, Named, n, Piccy, PictureID) {
	this.c = Color;
	this.v = v;
	this.i = i;
	this.mc = mc;
	this.d = d;
	this.h = h;
	this.t = t;
	this.b = b;
	this.Named = Named;
	this.n = n;
	this.p = Piccy;
	this.p2 = PictureID;
}

function CS(how, stuff, mc, n, cc, icx) {
	if (how == 1 || how == 2) {
		if (n != 0 && stuff != 1145) {
			var Test22 = Math.round(mc / 5);
			if (Test22 <= 0) {
				Test22 = 1;
			}
		} else {
			var Test22 = 0;
		}
	} else {
		var Test22 = 0;
	}
	lasts = icx;
	window.parent.loadwindow2('FHpetspells2.asp?Type=' + how + '&c=' + cc + '&Pet=' + CharsAt + '&CharsAt=' + stuff + (Test22 != 0 ? '&lv=' + Test22 : ''), 300, 300, 'iwindow', 'Cast ' + Spells[icx].Named);
}

function reclick() {
	if (getObj('s' + lasts) != null) {
		DC(lasts);
	}
}

function DC(v) {
	if (Type2 == 72) {
		getObj('Stuff2').innerHTML = '<b>' + Spells[v].Named + '</b><br>Inscription Ability';
		getObj('Pic').innerHTML = "<img src='" + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)) + "'>";
		getObj('Buttons').innerHTML = Adr('window.ResultsOfit.location.replace(\'Mz.asp?test=' + Spells[v].v + '\');', 'Info', 'Info');
	} else {
		getObj('Stuff2').innerHTML = '<b>' + Spells[v].Named + '</b><br>Mana Cost: ' + Spells[v].mc + '<br>Intelligence: ' + Spells[v].mc + (Spells[v].n != 0 && Spells[v].v != 1145 ? '<br>Other Target Level: ' + Math.round(Spells[v].mc / 5) : '') + (Spells[v].h > 0 ? '<br>Heals for ' + Spells[v].h : '') + (Spells[v].d > 1 && Spells[v].c != 'magenta' ? '<br>Damages for ' + Spells[v].d : '') + (Spells[v].h != 0 || Spells[v].d != 0 || Spells[v].b == 0 ? '<br><i>Instant Effect</i>' : '<br>Duration: ' + Spells[v].b) + (Spells[v].d > 0 || Spells[v].h > 0 ? '<br><i>Combat Spell</i>' : '') + (Spells[v].i != '' ? '<br>Item : ' + Spells[v].i : '');
		getObj('Pic').innerHTML = "<img src='" + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)) + "'>";
		getObj('Buttons').innerHTML = Adr('confirm(\'Do you wish your pet to forget `' + Spells[v].Named + '`, continue?\',' + v + ',\'' + Spells[v].Named + '\');', 'Forget', 'Forget') + (AOK == 1 ? (Spells[v].t >= 0 && Spells[v].t != 3 && Spells[v].t != 6 && Spells[v].v != 236 && (Spells[v].d <= 0 || Spells[v].t == 4) ? Adr('CS(0, ' + Spells[v].v + ', ' + Spells[v].mc + ', ' + Spells[v].n + ', \'' + Spells[v].c + '\', ' + v + ');', 'Cast on Pet', 'Cast on Pet') : '') : '') + (Spells[v].t != 5 && Spells[v].t != 6 && Spells[v].t != 4 ? Adr('CS(1, ' + Spells[v].v + ', ' + Spells[v].mc + ', ' + Spells[v].n + ', \'' + Spells[v].c + '\', ' + v + ');', 'Other', 'Other') : '') + Adr('window.parent.loadwindow2(\'Mz.asp?test=' + Spells[v].v + '\',300, 250, \'iwindow\',\'' + Spells[v].Named + '\');', 'Info', 'Info');
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb >= 0) {
			//?T=3&CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&S=' + stuff.v +'
			window.top.Interface.location.replace('fhpetspells.asp?T=3&CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&S=' + Spells[pb].v);
		}
	}
}

function RC(stuff) {
	window.top.hideTip();
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)), '<b>' + Spells[v].Named + '</b><br>Mana Cost: ' + Spells[v].mc + '<br>Intelligence: ' + Spells[v].mc)
	getObj('S' + v).style.cursor = 'pointer';
	getObj('S' + v).style.backgroundColor = BGCOLOR_S
}
