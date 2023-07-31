var PageNo = PageNo;
var CharsAt = CharsAt;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIP + 'p/';
var LastV1 = -1;
var LastV2 = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(v, PictureID, PictureID2, Itty) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, PictureID2, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onmousedown="DC(event, ' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img width=15 height=15 src="' + IPath + (PictureID2 == '' || PictureID2 == '0' ? 'na.gif' : PictureID2) + '"></td><td width=\'100%\'>' + Itty + '</td><td></td><td></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, PictureID2, Itty) {
	this.color = Color;
	this.i = Itty;
	this.v = v;
	this.p = PictureID;
	this.p2 = PictureID2;
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(e, v) {
	e = e || window.event;
	getObj('Stuff2').innerHTML = '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p2 == '' ? 'na.gif' : Infos[v].p2) + "' width=40 height=40>";
	getObj('Buttons').innerHTML = '';

	getObj('P1').value = '';
	getObj('P1').value = Infos[v].p;

	getObj('P2').value = '';
	getObj('P2').value = Infos[v].p2;

	var b = 0;
	if (e.which == null) {
		b = e.button;
	} else {
		b = e.which;
	}

	if (b == 1) {
		if (LastV1 >= 0) {
			getObj('I' + LastV1).cells[2].innerHTML = '';
		}
		getObj('MS').value = '';
		getObj('MS').value = Infos[v].v;
		getObj('I' + v).cells[2].innerHTML = 'X';
		LastV1 = v;
	} else {
		if (LastV2 >= 0) {
			getObj('I' + LastV2).cells[3].innerHTML = '';
		}
		getObj('SS').value = '';
		getObj('SS').value = Infos[v].v;
		getObj('I' + v).cells[3].innerHTML = 'X';
		LastV2 = v;
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}