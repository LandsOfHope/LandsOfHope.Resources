// Global variables
var IPath = "https://res.landsofhope.com/game/m/"
var OPath = "https://res.landsofhope.com/game/o/"
var mapc = 0;


function Plt(Named, gid, X, Y, xx, yy, ml) {
var Picture = 'map' + gid + '.gif';
var Color2 = 'gold';
mapc = mapc + 1;
if (mapc == 1) {
	document.write('<tr>')
}
//p="' + Picture +'" ml=' + ml + ' xx=' + xx + ' yy=' + yy + ' mx=' + X + ' my=' + Y + ' t="' + Named + '" 
document.write('<td><table height=100 width=100 class=\'weakcell\' style=\'cursor: pointer; width: 99; height: 99; border: 1 dashed ' + Color2 + ';\' cellpadding=\'0\' cellspacing=\'0\' background="' + IPath + Picture + '" onmouseover="PC(this)"  onmouseout="RC(this)" onclick="GoG(' + gid + ',' + ml +', \'' + Named + '\')"><tr><td align=center valign=center style=\'filter: Glow(Color=#000000, Strength=2);\'><b>' + Named + '</b><br>Level: ' + ml + '+<br>X,Y: ' + xx + ', ' + yy + '</td></tr><tr height=\'100%\'><td align=center valign=bottom></td></tr></table></td>')
if (mapc == 2) {
	mapc = 0;
	document.write('</tr>')
}

}

function RC(stuff) {
}

function PC(stuff) {
//window.top.InfoTip('','<b>' + stuff.t + '</b><br>Click the Realm to teleport to it.');
}

function GoG(gid, l, tt) {
	window.themap.location.replace('amaps2.asp?g=' + gid + '&gn=' + tt + '&L1=' + l);
}