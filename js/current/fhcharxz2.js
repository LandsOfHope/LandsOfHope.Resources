var Itemz = new Array();
var IC = 0;
var InventoryItemID = InventoryItemID;
var MakerID = MakerID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var IPath = window.top.FHIPI;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, a, y, z, PictureID, Itty, It) {
	if (Color == '#D9FB96') { Itty = '<b>' + Itty + '</b>' }
	if (Itemz[IC] == null) {
		Itemz[IC] = new Array();
	}
	Itemz[IC] = new newItemz(Color, a, y, z, PictureID, Itty, It);
	document.write('<tr width="250" id="I' + IC + '" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(this)"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newItemz(Color, a, y, z, PictureID, Itty, It) {
	this.c = Color;
	this.p = PictureID;
	this.n = Itty;
	this.i = It;
	this.z = z;
	this.a = a;
	this.y = y;
}


function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Itemz[v].p, '' + Itemz[v].n + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Itemz[v].c + '"><b>' + Itemz[v].n + '</b></font><br>New Name: ' + (Itemz[v].i == '' ? '(None Entered)' : '' + Itemz[v].i) + '' + (Itemz[v].a != 0 ? '<br>Status: Accepted and Approved<br><br>Please choose your method of payment by clicking the appropriate button below.' : '<br>Status: Accepted, awaiting GM Approval<br>You have accepted the new name, a GM will review your requested name change for spelling mistakes, profanity and other possible problems and then Approve the new name.<br>After which time you can use the Inventory > Bonuses screen to adjust the level of the item.') + '<br><br>If you have made a mistake or do not wish to purchase the name change please press the Cancel button.<br>Dated: ' + Itemz[v].y;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Itemz[v].p == '' ? 'na.gif' : Itemz[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky2 + ' onclick="window.location.replace(\'?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' + Itemz[v].z + '\');" style=\'width: 85\'>Cancel</button>' + (Itemz[v].a != 0 ? '<' + strClicky3 + ' onclick="window.open(\'fhfhd.asp?item_name=Item Rename&item_number=49&a3=1&custom=' + Itemz[v].z + '\', \'PP\', \'\');">Buy for 1hc</button>' : '');
}
