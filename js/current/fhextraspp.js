var PageNo = PageNo;
var ItemID = ItemID;
var InventoryItemID = InventoryItemID;
var IPath = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, at) {
var Color = '#D9FB96';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty, at);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td>' + GetAT(at) + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, at) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Itty;
this.at = at;
}


function GoP(PageNo) {
window.location.replace('?InventoryItemID=' + ItemID + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}


function GetAT(q) {
	return (q == 1 ? ' <b>Cloth</b>' : (q == 2 ? ' <b>Leather</b>' : (q == 3 ? ' <b>Chain</b>' : (q == 4 ? ' <b>Plate</b>' : 'None'))))
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].i + '<br>Armor: ' + GetAT(Infos[v].at));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Allowed Armor: ' + GetAT(Infos[v].at);
	getObj('Buttons').innerHTML = Adr('window.open(\'professions/' + Infos[v].i  + '.htm\');','Info','Info') + AddButton(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function AddButton(v) {
	if (Processing == 0) {
		return  Adr('if (Processing == 0) {confirm(\'All of your class skills will be reset as will your stats, spells and styles will be replaced with the correct ones for your class, Continue?\', ' + Infos[v].v + ');}','Change class to ' + Infos[v].i,'Change');
	} else {
		return '';
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhextraspp.asp?InventoryItemID=' + InventoryItemID + '&ItemID=' + pb);
		}
	}
}

