var SN = SN;
var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var RPath = window.top.FHIPR;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function GetSColor(s) {
	if (s == 0) {
		return 'yellow';
	} else if (s == 1) {
		return 'green';
	} else {
		return 'red';
	}
}

function GetSName(s) {
	if (s == 0) {
		return 'System';
	} else if (s == 1) {
		return 'Hope';
	} else {
		return 'Demise';
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Owner: ' + Infos[v].cn + '<br>Server: ' + GetSName(Infos[v].s) + '<br>' + Infos[v].sdd;
	getObj('Pic').innerHTML = "<img src='" + RPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'scrapbook.asp?MT=' + Infos[v].v + '\',615,395,\'iwindow\',\'' + Infos[v].n + '\');', 'Open the scrapbook', 'Open');
}

function AM(v, Named, sdc, sdu, sdd, s, Picture, CN) {
	var Color = GetSColor(s);
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, Named, sdc, sdu, sdd, s, Picture, CN);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + RPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, Named, sdc, sdu, sdd, s, Picture, CN) {
	this.c = Color;
	this.n = Named;
	this.p = Picture;
	this.sdc = sdc;
	this.sdu = sdu;
	this.sdd = sdd;
	this.cn = CN;
	this.s = s;
	this.v = v;
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(RPath + Infos[v].p, Infos[v].n);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}