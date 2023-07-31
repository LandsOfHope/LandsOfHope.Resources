var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPM;
var Processing = 0;
var PageNo = PageNo;
var Type2 = Type2;
var strWord = strWord;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, e, l, PictureID, Itty) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, e, l, PictureID, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td><td>' + Math.round(l * (Math.abs(l * e) / 20)) + '</td><td><input type=checkbox id=ItemID name=ItemID style=\'width: 12px; height: 12px;\' value=' + ItemID + '></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, e, l, PictureID, Itty) {
	this.c = Color;
	this.z = ItemID;
	this.p = PictureID;
	this.t = Itty;
	this.e = e;
	this.l = l;
}

function GoP(PageNo) {
	window.location.replace('?Type=' + Type2 + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '<br><i>' + (Infos[v].l == 0 ? 'Not Locked' : 'Locked') + '</i><br>Current</b><br>Lock Level: ' + Infos[v].l + '<br>Lockpick Level To Pick: ' + Math.abs(Infos[v].l) + '<br>Lockpicking Skill to Pick: ' + Math.round(Infos[v].l * 5);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Type=' + Type2 + '&ItemID=' + Infos[v].z + '\');}', strWord, strWord);
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

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			getObj('editform').submit();
		}
	}
}