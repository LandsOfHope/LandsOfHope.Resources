var Processing = 0;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPB;
var TC = 0;
var Targets = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC2(v) {
	if (Processing == 0) {
		confirm('Confirm trade and movement of Vendor to ' + Targets[v].t + '?', v)
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('CharsAt3').value = Targets[pb].v;
			Processing = 1;
			getObj('Trader').submit()
		}
	}
}

function AC(PictureID, ItemName, ItemID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	document.write('<tr><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
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
	document.write('<tr id="T' + TC + '" onmouseover="PTC(' + TC + ')" onmouseout="RTC(' + TC + ')" onclick="DC2(' + TC + ')"><td width=15><img src=\'' + IPath2 + 'na.gif' + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	TC = TC + 1;
}

function RTC(v) {
	getObj('T' + v).style.cursor = '';
	getObj('T' + v).style.backgroundColor = '';
}

function PTC(v) {
	window.top.InfoTip(IPath, Targets[v].t);
	getObj('T' + v).style.cursor = 'pointer';
	getObj('T' + v).style.backgroundColor = BGCOLOR_S;
}