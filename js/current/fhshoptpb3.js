var DefaultShop = 0;
var Shop = 0;
var Processing = 0;
var cost = 0;
var CharsAt = CharsAt;
var IC = 0;
var Pet = Pet;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&Pet=' + Pet + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>' + (Infos[v].c == 'gold' ? '<br><b style=\'color: gold;\'>Vessel Item</b>' : '') + '<br>Rarity: ' + Infos[v].q + '<br>Skill: ' + Infos[v].s + '<br>Cost: ' + window.top.BSGM(Infos[v].v) + '<br>' + Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&Pet=' + Pet + '&ItemID=' + Infos[v].value + '\');}', 'Buy', 'Buy') + Adr('window.top.loadwindow2(\'mr.asp?ItemID=' + Math.abs(Infos[v].value) + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Craft Info', 'Craft Info') + (Infos[v].b > 0 ? Adr('window.top.loadwindow2(\'imi' + (Infos[v].c == 'gold' ? 'v' : '') + '.asp?Test=' + Infos[v].b + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Item Info', 'Info') : '')
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<font color=' + Infos[v].c + '>' + Infos[v].i + '</font><br>Rarity: ' + Infos[v].q + '<br>Skill : ' + Infos[v].s + '<br>Cost: ' + window.top.BSGM(Infos[v].v));
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

function AM(Color, Named, ShopID, value, Picture, s, q, bid) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	if (Picture == '') {
		Picture = 'na.gif';
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, value, Picture, s, q, bid);
	IC = IC + 1;
}


function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" width="100%"><td><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="100%" style="color: ' + Infos[v].c + '">' + Infos[v].i + '</td></tr>';
}

function newInfo(Color, Named, ShopID, value, Picture, s, q, bid) {
	this.c = Color;
	this.s = s;
	this.p = Picture;
	this.q = q;
	this.b = bid;
	this.i = Named;
	this.v = value;
	this.value = ShopID;
	this.shop = Shop;
}
