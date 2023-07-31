var DefaultShop = 0;
var Shop = 0;
var Processing = 0;
var PageNo = PageNo;
var CharsAt = CharsAt;
var pmc = pmc;
var Levelx = Levelx;
var ATX = ATX;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>' + (Infos[v].sn != '' ? '<br>Skill: ' + Infos[v].sn : '') + '<br>Level: ' + Infos[v].l + (Infos[v].at > 0 ? '<br>Armor: ' + GetAT(Infos[v].at) : '') + '<br>Rarity: ' + Infos[v].q + '<br>Quantity: ' + Infos[v].q2 + '<br>Cost: ' + Infos[v].v + 'tokens<br>' + Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?CharsAt=' + CharsAt + '&ItemID=' + Infos[v].value + '&P=' + PageNo + '\');}', 'Buy the selected item', 'Buy') + Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].value + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function AM(Color, Named, ShopID, value, Mat, Level, Quality, Picture, q, sn, at, d) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo2(Color, Named, ShopID, value, Mat, Level, Quality, Picture, q, sn, at, d);
	IC = IC + 1;
}

function newInfo2(Color, Named, ShopID, value, Mat, Level, Quality, Picture, q, sn, at, d) {
	this.c = Color;
	this.p = Picture;
	this.i = Named;
	this.at = at;
	this.d = d;
	this.v = value;
	this.sn = sn;
	this.m = Mat;
	this.l = Level;
	this.q2 = q;
	this.q = Quality;
	this.value = ShopID;
	this.shop = Shop;
}

function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" style="color: ' + Infos[v].c + ';" ><td><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="100%" style="' + (Infos[v].l > Levelx || Infos[v].at > ATX ? ';border: 1px dotted red' : '') + '">' + Infos[v].i + (Math.abs(Infos[v].q2) > 1 ? ' * ' + Infos[v].q2 : '') + '</td><td style="color: #66ff66">' + (Infos[v].at > 0 ? GetAT(Infos[v].at) : (Infos[v].d > 0 ? '' + Infos[v].d : '')) + '</td></tr>';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), ' <font color=' + Infos[v].c + '>' + Infos[v].i + '</font>' + (Infos[v].sn != '' ? '<br>' + Infos[v].sn : '') + '<br>Level: ' + Infos[v].l + (Infos[v].at > 0 ? '<br>Armor: ' + GetAT(Infos[v].at) : '') + '<br>Rarity: ' + Infos[v].q + '<br>Quantity: ' + Infos[v].q2 + '<br>Cost: ' + Infos[v].v + 'tokens');
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
			strout = strout + GetRow(y);
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '<table width="100%" cellspacing=0 cellpadding=1 class=\'itemText\'>' + strout + '</table>';
}

function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}