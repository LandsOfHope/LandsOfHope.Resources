var IC = 0;
var Infos = new Array();
var MeMana = MeMana;
var Type2 = Type2;
var Type3 = Type3;
var AOK = AOK;
var Processing = 0;
var IPath = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function CS(how, stuff, mc) {
if (Processing == 0) {
	if (MeMana >= mc) {
		Processing = 1
		window.frames["ResultsOfit"].location.replace('FHSpells4.asp?Type=' + how + '&CharsAt=' + stuff + '');
	} else {
		alert('You are level ' + MeMana + ' you need to be level ' + mc + ' to cast this spell.');
	}
}
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Spell: ' + Infos[v].s + (Infos[v].d != 'Damage' ? '<br>Level Requirement : ' + Infos[v].mc + (Infos[v].b <= 0 ? '' : '<br>Duration: ' + Infos[v].b) : '<br>Combat: Cast Chance: ' + Infos[v].tc +'%');
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '' + (AOK == 1 && Infos[v].d != 'Damage' ? (Infos[v].t >= 0 && Infos[v].t != 3 && Infos[v].t != 6 && Infos[v].v != 236 ? Adr('CS(0, ' + Infos[v].v + ', ' + Infos[v].mc + ');','Cast', 'Cast') : '') : '') + (Infos[v].t != 5 && Infos[v].t != 6 && Infos[v].d != 'Damage' ? Adr('CS(1, ' + Infos[v].v + ', ' + Infos[v].mc + ');','Cast on Other','Other') : '') + Adr('window.top.loadwindow2(\'Mz.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info');
}

function AC(Color, ItemID, s, mc, t, b, PictureID, Itty, d, tc) {
if (PictureID == '0') {PictureID = ''}
if (PictureID == '') {PictureID = 'na'}
PictureID = PictureID + '.png'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, s, mc, t, b, PictureID, Itty, d, tc);
// mc=' + mc + ' v=' + ItemID + ' d="' + d + '" tc=' + tc + ' t=' + t + ' b=' + b + ' s="' + s+ '" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, ItemID, s, mc, t, b, PictureID, Itty, d, tc) {
this.c = Color;
this.mc = mc;
this.p = PictureID;
this.i = Itty;
this.v = ItemID;
this.d = d;
this.tc = tc;
this.t = t;
this.b = b;
this.s = s;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}