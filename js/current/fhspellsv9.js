var lasts = 0;
var MeMana = MeMana;
var MeInt = MeInt;
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
var Processing = 0;
var Spells = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?T=' + Type3 + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function SM(Color, Named, Value, PictureID, Action) {
if (Specials[counter] == null) {
	Specials[counter] = new Array();
}
Specials[counter] = new newSpecial(Color, Named, Value, PictureID, Action);

document.write('<div id="H' + counter + '" onmouseover="window.top.InfoTip(\'' + IPath + Specials[counter].p2 + '\', \'' + Specials[counter].n + '\'); this.style.cursor=\'pointer\'; this.style.backgroundColor = \'' + BGCOLOR_S + '\';" onmouseout="this.style.cursor = \'\'; this.style.backgroundColor = \'\';" onclick="window.location.replace(\'?T=' + Value + '&Type=' + Action + '\')" style="float: left; width: 16px; height:16px; padding: 2px; margin: 2px;"><img border=0 title="' + Named + '" src=\'' + IPath + PictureID + '.png\' width=\'16\' height=\'16\'></div>');
counter = counter + 1;
}

function newSpecial(Color, Named, Value, PictureID, Action) {
this.c = Color;
this.n = Named;
this.p2 = PictureID + '.png';
}

function SMM(Color, v, i, mc, d, h, t, b, Named, n, dot) {
var PictureID = '';
if (i.indexOf('.') != -1) {
	i = '';
	PictureID = i;
}

if (Spells[SC] == null) {
	Spells[SC] = new Array();
}
Spells[SC] = new Spell(Color, v, i, mc, d, h, t, b, Named, n, Piccy, PictureID, dot);

document.write('<tr id="S' + SC + '" onmouseover="PC(' + SC + ')" onmouseout="RC(this)" onclick="DC(' + SC + ')" style="cursor: pointer; color: ' + Color + ';"><td width=15 height=15><img border=0 width=15 height=15 src="' + IPath + Piccy + '"></td><td width=250 style="' + (mc > MeMana || mc > MeInt ? 'border: 1px dotted red' : '') + '">' + Named + '</td><td>' + (dot != 0 ? '<img src=\'https://res.landsofhope.com/game/icons/clock_add.png\' title=\'Effect over Time\'>' : '') + '</td><td>' + (t == 3 ? '<img src=\'https://res.landsofhope.com/game/icons/group.png\' title=\'Area Effect\'>' : '') + '</td></tr>');
SC = SC + 1;
}

function Spell(Color, v, i, mc, d, h, t, b, Named, n, Piccy, PictureID, dot) {
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
this.dot = dot;
}

