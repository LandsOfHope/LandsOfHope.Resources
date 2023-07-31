var IC = 0;
var Infos = new Array();
var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var H = H;
var PageNo = PageNo;
var Mounting = 0;
var BuildingID = BuildingID;
var Shop = 0;
var counter = 0;
var IPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var LastV = -1
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
if (getObj('Shop' + ShopNum).innerHTML == '') {
	DS(ShopNum);
} else {
	getObj('Shop' + ShopNum).innerHTML = '';
}
}

function DS(ShopNum) {
var strout = '';
var y = 0;
for (y = 0; y < IC; y++) {
	if (Infos[y].shop == ShopNum) {
		strout = strout + GetRow(y)
	}
}
getObj('Shop' + ShopNum).innerHTML = '<table id=Min' + ShopNum + ' cellspacing=0 cellpadding=1 width="100%" class=\'weakercell\'>' + strout + '</table>';
}

function AH(ShopC, SkillGroup) {
document.write("<tr><td colspan=3 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\" id=Head" + ShopC + ">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function AM(z, v, o, l, m, f, t, n, s, r, e,Named, Picture, x2, cp, taunt) {
var Color = 'green';
if (f != 0) {Color = 'orange'}
counter = counter + 1;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, v, o, l, m, f, t, n, s, r, e,Named, Picture, cp, x2, taunt);
IC = IC + 1;
}

function newInfo(Color, z, v, o, l, m, f, t, n, s, r, e,Named, Picture, cp, x2, taunt) {
this.c = Color;
this.p = Picture;
this.shop = Shop;
this.i = Named;
this.x2 = x2;
this.taunt = taunt;
this.cp = cp;
this.z = z;
this.v = v;
this.o = o;
this.l = l;
this.m = m;
this.t = t;
this.f = f;
this.n = n;
this.s = s;
this.r = r;
this.e = e;
}

function GetRow(v) {
return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')"><td><img width=15 height=15 src="' + IPath + (Infos[v].p == '' || Infos[v].p == '0' ? 'na.gif' : Infos[v].p) + '"></td><td width="300" style="color: ' + Infos[v].c + '; padding-left: 5px;">' + Infos[v].i + '</td><td>' + Infos[v].l + '</td><td width=16>' + (Infos[v].taunt != 0 ? '<img src="' + OPath + 'transmit.png' + '" title="Taunting enabled">' : '') + '</td><td width=16>' + (Infos[v].cp == 1 ? '<img src="' + OPath + 'attack.png' + '" title="Combat pet">' : '') + '</td><td width=16>' + (Infos[v].f == 1 ? '<img src="' + OPath + 'flag_yellow.png' + '" title="Following you">' : '') + '</td></tr>';
}

function GoP(PageNo) {
window.location.replace('?H=' + H + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}

function GS(how, stuff) {
if (Mounting == 0) {
	Mounting = 1;
	window.location.replace('fhmim.asp?H=' + H + '&P=' + PageNo + '&Type=' + how + '&CharsAt=' + stuff + '');
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i + '<Br>Level: ' + Infos[v].l + '<br>Xp: ' + Infos[v].e + '/' + Infos[v].x2);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipz(v) {
	return '<b>' + Infos[v].i + '</b>' + (Infos[v].cp == 1 ? '<br>Combat Pet' + (Infos[v].taunt != 0 ? ' - Taunting' : '') : '<br>Non Combat Pet') + (Infos[v].f ==1 ? '<br>Following You' : '<br>Location: '+ Infos[v].s) + '<br>Race: ' + Infos[v].r + '<br>Profession: ' + Infos[v].n + '<br>Level: ' + Infos[v].l + '<br>Xp: ' + Infos[v].e + '/' + Infos[v].x2 + (Infos[v].z == 1 ? '<br>Current Mount' : (Infos[v].t ==1 ? '<br>Invisible' : ''))
}

function DC(v) {
getObj('Stuff2').innerHTML = Tipz(v);
getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p + '\'>';
getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhstat2.asp?CharsAt=' + Infos[v].v + '\');', 'Open Pet Info', 'Info') + (Math.abs(Infos[v].e) >= Math.abs(Infos[v].x2) && (Math.abs(Infos[v].l) <= 999) ? Adr('GS(8, ' + Infos[v].v + ');', 'Level the pet up one level to level ' + (Infos[v].l + 1), 'Level') : '') + (Infos[v].z == 1 ? Adr('GS(6, ' + Infos[v].v + ');', 'Dismount from ' + Infos[v].i, 'Dismount') : Adr('GS(3, ' + Infos[v].v + ');', 'Mount ' + Infos[v].i, 'Mount')) + Adr('GS(' + (Infos[v].cp == 0 ? '50' : '51') + ', ' + Infos[v].v + ');',(Infos[v].cp == 0 ? 'Turn Combat On' : 'Turn Combat off'),(Infos[v].cp == 0 ? 'Turn Combat On' : 'Turn Combat off')) + Adr('GS(' + (Infos[v].taunt == 0 ? '60' : '61') + ', ' + Infos[v].v + ');', (Infos[v].taunt == 0 ? 'Turn Taunting On' : 'Turn Taunting off'),(Infos[v].taunt == 0 ? 'Turn Taunting On' : 'Turn Taunting off')) + Adr('window.location.replace(\'fhpetspells.asp?CharsAt=' + Infos[v].v + '\');', 'Open Mount spellbook', 'Spells');
}
