var ID = ID;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPS;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('?P=' + PageNo + '&ID=' + Infos[v].v);
	}
}

function AM(v, Named, cost, d) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	var Picture = 'na.gif';
	Infos[IC] = new newInfo(Color, v, Named, cost, d);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td valign=top><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="610" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><b>' + Named + '</b><br>' + d + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, Named, cost, d) {
	this.c = Color;
	this.v = v;
	this.p = 'na.gif';
	this.n = Named;
	this.cost = cost;
	this.d = d;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].n);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}