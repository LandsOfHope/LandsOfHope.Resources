var GoPage = GoPage;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(v, n) {
	var PictureID = 'zucrba.gif';
	if (PictureID == '0') { PictureID = '' }
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, v, n);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + n + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, v, n) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.n = n;
}


function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><form method=post action=\'fhedspl.asp\' style=\'margin: 0px;\' name=pool id=pool><input type=hidden name=CharsAt id=CharsAt value=' + Infos[v].v + '><input name=poolname id=poolname value=\'' + Infos[v].n + '\' size=20 maxlength=20>' + Adr('getObj(\'pool\').submit();', 'Save changes', 'Save') + '</form>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + Infos[v].v + '&P=' + GoPage + '\');}', 'Delete', 'Delete') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhedspl2.asp?CharsAt=' + Infos[v].v + '&P2=' + GoPage + '\');}', 'Configure', 'Configure');
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

function GoP(p) {
	window.location.replace('fhedspl.asp?P=' + p);
}