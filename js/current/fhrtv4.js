var CharsAt = CharsAt;
var BagCount = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var IPath2 = window.top.FHIPI;
var Bag = Bag;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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

function DDC(v) {
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

function SI(how, l) {
	var x = 0;
	var strv = '';
	var BagC = '#444444';
	if (l == '') {
		prompt('Please enter a word to select all items containing that word (case sensitive) ? i.e. sword is not the same as Sword', 2, '');
	} else {
		if (l != '') {
			if (how == false) {
				BagC = '';
			}
			for (x = 0; x < IC; x++) {
				if (Infos[x].t.indexOf(l) != -1) {
					if (how == true) {
						if (IC <= 1) {
							getObj("ItemID").checked = true;
						} else {
							getObj("ItemID")[x].checked = true;
						}
					}
				}
			}
		}
	}
}

function GoP(p) {
	window.location.replace('?B=' + Bag + '&CharsAt=' + CharsAt + '&P=' + p);
}

function DC(v) {

	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font>';
	getObj('Pic').innerHTML = "<img src='" + IPath2 + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '');
}

function AI(PictureID, ItemName, ItemID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ondblclick="DDC(' + IC + ');" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td><td><input type=checkbox id=ItemID name=ItemID style="width:12;height:12" value="' + ItemID + '"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.t = ItemName;
}


function FBI(v) {
	window.location.replace('?CharsAt=' + CharsAt + '&B=' + v);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles2 = 'Open your ' + Names;
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath2 + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
}

function PC(v) {
	window.top.InfoTip(IPath2 + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			if (pb == 1) {
				getObj('trade').submit();
			} else if (pb == 2) {
				Processing = 0;
				SI(true, returnVal);
			}
		}
	}
}