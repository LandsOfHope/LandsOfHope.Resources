var Pet = Pet;
var ItemID = ItemID;
var Type2 = Type2;
var lv = lv;
var IPath = window.top.FHIPR;
var TC = 0;
var Targets = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Color, Value, PictureID,Named, Level, s) {
if (Targets[TC] == null) {
	Targets[TC] = new Array();
}
Targets[TC] = new SpellTarget(Color, Value, PictureID,Named, Level, s);

document.write('<tr onmouseover="PC(' + TC + ')" ID="ST' + TC + '" onmouseout="RC(this)" onclick="DC(' + TC + ')" style="color: ' + Color + ';"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td><b>' + Named + '</b><br>Level: ' + Level + (lv > 0 ? '<br>Level Requirement: ' + lv : '') + '</td><td>' + (s == 0 ? 'Player' : (s == 1 ? 'Pet' : (s == 2 ? 'NPC' : 'Monster'))) + '</td></tr></td></tr>');
TC = TC + 1;
}

function DC(v) {
	if (lv == 0 || (Targets[v].l >= lv && lv > 0)) {
		if (Type2 != 2) {
			window.location.replace('?Type=1&Type2=' + Targets[v].v + '&Pet=' + Pet + '&CharsAt=' + ItemID + '&CN=' + Targets[v].Named);
		}
	}
}

function SpellTarget(Color, v, PictureID,Named, Level, s) {
this.c = Color;
this.v = v;
this.l = Level;
this.s = s;
this.Named = Named;
this.p = PictureID;
}

function RC(stuff) {
window.top.hideTip();
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
getObj('ST' + v).style.cursor = 'pointer';
getObj('ST' + v).style.backgroundColor=BGCOLOR_S
}
