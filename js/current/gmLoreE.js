
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(Color, v, Itty) {
	var PictureID = 'bk3.gif';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, Itty, PictureID);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, Itty, PictureID) {
	this.c = Color;
	this.v = v;
	this.i = Itty;
	this.p = PictureID;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'/gm/gmLoreE2.asp?InventoryItemID=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].i + ' Edit\');', 'Edit', 'Edit');
}