var DefaultShop = 0;
var Shop = 0;
var Processing = 0;
var cost = 0;
var CharsAt = CharsAt;
var Pet = Pet;
var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIP
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&Pet=' + Pet + '&P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Skill: ' + Infos[v].s + '<br>Cost: ' + window.top.BSGM(Infos[v].v) + '<br>' + Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&Pet=' + Pet + '&P=' + PageNo + '&ItemID=' +Infos[v].value + '\');}','Buy','Buy') + Adr('window.top.loadwindow2(\'' + (Infos[v].value < 0 ? 'Mz' : 'Sz') + '.asp?test=' + Math.abs(Infos[v].value) + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') 
getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', '<font color=' + Infos[v].c + '>' + Infos[v].i + '</font><br>Skill: ' + Infos[v].s + '<br>Cost: ' + window.top.BSGM(Infos[v].v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
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

function AM(Named, ShopID, value, Picture, s, sp) {
var Color = LITE;
if (ShopID < 0) {
	Color = '#66ff66';
} else {
	Color = '#6666ff';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Picture = (Picture == '' ? 'na' : Picture);
Picture = sp + '/' + Picture + (sp == 's' ?'.png' : '.gif');

Infos[IC] = new newInfo(Color, Named, ShopID, value, Picture, s, sp);
IC = IC + 1;
}


function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" width="100%"><td><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="100%" style="color: ' + Infos[v].c + '">' + Infos[v].i  + '</td></tr>';
}

function newInfo(Color, Named, ShopID, value, Picture, s, sp) {
this.c = Color;
this.s = s;
this.p = Picture;
this.i = Named;
this.v = value;
this.value = ShopID;
this.shop = Shop;
}
