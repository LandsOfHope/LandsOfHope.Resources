
var PictureID = PictureID;
var GoPage = GoPage;
var InventoryItemID = InventoryItemID
var ItemID = ItemID
var ItemTypeID = ItemTypeID
var levelx = 1;
var itemx = 0;
var Make = Make;
var Processing2 = 0;
var lngcost = 0;
var varxx = '';
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var strClicks = strClicks;
var LastV = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(IID, Level, ItemName, Quantity, PictureID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = '#66ff66';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, IID, Level, ItemName, Quantity);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'285\'>' + ItemName + ' * ' + Quantity + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, IID, Level, ItemName, Quantity) {
	this.c = Color;
	this.l = Level;
	this.p = PictureID;
	this.i = ItemName;
	this.q = Quantity;
	this.value = IID;
}


function GoP(PageNo) {
	window.location.replace('?InventoryItemID=' + InventoryItemID + '&ITemID=+ ' + ItemID + '&P=' + PageNo + '');
}

function DC3(v, vy) {
	if (Processing2 == 0) {
		confirm('Are you sure you wish to use ' + vy + ' * ' + Infos[v].i + ' to make ' + Math.abs(vy * 2) + ' ' + Make + '?\n\n * Any items made through this process will be added to your Inventory > Queue screen * ', vy, 'Make ' + Make, 'i/' + Infos[v].p)
	}
}

function DC5(v) {
	if (Processing2 == 0) {
		var pictureid = Infos[v].p;
		prompt('You always get double the amount of resource you put in when using this screen, how many ' + Infos[v].i + '`s do you wish to use?', -1, 0, 'Make ' + Make, 'i/' + pictureid, 2);
	}
}

function DC(v) {
	if (Infos[v].l != 0) {
		levelx = Infos[v].l;
		itemx = Infos[v].value;
	}
	LastV = v;

	lngcost = 0
	var varvar = 1;
	var Total = 1;
	var WhatX = 1
	var WhatY = 1
	lngcost = Infos[v].q
	var Total2 = (Infos[v].q);
	if (Total2 >= 25) {
		Total2 = 25
	}

	if (Total2 < WhatX) {
		Total2 = 0;
	} else {
		Total2 = (Total2 / WhatX);
	}
	var x = 0;
	var strwhat = '';
	strwhat += "<div style=\"float: left; width:25; height: 15px; padding: 1px; margin: 1px;\" onclick=\"DC5(" + v + ")\"" + strClicks + ">*</div>"
	for (x = 1; x <= Total2; x++) {
		WhatY = (x == 0 ? '1' : (x * WhatX));
		if (WhatY >= 1) {
			strwhat += "<div style=\"float: left; width:25; height: 15px; padding: 1px; margin: 1px;\" " + strClicks + " onclick=\"DC3(" + v + ", " + WhatY + ")\">" + WhatY + "</div>";
		}

	}
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + (Infos[v].q > 1 ? ' * ' + Infos[v].q : '') + '</b><br>Level: ' + Infos[v].l;
	getObj('Buttons').innerHTML = '<table width="100%" class="weakcell"><tr><td><div style=\'height: 155; overflow: auto; width: 300\'>' + strwhat + '</div></td></tr></table>';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			if (pb == -1) {
				pb = returnVal;
			}
			if (pb <= Math.abs(lngcost) && pb > 0) {
				Processing2 = 1;
				window.top.Interface.location.replace('fhres2.asp?ItemID=' + ItemID + '&InventoryItemID=' + itemx + '&P=' + GoPage + '&ItemTypeID=' + ItemTypeID + '&Quantity=' + pb + '');
			}
		}
	}
}