function CS(how, stuff, mc, n, cc, icx) {
if (Processing == 0) {
	if (MeMana >= mc) {
		if (MeInt >= mc) {
			if (how == 1 || how == 2) {
				if (n != 0 && stuff != 1145) {
					var Test22 =  Math.round(mc / 5);
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
			Processing = 1;
			setTimeout('Processing = 0;', 1500);
			if (how == 0) {
				window.top.sendRequest('ajaxspell.asp?Type=' + how + '&c=' + cc + '&CharsAt=' + stuff + (Test22 != 0 ? '&lv=' + Test22 : ''));
			} else {
				window.parent.loadwindow2('FHSpells2.asp?Type=' + how + '&c=' + cc + '&CharsAt=' + stuff + (Test22 != 0 ? '&lv=' + Test22 : '') ,300,300,'iwindow','Cast ' + Spells[icx].Named);
			}
		} else {
			window.top.ChatSend('<font id=tred>You have ' + MeInt + ' intelligence you need ' + mc + ' to cast this spell.</font>');
		}
	} else {
		window.top.ChatSend('<font id=tred>You have ' + MeMana + ' mana you need ' + mc + ' to cast this spell.</font>');
	}
}
}

function reclick(mm, mi) {
	MeMana = mm;
	MeInt = mi;
	if (getObj('s' + lasts) != null) {
		DC(lasts);
	}
}

function DC(v) {
var ot = 'Other';
if (Spells[v].t == 8) {
	ot = 'Golem'
}
if (Type2 == 72) {
	getObj('Stuff2').innerHTML = '<b>' + Spells[v].Named + '</b><br>Inscription Ability';
	getObj('Pic').innerHTML = "<img src='" + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)) + "'>";
	getObj('Buttons').innerHTML =  Adr('window.parent.loadwindow2(\'Mz.asp?test=' + Spells[v].v+ '\',300, 250, \'iwindow\',\'' + Spells[v].Named + '\');','Info','Info');
} else {
	getObj('Stuff2').innerHTML = '<b>' + Spells[v].Named + '</b><br>Mana Cost: ' + Spells[v].mc + (Spells[v].mc > MeMana ? ' <font id=tred style="border: 1px dotted red">You need ' + (Spells[v].mc - MeMana) + ' more Mana.</font>' : '<br>Estimated Uses: ' + Math.floor(MeMana / Spells[v].mc)) + '<br>Intelligence: ' + Spells[v].mc + (Spells[v].mc > MeInt ? '<font id=tred style="border: 1px dotted red">You need ' + (Spells[v].mc - MeInt) + ' more INT.</font>' : '') + (Spells[v].n != 0 && Spells[v].v != 1145 ? '<br>' + ot + ' Target Level: ' + Math.round(Spells[v].mc / 5) : '') + (Spells[v].h > 0 ? '<br>Heals for ' + Spells[v].h : '') + (Spells[v].d > 1 && Spells[v].c != 'magenta' ? '<br>Damages for ' + Spells[v].d : '') + (Spells[v].h != 0 || Spells[v].d != 0 || Spells[v].b == 0 ? '<br><i>Instant Effect</i>' : '<br>Duration: ' + Spells[v].b) + (Spells[v].d > 0 || Spells[v].h > 0 ? '<br><i>Combat Spell</i>' : '') +  (Spells[v].i != '' ? '<br>Item : ' + Spells[v].i : '');
	getObj('Pic').innerHTML = "<img src='" + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)) + "'>";
	getObj('Buttons').innerHTML = Adr('confirm(\'Do you wish to forget `' + Spells[v].Named + '`, continue?\',' + v + ',\'' + Spells[v].Named + '\');','Forget','Forget') + (AOK == 1 ? (Spells[v].t >= 0 && Spells[v].t != 3 && Spells[v].t != 6 && Spells[v].t != 8 && Spells[v].v != 236 && MeMana >= Spells[v].mc && MeInt >= Spells[v].mc && (Spells[v].d <= 0 || Spells[v].t == 4) ? Adr('CS(0, ' + Spells[v].v + ', ' + Spells[v].mc + ', ' + Spells[v].n + ', \'' + Spells[v].c + '\', ' + v + ');','Cast on Me','Cast on Me') : '') : '') + (Spells[v].t != 5 && MeMana >= Spells[v].mc && MeInt >= Spells[v].mc && Spells[v].t != 6 && Spells[v].t != 4 ? Adr('CS(1, ' + Spells[v].v + ', ' + Spells[v].mc + ', ' + Spells[v].n + ', \'' + Spells[v].c + '\', ' + v + ');',ot,ot) : '') + Adr('window.parent.loadwindow2(\'Mz.asp?test=' + Spells[v].v+ '\',300, 250, \'iwindow\',\'' + Spells[v].Named + '\');','Info','Info') + Adr('SendLink2(\'M\',' + Spells[v].v + ',\'s\',\'' + Spells[v].p + '\',0,\'' + Spells[v].Named + '\',\'' + Spells[v].c + '\');','Link','Link');
}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb >= 0) {
			window.top.Interface.location.replace('fhspells.asp?T=3&Type=' + Type2 + '&P=' + PageNo + '&S=' + Spells[pb].v);
		}
	}
}

function RC(stuff) {
window.top.hideTip();
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)), '<b>' + Spells[v].Named + '</b><br>Mana Cost: ' + Spells[v].mc + '<br>Intelligence: ' + Spells[v].mc)
getObj('S' + v).style.cursor = 'pointer';
getObj('S' + v).style.backgroundColor=BGCOLOR_S
}
