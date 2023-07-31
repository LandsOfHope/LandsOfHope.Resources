var CharsAt = CharsAt;
var LocationID = LocationID;
var BagID = BagID;
var Level = Level;
var DefaultShop = 0;
var LID = 0;
var bi = 0;
var LocationName = '';
var Shop = 0;
var Header = '';

var Locations = new Array();
var Equip = new Array();
var EC = 0;

var Equipping = '';
var IPath = window.top.FHIPI;
var LPath = window.top.FHIPL;
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
	getObj('Stuff2').innerHTML = '<b>' + LocationName + '</b><br>You have ' + EC + ' items in your ' + window.parent.bagname + ' that can equip to this slot.<br>' + (EC > 0 ? 'To equip an item, click on it on the list above.' : '');

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

	document.write('<tr width="100%" bgcolor="' + BGCOLOR_S + '" style="border: 1px solid ' + BGCOLOR + '"><td><img width=15 height=15 src="' + (pt == 1 ? IPath : LPath) + (Picture == "" || Picture == "0" ? "na.gif" : Picture) + '"></td><td width="260" style="color: gold;font-weight: bold"><center>' + SkillGroup + '</center></td><td></td></tr>');
	Locations[ll] = '';
}

function AM(s, v, Picture, n2, Color, Named, d, l) {
	if (Color == '#FF00FF') {
		Named = '<b>' + Named + '</b>';
		Locations[LID] = Named + (n2 == '' ? '<br>' : '<br>Skill: <b>' + n2 + '</b><br>') + (d > 0 ? 'Damage Per Round: <b>' + d + '</b><br>' : '') + (s == null || s == '' ? '&nbsp;' : '<font id=tgreen>' + s + '</font>' + (l <= Level ? 'Level: ' + l : '<font id=tred>Requires Level: ' + l + '</font>'))
	}

	if (Equip[EC] == null) {
		Equip[EC] = new Array();
	}
	Equip[EC] = new newEquip(s, v, Picture, n2, Color, Named, d, l);

	// d=' + d + ' b=' + LID + ' s="' + s + '" v="' + v + '" n="' + n2 + '"  c="' + Color + '"
	// v="' + v + '" w="' + Named + '"
	document.write('<tr id="E' + EC + '" width="100%" onclick="DC3(' + EC + ')" onmouseover="PC2(' + EC + ')" onmouseout="RC(' + EC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="230" style="color: ' + Color + ';">' + Named + '</td><td>' + l + '</td></tr>');

	EC = EC + 1;
}

function newEquip(s, v, Picture, n2, Color, Named, d, l) {
	this.c = Color;
	this.s = s;
	this.v = v;
	this.p = Picture;
	this.d = d;
	this.l = l;
	this.n = n2;
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
			window.location.replace('?ItemTypeID=' + LID + '&BagID=' + BagID + '&LocationID=' + LocationID + '&InventoryItemID=0&CharsAt=' + CharsAt + '');
		}
	} else {
		var what = Equip[v].t;
		if (Equipping != '') {
			window.top.InfoTip('' + IPath + Equip[v].p, '<font id=tred>Please wait .... ' + what + '</font>');
		} else {
			Equipping = what;
			window.parent.Processing = 1;
			window.top.InfoTip('' + IPath + Equip[v].p, '<font id=tgold>Equipping ... ' + what + '</font>');
			window.location.replace('?ItemTypeID=' + LID + '&BagID=' + BagID + '&LocationID=' + LocationID + '&CharsAt=' + CharsAt + '&InventoryItemID=' + Equip[v].v + '');
		}
	}
}

function RC(v) {
	getObj('E' + v).style.cursor = '';
	getObj('E' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC2(v) {
	getObj('Stuff2').innerHTML = '' + (Equip[v].s == 0 ? 'Click to Unequip any items equipped to this slot.' : '<font style=\'color: ' + Equip[v].c + '\'><b>' + Equip[v].t + '</b></font>' + (Equip[v].n == '' ? '<br>' : '<br>Skill: <b>' + Equip[v].n + '</b><br>') + (Equip[v].d > 0 ? 'Damage Per Round: <b>' + Equip[v].d + '</b><br>' : '') + (Equip[v].s == null || Equip[v].s == '' ? '&nbsp;' : '<font id=tgreen>' + Equip[v].s + '</font>' + (Equip[v].l <= Level ? 'Level: ' + Equip[v].l : '<font id=tred>Requires Level: ' + Equip[v].l + '</font>')));
	window.top.InfoTip('' + IPath + Equip[v].p, Equip[v].t);
	getObj('Pic').innerHTML = '<img src="' + IPath + Equip[v].p + '">';
	getObj('E' + v).style.cursor = 'pointer';
	getObj('E' + v).style.backgroundColor = BGCOLOR_S
}
