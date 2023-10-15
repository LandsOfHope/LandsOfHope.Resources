// Global variables
var OX = OX - 1;
var OY = OY - 1;
var t = 1;
var Type2 = Type2;
var IPath = "https://lohcdn.com/game/flags/";
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

var X = 0;
var Y = 0;
var lastx = 0;
var lasty = 0;
var Allegiance = Allegiance;

function Plt(Named, a, da, X, Y, EX, EY, d, fi) {
	var Special = 0;
	if (a < 0 && d != 0) {
		var Color2 = 'orange';
		var SkillName = 'Not Captured';

	} else {
		if (a < 0) {
			var Color2 = '#11FF11';
			var SkillName = 'Objective';
		} else {
			var Color2 = GetFColor(a);
			var SkillName = GetFName(a);
		}
	}
	if (d == 0) {
		SkillName = SkillName + " - Base";
	} else {
		if (Allegiance == a && a > 0) {
			SkillName = SkillName + " - Controlled";
		} else if (Allegiance != a && a > 0) {
			SkillName = SkillName + " - Disputed";
		}
	}

	var QX = ((X - 1) * 5) + 1;
	var QY = ((Y - 1) * 5) + 1;

	// fi="' + fi + '" d=' + d + ' s="' + SkillName + '" n="' + Named + '" xc="' + Color2 + '"  mx=' + (X) + ' my=' + (Y) + ' t="' + Named + '" 
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color2, Named, SkillName, fi, X, Y);
	document.write('<div id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style=\'float: left; color: ' + Color2 + ';width: 275px; height: 30px; padding: 1px; margin: 1px\'><table align=center valign=middle height=\'30\' width=\'290px\' class=\'weakcell\' cellpadding=1 cellspacing=1><tr><td style=\'color: ' + Color2 + ';\'>' + Named + '</td></tr><tr><td>' + SkillName + '</td></tr></table></div>')
	IC = IC + 1;
}

function DC(v) {
	getObj('Info').innerHTML = '<table width=\'300px\' height=\'300px\' class=\'weakcell\' style=\'background-image: URL(' + Infos[v].p + ')\' cellpadding=0 cellspacing=0><tr><td style=\'Color: ' + Infos[v].c + ';background-color: ' + BGCOLOR + ';\'><b>' + Infos[v].n + '</b></td></tr><tr><td style=\'background-color: ' + BGCOLOR_S + ';\'>' + Infos[v].s + '</td></tr><tr><td style=\'background-color: ' + BGCOLOR + ';\'>' + Infos[v].f + '</td></tr><tr><td height=\'100%\'></td></tr></table>'
}

function newInfo(Color2, Named, SkillName, fi, x, y) {
	this.c = Color2;
	this.n = Named;
	this.s = SkillName;
	this.f = fi;
	this.x = x;
	this.y = y;
	this.p = 'game/m/14/' + (((x - 1) / 25) * 500) + '-' + (((y - 1) / 25) * 500) + '.png'

}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].n + '<br>' + Infos[v].s);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}