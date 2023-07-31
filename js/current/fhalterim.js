var IC = 0;
var Infos = new Array();
var InventoryItemID = InventoryItemID;
var MakerID = MakerID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var IPath = window.top.FHIPI;
var LastV = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color,a, y, z, PictureID, Itty, It) {
if (Color == '#D9FB96') {Itty = '<b>' + Itty + '</b>'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color,a, y, z, PictureID, Itty, It);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color,a, y, z, PictureID, Itty, It) {
this.c = Color;
this.z = z;
this.a = a;
this.y = y;
this.p = PictureID;
this.t = Itty;
this.i = It;
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
getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t + '</b></font><br>New Name: ' + (Infos[v].i == '' ? '(None Entered)' : '' + Infos[v].i) + '' + (Infos[v].a != 0 ? '<br>Status: Accepted and Approved<br>Click the Finish button below to complete the process and rename your item.' : '<br>Status: Accepted, awaiting GM Approval<br>You have accepted the new name, a GM will review your requested name change for spelling mistakes, profanity and other possible problems and then Approve the new name.') + '<br><br>If you have made a mistake or do not wish to continue change please press the Cancel button.<br>Dated: ' + Infos[v].y;
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = Adr('confirm(\'Are you sure you want to cancel the renaming of this item?.\', 1);','Cancel rename','Cancel') + (Infos[v].a != 0 ? Adr('confirm(\'Finish the renaming process by renaming your item?.\',2);', 'Finish', 'Finish') : '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			Processing = 1;
			if (pb == 1) {
				window.top.Interface.location.replace('fhalterim.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' +Infos[LastV].z);
			} else if (pb == 2) {
				window.top.Interface.location.replace('fhalterim.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=2&InventoryItemID=' +Infos[LastV].z);
			}
		}
	}
}