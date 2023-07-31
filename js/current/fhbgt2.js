var IPath = window.top.FHIPB;
var IPath2 = window.top.FHIPR;
var BuildingCount = BuildingCount;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	if (BuildingCount == 0 || (BuildingCount > 0 && BuildingCount <= Math.round(Infos[v].bc))) {
		confirm('Trade buildings to ' + Infos[v].t + ', they can own ' + Infos[v].bc + ' more properties?', v);
	} else if (BuildingCount > 0 && BuildingCount > Math.round(Infos[v].bc)) {
		alert('You can not trade to ' + Infos[v].t + ', you are trying to trade ' + BuildingCount + ' properties, they only have room for ' + Infos[v].bc);
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('CharsAt').value = Infos[pb].v;
			getObj('Trader').submit();
		}
	}
}

function AI(PictureID, ItemName, ItemID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	document.write('<tr style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
}

function AC(PictureID, ItemName, ItemID, BC) {
	if (PictureID == '0') { PictureID = '' }
	if (BC < BuildingCount) {
		var Color = '#ff6666';
	} else {
		var Color = LITE;
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, BC);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td><td width=\'25\'>' + BC + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, BC) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.t = ItemName;
	this.bc = BC;
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