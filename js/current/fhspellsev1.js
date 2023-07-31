var MeMana = MeMana;
var MeInt = MeInt;
var Type2 = Type2;
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

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?Type=' + Type2 + '&P=' + PageNo + '');
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

document.write('<tr id="S' + SC + '" onmouseover="PC(' + SC + ')" onmouseout="RC(this)" onclick="DC(' + SC + ')" style="cursor: pointer; color: ' + Color + ';"><td width=15 height=15><img border=0 width=15 height=15 src="' + IPath + Piccy + '"></td><td width=250 style="' + (mc > MeMana || mc > MeInt ? 'border: 1px dotted red' : '') + '">' + Named + '</td><td>' + (n != 0 ? 'READY' : '') + '</td></tr>');
SC = SC + 1;
}

function CS(how, stuff) {
window.location.replace('?Type=' + Type2 + '&P=' + PageNo + '&S=' + stuff +'&T=' + how + '');
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


function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Spells[v].Named + '</b><br>Mana Cost: ' + Spells[v].mc + (Spells[v].mc > MeMana ? ' <font id=tred style="border: 1px dotted red">You need ' + (Spells[v].mc - MeMana) + ' more Mana.</font>' : '') + '<br>Intelligence: ' + Spells[v].mc + (Spells[v].mc > MeInt ? '<font id=tred style="border: 1px dotted red">You need ' + (Spells[v].mc - MeInt) + ' more INT.</font>' : '') + (Spells[v].n != 0 && Spells[v].v != 1145 ? '<br>Other Target Level: ' + Math.round(Spells[v].mc / 5) : '') + (Spells[v].h > 0 ? '<br>Heals for ' + Spells[v].h : '') + (Spells[v].d > 1 && Spells[v].c != 'magenta' ? '<br>Damages for ' + Spells[v].d : '') + (Spells[v].h != 0 || Spells[v].d != 0 || Spells[v].b == 0 ? '<br><i>Instant Effect</i>' : '<br>Duration: ' + Spells[v].b) + (Spells[v].d > 0 || Spells[v].h > 0 ? '<br><i>Combat Spell</i>' : '') +  (Spells[v].i != '' ? '<br>Item : ' + Spells[v].i : '');
getObj('Pic').innerHTML = "<img src='" + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)) + "'>";
getObj('Buttons').innerHTML = (Spells[v].n == 0 ? Adr('CS(1, ' + Spells[v].v + ');', 'Ready Spell', 'Ready Spell') : Adr('CS(2, ' + Spells[v].v + ');','Unready Spell', 'Unready Spell')) + Adr('window.parent.loadwindow2(\'Mz.asp?test=' + Spells[v].v+ '\',300, 250, \'iwindow\',\'' + Spells[v].Named + '\');','Info','Info');
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
