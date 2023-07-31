
var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var H = H;
var PageNo = PageNo;
var BuildingID = BuildingID;
var Shop = 0;
var Infos = new Array();
var IC = 0;
var IPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var Processing = 0;
var LastV = -1;
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

function AM(z, v, o, l, m, f, t, n, s, r, e,Named, Picture, g, cp, x2, fs) {
var Color = 'green';
if (f != 0) {Color = 'orange'}
if (fs != 0) {Color = 'gold'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, v, o, l, m, f, t, n, s, r, e,Named, Picture, g, cp, x2, fs);
IC = IC + 1;
}

function newInfo(Color, z, v, o, l, m, f, t, n, s, r, e,Named, Picture, g, cp, x2, fs) {
this.c = Color;
this.p = Picture;
this.shop = Shop;
this.i = Named;
this.x2 = x2;
this.cp = cp;
this.z = z;
this.g = g;
this.fs = fs;
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
return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')"><td><img width=15 height=15 src="' + IPath + (Infos[v].p == '' || Infos[v].p == '0' ? 'na.gif' : Infos[v].p) + '"></td><td width="300" style="color: ' + Infos[v].c + '; padding-left: 5px;">' + Infos[v].i + '</td><td>' + Infos[v].l + '</td><td width=16>' + (Infos[v].cp == 1 ? '<img src="' + OPath + 'attack.png' + '" title="Combat pet">' : '') + '</td><td width=16>' + (Infos[v].f == 1 ? '<img src="' + OPath + 'flag_yellow.png' + '" title="Following you">' : '') + '</td></tr>';
}

function GoP(PageNo) {
window.location.replace('?H=' + H + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}

function GS(how, stuff) {
//stuff2.disabled = true;
if (Processing == 0) {
	Processing = 1;
	window.location.replace('fhminionsd.asp?H=' + H + '&P=' + PageNo + '&Type=' + how + '&CharsAt=' + stuff + '');
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i + '<Br>Level: ' + Infos[v].l);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>' + (Infos[v].cp == 1 ? '<br>Combat Pet' + (Infos[v].taunt != 0 ? ' - Taunting' : '') : '<br>Non Combat Pet') + (Infos[v].f ==1 ? '<br>Following You' : '<br>Location: '+ Infos[v].s + ' ' + GetRealm(Infos[v].g)) + '<br>Race: ' + Infos[v].r + '<br>Profession: ' + Infos[v].n + '<br>Level: ' + Infos[v].l + '<br>Experience: ' + Infos[v].e + '/' + Infos[v].x2 + (Infos[v].z == 1 ? '<br>Being Ridden/Mount' : (Infos[v].t ==1 ? '<br>Invisible/Hidden' : '')) + (Infos[v].n.indexOf('Vendor') != -1 ? '<br>Use Move Shopkeep function to Move Pet' : '') + (Math.abs(Infos[v].fs) ==1 ? '<br>For Sale on Marketeer' : '');
getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p + '\'>';
getObj('Buttons').innerHTML = Adr('confirm(\'Dismissing this pet will delete it, all its possessions will also be deleted, are you sure you wish to continue ?\',' + v+ ');', 'Dismiss', 'Dismiss');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			GS(4, Infos[pb].v);
		}
	}
}