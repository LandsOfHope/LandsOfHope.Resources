var PageNo = PageNo;
var CharsAt = CharsAt;
var Type2 = Type2;
var QTID = 0;
var CQID = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AH(ID, QT, QN, Q) {
	QTID = QT;
	CQID = ID;
	var Color = 'gold';
	var PictureID = 'na.gif';
	document.write('<tr width="280" class="navborder" style="color: ' + Color + '; padding-left: 5px"><td colspan=2>' + QN + '</td></tr>');
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
	if (Processing == 0) {
		Processing = 1;
		window.parent.location.replace('fhquesta.asp?Action=' + Infos[v].qa + '&CQ=' + CQID + '&QT=' + QTID + '&CharsAt=' + Type2 + '&Type=' + CharsAt);
	}
	//	window.location.replace('?Action=' + Infos[v].qa + '&CharsAt=' + CharsAt + '&Type=1');
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