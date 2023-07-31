// Global variables
var GameID = GameID;
var IPath = window.top.FHIPM;
var OPath = window.top.FHIPO;
var Markers = new Array();
var MC = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function Plt(Named, gid, X, Y, xx, yy, ml) {
X = X + 5
Y = Y + 30
var Picture = 'map' + gid + '.gif';
if (gid == GameID) {
	var Color2 = '#66ff66';
} else {
	var Color2 = 'gold';
}
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newInfo(Picture, Color2, ml, xx, yy, X, Y, Named, gid);

//p="' + Picture +'" ml=' + ml + ' xx=' + xx + ' yy=' + yy + ' mx=' + X + ' my=' + Y + ' t="' + Named + '"
document.write('<table height=70 width=70 title="Click to travel to ' + Named + '" id="M' + MC + '" onmouseover="PC(' + MC + ')"  onmouseout="RC(this)" onclick="GoG(' + MC + ')" class=\'weakcell\' style=\'cursor: pointer; position: absolute; width: 69px; height: 69px; border: 1px dotted ' + Color2 + ';left: ' + X + '; top: ' + Y + ';\' cellpadding=\'0\' cellspacing=\'0\'><tr><td align=center valign=center style=\'filter: Glow(Color=#000000, Strength=2);\'><img src=\'' + IPath + Picture + '\' width=69 height=69></table>')
MC = MC + 1;
}

function newInfo(Picture, Color2, ml, xx, yy, X, Y, Named, gid) {
this.c = Color2;
this.p = Picture;
this.ml = ml;
this.xx = xx;
this.yy = yy;
this.mx = X;
this.my = Y;
this.t = Named;
this.g = gid;
}

function RC(stuff) {
}

function PC(v) {
window.top.InfoTip('','<b>' + Markers[v].t + '</b><br>Click the Realm to teleport to it.');
	getObj('ResultsL').innerHTML = '<table height=70 width=120 class=\'weakcell\' cellpadding=\'0\' cellspacing=\'0\'><tr><td align=center valign=center style=\'filter: Glow(Color=#000000, Strength=2);\'><b>' + Markers[v].t + '</b><br>Level: ' + Markers[v].ml + '+<br>X,Y: ' + Markers[v].xx + ', ' + Markers[v].yy + '</td></tr></table>';
	if (Markers[v].mx > 300) {
		getObj('ResultsL').style.left= ((Markers[v].mx) - 130) + 'px' //getObj('SM' + v).style.Left+12;
	} else {
		getObj('ResultsL').style.left= ((Markers[v].mx) + 80) + 'px' //getObj('SM' + v).style.Left+12;
	}
	getObj('ResultsL').style.top= (Markers[v].my) + 'px'
	getObj('ResultsL').style.display='';
}

function GoG(v) {
	if (Markers[v].g == GameID) {
	} else {
		window.location.replace('fh.asp?Redraw=1&MapNum=' + Markers[v].g + '&x=' + Markers[v].xx + '&y=' + Markers[v].yy);
	}
}