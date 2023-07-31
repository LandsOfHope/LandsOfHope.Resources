
var PageNo = PageNo;
var CharsAt = CharsAt;
var Type2 = Type2;
var QTID = 0;
var CQID = 0;
var IPath = "https://lohcdn.com/game/r/"
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AH(QN, Q) {
	var Color = 'gold';
	var PictureID = 'na.gif';
	document.write('<tr width="280" class="weakcell"><td colspan=2>' + Q + '</td></tr><tr><td colspan=2 height="100%"></td></tr>');
}

function AM(qc, qa) {
	var PictureID = '';
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, qc, qa);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width="180" style="color: ' + Color + '; padding-left: 5px;">' + qc + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, qc, qa) {
	this.c = Color;
	this.qc = qc;
	this.p = PictureID;
	this.qa = qa;
}

function DC(v) {
	window.location.replace('?Action=' + Infos[v].qa + '&CharsAt=' + CharsAt + '&Type=1');
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].qc);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}