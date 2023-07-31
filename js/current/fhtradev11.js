var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var AT = AT;
var BagCount = 0;
var LastI = 0;
var PageNo = PageNo;
var Bag = Bag;
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(p) {
	window.location.replace('fhtrade.asp?B=' + Bag + '&CharsAt=' + CharsAt + '&P=' + p)
}


function SIEP(how, l) {
var x = 0;
var strv ='';
var ep = 0;
var BagC = '#444444';
if (l == '') {
	prompt('Please enter the two letter initials of the pack you wish to select items from i.e. JW = Jurassic Wars, UW = Uncharted Waters, DE = Dragons of the East, TE = The Afterlife, DD = Dark Depths', 5, '');
} else {
	if (l != '') {
		if (how == false) {
			BagC = '';
		}
		if (l == 'JW') {
 			ep = 1;
		} else if (l == 'UW') {
			ep = 2;
		} else if (l == 'DE') {
			ep = 3;
		} else if (l == 'TA') {
			ep = 4;
		} else if (l == 'DD') {
			ep = 5;
		}

		for (x = 0; x < IC; x++) {
			if (Infos[x].ep == ep) {
				if (how == true) {
					if (IC <= 1) {
						getObj("InventoryItemID").checked = true;
					} else {
						getObj("InventoryItemID")[x].checked = true;
					}
					
				}
			}
		}
	}
}
showItemcount();
}

function SI(how, l) {
var x = 0;
var strv ='';
var BagC = '#444444';
if (l == '') {
	prompt('Please enter a word to select all items containing that word (case sensitive) ? i.e. sword is not the same as Sword', 2, '');
} else {
	if (l != '') {
		if (how == false) {
			BagC = '';
		}
		for (x = 0; x < IC; x++) {
			if (Infos[x].i.indexOf(l) != -1) {
				if (how == true) {
					if (IC <= 1) {
						getObj("InventoryItemID").checked = true;
					} else {
						getObj("InventoryItemID")[x].checked = true;
					}
					
				}
			}
		}
	}
}
showItemcount();
}

function Pagez(Url, Count) {
var strTest = '';
var v = 0;
if (Count > 1) {
for (i = 1; i <= Count; i++) 
{         
	v = v + 1;
	strTest += '<td class="menucell" onmouseover="this.style.backgroundColor=\'#333333\';this.style.border=\'1px outset rgb(85, 98, 106)\';" onmouseout="this.style.backgroundColor=\'\';this.style.border=\'1px solid #333333\'"" style="width:20" onclick="window.location.replace(\'' + Url + i + '\');">' + i + '</td>';        
	if (v >= 15) {
		strTest += '</tr><tr>';
		v = 0;
	}
}
getObj('Pages').innerHTML = '<table><tr><td class=\'weakercell\'>Page: </td>' + strTest + '</tr></table>';
}
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'C' : (aa == 2 ? 'L' : (aa == 3 ? 'M' : 'P'))) : '');
}

function showItemcount() {
	var x = 0;
	var ItemCount = 0;
	if (getObj("InventoryItemID") != null) 
	{
		if (IC <= 1) {
			if (getObj("InventoryItemID").checked == true) {
				ItemCount = 1;
			}
		} else {
			for (x = 0; x < IC; x++) {
				if (getObj("InventoryItemID")[x].checked == true) {
					ItemCount = ItemCount + 1;
				}
			}
		}
	}

	getObj('ItemTotal').innerHTML = '<b>' + ItemCount + '</b> items';
}


function AI(Color, PictureID, ItemName, ItemID, aa, il, q, ep) {
if (PictureID == '0') {PictureID = ''}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, aa, il, q, ep);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ondblclick="DDC(' + IC + ');"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\' style="color: ' + Color + '; cursor: pointer; padding-left: 5px;">' + ItemName + '' + (q > 0 ? ' * ' + q : '') + '</td><td width=20 style="' + (aa > 0 ? (aa <= AT ? 'color: #66ff66':  'color: #ff6666') : '') + '">' + (aa > 0 ? GetAT(aa) : '') + '</td><td width=30>' + (ep == 1 ? 'JW' : (ep == 2 ? 'UW' : (ep == 3 ? 'DE' : (ep == 4 ? 'TA' : (ep == 5 ? 'DD' : ''))))) + '</td><td><input type=checkbox id=InventoryItemID name=InventoryItemID onclick="javascript:showItemcount();" style="width:12;height:12" value="' + ItemID + '"></td></tr>');
IC = IC + 1;
}

//onclick="DC(' + IC + ')"

function newInfo(Color, PictureID, ItemName, ItemID, aa, il, q, ep) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.i = ItemName;
this.il = il;
this.ep = ep;
this.q = q;
this.aa = aa;
}


function SA(how) {
var x = 0;
var totala = 0;
if (getObj("InventoryItemID") != null) 
{
	if (IC <= 1) {
		getObj("InventoryItemID").checked = how;
	} else {
		for (x = 0; x < IC; x++) {
			getObj("InventoryItemID")[x].checked = how;
		}
	}
}
}

function DC(v) {
	if (IC <= 1) {
		if (getObj("InventoryItemID").checked == true)  {
			getObj("InventoryItemID").checked = false;
		} else {
			getObj("InventoryItemID").checked = true;
		}
	} else {
		if (getObj("InventoryItemID")[v].checked == true)  {
			getObj("InventoryItemID")[v].checked = false;
		} else {
			getObj("InventoryItemID")[v].checked = true;
		}
	}
	showItemcount();
}

function DDC(v) {
	window.top.loadwindow2('im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=',300,300,'iwindow',Infos[v].i);
}

function FBI(v) {
window.location.replace('?CharsAt=' + CharsAt + '&B=' + v);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles2 = 'Open your ' + Names;
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i + '<br>Level: ' + Infos[v].il);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			if (pb == 1) {
				//window.top.PGS('drop.wav');
				getObj('Trade').submit();
			} else if (pb == 2) {
				Processing = 0;
				SI(true, returnVal);
			} else if (pb == 5) {
				Processing = 0;
				SIEP(true, returnVal);
			}
		}
	}
}