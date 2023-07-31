var Processing = 0;
var CharsAt = CharsAt;
var Name = Name;
var PageNo = PageNo;
var Mask = Mask;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, v, PictureID, t, e) {
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, t, e);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + t + '</td><td>' + e + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, t, e) {
	this.c = Color;
	this.v = v;
	this.e = e;
	this.t = t;
	this.p = PictureID;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].t;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhiidv.asp?CharsAt=' + Infos[v].v + '\', \'EI\');', 'Descriptions', 'Descriptions');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&Name=' + Name + '&Mask=' + Mask + '&P=' + PageNo + '');
}
