var MapID = MapID;
var IPath = window.top.FHIPB;
var BCount = 0;
var IID = IID;
var PageNo = PageNo;
var Infos = new Array();
var IC = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = 'white'
	if (BCount == 0) {
		document.write('<tr>');
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID);
	document.write('<td id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + ';"><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td>');
	if (BCount == 12) {
		document.write('<td width="100%"></td></tr>');
		BCount = -1;
	}
	BCount = BCount + 1
	IC = IC + 1;
}

function newInfo(Color, PictureID) {
	this.c = Color;
	this.p = PictureID;
}

function DC(v) {
	window.location.replace("?CharsAt=" + IID + "&P=" + PageNo + "&MapID=" + MapID + "&IMG=" + Infos[v].p)
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + IID + '&MapID=' + MapID + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].p);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}