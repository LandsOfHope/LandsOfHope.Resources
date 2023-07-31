var Itemz = new Array();
var IC = 0;
var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var IPath = window.top.FHIPI;
var LastClickedItem = -1;
var OPath = window.top.FHIPO;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, PictureID, Itty, It) {
if (Color == '#D9FB96') {Itty = '<b>' + Itty + '</b>'}
if (Itemz[IC] == null) {
	Itemz[IC] = new Array();
}
Itemz[IC] = new newItemz(Color, z, PictureID, Itty, It);
document.write('<tr ID="I' + IC + '" width="250" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(this)"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newItemz(Color, z, PictureID, Itty, It) {
this.c = Color;
this.p = PictureID;
this.n = Itty;
this.i = It;
this.z = z;
}


function GoP(PageNo) {
window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}

function RC(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + (Itemz[v].p == '' ? 'na.gif' : Itemz[v].p), '' + Itemz[v].n + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
LastClickedItem = v;
getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Itemz[v].c + '"><b>' + Itemz[v].n + '</b></font><br>Picture description: ' + (Itemz[v].i == '' ? '(None Entered)' : '' + Itemz[v].i + '<br>Once you are happy, please click the Accept button. This releases the item to a GM who will draw it and allow you to purchase the upgrade.<br>Please use the Manage button below after you Accept this Upgrade.') + '';
getObj('Buttons').innerHTML = '' + (Itemz[v].i == '' ? '<' + strClicky2 + ' onclick="prompt(\'Please enter the picture description for this item\',1,\'' + Itemz[v].n + '\',\'Custom Item Picture\',\'i/' + Itemz[v].p + '\');" style=\'width: 85\'>Set</button>' : '<' + strClicky2 + ' onclick="prompt(\'Please update the picture description for this item\',2,\'' + Itemz[v].i + '\');" style=\'width: 85\'>Update</button><' + strClicky2 + ' onclick="confirm(\'Are you sure you want to accept this custom picture description, there is a flat fee of $10 or 2hc when it has been completed.\', 3);" style=\'width: 85\'>Accept</button>');
}

function PromptReturn(returnVal, postback) {
	var v = LastClickedItem;
	var II = Itemz[v];
	if (returnVal != null) {
		if (returnVal != false) {
			if (postback == 1) {
 				if (returnVal != null) {
					if (returnVal.indexOf('&') == -1) {
						window.top.Interface.location.replace('fhitemimage.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=3&ItemName=' + returnVal + '&InventoryItemID=' +II.z + '');
					} else if (returnVal.indexOf('&') != -1) {
						alert('Description can not contain & character');
					}
				}
			} else if (postback == 2) {
 				if (returnVal != null) {
					if (returnVal.indexOf('&') == -1) {
						window.top.Interface.location.replace('fhitemimage.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=4&ItemName=' + returnVal + '&InventoryItemID=' +II.z + '');
					} else if (returnVal.indexOf('&') != -1) {
						alert('Description can not contain & character');
					}
				}
			} else if (postback == 3) {
				if (returnVal == true) {
					window.top.Interface.location.replace('fhitemimage.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=5&InventoryItemID=' + II.z + '');
				}
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
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles = 'Swap items in or out of your ' + Names;
var Titles2 = 'Open your ' + Names;
var Actions = 'FB(' + n + ');';
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout','') + '</td></table></td>');
}