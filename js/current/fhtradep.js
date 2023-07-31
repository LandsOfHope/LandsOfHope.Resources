var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
var BagCount = 0;
var LastI = 0;
var PageNo = PageNo;
var ItemCount = 0;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function GoP(p) {
	window.location.replace('fhtradep.asp?CharsAt=' + CharsAt + '&P=' + p);
}

function DC(v) {
	getObj('CharsID').value = Infos[v].v;
	getObj('Trade').submit();
}

function AC(PictureID, ItemName, ItemID, rn, pn, Special) {
	if (PictureID == '0') { PictureID = '' }
	if (Special == 0) { var Color = 'white' } else { var Color = 'gold'; ItemName += '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, rn, pn, Special);
	// v=' + ItemID + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" pn="' + pn + '" rn="' + rn + '" 
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ondblclick="DDC(' + IC + ');" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px">' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, rn, pn, Special) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.i = ItemName;
	this.pn = pn;
	this.rn = rn;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
