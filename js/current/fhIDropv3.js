var Processing = 0;
var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var Pr = Pr;
var BagCount = 0;
var IC = 0;
var Infos = new Array();
var OPath = window.top.FHIPO;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, l, PictureID, Itty, d) {
	if (l == 'C') { l = 'Common' }
	else if (l == 'N') { l = 'Uncommon' }
	else if (l == 'R') { l = 'Rare' }
	else if (l == 'V') { l = 'Very Rare' }
	else if (l == 'U') { l = 'Unique' }
	else if (l == 'A') { l = 'Artifact' }

	if (Color == '#D9FB96') { Itty = '<b>' + Itty + '</b>' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, l, PictureID, Itty, d);
	// width="260" l="' + l + '" d=' + d + ' p="' + PictureID + '" g="' + Color + '" z=' + z + '
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ondblclick="DDC(' + IC + ');" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; cursor: pointer; padding-left: 5px">' + Itty + '</td><td><input type=checkbox id=ItemID name=ItemID style="width:12;height:12" value="' + z + '"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, l, PictureID, Itty, d) {
	this.c = Color;
	this.z = z;
	this.p = PictureID;
	this.t = Itty;
	this.l = l;
	this.d = d;
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

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}

function FB(v) {
	if (ItemTypeID == 48) {
		window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
	} else {
		window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
	}
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&InventoryItemID=1');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles = 'Swap items in or out of your ' + Names;
	var Titles2 = 'Open your ' + Names;
	var Actions = 'FB(' + n + ');';
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout', '') + '</td></tr></table></td>');
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font><br>' + (Infos[v].d != 0 ? '<font id=tred>This item is drop protected but will be dropped regardless using this screen.</font>' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1;window.top.PGS(\'drop.wav\'); window.location.replace(\'?InventoryItemID=' + InventoryItemID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=' + Infos[v].z + '\');}" style=\'width: 85\'>Drop</button>' + (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			if (pb == 1) {
				window.top.PGS('drop.wav');
				getObj('Droppy').submit();
			} else if (pb == 2) {
				Processing = 0;
				SI(true, returnVal);
			}
		}
	}
}
