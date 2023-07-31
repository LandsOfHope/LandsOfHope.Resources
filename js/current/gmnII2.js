var Mask = Mask;
var IN = IN;
var PageNo = PageNo;
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(l, Itty) {
	var Color = '#66ff66';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, l, Itty);

	// i="' + Itty + '" l=' + l+ ' p="' + PictureID + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=\'100%\'>' + Itty + '</td><td>' + l + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, l, Itty) {
	this.c = Color;
	this.t = Itty;
	this.l = l;
}

function GoP(PageNo) {
	window.location.replace('?M=' + Mask + '&IN=' + IN + '&I=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b> (' + Infos[v].l + ')<br>Level: ' + Infos[v].l;
	getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="window.location.replace(\'gmNII3.asp?M=' + Infos[v].t + '&I=' + CharsAt + '&IN=' + IN + '\')">Use</button>'
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].t + '<br>Level: ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}


