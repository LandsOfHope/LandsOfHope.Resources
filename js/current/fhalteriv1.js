var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
var LastV = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, PictureID, Itty, It) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, PictureID, Itty, It);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, PictureID, Itty, It) {
	this.c = Color;
	this.z = z;
	this.p = PictureID;
	this.t = Itty;
	this.i = It;
}

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
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

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t + '</b></font><br>New Name: ' + (Infos[v].i == '' ? '(None Entered)' : '' + Infos[v].i + '<br>Once you are happy that you have the right name, please click the Accept button. This releases the name to a GM who will approve it ASAP, names are verified to prevent people from using offensive or rude names.<br><br><b>note:</b> You can cancel any stage of the Item Rename, even after a GM has approved it.<br><Br> Please use the Manage button below after you Accept this item rename.') + '<br>' + (Infos[v].t.indexOf('($)') != -1 ? '<br>Stolen' : '') + (Infos[v].t.indexOf('(T)') != -1 ? '<br>Trapped' : (Infos[v].t.indexOf('(#)') != -1 ? '<br>Inscribed' : '')) + '';
	getObj('Buttons').innerHTML = '' + (Infos[v].i == '' ? Adr('prompt(\'Please enter the new name for this item\', 1,\'' + Infos[v].t + '\',\'Upgrade Item\',\'i/' + Infos[v].p + '\');', 'Rename', 'Rename') : Adr('prompt(\'Please update the requested new name for this item\', 2,\'' + Infos[v].i + '\');', 'Update', 'Update') + Adr('confirm(\'Are you sure you want to rename this item from ' + Infos[v].t + ' to ' + Infos[v].i + ' (requires GM approval)\',3);', 'Accept', 'Accept'));
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

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			Processing = 1;
			if (pb == 1) {
				window.top.Interface.location.replace('fhalteri.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=3&ItemName=' + returnVal + '&InventoryItemID=' + Infos[LastV].z);
			} else if (pb == 2) {
				window.top.Interface.location.replace('fhalteri.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=4&ItemName=' + returnVal + '&InventoryItemID=' + Infos[LastV].z);
			} else if (pb == 3) {
				window.top.Interface.location.replace('fhalteri.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=5&InventoryItemID=' + Infos[LastV].z);
			}
		}
	}
}