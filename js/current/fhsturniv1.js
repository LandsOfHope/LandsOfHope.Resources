var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Processing == 0) {
		Processing = 1;
		window.parent.location.replace('fhsturn' + (fs == 0 ? '' : '2') + '.asp?type=4&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Infos[v].v);
	}
}

function AC(v, Picture, Itty, q, t, l, props) {
	var Color = '';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, Picture, Itty, q, t, l, props);
	document.write('<div title="' + Itty + '" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="float: left; width: 40; height: 40; padding: 1px; margin: 1px; ' + (Color != '' ? 'background-color: ' + Color + ';' : '') + '"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=40 height=40></div>');
	IC = IC + 1;
}

function newInfo(Color, v, Picture, Itty, q, t, l, props) {
	this.c = Color;
	this.props = props;
	this.p = Picture;
	this.title = Itty;
	this.i = Itty;
	this.t = t;
	this.l = l;
	this.q = q;
	this.v = v;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '<b>' + Infos[v].i + '</b><br>Quantity: ' + Infos[v].q + '<Br>Level: ' + Infos[v].l + '' + (Infos[v].t == 93 ? '<Br>Heals:' + (Infos[v].l * 3) + '<br>First Aid Skill<br>Recommended: ' + (Infos[v].l * 5) : '') + '<br>' + Infos[v].props);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}