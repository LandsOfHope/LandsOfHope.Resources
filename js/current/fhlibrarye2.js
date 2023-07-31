var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(n, n2, fl) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, n, n2, fl);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td style="color: ' + Color + '">' + n + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, n, n2, fl) {
	this.c = Color;
	this.n = n;
	this.n2 = n2;
	this.fl = fl;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].n + '</b><br>Bonuses:<br>' + Infos[v].fl;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
}
