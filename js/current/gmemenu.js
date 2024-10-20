
var Type2 = Type2;
var Mask = Mask;
var CharacterName = CharacterName;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(m, d, p2, Itty, a) {
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, m, d, p2, Itty, a);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (p2 == '' ? 'na.gif' : p2) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, m, d, p2, Itty, a) {
	this.c = Color;
	this.d = d;
	this.m = m;
	this.p2 = p2;
	this.a = a;
	this.t = Itty;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Author: ' + Infos[v].a;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p2 == '' ? 'na.gif' : Infos[v].p2) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'/gm/gmEmenu.asp?Action=1&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Save', 'Save');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}