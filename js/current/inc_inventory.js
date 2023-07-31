var Petted = Petted;
var CharsAt = CharsAt;
var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var Pr = Pr;
var AT = AT;
var Filter = Filter;
var BagCount = 0;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var InvMode = InvMode;
var DefaultShop = 0;
var Shop = 0;
var counter = 0;
var Shops = new Array();
var Level = Level;
var InvItems = new Array(50);
var InvItemsC = 0;
var LastSelectedItem = -1;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
LastSelectedItem = -1;
if (getObj('Shop' + ShopNum).innerHTML == '') {
	DrawShop(ShopNum);
}
else
{
	getObj('Shop' + ShopNum).innerHTML = '';
}
}

function DrawShop(ShopNum) {
var strout = '';
var y = 0;
for (y = 0; y < Shops[ShopNum].length; y++) {
strout = strout + Shops[ShopNum][y];
}
getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\' id=\'ShopR' + ShopNum + '\' cellpadding=1 cellspacing=0>' + strout + '</table>';
}


function AH(ShopC, SkillGroup) {
document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function ItemArray(Color, InventoryItemID, SkillName, Quality, Identified, ItemValue, EquipSlots, PictureID, ItemName, EquipNote, ArmorType, EquipLevel, Value1, Value2, Value3, DisplayType) {
this.Appraisal = (EquipLevel * 5) - 5
this.Color = Color;
this.InventoryItemID = InventoryItemID;
this.SkillName = SkillName;
this.Quality = Quality;
this.Identified = Identified;
this.ItemValue = ItemValue;
this.EquipSlots = EquipSlots;
this.PictureID = PictureID;
this.ItemName = ItemName;
this.EquipNote = EquipNote;
this.ArmorType = ArmorType;
this.EquipLevel = EquipLevel;
this.Value1 = Value1;
this.Value2 = Value2;
this.Value3 = Value3;
this.DisplayType = DisplayType;
if (ItemName.indexOf(') ') != -1) {
	this.ItemName2 = ItemName.substr(ItemName.indexOf(') ') + 2)
} else {
	this.ItemName2 = ItemName;
}

}

function AddItem(Color, InventoryItemID, SkillName, Quality, Identified, ItemValue, EquipSlots, PictureID, ItemName, EquipNote, ArmorType, EquipLevel, Value1, Value2, Value3, DisplayType) {
	if (Quality == 'C') {Quality = 'Common'}
	else if (Quality == 'N') {Quality = 'Uncommon'}
	else if (Quality == 'R') {Quality = 'Rare'}
	else if (Quality == 'V') {Quality = 'Very Rare'}
	else if (Quality == 'U') {Quality = 'Unique'}
	else if (Quality == 'A') {Quality = 'Artifact'}

	if (InvItems[InvItemsC] == null) {
		InvItems[InvItemsC] = new ItemArray(Color, InventoryItemID, SkillName, Quality, Identified, ItemValue, EquipSlots, PictureID, ItemName, EquipNote, ArmorType, EquipLevel, Value1, Value2, Value3, DisplayType);
	}
	else {
		InvItems[InvItemsC].Appraisal = (EquipLevel * 5) - 5
		InvItems[InvItemsC].Color = Color;
		InvItems[InvItemsC].InventoryItemID = InventoryItemID;
		InvItems[InvItemsC].SkillName = SkillName;
		InvItems[InvItemsC].Quality = Quality;
		InvItems[InvItemsC].Identified = Identified;
		InvItems[InvItemsC].ItemValue = ItemValue;
		InvItems[InvItemsC].EquipSlots = EquipSlots;
		InvItems[InvItemsC].PictureID = PictureID;
		InvItems[InvItemsC].ItemName = ItemName;

		if (ItemName.indexOf(') ') != -1) {
			InvItems[InvItemsC].ItemName2 = ItemName.substr(ItemName.indexOf(') ') + 2)
		} else {
			InvItems[InvItemsC].ItemName2 = ItemName;
		}


		InvItems[InvItemsC].EquipNote = EquipNote;
		InvItems[InvItemsC].ArmorType = ArmorType;
		InvItems[InvItemsC].EquipLevel = EquipLevel;
		InvItems[InvItemsC].Value1 = Value1;
		InvItems[InvItemsC].Value2 = Value2;
		InvItems[InvItemsC].Value3 = Value3;
		InvItems[InvItemsC].DisplayType = DisplayType;
	}
	window.top.Interface.DrawItem(InvItemsC);
	InvItemsC = InvItemsC + 1;
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function GoP(PageNo) {
window.location.replace('?ItemTypeID=' + ItemTypeID + '&F=' + Filter + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '&CharsAt=' + CharsAt);
}

function FB(v) {
if (ItemTypeID == 48) {
	window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '&Pet=' + CharsAt);
} else {
	window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '' + '&Pet=' + CharsAt);
}
}

