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
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, PictureID, Itty, l) {
if (Color == '#D9FB96') {Itty = '<b>' + Itty + '</b>'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, PictureID, Itty, l);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, PictureID, Itty, l) {
this.c = Color;
this.z = z;
this.p = PictureID;
this.t = Itty;
this.l = l;
}

function GoP(PageNo) {
window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
LastV = v;
getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t + '</b><br>Current Level: ' + Infos[v].l;
getObj('Buttons').innerHTML = '' + (Infos[v].l > 1 ? Adr('confirm(\'Are you sure you want to lower ' + Infos[v].t + ' to level 1?\',3);','Lower','Lower') : '');
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
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles = 'Swap items in or out of your ' + Names;
var Titles2 = 'Open your ' + Names;
var Actions = 'FB(' + n + ');';
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout','') + '</td></tr></table></td>');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			Processing = 1;
			if (pb == 3) {
				window.top.Interface.location.replace('fhalterl.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=5&InventoryItemID=' +Infos[LastV].z);
			}
		}
	}
}