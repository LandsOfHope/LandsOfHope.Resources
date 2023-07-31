var DefaultShop = 0;
var Shop = 0;
var PageNo = PageNo;
var CharsAt = CharsAt;
var Levelx = Levelx;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + (Infos[v].n == '' ? '' : ' of ' + Infos[v].n) + '</b>' + (Infos[v].at > 0 ? '<br>Armor: ' + GetAT(Infos[v].at) : '') + '<br>Cost: <img src=\'' + IPath + Infos[v].sip + '\' width=12 height=12>' + Infos[v].v + ' * ' + Infos[v].sin + '<br>' + Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?CharsAt=' + CharsAt + '&ItemID=' +Infos[v].value + '&NamesID=' + Infos[v].namesid + '&P=' + PageNo + '\');}','Buy ' + Infos[v].i,'Buy') + Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].itemid + '&Bonus=0&Material=&nid=' + Infos[v].namesid + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info');
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), ' <font color=' + Infos[v].c + '>' + Infos[v].i + (Infos[v].n == '' ? '' : ' of ' + Infos[v].n) + '</font>');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function AM(Color, Named, Picture, ShopID, itemid, namesid, value, sin, sip, n, at) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo2(Color, Named, Picture, ShopID, itemid, namesid, value, sin, sip, n, at);
IC = IC + 1;
}

function newInfo2(Color, Named, Picture, ShopID, itemid, namesid, value, sin, sip, n, at) {
this.c = Color;
this.p = Picture;
this.i = Named;
this.at = at;
this.v = value;
this.sin = sin;
this.sip = sip;
this.itemid = itemid;
this.namesid = namesid;
this.n = n;
this.value = ShopID;
this.shop = Shop;
}

function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')"><td><img src=\'' + IPath + Infos[v].p + '\' width=30 height=30></td><td width="100%" valign=top><table class="itemtext" cellpadding=1 cellspacing=0><tr><td style="color: ' + Infos[v].c + '">' + Infos[v].i + (Infos[v].n == '' ? '' : ' of ' + Infos[v].n) + '</td></tr><tr><td title=\'' + Infos[v].sin + '\'><img src=\'' + IPath + Infos[v].sip + '\' width=12 height=12> : ' + Infos[v].v + '</td></tr></table></td><td style="color: #66ff66" valign=top>' + (Infos[v].at > 0 ? GetAT(Infos[v].at).substr(0, 1) : '') + '</td></tr>';
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