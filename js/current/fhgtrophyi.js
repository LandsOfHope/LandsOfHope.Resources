var ID = ID;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var FHIPO = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?ID=' + ID + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Quantity: ' + Infos[v].q;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.parent.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].n + '\');', 'Info', 'Info') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?P=' + PageNo + '&ID=' + ID + '&Type=' + Infos[v].v + '\');}', 'Give', 'Give');
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