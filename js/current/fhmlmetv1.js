var IPath = window.top.FHIPI;
var FHIPO = window.top.FHIPO;
var p2 = 'na.gif';
var IC = 0;
var Infos = new Array();
var Processing = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, IID, Title, Named) {
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, IID, Title, Named);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=40><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=40 height=40></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;"><b>' + Named + '</b><br>' + Title + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, IID, Title, Named) {
	this.c = Color;
	this.t = Title;
	this.p = PictureID;
	this.n = Named;
	this.v = IID;
}

function DC(v) {
	if (Processing == 0) {
		Processing = 1;
		getObj('IID').value = Infos[v].v
		getObj('stufff').submit();
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].n + '<br>' + Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}