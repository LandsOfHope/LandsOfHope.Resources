var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Shop = 0;
var Infos= new Array();
var CharsAt = CharsAt;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].v + '<br><' + strClicky2 + ' onclick="if (Processing ==0) {Processing = 1; window.location.replace(\'fhcare.asp?CharsAt=' + CharsAt + '&PetID=' +Infos[v].value + '\')}" style=\'width: 85\'>Select</button>';
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == ''  ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, ' <font color=' + Infos[v].c + '>' + Infos[v].i + '</font><br>Level: ' + Infos[v].v);
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
		strout = strout + '<tr width="100%" id="I' + y + '" onmouseover="PC(' + y + ')" onmouseout="RC(' + y + ')" onclick="DC(' + y + ')"><td><img src=\'' + IPath + Infos[y].p + '\' width=15 height=15></td><td width="100%" style="color: ' + Infos[y].c + '">' + Infos[y].i + '</td></tr>';
	}
}
getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\'>' + strout + '</table>';
}

function AM(Named, ShopID, value, Picture) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, ShopID, value, Picture);
IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, Picture) {
this.c = Color;
this.v = value;
this.p = Picture;
this.i = Named;
this.value = ShopID;
this.shop = Shop;
}

function AH(ShopC, SkillGroup) {
document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}
