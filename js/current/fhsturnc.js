var spelle = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPS;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Processing == 0) {
		window.top.PGS(Infos[v].se);
		Processing = 1;
		window.parent.location.replace('fhsturn' + (fs == 0 ? '' : '2') + '.asp?type=2&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Infos[v].v);
	}
}

function AC(v, Picture, Itty, q, m, g, se, rs) {
var Color = '';
if (g != 0) {
	Color = 'olive';
}
if (rs != 0) {
	Color = 'gold';
}
if (Picture == '') {
	Picture = '18.png';
} else {
	Picture = '' + Picture + '.png';
}
if (IC != 0 && spelle == 0 && IC > 0) {
	spelle = 1;
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Picture, Itty, q, m, g, se, rs);
document.write('<div title="' + Itty + '" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="float: left; width: 16; height: 16; padding: 1px; margin: 1px; ' + (Color != '' ? 'background-color: ' + Color + ';' : '') + '"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=16 height=16></div>');
IC = IC + 1;
}

function newInfo(Color,v, Picture, Itty, q, m, g, se, rs) {
this.c = Color;
this.se = se;
this.rs = rs;
this.p = Picture;
this.title = Itty;
this.g = g;
this.m = m;
this.i = Itty;
this.q = q;
this.v = v;
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].c;
}

function PC(v) {
window.top.InfoTip('', '<b>' + Infos[v].i + '</b>' + (Infos[v].rs != 0 ? '<br>Readied Spell' : '') + '' + (Infos[v].g != 0 ? '<br>Affects Group' : '') + '<br>Damages: ' + Math.abs(Infos[v].q) + '<br>Mana Cost: ' + Infos[v].m);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}