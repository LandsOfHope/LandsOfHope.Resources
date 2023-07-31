var Processing = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var TC = 0;
var Targets = new Array();
var LastPet = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	if (Processing == 0) {
		LastPet = v;
		getObj('CharsID').value = Infos[v].v;
	}
}

function DC2(v) {
	if (Processing == 0 && LastPet >= 0) {
		if (Infos[LastPet].v == Targets[v].v) {
			alert('You can not trade a pet to itself.')
		} else {
			confirm('Trade ' + Infos[LastPet].t + ' to ' + Targets[v].t + '?', v);
		}
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('CharsAt2').value = Targets[pb].v;
			Processing = 1;
			getObj('Trader').submit()
		}
	}
}

function AC(PictureID, ItemName, ItemID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.t = ItemName;
	this.selected = 0;
}

function AC2(PictureID, ItemName, ItemID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Targets[TC] == null) {
		Targets[TC] = new Array();
	}
	Targets[TC] = new newInfo(Color, PictureID, ItemName, ItemID);
	document.write('<tr id="T' + TC + '" onmouseover="PTC(' + TC + ')" onmouseout="RTC(' + TC + ')" onclick="DC2(' + TC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	TC = TC + 1;
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

function RTC(v) {
	getObj('T' + v).style.cursor = '';
	getObj('T' + v).style.backgroundColor = '';
}

function PTC(v) {
	window.top.InfoTip(IPath + Targets[v].p, Targets[v].t);
	getObj('T' + v).style.cursor = 'pointer';
	getObj('T' + v).style.backgroundColor = BGCOLOR_S
}