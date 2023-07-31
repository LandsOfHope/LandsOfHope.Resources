
var CharacterID = CharacterID;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPIM;
var Infos = new Array();
var IC = 0

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(PictureID, Color, Sex, Cost, v) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, Color, Sex, Cost, v);

	document.write('<div id="I' + IC + '" onmouseover="PC(' + IC + ');" onmouseout="RC(' + IC + ');"  onclick="DC(' + IC + ');" style="padding: 1px; margin: 1px; float: left; width: 40px; height: 40px; background-color: ' + Color + '"><img src=\'' + IPath + PictureID + '\' width=40 height=40></div>');
	IC = IC + 1;
}

function newInfo(PictureID, Color, Sex, Cost, v) {
	this.c = Color;
	this.p = PictureID;
	this.s = Sex;
	this.d = Cost;
	this.v = v;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>Portrait</b><Br>Cost: $' + (Infos[v].d * 5) + '/ ' + Infos[v].d + 'hc<br>Sex: ' + Infos[v].s;
	getObj('Pic').innerHTML = '<img src="' + IPath + Infos[v].p + '">';
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="window.open(\'fhfhd.asp?item_name=Avatar Change ' + Infos[v].p + '&item_number=' + Math.abs(Infos[v].v) + '&a3=' + Infos[v].d + '&custom=' + CharacterID + '\', \'PP\', \'\');">Purchase</button>';
}


function PC(v) {
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].c
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo);
}