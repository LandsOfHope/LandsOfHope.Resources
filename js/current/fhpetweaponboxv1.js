var DefaultShop = 0;
var Shop = 0;
var counter = 0;
var Shops = new Array();
var Processing = 0;
var cost = 0;
var InventoryItemID = InventoryItemID;
var Mat = '';
var WhatID = 0;
var CharsAt = CharsAt;
var Type2 = Type2;
var x = x;
var y = y;
var z = z;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Shop = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].v + '<br>' + Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhpetweaponbox.asp?InventoryItemID=' + InventoryItemID + '&CharsAt=' + Infos[v].value + '\');}', 'Use on ' + Infos[v].i + '', 'Select');
	//+ GetUseButtons(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function GetUseButtons(v) {
	var strout = '';
	strout += Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhpetweaponbox.asp?InventoryItemID=' + InventoryItemID + '&CharsAt=' + Infos[v].value + '\');}', 'Use on ' + Infos[v].i + '', 'Select');
	return strout;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, ' <font color=' + Infos[v].c + '>' + Infos[v].i + '</font><br>Level: ' + Infos[v].v);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}


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
			strout = strout + '<tr width="100%" id="I' + y + '" onmouseover="PC(' + y + ')" onmouseout="RC(' + y + ')" onclick="DC(' + y + ')"><td><img src=\'' + IPath + Infos[y].p + '\' width=15 height=15></td><td width="100%" style="color: ' + Infos[y].c + '">' + Infos[y].i + '</td></tr>';
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\'>' + strout + '</table>';
}

function AM(Named, ShopID, value, Picture, a) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, value, Picture, a);
	IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, Picture, at) {
	this.c = Color;
	this.v = value;
	this.p = Picture;
	this.i = Named;
	this.value = ShopID;
	this.shop = Shop;
	this.at = at;
}

function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

