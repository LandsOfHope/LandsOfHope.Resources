var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(n, pn, n2, we, ae, ce, oe) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, n, pn, n2, we, ae, ce, oe);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td style="color: ' + Color + '">' + pn + '</td><td>' + (we > 0 ? 'X' : '') + '</td><td>' + (ae > 0 ? 'X' : '') + '</td><td>' + (ce > 0 ? 'X' : '') + '</td><td>' + (oe > 0 ? 'X' : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, n, pn, n2, we, ae, ce, oe) {
	this.c = Color;
	this.we = we;
	this.ae = ae;
	this.ce = ce;
	this.oe = oe;
	this.n = n;
	this.n2 = n2;
	this.pn = pn;
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
	return '<b>' + Infos[v].pn + '</b><br>Item of Name: ' + Infos[v].n2 + '<br>Example:<br><i>' + (Infos[v].we > 0 ? 'Tin sword of ' + Infos[v].n2 : (Infos[v].ae > 0 ? 'Mutilated helmet of ' + Infos[v].n2 : (Infos[v].ce > 0 ? 'Lace pants of ' + Infos[v].n2 : (Infos[v].oe > 0 ? 'Tin ring of ' + Infos[v].n2 : '')))) + '</i><br><br><b>Available for:</b><br>' + (Infos[v].we > 0 ? 'Weapons<br>' : '') + (Infos[v].ae > 0 ? 'Armor<br>' : '') + (Infos[v].ce > 0 ? 'Clothing<br>' : '') + (Infos[v].oe > 0 ? 'Other<br>' : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
}
