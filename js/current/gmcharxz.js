var Itemz = new Array();
var IC = 0;
var InventoryItemID = InventoryItemID;
var MakerID = MakerID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var IPath = window.top.FHIPI;
var LastClickedItem = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(a, z, PictureID, Itty, It, Charry, CID, rt) {
	var Color = 'gold'
	if (a == 0) {
		if (rt == 1) {
			Color = 'orange'
		} else {
			Color = '#ff6666'
		}
	} else {
		Color = '#66ff66'
	}
	if (Itemz[IC] == null) {
		Itemz[IC] = new Array();
	}
	Itemz[IC] = new newItemz(Color, a, z, PictureID, Itty, It, Charry, CID, rt);
	document.write('<tr width="250" id="I' + IC + '" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(this)"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td>' + (rt == 0 ? '$' : '0') + '</td></tr>');
	IC = IC + 1;
}

function newItemz(Color, a, z, PictureID, Itty, It, Charry, CID, rt) {
	this.c = Color;
	this.p = PictureID;
	this.n = Itty;
	this.i = It;
	this.z = z;
	this.a = a;
	this.rt = rt;
	this.cn = Charry;
	this.cid = CID;
}

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Itemz[v].p == '' ? 'na.gif' : Itemz[v].p), '' + Itemz[v].n + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	LastClickedItem = v;
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Itemz[v].c + '"><b>' + Itemz[v].n + '</b></font>(' + Itemz[v].z + ')<br>Who: ' + Itemz[v].cn + '<br>Description: ' + (Itemz[v].i == '' ? '(None Entered)' : '' + Itemz[v].i + '') + '<br>' + (Itemz[v].a == 0 ? 'Awaiting Authorisation' : 'Authorised');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Itemz[v].p == '' ? 'na.gif' : Itemz[v].p) + "'>";
	//<' + strClicky2 + ' onclick="prompt(\'Please enter the new name for this item\', 1,\'' + Itemz[v].n + '\');" style=\'width: 85\'>Rename</button>
	getObj('Buttons').innerHTML = (Itemz[v].a == 0 ? '<' + strClicky2 + ' onclick="confirm(\'Authorise the picture of this item?\', 2);" style=\'width: 85\'>Authorise</button>' : '') + '<' + strClicky2 + ' onclick="window.location.replace(\'?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=4&InventoryItemID=' + Itemz[v].z + '&CharsAt=' + Itemz[v].cid + '\')" style=\'width: 85\'>Cancel</button>' + (Itemz[v].cid != 0 ? '<' + strClicky2 + ' onclick="window.location.replace(\'fhmess.asp?CharsAt=-' + Itemz[v].cid + '\')" style=\'width: 85\'>Message</button>' : '');
}

function PromptReturn(returnVal, postback) {
	var v = LastClickedItem;
	var II = Itemz[v];
	if (returnVal != null) {
		if (returnVal != false) {
			if (postback == 1) {
				if (returnVal != null) {
					window.top.Interface.location.replace('/gm/gmcharxz.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=3&ItemName=' + returnVal + '&InventoryItemID=' + II.z + '&CharsAt=' + II.cid);
				}
			} else if (postback == 2) {
				if (returnVal == true) {
					window.top.Interface.location.replace('/gm/gmcharxz.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=5&InventoryItemID=' + II.z + '&CharsAt=' + II.cid);
				}
			}
		}
	}
}
