var InvMode = InvMode;
var CharsAt = CharsAt;
var PageNo = PageNo;
var Skill = Skill;
var Type2 = Type2;
var Processing = 0;
var IPath = window.top.FHIPI;

var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var DefaultShop = 0;
var Shop = 0;
var IC = 0;
var Infos = new Array();
var OPath = window.top.FHIPO;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
	if (getObj('Shop' + ShopNum).innerHTML == '') {
		DrawShop(ShopNum);
	}
	else {
		getObj('Shop' + ShopNum).innerHTML = '';
	}
}

function DrawShop(ShopNum) {
	var strout = '';
	var y = 0;
	for (y = 0; y < IC; y++) {
		if (Infos[y].shop == ShopNum) {
			strout = strout + GetRow(y);
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\' id=\'ShopR' + ShopNum + '\' cellpadding=1 cellspacing=1>' + strout + '</table>';
}


function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function GoP(PageNo) {
	window.location.replace('?InventoryItemID=0&ItemTypeID=' + ItemTypeID + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function FB(v) {
	if (ItemTypeID == 48) {
		window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
	} else {
		window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
	}
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&InventoryItemID=1&CharsAt=' + CharsAt);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles = 'Swap items in or out of your ' + Names;
	var Titles2 = 'Open your ' + Names;
	var Actions = 'FB(' + n + ');';
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout', '') + '</td></tr></table></td>');
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GetRow(v) {
	// u=' + u + ' t="' + Itty + '" z=' + z + ' l="' + l + '" v="' + v + '" q=' + q + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" style="color: ' + Infos[v].c + '; padding-left: 5px"><td width=15><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width=\'100%\'>' + Infos[v].t + (Infos[v].q > 1 ? ' * ' + Infos[v].q : '') + '</td></tr>';
}


function AC(u, Color, z, l, v, PictureID, Itty, q) {
	if (PictureID == '0') { PictureID = '' }

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}

	Infos[IC] = new newInfo(u, Color, z, l, v, PictureID, Itty, q);
	if (InvMode > 0) {
	} else {
		document.write(GetRow(IC));
	}
	IC = IC + 1;
}

function newInfo(u, Color, z, l, v, PictureID, Itty, q) {
	this.c = Color;
	this.u = u;
	this.p = PictureID;
	this.t = Itty;
	this.z = z;
	this.l = l;
	this.v = v;
	this.q = q;
	this.shop = Shop;
}

function DC(v) {
	if (Processing == 0) {
		getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font><br>Rarity: ' + Infos[v].l + '<br>Required Skill: ' + (Infos[v].v * 5) + '<br>Current Skill: ' + Skill;
		getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
		getObj('Buttons').innerHTML = '' + (Skill >= Math.abs(Infos[v].v * 5) && Processing == 0 ? '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; window.top.PGS(\'drop.wav\'); window.location.replace(\'?P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&ItemID=1&Type=' + Type2 + '&L=' + (Infos[v].v * 5) + '&InventoryItemID=' + Infos[v].z + '\');}" style=\'width: 85\'>Fast Dismantle</button><' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; window.top.PGS(\'drop.wav\'); window.location.replace(\'?P=' + PageNo + '&ItemTypeID=' + ItemTypeID + '&ItemID=1&Type=' + Type2 + '&L=' + (Infos[v].v * 5) + '&distype=1&InventoryItemID=' + Infos[v].z + '\');}" style=\'width: 85\'>Slow Dis.</button>' : '') + (Infos[v].t.indexOf('?') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '');
	}
}
