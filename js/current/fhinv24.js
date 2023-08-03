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
var DrawStyle = 1;
var LastClickedItem = -1;
var Waiting = 0;

document.write('<script src="https://lohcdn.com/js/current/inc_inventory.js" language="JavaScript"></script>');

function ItemClick(v) {
	LastClickedItem = v;
	var II = InvItems[v];
	getObj('Stuff2').innerHTML = GetTips(v, 0);
	getObj('Pic').innerHTML = "<img src='" + IPath + (II.PictureID == '' ? 'na.gif' : II.PictureID) + "'>";
	if (CharsAt > 0) {
		getObj('Buttons').innerHTML = '<' + strClicky1 + ' onclick="window.parent.loadwindow2(\'im4.asp?Test=' + II.InventoryItemID + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + II.ItemName + '\')" style=\'width: 85\'>Info</button><' + strClicky2 + ' onclick="this.disabled=true;window.location.replace(\'?P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&F=' + Filter + '&CharsAt=' + CharsAt + '&ItemID=10&InventoryItemID=' + II.InventoryItemID + '\');" style=\'width: 85\'>Take</button><' + strClicky + ' onclick="confirm(\'Dropping this item DELETES it from the game FOREVER. Are you sure you wish to continue?\', 1);" style=\'width: 85\'>Drop</button>';
	} else {
		getObj('Buttons').innerHTML = '' + (II.Color == '#C86464' ? (II.ItemName.indexOf('(L)') != -1 ? '<' + strClicky1 + ' onclick="this.disabled=true;window.location.replace(\'fhuse.asp?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + II.InventoryItemID + '&F=' + Filter + '\')" style=\'width: 85\'>Unlock</button>' : '') + '<' + strClicky2 + ' onclick="confirm(\'Dropping this quest item DELETES it from the game FOREVER, this may break a quest if you are on it. Are you sure you wish to continue?\', 2);" style=\'width: 85\'>Drop</button>' : (II.Identified == 1 ? '<' + strClicky1 + ' onclick="this.disabled=true;window.location.replace(\'fhuse.asp?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&InventoryItemID=' + II.InventoryItemID + '&F=' + Filter + '\')" style=\'width: 85\'>' + (II.ItemName.indexOf('(L)') != -1 ? 'Unlock' : 'Use') + '</button><' + strClicky1 + ' onclick="window.parent.loadwindow2(\'im4.asp?Test=' + II.InventoryItemID + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + II.ItemName + '\')" style=\'width: 85\'>Info</button>' + (II.ItemName.indexOf('(E)') == -1 ? '<' + strClicky2 + ' onclick="this.disabled=true;window.location.replace(\'?ItemID=1&CharsAt=' + CharsAt + '&P=' + PageNo + '&F=' + Filter + '&ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + II.InventoryItemID + '\');" style=\'width: 85\'>Disguise</button>' + '<' + strClicky + ' onclick="confirm(\'Dropping this item DELETES it from the game FOREVER. Are you sure you wish to continue?\', 1);" style=\'width: 85\'>Drop</button>' : '') + (II.ItemName.indexOf(' * ') != -1 ? '<' + strClicky2 + ' onclick="this.disabled=true;window.location.replace(\'fhSplit.asp?ItemID=' + II.InventoryItemID + '\');" style=\'width: 85\'>Split</button>' : '') + (II.Color == 'Magenta' || II.Color == '#996633' ? '<' + strClicky2 + ' onclick="prompt(\'Please enter the new name for this bag below.\',4,\'My Bag\',\'Rename Bag\',\'i/' + II.PictureID + '\');" style=\'width: 85\'>Rename</button>' : '') + '' : '<' + strClicky2 + ' id=IDButton onclick="Identify(' + v + ');" style=\'width: 85\'>' + (Waiting <= 0 ? 'Identify' : 'Wait ...') + '</button><' + strClicky2 + ' onclick="confirm(\'Dropping this item DELETES it from the game FOREVER. Are you sure you wish to continue?\', 1);" style=\'width: 85\'>Drop</button>') + (II.SkillName != '' && II.ItemName.indexOf('#') == -1 ? '<' + strClicky2 + ' onclick="this.disabled=true;window.location.replace(\'fhii.asp?CharsAt=' + II.InventoryItemID + '\');" style=\'width: 85\'>Inscribe</button>' : (II.SkillName != '' && II.ItemName.indexOf('#') != -1 ? '<' + strClicky2 + ' onclick="window.location.replace(\'?P=' + PageNo + '&CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&F=' + Filter + '&ItemID=11&InventoryItemID=' + II.InventoryItemID + '\');" style=\'width: 85\'>Uninscribe</button>' : '')) + (II.Color == '#D9FB96' && II.ItemName.indexOf('(E)') == -1 ? '<' + strClicky2 + ' onclick="this.disabled=true;window.location.replace(\'fhextrai.asp?ItemID=' + II.InventoryItemID + '\');" style=\'width: 85\'>Adjust</button><' + strClicky2 + ' onclick="prompt(\'Please enter the Inscription for this item (255 char limit):\',5,\'\',\'Item Inscription\',\'i/' + II.PictureID + '\',\'4\');" style=\'width: 85\'>Inscription</button>' : '')) + (II.Identified == 1 ? '<' + strClicky1 + ' onclick="confirm(\'The Link button is used to send a clickable link to the Shoutbox, which allows other people to view the details of the item you have selected. Continue?\', 3);" style=\'width: 85\'>Link</button>' : '');
	}
}

