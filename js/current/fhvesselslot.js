var CharsAt = CharsAt;
var LocationID = LocationID;
var Level = Level;
var DefaultShop = 0;
var LID = 0;
var bi = 0;
var LocationName = '';
var Shop = 0;
var Header = '';
var counter = 0;
var Shops = new Array();
Shops[0] = new Array();
var Locations = new Array();
var Equip = new Array();
var EC = 0;
var Equipping = '';
var IPath = window.top.FHIPI;
var LPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
	DrawShop(ShopNum);
}

function ca(ShopNum) {
	if (Equipping != '') {
		window.top.InfoTip('' + IPath + stuff.p, '<font id=tred>Please wait .... ' + what + '</font>');
	} else {
		DrawShop(ShopNum);
	}
}

function DrawShop(ShopNum) {
	var strout = '';
	var v = 0;
	var Color = 'gold';
	if (Equipping == '') {
		window.parent.Processing = 0;
	}
	// b=' + sel.b + ' s="' + sel.s + '" p="' + sel.p + '" v="' + sel.v + '" n="' + sel.n + '"
	getObj('Stuff2').innerHTML = '<b>' + LocationName + '</b><br>You have ' + EC + ' items that can equip to this slot.<br>' + (EC > 0 ? 'To equip an item, click on it on the list above.' : '');

}

function AH(ll, SkillGroup, Picture, Picture2, bix, lc, x, y, pt) {
	LID = ll;
	bi = bix;
	LocationName = SkillGroup;
	var EBG = BGCOLOR_S;
	if (pt != 1) {
		if (lc == 0) {
			EBG = '#66ff66';
		} else {
			EBG = '#ff6666';
		}
	} else {
		EBG = '#D3D3D3';
	}

	document.write('<tr width="100%" bgcolor="' + BGCOLOR_S + '" style="border: 1px solid ' + BGCOLOR + '"><td><img width=15 height=15 src="' + (pt == 1 ? IPath : LPath) + (Picture == "" || Picture == "0" ? "na.gif" : Picture) + '"></td><td width="160" style="color: gold;font-weight: bold"><center>' + SkillGroup + '</center></td></tr>');
	Locations[ll] = '';
}

function AM(s, v, Picture, Color, Named) {
	if (Color == '#FF00FF') {
		Named = '<b>' + Named + '</b>';
		Locations[LID] = Named + (s == null || s == '' ? '&nbsp;' : '<font id=tgreen>' + s + '</font>')
	}
	if (Equip[EC] == null) {
		Equip[EC] = new Array();
	}
	Equip[EC] = new newEquip(s, v, Picture, Color, Named);
	document.write('<tr id="E' + EC + '" onclick="DC3(' + EC + ')" onmouseover="PC2(' + EC + ')" onmouseout="RC(' + EC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="230" style="color: ' + Color + ';">' + Named + '</td></tr>');
	EC = EC + 1;
}

function newEquip(s, v, Picture, Color, Named) {
	this.c = Color;
	this.s = s;
	this.v = v;
	this.p = Picture;
	this.t = Named;
}

function DC3(v) {
	if (Equip[v].c == '#FF00FF') {
		var what = Equip[v].t;
		if (Equipping != '') {
			window.top.InfoTip('' + IPath + Equip[v].p, '<font id=tred>Please wait .... ' + what + '</font>');
		} else {
			Equipping = what;
			window.parent.Processing = 1;
			window.top.InfoTip('' + IPath + Equip[v].p, '<font id=tgold>Unequipping ... ' + what + '</font>');
			window.location.replace('?LocationID=-' + LocationID + '&InventoryItemID=' + Equip[v].v + '&CharsAt=' + CharsAt + '');
		}
	} else {
		var what = Equip[v].t;
		if (Equipping != '') {
			window.top.InfoTip('' + IPath + Equip[v].p, '<font id=tred>Please wait .... ' + what + '</font>');
		} else {
			Equipping = what;
			window.parent.Processing = 1;
			window.top.InfoTip('' + IPath + Equip[v].p, '<font id=tgold>Equipping ... ' + what + '</font>');
			window.location.replace('?LocationID=' + LocationID + '&CharsAt=' + CharsAt + '&InventoryItemID=' + Equip[v].v + '');
		}
	}
}

function RC(v) {
	getObj('E' + v).style.cursor = '';
	getObj('E' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC2(v) {
	getObj('Stuff2').innerHTML = '' + (Equip[v].s == 0 ? 'Click to Unequip any items equipped to this slot.' : '<font style=\'color: ' + Equip[v].c + '\'><b>' + Equip[v].t + '</b></font>' + (Equip[v].s == null || Equip[v].s == '' ? '&nbsp;' : '<br><font id=tgreen>' + Equip[v].s + '</font>'));
	window.top.InfoTip('' + IPath + Equip[v].p, Equip[v].t);
	getObj('Pic').innerHTML = '<img src="' + IPath + Equip[v].p + '">';
	getObj('E' + v).style.cursor = 'pointer';
	getObj('E' + v).style.backgroundColor = BGCOLOR_S
}
