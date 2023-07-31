var Type2 = Type2;
var Type3 = Type3;
var Special = 0;
var counter = 0;
var PageNo = PageNo;
var Piccy = Piccy;
var IPath = window.top.FHIPI;
var IPath2 = window.top.FHIPR;
var Specials = new Array();
var MeSta = MeSta;
var SC = 0;
var Spells = new Array();
var Pet = Pet;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?T=' + Type3 + '&Pet=' + Pet + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function SM(Color, Named, Value, PictureID, Action) {
if (Specials[counter] == null) {
	Specials[counter] = new Array();
}
Specials[counter] = new newSpecial(Color, Named, Value, PictureID, Action);

document.write('<div id="H' + counter + '" onmouseover="window.top.InfoTip(\'' + IPath + Specials[counter].p2 + '\', \'' + Specials[counter].n + '\'); this.style.cursor=\'pointer\'; this.style.backgroundColor = \'' + BGCOLOR_S + '\';" onmouseout="this.style.cursor = \'\'; this.style.backgroundColor = \'\';" onclick="window.location.replace(\'?T=' + Value + '&Pet=' + Pet + '&Type=' + Action + '\')" style="float: left; width: 20px; height:20px; padding: 2px; margin: 2px;"><img border=0 title="' + Named + '" src=\'' + IPath + PictureID + '\' width=\'20\' height=\'20\'></div>');
counter = counter + 1;
}

function newSpecial(Color, Named, Value, PictureID, Action) {
this.c = Color;
this.n = Named;
this.p2 = PictureID + '';
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

document.write('<tr id="S' + SC + '" onmouseover="PC(' + SC + ')" onmouseout="RC(this)" onclick="DC(' + SC + ')" style="cursor: pointer; color: ' + Color + ';"><td width=15 height=15><img border=0 width=15 height=15 src="' + IPath + Piccy + '"></td><td width=250 style="' + (mc > MeSta && MeSta >= 0 ? 'border: 1px dotted red' : '') + '">' + Named + '</td></tr>');
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

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Spells[v].Named + '</b><br>Stamina: ' + Spells[v].mc + (Spells[v].mc > MeSta && MeSta >= 0 ? ' <font id=tred style="border: 1px dotted red">You need '  + (Spells[v].mc - MeSta) + ' more Stamina.</font>' : '') + '<br>Stamina Used: ' + Math.round(Spells[v].mc / 2) + '<br>Estimated Uses: ' + (Spells[v].mc > MeSta || MeSta < 0 ? 'None' : Math.floor(MeSta / Math.round(Spells[v].mc / 2)) + '<br><i>Based on current stamina amount</i>') +  (Spells[v].d > 1 && Spells[v].c != 'magenta' ? '<br>Damages for ' + Spells[v].d : '') + (Spells[v].h != 0 || Spells[v].d != 0 || Spells[v].b == 0 ? '' : '<br>Duration: ' + Spells[v].b);
getObj('Pic').innerHTML = "<img src='" + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)) + "'>";
getObj('Buttons').innerHTML = Adr('confirm(\'Do you wish to forget `' + Spells[v].Named + '`, continue?\',' + v + ',\'' + Spells[v].Named + '\');','Forget style','Forget') + Adr('window.parent.loadwindow2(\'Sz.asp?test=' + Spells[v].v+ '\',300, 250, \'iwindow\',\'' + Spells[v].Named + '\');','Info','Info') + Adr('SendLink2(\'S\',' + Spells[v].v + ',\'i\',\'' + Spells[v].p + '\',0,\'' + Spells[v].Named + '\',\'' + Spells[v].c + '\');','Link','Link');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb >= 0) {
			window.top.Interface.location.replace('fhstyles.asp?T=3&Type=' + Type2 + '&Pet=' + Pet + '&P=' + PageNo + '&S=' + Spells[pb].v);
		}
	}
}

function RC(stuff) {
window.top.hideTip();
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + (Spells[v].p2 == '' && Spells[v].p != 'na.gif' ? IPath + Spells[v].p + '' : IPath2 + (Spells[v].p2 == '' ? 'na.gif' : Spells[v].p2)), '<b>' + Spells[v].Named + '</b><br>Stamina: ' + Spells[v].mc)
getObj('S' + v).style.cursor = 'pointer';
getObj('S' + v).style.backgroundColor=BGCOLOR_S
}
