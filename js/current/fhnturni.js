var Type2 = Type2;
var IPath = window.top.FHIPI;
var Processing = 0;
var fr1 = fr1;
var fs = s;
var fs2 = s2;
var fr0 = fr0;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	window.parent.Sides[fs][fr0].Action = "" + Infos[v].i;
	window.parent.Sides[fs][fr0].ActionData = Infos[v].v;
	window.parent.Sides[fs][fr0].ActionActual = Type2;
	window.parent.Sides[fs][fr0].ActionTarget = fr1;
	window.parent.Sides[fs][fr0].ActionTargetSide = fs2
	window.parent.DrawSides();
}

function AC(v, Picture, Itty, q, t, pn, pv) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, Picture, Itty, q, t, pn, pv);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" title="' + Itty + '" style="color: ' + Color + ';"><td width="40"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '"></td><td width="160px"><b>' + Itty + '</b><br>' + pv + ' ' + pn + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, Picture, Itty, q, t, pn, pv) {
	this.c = Color;
	this.t = t;
	this.p = Picture;
	this.i = Itty;
	this.title = Itty;
	this.q = q;
	this.v = v;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].i + '</b><br>Quantity: ' + Infos[v].q);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}