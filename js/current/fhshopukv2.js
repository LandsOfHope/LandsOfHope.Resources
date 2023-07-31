var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td><input type=checkbox id=ItemID name=ItemID style=\'width: 12px; height: 12px;\' value=\'' + v + '\'></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Processing == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?ItemID=' + Infos[v].v + '&P=' + PageNo + '\')};', 'Unlock ' + Infos[v].t, 'Unlock') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?ItemID=-' + Infos[v].v + '&P=' + PageNo + '\')};', 'Unlock and then open the ' + Infos[v].t, 'Unlock/Open') : '');
}

function SA(how) {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			getObj("ItemID").checked = how;
		} else {
			for (x = 0; x < IC; x++) {
				getObj("ItemID")[x].checked = how;
			}
		}
	}
}