function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '&F=' + Filter + '&InventoryItemID=1&CharsAt=' + CharsAt);
}

function PCDC(v) {
	PC(v);
	ItemClick(v);
}

function RC(v) {
var II = InvItems[v];
getObj('Item' + v).style.backgroundColor='';
getObj('Item' + v).style.color=II.Color;
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles = 'Swap items in or out of your ' + Names;
var Titles2 = 'Open your ' + Names;
var Actions = 'FB(' + n + ');';
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout','') + '</td></tr></table></td>');
}

function PC(v) {
if (LastSelectedItem >= 0) {
	RC(LastSelectedItem);
}

LastSelectedItem = v;
var II = InvItems[v];
window.top.InfoTip(IPath + (II.PictureID == '' ? 'na.gif' : II.PictureID),GetTips(v, 1));
getObj('Item' + v).style.backgroundColor=BGCOLOR_S;
}

function DDC(stuff) {
window.parent.loadwindow2('im.asp?Test=' + II.InventoryItemID + '&Bonus=0&Material=',300,300,'iwindow','Info Window');
}

function GetTips(v, ttype) {
	var II = InvItems[v];
	var t = II.ItemName;
	if (ttype == 0) {
		return '<font class="weakcell" style="color:' + II.Color + '"><b>' + (t.length > 28 ? t.substr(0, 28) + '..' : t) + '</b></font>' + (II.Identified == 1 ? (II.SkillName != '' ? '<br>Needs: ' + II.SkillName : '' ) + (II.EquipNote != '' ? '<br>Requires: ' + II.EquipNote : '' ) + '<br>Rarity: <b>' + II.Quality + (II.ItemName.indexOf('($)') != -1 || II.ItemName.indexOf('(T)') != -1 || II.ItemName.indexOf('(#)') != -1 ? ', ' : '') + (II.ItemName.indexOf('($)') != -1 ? 'Stolen ' : '' ) + (II.ItemName.indexOf('(T)') != -1 ? 'Trapped ' : (II.ItemName.indexOf('(#)') != -1 ? 'Inscribed ' : '')) + '</b>' + (II.EquipSlots != '' ? '<br>Equips To: ' + II.EquipSlots : '<br><i>Not Equippable</i>' )+  '<br>Value: ' + window.top.BSGM(II.ItemValue) :  (II.Appraisal != '' ? '<br>Appraisal: ' + II.Appraisal : '' ));
	}
	else {
		return '<font class="weakcell" style="color:' + II.Color + '"><b>' + (t.length > 28 ? t.substr(0, 28) + '..' : t) + '</b></font>' + (II.Identified == 1 ? (II.SkillName != '' ? '<br>Needs: ' + II.SkillName : '' ) + (II.EquipNote != '' ? '<br>Requires: ' + II.EquipNote : '' ) + (II.EquipSlots != '' ? '<br>Equips To: ' + II.EquipSlots + '' + (II.ArmorType > 0 ? '<br>Armor Type: <b>' + GetAT(II.ArmorType) + '</b>' : '') : '<br><i>Not Equippable</i>' )+  '<br>Required Level: <b>' + II.EquipLevel + '</b>' :  '');
	}
}
