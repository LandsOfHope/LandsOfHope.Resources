var Mask = Mask;
var PageNo = PageNo;
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(v, PictureID, Itty, d) {
	var Color = '#66ff66';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, d);

	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'100%\'>' + Itty + '</td><td>' + d + '</td><td>' + v + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, d) {
	this.c = Color;
	this.t = Itty;
	this.p = PictureID;
	this.v = v;
	this.d = d;
}

function GoP(PageNo) {
	window.location.replace('?Mask=' + Mask + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b> (' + Infos[v].v + ')<br>Material Type: ' + Infos[v].d + '<br>ID: ' + Infos[v].v;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="window.location.replace(\'gmNII2.asp?M=' + Infos[v].d + '&I=' + Infos[v].v + '&IN=' + Infos[v].t + '\')">Use</button><' + strClicky1 + ' onclick="window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');" style=\'width: 85\'>Info</button>'
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}


