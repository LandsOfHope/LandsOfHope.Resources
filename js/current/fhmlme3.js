var DefaultShop = 0;
var Shop = 0;
var counter = 0;
var Shops = new Array();

var cost = 0;
var CharsAt = CharsAt;
var Mat ='';
var WhatID= 0; 
var IPath = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(tc, tt, c) {
	getObj("C").value = c;
	getObj("T").value = tt;
	getObj("TC").value = tc;
	getObj("preview").className = 'c' + c;
	window.parent.SetColor(window.parent.lastx, window.parent.lasty, c);
}

function RC(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(stuff) {
//window.top.InfoTip('', '<b>' + stuff.tc + '</b>');
stuff.style.cursor = 'pointer';
stuff.style.backgroundColor=BGCOLOR_S
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
for (y = 0; y < Shops[ShopNum].length; y++) {
strout = strout + '<tr style=\'height: 15\'>' + Shops[ShopNum][y] + '<td width=\'100%\'></td></tr>';
}
getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\' height=\'15\'>' + strout + '</table>';
}

function AM(tcolor, tt, tc) {
if (Shops[Shop][counter] == null ){
	Shops[Shop][counter] = new Array();
}
Shops[Shop][counter] = Shops[Shop][counter] + '<td style=\'width: 15\' title="' + tc + '" class="c' + tcolor + '" onclick="DC(\'' + tc + '\',\'' + tt + '\',\'' + tcolor + '\')" onmouseover="PC(this)" onmouseout="RC(this)">&nbsp;&nbsp;&nbsp;</td>';
//counter = counter + 1;
}

function AH(ShopC, SkillGroup) {
document.write("<tr style=\"height:15\"><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}
