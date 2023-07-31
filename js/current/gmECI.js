var Mask = Mask;
var CharID = CharID;
var PageNo = PageNo;
var Processing = 0;
var LastV = -1;
var LastDefault = '';
var LastForward = '';
var ItemTypeID = ItemTypeID;
var IPath = window.top.FHIPI;
var SPath = window.top.FHIPS;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&SN=' + Mask + '&P=' + GoP + '&ItemTypeID=' + ItemTypeID);
} 

function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1,1,default1);
}

function conf2(message1, forward1) {
	LastDefault = 1000;
	LastForward = forward1;
	confirm(message1,2);
}

function go(URL) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace(URL);
	}
}

function gowin(URL, w, h, pb, title) {
	window.top.showPopWin(URL, w, h, PromptReturn, null, title, pb);
}

function GetBagName(b) {
var bn = '';
if (b == 97) {
	bn = 'Bag 1';
} else if (b == 98) {
	bn = 'Bag 2';
} else if (b == 99) {
	bn = 'Bag 3';
} else if (b == 100) {
	bn = 'Bag 4';
} else if (b == 101) {
	bn = 'Bag 5';
} else if (b == 102) {
	bn = 'Bag 6';
} else if (b == 103) {
	bn = 'Bag 7';
} else if (b == 104) {
	bn = 'Bag 8';
} else if (b == 6) {
	bn = 'Backpack';
} else if (b == 67) {
	bn = 'Sellbag';
} else if (b == 47) {
	bn = 'Bank';
} else if (b == 48) {
	bn = 'Secure bag';
} else if (b == 68) {
	bn = 'Tradebag';
} else if (b < 0) {
	bn = 'Chest';
} else if (b > 0) {
	bn = 'Equipped';
} else {
	bn = 'Unknown';
}
return bn;
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Hidden: ' + (Infos[v].b == 0 ? 'Yes' : 'No') + '<br>Location: ' + GetBagName(Infos[v].m) + (Infos[v].bb != 0 ? '<br>Bag: ' + GetBagName(Infos[v].bb) : '');
getObj('Pic').innerHTML = "<img src='" + Infos[v].p + "'>"
if (Processing == 0) {
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') + Adr('conf(\'Please enter a new picture for this Item.\', \'' + Infos[v].p2 +'\', \'?CharsAt=' + CharID + '&P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&ItemID=5&InventoryItemID=' + Infos[v].v + '&Name=\');', 'Picture', 'Picture') + (Infos[v].m < 0 || (Infos[v].m >= 97 && Infos[v].m <= 104) || Infos[v].m == 47 || Infos[v].m == 48 || Infos[v].m == 67 || Infos[v].m == 68 ? Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&ItemID=3&InventoryItemID=' + Infos[v].v + '\');','Move', 'Move') : Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=7&InventoryItemID=' + Infos[v].v + '\');', 'Unequip', 'Unequip')) + Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' + Infos[v].v + '\');','Take', 'Take') + (Infos[v].m != 68 ? Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=10&InventoryItemID=' + Infos[v].v + '\');', 'Trade Bag', 'Trade Bag') : '') + Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=8&InventoryItemID=' + Infos[v].v + '\');', 'Destroy', 'Destroy') + (Infos[v].i == 'True' ? '' : Adr('Processing = 1;window.location.replace(\'?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&ItemID=4&P=' + PageNo + '&InventoryItemID=' + Infos[v].v + '\');', 'Identify', 'Identify'));
} else {
	getObj('Buttons').innerHTML = '';
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + returnVal);
				}
			} else 	if (pb == 2) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + '');
				}
			}

		}
	}
}

function AvC(Color, v, i, b, m, PictureID, Itty, bb) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, i, b, m, PictureID, Itty, bb);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + (PictureID.indexOf('.') == -1 ? SPath : IPath) + PictureID + (PictureID.indexOf('.') == -1 ? '.png' : '') + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, i, b, m, PictureID, Itty, bb) {
this.color = Color;
this.t = Itty;
this.p2 = (PictureID == '' ? 'na.gif' : PictureID);
this.bb = bb;
this.m = m;
this.b = b;
this.v = v;
this.i = i;
this.p = (PictureID.indexOf('.') == -1 ? SPath : IPath) + '' + PictureID + (PictureID.indexOf('.') == -1 ? '.png' : '');
}

