var CharsAt = CharsAt;
var TypeB = TypeB;
var Types = Types;
var Typez = Typez;
var newx = 0;
var oldx = 0;
var maxx = 0;
var poop = 0;
var DefaultShop = 0;
var Shop = 0;
var PageNo = PageNo;

var IC = 0;
var Infos = new Array();

var Processing = 0;
var IPath = window.top.FHIPO;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

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
	getObj('Shop' + ShopNum).innerHTML = '<table cellspacing=1 cellpadding=1 width="100%" class=\'weakercell\'>' + strout + '</table>';
}

function DrawAllShops(ShopLimit) {
	var y = 1;
	for (y = 1; y <= ShopLimit; y++) {
		DrawShop(y)
	}
}

function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}
function PercentBoxX(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return '<div style="width: ' + pwidth + 'px; height: 15px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc2 style="position: absolute; width:' + pwidth + 'px">' + caption + '</div></div></div>';
}

function AM(Color, s, Skill, Value, IBonus, SBonus, mx, sv, a, tn, favskill) {
	var bonus = (Math.round(IBonus) + Math.round(SBonus));
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, s, Skill, Value, IBonus, SBonus, mx, sv, a, tn, favskill);
	IC = IC + 1;
}

function newInfo(Color, s, Skill, Value, IBonus, SBonus, mx, sv, a, tn, favskill) {
	this.c = Color;
	this.s = s;
	this.p = 'na.gif';
	this.i = Skill;
	this.v = Value;
	this.b = IBonus + SBonus;
	this.b1 = IBonus;
	this.b2 = SBonus;
	this.mx = mx;
	this.tn = tn;
	this.sv = sv;
	this.pb = (a == 0 ? 'red' : (mx > 0 && Value >= mx ? 'gold' : 'green'));
	this.perc = window.top.GetPerc(mx, Value);
	this.shop = Shop;
	this.favskill = favskill;
}

function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="OC(' + v + ')" onclick="DC(' + v + ')"><td width="225" style="color: ' + Infos[v].c + ';">' + (Infos[v].favskill != 0 ? '<b>' : '') + Infos[v].i + (Infos[v].favskill != 0 ? '</b>' : '') + '</td><td width=150>' + PercentBoxX(150, Infos[v].perc, Infos[v].pb, Infos[v].v + (Infos[v].b != 0 ? ' (' + Infos[v].b + ')' : '') + (Infos[v].mx >= 0 ? '/' + Infos[v].mx : '')) + '</center></td></tr>';
}


function S2(strin) {
	window.location.replace('?T=AA&B=' + strin + '&CharsAt=' + CharsAt);
}

function S3() {
	window.location.replace('?T=&B=' + '&CharsAt=' + CharsAt);
}

function Ss(strin) {
	window.location.replace('?B=' + TypeB + '&T=' + strin + '&CharsAt=' + CharsAt);
}

function OC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function Ps(IdIn) {
	window.top.loadwindow2('fhskill2.asp?ID=' + IdIn + '&CharsAt=' + CharsAt, 550, 180, 'iwindow', 'Item Bonuses');
}

function Ps2(IdIn) {
	window.top.loadwindow2('fhskill4.asp?ID=' + IdIn + '&CharsAt=' + CharsAt, 550, 180, 'iwindow', 'Spell Bonuses');
}

function SkillTabs(s) {
	var strTest = '';
	var v = 0;
	var s2 = '';
	var i = 0;
	for (i = 1; i <= 5; i++) {
		v = v + 1;
		if (i == 1) {
			s2 = 'Warfare';
		} else if (i == 2) {
			s2 = 'Magic';
		} else if (i == 3) {
			s2 = 'Tradeskills';
		} else if (i == 4) {
			s2 = 'Other';
		} else if (i == 5) {
			s2 = 'Factions';
		}

		strTest += '<td class="btn" ' + (s != s2 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:60" onclick="GoP2(\'' + s2 + '\')"' : ' style="width:60; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + s2 + '</td>';
	}

	getObj('Pages2').innerHTML = '<table cellpadding=1 cellspacing=1><tr><td id="Pages" width="305"></td>' + strTest + '</tr></table>';
}

function GoP2(strin) {
	window.location.replace('?T=' + Typez + '&B=' + TypeB + '&S=' + strin + '&CharsAt=' + CharsAt);
}

function GoP(p) {
	window.location.replace('?T=' + Typez + '&B=' + TypeB + '&P=' + p + '&S=' + Types + '&CharsAt=' + CharsAt);
}

function UseTitle(s) {
	window.location.replace('?T=' + Typez + '&B=' + TypeB + '&P=' + PageNo + '&S=' + Types + '&CharsAt=' + CharsAt + '&TitleID=' + s);
}

function FavSkill(s, atx) {
	window.location.replace('?T=' + Typez + '&B=' + TypeB + '&P=' + PageNo + '&S=' + Types + '&CharsAt=' + CharsAt + '&fav=' + (atx == 0 ? -s : s));
}

function PC(v) {
	window.top.InfoTip('', Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	newx = 0;
	oldx = 0;
	maxx = 0;
	poop = 0;
	ShowForm(v);
}

function Rk(SkillIn, TitleIn) {
	window.open('rankings.asp?ID2=-' + SkillIn + '&ID=Skills');
}

function ShowForm(v) {

	poop = Infos[v].mx;
	var poop2 = (oldx == 0 ? Infos[v].v : oldx);
	var sv = 0;
	sv = Infos[v].sv;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Value: <b>' + poop2 + '</b>' + (Math.abs(Infos[v].b) != 0 ? '<br>Item Bonuses: <i><a href=\'JavaScript:Ps(' + Infos[v].s + ')\'>' + Infos[v].b1 + '</a></i><br>Spell Bonuses: <i><a href=\'JavaScript:Ps2(' + Infos[v].s + ')\'>' + Infos[v].b2 + '</a></i>' : '') + (Infos[v].tn != '' ? '<br>Skill Title: ' + Infos[v].tn : '') + (sv > 0 ? '<br>Target / Resource Level: <b>' + sv + '</b>' : '') + (poop < 0 ? '' : '<br>Skill Limit: <b>' + poop + '</b>');
	getObj('Buttons').innerHTML = Adr('Rk(' + Infos[v].s + ',\'' + Infos[v].i + '\')', 'Ranking', 'Ranking') + (Infos[v].tn != '' ? Adr('UseTitle(' + Infos[v].s + ')', 'Use Title', 'Use Title') : '') + (Infos[v].favskill == 0 ? Adr('FavSkill(' + Infos[v].s + ', 1)', 'Make a favorite skill', 'Favorite') : Adr('FavSkill(' + Infos[v].s + ', 0)', 'Undo making this a favorite skill', 'Undo')) + Adr('window.top.loadwindow2(\'Skz.asp?Test=' + Infos[v].s + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') + Adr('window.top.sH(\'Sk' + Infos[v].s + '\');', 'Help', 'Help');
}
