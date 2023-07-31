var ID = ID;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var FHIPO = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('?P=' + PageNo + '&ID=' + Infos[v].v + '');
	}
}

function AM(v, Picture, Named, q) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, Picture, Named, q);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td valign=top><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="260" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Named + (q > 1 ? ' * ' + q : '') + '</td></tr>');
	IC = IC + 1;
}

function AM2(Named, Picture, q) {
	var Color = 'red';
	document.write('<tr><td valign=top><img src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="260" style="color: ' + Color + '; padding-left: 5px">To complete this quest you need <b>' + q + ' * ' + Named + '</b>, this item will drop randomly from monsters in this dungeon.</td></tr>');
}

function newInfo(Color, v, Picture, Named, q) {
	this.c = Color;
	this.v = v;
	this.p = Picture;
	this.n = Named;
	this.q = q;
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