var DefaultShop = 0;
var Shop = 0;
var counter = 0;
var Shops = new Array();
var PageNo = PageNo;
var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var LastV = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
LastV = v;
getObj('Stuff2').innerHTML = Tips(v, 0)
getObj('Buttons').innerHTML = '' + (Processing == 0 ? Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=' +Infos[v].value + '&Quantity=1\');};','Take','Take') : '') + Adr('window.top.loadwindow2(\'im3.asp?Test=' + Infos[v].value + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info');
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}


function Tips(v, tt) {
	return '<b>' + Infos[v].i + '</b>' + (tt ==0?'<br>Rarity: ' + Infos[v].q : '')  + '<br>Min Equip Level: ' + Infos[v].l + (Infos[v].a > 0 ? '<br>Armor: ' + GetAT(Infos[v].a) : '') + '<br>Quantity: ' + Infos[v].qy + '<br>Purchases Remaining: ' + Infos[v].uq + ''
}

function PC(v) {
window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : '' + Infos[v].p), Tips(v,1));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function tgl(ShopNum) {
if (getObj('Shop' + ShopNum).innerHTML == '') {
	DrawShop(ShopNum);
}
else
{
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

function AM(Color, Named, ShopID, Quality, Picture, l, a, qy, uq, edt) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, ShopID, Quality, Picture, l, a, qy, uq, edt);
IC = IC + 1;
}


function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')"><td><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="245" style="color: ' + Infos[v].c + ';">' + Infos[v].i  + '</td><td width=\'120\'>' + window.top.HSM(Infos[v].edt) + '</td></tr>';
}

function newInfo(Color, Named, ShopID, Quality, Picture, l, a, qy, uq, edt) {
this.c = Color;
this.l = l;
this.p = Picture;
this.i = Named;
this.a = a;
this.uq = uq;
this.qy = qy;
this.q = Quality;
this.edt = edt;
this.value = ShopID;
this.shop = Shop;
}