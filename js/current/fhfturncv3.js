var sc = 0;
var IPath = window.top.FHIPS;
var Processing = 0;
var Choices = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Choices[v].e == 'Shield') {
		fr1 = fr0;
		fs2 = fs;
	}

	if (Processing == 0) {
		window.top.PGS(Choices[v].se);
		Processing = 1;
		window.parent.OKDOKE = 0;
		window.parent.location.replace('fhfturn' + (fs == 0 ? '' : '2') + '.asp?type=2&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Choices[v].v);
	}
}

function AC(v, Picture, Itty, q, m, g, se, rs, e) {
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

if (Choices[sc] == null) {
	Choices[sc] = new Array();
}
Choices[sc] = new Choice(v, Picture, Itty, q, m, g, se, rs, e, Color);


document.write('<div width=18 height=18 id="Choice' + sc + '" title="' + Itty + '" style="padding: 1px; margin: 1px; background-color: ' + Color + '; float: left;" onclick="DC(' + sc + ')" onmouseover="PC(' + sc + ')" onmouseout="RC(' + sc + ')"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=16 height=16></div>');
sc = sc + 1;

}

function Choice(v, Picture, Itty, q, m, g, se, rs, e, Color) {
this.v = v;
this.p = Picture;
this.i = Itty;
this.q = q;
this.m = m;
this.g = g;
this.se = se;
this.rs = rs;
this.Color = Color;
this.e = e;
}

function RC(v) {
window.top.hideTip();
getObj('Choice' + v).style.cursor = '';
getObj('Choice' + v).style.backgroundColor=Choices[v].Color;
}

function PC(v) {
window.top.InfoTip('', '<b>' + Choices[v].i + '</b>' + (Choices[v].rs != 0 ? '<br>Readied Spell' : '') + '' + (Choices[v].g != 0 ? '<br>Affects Group' : '') + (Choices[v].e == 'Shield' ? '<br>Shields: ' + Math.abs(Choices[v].q) + 'dmg' : (Choices[v].e == 'Drain' ? '<br><b>Drain Effect</b>' : '<br>Damages: ' + Math.abs(Choices[v].q))) + '<br>Mana Cost: ' + Choices[v].m);
getObj('Choice' + v).style.cursor = 'pointer';
getObj('Choice' + v).style.backgroundColor=BGCOLOR_S
}