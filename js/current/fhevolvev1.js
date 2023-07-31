var DefaultShop = 0;
var Shop = 0;
var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
window.frames['ResultsOfit'].location.replace('fhevolve2.asp?CharsAt=' + CharsAt +'&ItemID=' + Infos[v].value + '&p=' + Infos[v].p + '&n=' + Infos[v].i);
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

function AM(Color, Named, ShopID, value, Picture, s, q) {
if (Color == '') {
	Color = LITE;
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, ShopID, value, Picture, s, q);
IC = IC + 1;
}


function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" width="100%"><td><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="150" style="color: ' + Infos[v].c + ';">' + Infos[v].i  + (Infos[v].q == 1 ? ' <b>Cloth</b>' : (Infos[v].q == 2 ? ' <b>Leather</b>' : (Infos[v].q == 3 ? ' <b>Chain</b>' : (Infos[v].q == 4 ? ' <b>Plate</b>' : '')))) + '</td><td width="80">Level: ' + Infos[v].s + '</td></tr>';
}

function newInfo(Color, Named, ShopID, value, Picture, s, q) {
this.c = Color;
this.s = s;
this.p = Picture;
this.i = Named;
this.v = value;
this.q = q;
this.value = ShopID;
this.shop = Shop;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, ' <font color=' + Infos[v].c + '>' + Infos[v].i + '</font><br>Level: ' + Infos[v].s + '<br>Cost: ' + window.top.BSGM(Infos[v].v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}