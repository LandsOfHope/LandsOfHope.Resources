var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var ID = ID;
var IPath = window.parent.FHIP + "r/"
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(a, v, l, Named, Picture) {
	var Color = window.top.GetAColor(a);
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, a, v, l, Named, Picture);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '" width=15 height=15></td><td width="300" style="color: ' + Color + '; padding-left: 5px"><b>' + Named + '</b></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, a, v, l, Named, Picture) {
	this.c = Color;
	this.v = v;
	this.p = Picture;
	this.t = Named;
	this.l = l;
	this.a = a;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].t + '</b>' + '<br>Level: ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	if (Processing == 0) {
		getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].l;
		getObj('Pic').innerHTML = '<img src="' + IPath + Infos[v].p + '">';
		getObj('Buttons').innerHTML = '' + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhoptioni.asp?P=' + PageNo + '&ID=' + Infos[v].v + '\');}', 'Import friends list', 'Import');
	}
}