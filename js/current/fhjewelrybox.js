var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var Type2 = Type2;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function GetUseButtons() {
	var strout = '<table class="weakcell"><tr><td colspan=2><div style="width: 600px; height: 255px;">';
	strout += AddInfo('6323.gif', 'Antique Diamond Earring', 1);
	strout += AddInfo('6324.gif', 'Antique Emerald Earring', 2);
	strout += AddInfo('6325.gif', 'Star of Myzan', 3);
	strout += AddInfo('6326.gif', 'Antique Ruby Ring', 4);
	strout += AddInfo('6327.gif', 'Antique Gold Ring', 5);
	strout += '</div></td></tr></table>';
	document.write(strout);
}

function AddInfo(pic, text, v) {
	var strout = '';
	strout = '<div style="width: 290px; height: 80px; float: left; border: 1px dotted gold; padding: 2px; margin: 2px"><table class="weakcell"><tr><td><img src="' + IPath + pic + '"></td><td><b>' + text + '</b></td></tr>'
	strout += '<tr><td colspan=2>';
	strout += Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhjewelrybox.asp?NameID=2949&InventoryItemID=' + InventoryItemID + '&CharsAt=' + v + '\');}', 'Health and Speed Jewelry', '+SPD');
	strout += Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhjewelrybox.asp?NameID=2948&InventoryItemID=' + InventoryItemID + '&CharsAt=' + v + '\');}', 'Health and Dex Jewelry', '+DEX');
	strout += Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhjewelrybox.asp?NameID=2945&InventoryItemID=' + InventoryItemID + '&CharsAt=' + v + '\');}', 'Health and Stamina Jewelry', '+STAM');
	strout += Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhjewelrybox.asp?NameID=2946&InventoryItemID=' + InventoryItemID + '&CharsAt=' + v + '\');}', 'Health and Strength Jewelry', '+STR');
	strout += Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhjewelrybox.asp?NameID=2947&InventoryItemID=' + InventoryItemID + '&CharsAt=' + v + '\');}', 'Health and Intelligence Jewelry', '+INT');
	strout += '</td></tr></table>';
	strout += '</div>';
	return strout;
}