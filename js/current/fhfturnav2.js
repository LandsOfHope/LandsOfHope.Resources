var Type2 = Type2;
var IPath = window.top.FHIP
var Processing = 0;
var sc = 0;
var Choices = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Processing == 0) {
		if (Type2 != 33) {
			window.top.PGS('attack.wav');
		} else {
			window.top.PGS('attackr.wav');
		}
		Processing = 1;
		window.parent.OKDOKE = 0;
		window.parent.location.replace('fhfturn' + (fs == 0 ? '' : '2') + '.asp?type=' + Type2 + '&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Choices[v].v + '&st=' + Choices[v].s);
	}
}

function Choice(e, v, Picture, Itty, q, m, sc, rs, sp, Color, s) {
	this.e = e;
	this.v = v;
	this.p = Picture;
	this.i = Itty;
	this.q = q;
	this.m = m;
	this.sc = sc;
	this.rs = rs;
	this.sp = sp;
	this.Color = Color;
	this.s = s;
}


function AC(e, v, Picture, Itty, q, m, sc, rs, sp) {
	var Color = '';
	if (rs != 0) {
		Color = 'gold';
	}
	if (Picture == '') {
		Picture = sp + '/18.gif';
	} else {
		Picture = sp + '/' + Picture + '.gif';
	}
	if (Choices[sc] == null) {
		Choices[sc] = new Array();
	}
	Choices[sc] = new Choice(e, v, Picture, Itty, q, m, sc, rs, sp, Color, 0);


	document.write('<div width=18 height=18 id="Choice' + sc + '" title="' + Itty + '" style="padding: 1px; margin: 1px; background-color: ' + Color + '; float: left;" onclick="DC(' + sc + ')" onmouseover="PC(' + sc + ')" onmouseout="RC(' + sc + ')"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=16 height=16></div>');
	sc = sc + 1;
}

function AC2(e, v, Picture, Itty, q, m, sc, rs, sp) {
	var Color = '';
	Color = '#66ff66';
	if (rs != 0) {
		Color = 'gold';
	}
	if (Picture == '') {
		Picture = sp + '/18.gif';
	} else {
		Picture = sp + '/' + Picture + '.gif';
	}

	if (Choices[sc] == null) {
		Choices[sc] = new Array();
	}
	Choices[sc] = new Choice(e, v, Picture, Itty, q, m, sc, rs, sp, Color, 1);


	document.write('<div width=18 height=18 id="Choice' + sc + '" style="padding: 1px; margin: 1px; background-color: ' + Color + '; float: left;" onclick="DC(' + sc + ')" onmouseover="PC(' + sc + ')" onmouseout="RC(' + sc + ')"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=16 height=16></div>');
	sc = sc + 1;
}

function RC(v) {
	window.top.hideTip();
	getObj('Choice' + v).style.cursor = '';
	getObj('Choice' + v).style.backgroundColor = Choices[v].Color;
}

function PC(v) {
	window.top.InfoTip('' + IPath + Choices[v].p, '<b>' + Choices[v].i + '</b><br>' + (Choices[v].e == 'DAMAGE' ? 'Damage: +' + Math.abs(Choices[v].q) : (Choices[v].e) + ': ' + Math.abs(Choices[v].q)) + '<br>Skill: ' + Choices[v].m + '<br>Stamina Req: ' + Choices[v].sc + '<br>Stamina Used: ' + Math.round(Choices[v].sc / 2) + (Choices[v].s == 1 ? '<br><b>Shadowstrike</b><br><i>Requires Stealth</i></b><br>Once per fight' : ''));
	getObj('Choice' + v).style.cursor = 'pointer';
	getObj('Choice' + v).style.backgroundColor = BGCOLOR_S
}