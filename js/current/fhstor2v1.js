var Level = Level;
var AT = AT;
var IPath = window.top.FHIPI;
var Processing = 0;
var ItemID = ItemID;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array(50);
var InfosC = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function newInfo(Color, v, PictureID, Itty, q) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Itty;
this.q = q;
}

function GoP(PageNo) {
	window.location.replace('?I=' + ItemID + '&P=' + PageNo);
} 

function RC(v) {
getObj('Item' + v).style.cursor = '';
getObj('Item' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].PictureID, GetTips(v, 1));
getObj('Item' + v).style.cursor = 'pointer';
getObj('Item' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = GetTips(v, 0);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].PictureID == null ? 'na.gif' : Infos[v].PictureID) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].InventoryItemID + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].ItemName + '\');','Info','Info');
}

function GetTips(v, ttype) {
	var II = Infos[v];
	var t = II.ItemName;
	if (ttype == 0) {
		return '<font class="weakcell" style="color:' + II.Color + '"><b>' + (t.length > 28 ? t.substr(0, 28) + '..' : t) + '</b></font>' + (II.Identified == 1 ? (II.SkillName != '' ? '<br>Needs: ' + II.SkillName : '' ) + (II.EquipNote != '' ? '<br>Requires: ' + II.EquipNote : '' ) + '<br>Rarity: <b>' + II.Quality + (II.ItemName.indexOf('($)') != -1 || II.ItemName.indexOf('(T)') != -1 || II.ItemName.indexOf('(#)') != -1 ? ', ' : '') + (II.ItemName.indexOf('($)') != -1 ? 'Stolen ' : '' ) + (II.ItemName.indexOf('(T)') != -1 ? 'Trapped ' : (II.ItemName.indexOf('(#)') != -1 ? 'Inscribed ' : '')) + '</b>' + (II.EquipSlots != '' ? '<br>Equips To: ' + II.EquipSlots : '<br><i>Not Equippable</i>' )+  '<br>Value: ' + window.top.BSGM(II.ItemValue) :  (II.Appraisal != '' ? '<br>Appraisal: ' + II.Appraisal : '' ));
	}
	else {
		return '<font class="weakcell" style="color:' + II.Color + '"><b>' + (t.length > 28 ? t.substr(0, 28) + '..' : t) + '</b></font>' + (II.Identified == 1 ? (II.SkillName != '' ? '<br>Needs: ' + II.SkillName : '' ) + (II.EquipNote != '' ? '<br>Requires: ' + II.EquipNote : '' ) + (II.EquipSlots != '' ? '<br>Equips To: ' + II.EquipSlots + '' + (II.ArmorType > 0 ? '<br>Armor Type: <b>' + GetAT(II.ArmorType) + '</b>' : '') : '<br><i>Not Equippable</i>' )+  '<br>Required Level: <b>' + II.EquipLevel + '</b>' :  '');
	}
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

	if (Infos[InfosC] == null) {
		Infos[InfosC] = new ItemArray(Color, InventoryItemID, SkillName, Quality, Identified, ItemValue, EquipSlots, PictureID, ItemName, EquipNote, ArmorType, EquipLevel, Value1, Value2, Value3, DisplayType);
	}
	else {
		Infos[InfosC].Appraisal = (EquipLevel * 5) - 5
		Infos[InfosC].Color = Color;
		Infos[InfosC].InventoryItemID = InventoryItemID;
		Infos[InfosC].SkillName = SkillName;
		Infos[InfosC].Quality = Quality;
		Infos[InfosC].Identified = Identified;
		Infos[InfosC].ItemValue = ItemValue;
		Infos[InfosC].EquipSlots = EquipSlots;
		Infos[InfosC].PictureID = PictureID;
		Infos[InfosC].ItemName = ItemName;

		if (ItemName.indexOf(') ') != -1) {
			Infos[InfosC].ItemName2 = ItemName.substr(ItemName.indexOf(') ') + 2)
		} else {
			Infos[InfosC].ItemName2 = ItemName;
		}


		Infos[InfosC].EquipNote = EquipNote;
		Infos[InfosC].ArmorType = ArmorType;
		Infos[InfosC].EquipLevel = EquipLevel;
		Infos[InfosC].Value1 = Value1;
		Infos[InfosC].Value2 = Value2;
		Infos[InfosC].Value3 = Value3;
		Infos[InfosC].DisplayType = DisplayType;
	}
	var v = InfosC;
	document.write('<tr width="250" id="Item' + v + '" onclick="DC(' + v + ');" onmouseover="PC(' + v + ');" onmouseout="RC(' + v + ');" style="cursor: pointer;"><td><img width=16 height=16 src="' + IPath + (Infos[InfosC].PictureID == '' || Infos[InfosC].PictureID == '0' ? 'na.gif' : Infos[InfosC].PictureID) + '"></td><td width="250" style="color: ' + Infos[InfosC].Color  + ';' + (Infos[InfosC].EquipLevel > Level || Infos[InfosC].ArmorType > AT ? 'border: 1px dotted red;' : '') + 'padding-left: 5px;">' + (Infos[InfosC].Color == '#D9FB96' ? '<b>' + Infos[InfosC].ItemName + '</b>' : Infos[InfosC].ItemName) + '</td><td style="' + (Infos[InfosC].EquipSlots != '' && Infos[InfosC].ArmorType > 0 ? (Infos[InfosC].ArmorType <= AT ? 'color: #66ff66':  'color: #ff6666') : '') + '">' + (Infos[InfosC].EquipSlots != '' && Infos[InfosC].ArmorType > 0 ? GetAT(Infos[InfosC].ArmorType) : '') + '</td></tr>');
	InfosC = InfosC + 1;
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}
