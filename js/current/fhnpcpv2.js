var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPO;
var IID = IID;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, Itty, PictureID, v, g) {
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	if (v > 0) {
		Color = 'yellow';
	} else if (g > 0) {
		Color = '#6464FF';
	}
	Infos[IC] = new newInfo(Color, ItemID, Itty, PictureID, v, g);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td>' + (v > 0 ? ' (VENDOR)' : (g > 0 ? ' (GUILD NPC)' : '')) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, Itty, PictureID, v, g) {
	this.c = Color;
	this.value = ItemID;
	this.p = PictureID;
	this.t = Itty;
	this.v = v;
	this.g = g;
}

function DC(v) {
	if (Infos[v].t != 'Current') {
		confirm('Set profession to ' + Infos[v].t + '?', v);
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + IID + '&P=' + PageNo + '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('p2').value = Infos[pb].value;
			getObj('ProfForm').submit();
		}
	}
}