function Identify(v) {
	clearTimeout(Waiting);
	getObj('IDButton').innerHTML = 'Wait ...';
	Waiting = setTimeout(() => { getObj('IDButton').innerHTML = 'Identify'; Waiting = 0; window.location.replace(`?P=${PageNo}&ItemTypeID=${ItemTypeID}&F=${Filter}&CharsAt=${CharsAt}&ItemID=4&InventoryItemID=${InvItems[v].InventoryItemID}`); }, 2000);
}

function PromptReturn(returnVal, postback) {
	var v = LastClickedItem;
	var II = InvItems[v];
	if (returnVal != null) {
		if (returnVal != false) {
			if (postback == 1) {
				window.top.Interface.location.replace('fhinv.asp?P=' + PageNo + '&CharsAt=' + CharsAt + '&F=' + Filter + '&ItemTypeID=' + ItemTypeID + '&ItemID=7&InventoryItemID=' + II.InventoryItemID);
			} else if (postback == 2) {
				window.top.Interface.location.replace('fhinv.asp?P=' + PageNo + '&F=' + Filter + '&CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&ItemID=2&InventoryItemID=' + II.InventoryItemID);
			} else if (postback == 3) {
				window.top.sendRequest('fhlink' + (II.Color == '#7CFC00' ? 's' : (II.Color == '#CCCCFF' ? 'tc' : '')) + '.asp?Type=I&CharsAt=' + II.InventoryItemID + '&Name=' + encodeURIComponent(II.ItemName2) + '&c=' + encodeURIComponent(II.Color) + '&l1=i&l2=' + (II.PictureID == '' ? 'na.gif' : II.PictureID));
			} else if (postback == 4) {
				window.top.Interface.location.replace('fhinv.asp?ItemTypeID=' + ItemTypeID + '&F=' + Filter + '&CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=3&ItemName=' + returnVal + '&InventoryItemID=' + II.InventoryItemID);
			} else {
				window.top.Interface.location.replace('fhinv.asp?ItemTypeID=' + ItemTypeID + '&F=' + Filter + '&CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=33&ItemName=' + returnVal + '&InventoryItemID=' + II.InventoryItemID);
			}
		}
	}
}

function DrawItem(v) {
	if (v == 0) {
		document.write('<tr><td>');
	}
	var II = InvItems[v];
	//aa=' + aa + ' eql=' + eql +' e="' + e + '" t="' + Itty + '" t2="' + Itty2 + '" m="' + m + '" v=' + v + ' i=' + i + ' l="' + l + '" u=' + u + ' s="' + s + '" p="' + PictureID + '" g="' + Color + '" z=' + z + ' a="' + a + '" 
	if (DrawStyle == 0) {
		var InvString = '<div style="cursor: pointer; border: 1px inset ' + II.Color + '; width: 40px; height: 40px; float: left; padding: 1px; margin: 1px;" id="Item' + v + '" onclick="ItemClick(' + v + ');" onmouseover="PC(' + v + ');" onmouseout="RC(' + v + ');" style="cursor: pointer;"><img src="' + IPath + (II.PictureID == '' || II.PictureID == '0' ? 'na.gif' : II.PictureID) + '"></div>';
	} else {
		var InvString = '<tr width="250" id="Item' + v + '" onclick="ItemClick(' + v + ');" onmouseover="PC(' + v + ');" onmouseout="RC(' + v + ');" style="cursor: pointer;"><td><img width=16 height=16 src="' + IPath + (II.PictureID == '' || II.PictureID == '0' ? 'na.gif' : II.PictureID) + '"></td><td width="250" style="color: ' + II.Color + ';' + (II.EquipLevel > Level || II.ArmorType > AT ? 'border: 1px dotted red;' : '') + 'padding-left: 5px;">' + (II.Color == '#D9FB96' ? '<b>' + II.ItemName + '</b>' : II.ItemName) + '</td><td style="' + (II.EquipSlots != '' && II.ArmorType > 0 ? (II.ArmorType <= AT ? 'color: #66ff66' : 'color: #ff6666') : '') + '">' + (II.EquipSlots != '' && II.ArmorType > 0 ? GetAT(II.ArmorType) : '') + '</td></tr>';
	}
	if (InvMode > 0) {
		Shops[Shop][counter] = new Array();
		Shops[Shop][counter] = InvString;
		counter = counter + 1;
	} else {
		document.write(InvString);
	}
}