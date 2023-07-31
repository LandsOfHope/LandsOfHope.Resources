var IPath = window.top.FHIPS;
var Processing = 0;
var Choices = new Array();
var sc = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Processing == 0) {
		Processing = 1;
		window.parent.OKDOKE = 0;
		window.parent.location.replace('fhfturn' + (fs == 0 ? '' : '2') + '.asp?type=3&s=' + fs + '&s2=' + fs2 + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Choices[v].v);
	}
}

function AC(v, Picture, Itty, q, m, g, rs) {
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
	Choices[sc] = new Choice(v, Picture, Itty, q, m, g, rs, Color);


	document.write('<div id="Choice' + sc + '" title="' + Itty + '" style="width: 16px; height: 16px; padding: 1px; margin: 1px; background-color: ' + Color + '; float: left;" onclick="DC(' + sc + ')" onmouseover="PC(' + sc + ')" onmouseout="RC(' + sc + ')"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=16 height=16></div>');
	sc = sc + 1;
}

function Choice(v, Picture, Itty, q, m, g, rs, Color) {
	this.v = v;
	this.p = Picture;
	this.i = Itty;
	this.q = q;
	this.m = m;
	this.g = g;
	this.rs = rs;
	this.Color = Color;
}

function RC(v) {
	window.top.hideTip();
	getObj('Choice' + v).style.cursor = '';
	getObj('Choice' + v).style.backgroundColor = Choices[v].Color;
}

function PC(v) {
	window.top.InfoTip('', '<b>' + Choices[v].i + '</b><br>' + (Choices[v].q == -1 || Choices[v].q == -2 ? 'Cures: ' + Math.abs(Choices[v].q) + (Choices[v].q == -1 ? ' disease' : ' poison') : 'Heals: ' + Math.abs(Choices[v].q)) + '<br>Mana Cost: ' + Choices[v].m);
	getObj('Choice' + v).style.cursor = 'pointer';
	getObj('Choice' + v).style.backgroundColor = BGCOLOR_S
}