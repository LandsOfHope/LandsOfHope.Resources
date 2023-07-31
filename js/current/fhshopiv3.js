var ItemTypeID = ItemTypeID;
var CharsAt = CharsAt;
var BagCount = 0;
var Levelx = Levelx;
var ATX = ATX;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}

function TA() {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			if (getObj("ItemID").checked == true && getObj("ItemID").disabled == false) {
				totala = Math.abs(totala) + Math.abs(Infos[x].v)
			}
		} else {
			for (x = 0; x < IC; x++) {
				if (getObj("ItemID")[x].checked == true && getObj("ItemID")[x].disabled == false) {
					totala = Math.abs(totala) + Math.abs(Infos[x].v)
				}
			}
		}
	}
	return Math.round(totala);
}

function SA(how) {
	var x = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			if (getObj("ItemID").disabled == false) {
				getObj("ItemID").checked = how;
			}
		} else {
			for (x = 0; x < IC; x++) {
				if (getObj("ItemID")[x].disabled == false) {
					getObj("ItemID")[x].checked = how;
				}
			}
		}
	}
}

function SI(how, l, nl) {
	if (nl == null) {
		nl = '';
	}
	if (l == '' && nl == '') {
		prompt('Please enter a word to select all items containing that word (case sensitive) ? i.e. sword is not the same as Sword', 1, '');
	} else {
		var x = 0;
		if (getObj("ItemID") != null) {
			for (x = 0; x < IC; x++) {
				if (((Infos[x].t.indexOf(l) != -1 && nl == '') || (Infos[x].t.indexOf(nl) == -1 && nl != '')) || (l == '*' && Infos[x].q2 > 1)) {
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

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				SI(true, returnVal, '');
			} else if (pb == 2 && Processing == 0) {
				Processing = 1;
				window.top.PGS('money.wav');
				getObj('sellitems').submit();
			} else if (pb == 3 && Processing == 0) {
				Processing = 1;
				window.top.Interface.location.replace('fhshopi.asp?CharsAt=' + CharsAt + '&ItemID=-1');;
			}
		}
	}
}

function FB(v) {
	if (ItemTypeID == 48) {
		window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
	} else {
		window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
	}
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles = 'Swap items in or out of your ' + Names;
	var Titles2 = 'Open your ' + Names;
	var Actions = 'FB(' + n + ');';
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout', '') + '</td></tr></table></td>');
}

function DC(v) {
	var q3 = Math.abs(Infos[v].q2);
	var q2 = 0;
	if (q3 > 1000) {
		q2 = 1000;
	} else {
		q2 = q3;
	}
	getObj('Stuff2').innerHTML = Infos[v].t + '<br>Level: ' + Infos[v].l + '<br>Quantity: ' + q2 + (q3 > Math.abs(q2) ? ' of ' + q3 + '<br>Maximum you can sell: ' + q2 : '') + '<br>Value: ' + window.top.BSGM(Infos[v].v) + (q3 > 1 ? ' (<b>ea</b> ' + (window.top.BSGM((Infos[v].v / q3))) + ')' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (q3 <= 1000 ? Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&ItemID=' + Infos[v].z + '\');}', 'Sell', 'Sell') : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&aok=1000&ItemTypeID=' + ItemTypeID + '&ItemID=' + Infos[v].z + '\');}', 'Sell', 'Sell')) + (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '');
}

function AM(Color, Named, ShopID, value, q2, Picture, Level, at) {
	var q3 = q2;
	//z=' + ShopID + ' c="' + Color + '" style="color: ' + Color + '" onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)"
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture, Level, at);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td style="' + (Level > Levelx || at > ATX ? ';border: 1px dotted red' : '') + '">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td><input type=checkbox' + (Math.abs(q2) > 1000 ? ' disabled' : '') + ' id=ItemID name=ItemID value="' + ShopID + '" style="width: 13px; height: 13px;"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture, Level, at) {
	this.c = Color;
	this.t = Named;
	this.p = Picture;
	this.l = Level;
	this.q2 = q2;
	this.v = value;
	this.z = ShopID;
	this.at = at;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, ' ' + Infos[v].t + '<br>Level: ' + Infos[v].l + '<br>Value: ' + window.top.BSGM(Infos[v].v) + (Infos[v].q2 > 1 ? '<br>Each: ' + (window.top.BSGM(Math.round(Infos[v].v / Infos[v].q2))) + '' : ''));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
