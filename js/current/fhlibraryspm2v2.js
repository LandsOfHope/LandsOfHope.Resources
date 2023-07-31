var SN = SN;
var CharsAt = CharsAt;
var IC = 0;
var PageNo = PageNo;
var Piccy = Piccy;
var IPath = window.top.FHIPS;
var IPath2 = window.top.FHIPR;
var Infos = new Array();
var PetID = PetID;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&PetID=' + PetID + '&P=' + PageNo + '&SN=' + SN);
}

function SMM(Color, v, i, mc, d, h, t, b, Named, n, sv, dot) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, i, mc, d, h, t, b, Named, n, sv, dot);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15 height=15><img border=0 width=15 height=15 src="' + IPath + Piccy + '"></td><td width=250 style="color: ' + Color + '">' + Named + '</td><td>' + (dot != 0 ? '<img src=\'https://res.landsofhope.com/game/icons/clock_add.png\' title=\'Effect over Time\'>' : '') + '</td><td>' + (t == 3 ? '<img src=\'https://res.landsofhope.com/game/icons/group.png\' title=\'Area Effect\'>' : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, i, mc, d, h, t, b, Named, n, sv, dot) {
this.c = Color;
this.sv = sv;
this.p = Piccy;
this.sn = Named;
this.i = i;
this.d = d;
this.t = t;
this.b = b;
this.h = h;
this.n = n;
this.mc = mc;
this.v = v;
this.dot = dot;
}


function DC(v) {
if (CharsAt == 72) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].sn + '</b><br>' + SN + ': ' + Infos[v].sv + '<br>Chance: ' + Infos[v].mc + '%<br>Approximate Level: ' + Math.round(Infos[v].sv / 5) + (Infos[v].d > 1 && Infos[v].c != 'magenta' ? '<br>Damages for ' + Infos[v].d : '') + (Infos[v].h != 0 || Infos[v].d != 0 || Infos[v].b == 0 ? '<br><i>Instant Effect</i>' : '<br>Duration: ' + Infos[v].b) + (Infos[v].d > 0 || Infos[v].h > 0 ? '<br><i>Combat Spell</i>' : '') +  (Infos[v].i != '' ? '<br>Item : ' + Infos[v].i : '');
} else {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].sn + '</b><br>' + SN + ': ' + Infos[v].sv + '<br>Approximate Level: ' + Math.round(Infos[v].sv / 5) + '<br>Mana Cost: ' + Infos[v].mc + (Infos[v].d > 0 || Infos[v].h > 0 ? '<br>Intelligence: ' + Infos[v].mc + '' : '') + (Infos[v].dot != 0 ? '<br>Effect lasts: ' + Infos[v].b + ' rounds' : '')  + (Infos[v].n != 0 && Infos[v].v != 1145 ? '<br>Other Target Level: ' + Math.round(Infos[v].mc / 5) : '') + (Infos[v].h > 0 ? '<br>Heals for ' + Infos[v].h : '') + (Infos[v].d > 1 && Infos[v].c != 'magenta' ? '<br>Damages for ' + Infos[v].d : '') + (Infos[v].h != 0 || Infos[v].d != 0 || Infos[v].b == 0 ? '<br><i>Instant Effect</i>' : '<br>Duration: ' + Infos[v].b) + (Infos[v].d > 0 || Infos[v].h > 0 ? '<br><i>Combat Spell</i>' : '') +  (Infos[v].i != '' ? '<br>Item : ' + Infos[v].i : '');
}
getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'Mz.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].sn + '\');','View spell information','Info') + Adr('SendLink2(\'M\',' + Infos[v].v + ',\'s\',\'' + Infos[v].p + '\',0,\'' + Infos[v].sn + '\',\'' + Infos[v].c + '\');','Link','Link');
}

function RC(v) {
getObj('I' + v).style.cursor='';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].sn + '</b>')
getObj('I' + v).style.cursor='pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}