
var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
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

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Depositee: ' + (Infos[v].o == '' ? '[Invalid]' : Infos[v].o);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'?ItemTypeID=' + ItemTypeID + '&T=1&InventoryItemID=' + Infos[v].z + '\');', 'Remove', 'Remove') + (Infos[v].c != 0 ? Adr('confirm(\'Do you wish to remove all deposited items held for ' + Infos[v].o + ' ?\', ' + v + ')', 'Remove All', 'Remove All') : '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fhbv.asp?ItemTypeID=' + ItemTypeID + '&T=' + Infos[pb].c + '&InventoryItemID=' + Infos[pb].z);
		}
	}
}

function AC(c, o, z, PictureID, Itty, q) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, c, o, z, PictureID, Itty, q);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + (q > 0 ? ' * ' + q : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, c, o, z, PictureID, Itty, q) {
	this.color = Color;
	this.c = c;
	this.p = PictureID;
	this.i = Itty;
	this.o = o;
	this.z = z;
	this.q = q;
}