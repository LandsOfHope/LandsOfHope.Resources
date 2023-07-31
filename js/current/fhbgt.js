var CharsAt = CharsAt;
var PageNo = PageNo;
var Count2 = 0;
var IPath = window.top.FHIPB;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
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

function DC(v) {
	if (IC <= 1) {
		if (getObj("ItemID").checked == true) {
			getObj("ItemID").checked = false;
		} else {
			getObj("ItemID").checked = true;
		}
	} else {
		if (getObj("ItemID")[v].checked == true) {
			getObj("ItemID")[v].checked = false;
		} else {
			getObj("ItemID")[v].checked = true;
		}
	}
}

function AI(PictureID, ItemName, ItemID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td><td><input type=checkbox id=ItemID name=ItemID style="width:12;height:12" value="' + ItemID + '"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.t = ItemName;
}
