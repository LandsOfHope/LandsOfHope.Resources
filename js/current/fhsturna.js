var Type2 = Type2;
var IPath = window.top.FHIP
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Processing == 0) {
		Processing = 1;
		window.parent.location.replace('fhsturn' + (fs == 0 ? '' : '2') + '.asp?type=' + Type2 + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Infos[v].v);
	}
}

function AC(e, v, Picture, Itty, q, m, sc, g, sp) {
	var Color = '';
	if (g != 0) {
		Color = 'olive';
	}
	if (Picture == '') {
		Picture = sp + '/18.gif';
	} else {
		Picture = sp + '/' + Picture + '.gif';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, e, v, Picture, Itty, q, m, sc, g, sp, 0);
	document.write('<div title="' + Itty + '" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="float: left; width: 20; height: 20; padding: 1px; margin: 1px; ' + (Color != '' ? 'background-color: ' + Color + ';' : '') + '"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=20 height=20></div>');
	IC = IC + 1;
}

function newInfo(Color, e, v, Picture, Itty, q, m, sc, g, sp, s) {
	this.c = Color;
	this.e = e;
	this.sc = sc;
	this.p = Picture;
	this.title = Itty;
	this.g = g;
	this.m = m;
	this.s = s;
	this.i = Itty;
	this.q = q;
	this.v = v;
}

function AC2(e, v, Picture, Itty, q, m, sc, g, sp) {
	var Color = '';
	Color = '#66ff66';
	if (Picture == '') {
		Picture = sp + '/18.gif';
	} else {
		Picture = sp + '/' + Picture + '.gif';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, e, v, Picture, Itty, q, m, sc, g, sp, 1);
	document.write('<div title="' + Itty + '" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="float: left; width: 20; height: 20; padding: 1px; margin: 1px; ' + (Color != '' ? 'background-color: ' + Color + ';' : '') + '"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=20 height=20></div>');
	IC = IC + 1;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].i + '</b><br>' + (Infos[v].e == 'DAMAGE' ? 'Damage: +' + Math.abs(Infos[v].q) : (Infos[v].e) + ': ' + Math.abs(Infos[v].q)) + '<br>Skill: ' + Infos[v].m + '<br>Stamina Cost: ' + Infos[v].sc + (Infos[v].s == 1 ? '<br><b>Shadowstrike</b><br><i>Requires Stealth</i></b><br>Once per fight' : ''));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}