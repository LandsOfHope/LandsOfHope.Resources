var LastV = 0;
var Pet = Pet;
var LastZ = 0;
var LastI = 0;
var AT = AT;
var BagCount = 0;
var Level = Level;
var IPath = window.top.FHIPI;
var ItemTypeID = ItemTypeID;
var OPath = window.top.FHIPO;
var GoPage = GoPage;
var GoPage2 = GoPage2;
var CharsAt = CharsAt;

var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function SA(how, Bag) {
	var x = 0;
	var strv = '';
	var BagC = '#FF0000';
	if (how == false) { BagC = '' };
	getObj("Bag" + Bag).value = '';
	for (x = 0; x < IC; x++) {
		if (Infos[x].b == Bag) {
			getObj("I" + x).style.backgroundColor = BagC;
			if (how == true) {
				strv += ';' + Infos[x].v + ';'
			}
		}
	}
	if (how == true) {
		getObj("Bag" + Bag).value = strv
	}
}

function FBI(v) {
	window.location.replace('?CharsAt=' + v + '&LID=' + ItemTypeID + '&Pet=' + Pet);
}
function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles2 = 'Open your ' + Names;
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
}

function AdCc(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles2 = 'Open your ' + Names;
	document.write('<td style=\'cursor: pointer\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td p="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" class="menucell" title="' + Titles2 + '" style="width: 30px; color: ' + Color + '; background-color:' + Color + '" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + IPath + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=30 height=30 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
	document.write('</td>');
}

function SI(how, Bag, l) {
	var x = 0;
	var strv = '';
	var BagC = '#FF0000';
	if (l == '') {
		prompt('Please enter a word to select all items containing that word (case sensitive) ? i.e. sword is not the same as Sword', Bag, '');
	} else {
		if (l != '') {
			if (how == false) {
				BagC = '';
			}
			strv = getObj("Bag" + Bag).value + '';
			for (x = 0; x < IC; x++) {
				if (Infos[x].b == Bag) {
					if (Infos[x].i.indexOf(l) != -1) {
						getObj("I" + x).style.backgroundColor = BagC;
						if (how == true) {
							if (getObj("Bag" + Bag).value.indexOf(';' + Infos[x].v + ';') == -1) {
								strv += ';' + Infos[x].v + ';'
							}
						}
					}
				}
			}
			if (how == true) {
				getObj("Bag" + Bag).value = strv
			}
		}
	}
}


function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			SI(true, pb, returnVal);
		}
	}
}

function DC(e, v) {
	if (LastV != Infos[v].v) {
		LastV = Infos[v].v;
		if (getObj('Bag1').value.indexOf(';' + Infos[v].v + ';') == -1) {
			getObj('Bag1').value = getObj('Bag1').value + ';' + Infos[v].v + ';';
			getObj('I' + v).style.backgroundColor = (Infos[v].i.indexOf('?') == -1 ? (Infos[v].i.indexOf('[s]') == -1 ? '#0000FF' : '#FF0000') : '#ABABAB')
		} else {
			getObj('Bag1').value = getObj('Bag1').value.replace(';' + Infos[v].v + ';', '');
			getObj('I' + v).style.backgroundColor = ''
		}
	} else if (LastI != Infos[v].v) {
		LastI = Infos[v].v;
		//window.top.InfoTip(IPath + Infos[v].p, '' + Infos[v].i + '<br>Level: ' + Infos[v].il);
	}
}

function DD(e, v) {
	if (LastZ != Infos[v].v) {
		LastZ = Infos[v].v;
		if (getObj('Bag2').value.indexOf(';' + Infos[v].v + ';') == -1) {
			getObj('Bag2').value = getObj('Bag2').value + ';' + Infos[v].v + ';';
			getObj('I' + v).style.backgroundColor = (Infos[v].i.indexOf('?') == -1 ? (Infos[v].i.indexOf('[s]') == -1 ? '#0000FF' : '#FF0000') : '#ABABAB')
		} else {
			getObj('Bag2').value = getObj('Bag2').value.replace(';' + Infos[v].v + ';', '');
			getObj('I' + v).style.backgroundColor = ''
		}
	} else if (LastI != Infos[v].v) {
		LastI = Infos[v].v;
		//window.top.InfoTip(IPath + Infos[v].p, '' + Infos[v].i + '<br>Level: ' + Infos[v].il);
	}
}

function GoP(p, pagebox) {
	if (pagebox == null) {
		pagebox = 'Pages';
	}
	if (pagebox == 'Pages') {
		window.location.replace('?LID=' + ItemTypeID + '&P2=' + GoPage2 + '&CharsAt=' + CharsAt + '&Pet=' + Pet + '&P=' + p);
	} else {
		window.location.replace('?LID=' + ItemTypeID + '&P2=' + p + '&CharsAt=' + CharsAt + '&Pet=' + Pet + '&P=' + GoPage);
	}
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function GetATS(aa, d) {
	return (aa > 0 ? (aa == 1 ? 'C' : (aa == 2 ? 'L' : (aa == 3 ? 'M' : 'P'))) : '');
}

function AI(PictureID, ItemName, ItemID, d, at, il, Color) {
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, ItemName, ItemID, d, at, il, Color, 1);

	document.write('<tr id="I' + IC + '" title=\'Click to select this item.\' onclick="DC(event, ' + IC + ')" style="width: 100%; cursor: pointer; color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style=\'' + (il > Level || at > AT ? 'border: 1px dotted red' : '') + '\'>' + ItemName + '</td><td>' + GetATS(at, d) + '</td></tr>');
	IC = IC + 1;
}

function AD(PictureID, ItemName, ItemID, d, at, il, Color) {
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, ItemName, ItemID, d, at, il, Color, 2);
	document.write('<tr id="I' + IC + '" title=\'Click to select this item.\' onclick="DD(event, ' + IC + ')" style="width: 100%; cursor: pointer; color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style=\'' + (il > Level || at > AT ? 'border: 1px dotted red' : '') + '\'>' + ItemName + '</td><td>' + GetATS(at, d) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(PictureID, ItemName, ItemID, d, at, il, Color, b) {
	this.c = Color;
	this.i = ItemName;
	this.p = PictureID;
	this.v = ItemID;
	this.d = d;
	this.il = il;
	this.at = at;
	this.b = b;
}