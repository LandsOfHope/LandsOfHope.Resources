
var ItemID = ItemID;
var Type2 = Type2;
var MeMana = MeMana;
var MC2 = MC2;
var lv = lv;
var combat = combat;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Color, Value, PictureID,Named, Level, s) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Value, PictureID,Named, Level, s);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + ';"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td>' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Value, PictureID,Named, Level, s) {
this.c = Color;
this.s = s;
this.p = PictureID;
this.t = Named;
this.v = Value;
this.l = Level;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b> (' + (Infos[v].s == 0 ? 'Player' : (Infos[v].s == 1 ? 'Pet' : (Infos[v].s == 2 ? 'NPC' : 'Monster'))) + ')<br>Level: ' + Infos[v].l + '' + (lv > 0 ? '<br>Level Requirement: ' + lv : '') + (MC2 > MeMana ? '<br><font id=tred>You need ' + MC2 + ' mana</font>' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (lv == 0 || (Infos[v].l >= lv && lv > 0) ? (Type2 != 2 ?  (MC2 > MeMana ? '' : Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'?Type=1&Type2=' + Infos[v].v + '&CharsAt=' + ItemID  + '&CN=' + Infos[v].t + '\');}','Cast',(combat > 0 ? 'Attack' : 'Cast') )) : '') : '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


