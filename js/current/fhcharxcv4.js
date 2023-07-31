var Infos = new Array();
var IC = 0;
var strWhat = strWhat;
var CharacterID = CharacterID;
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(v, Color, ItemName, Cost, v2, Desc) {
var PictureID = 'na.gif';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(v, Color, ItemName, Cost, v2, Desc, PictureID);
document.write('<tr width="150" id="I' + IC + '" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td width="15"><img src=\'' + IPath + PictureID + '\' width=15 height=15></td><Td width=\'100%\' style=\'color: ' + Color + '\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}


function newInfo(v, Color, ItemName, Cost, v2, Desc, PictureID) {
this.c = Color;
this.p = PictureID;
this.s = ItemName;
this.d = Cost;
this.e = Desc;
this.v = v;
this.v2 = v2;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].s + '</b><br>Cost: ' + Infos[v].d + 'hc/$' + (Infos[v].d * 5) + '<br>' + (Infos[v].v2 > 800 ? 'Queue Timer  ' + (Infos[v].v2 - 800) + ' seconds' : (Infos[v].v2 > 700 ? 'Stable slots increased by ' + (Infos[v].v2 - 700) + ' stalls' : (Infos[v].v2 > 600 ? 'Bank Item Limit Increased by ' + (Infos[v].v2 - 600) + ' items' : (Infos[v].v2 > 500 ? 'Pet Limit Increased by ' + (Infos[v].v2 - 500) + ' pets' : (Infos[v].v2 < 50 || Infos[v].v == 260 ? 'Item/Pet/Building Queue increased by ' + Infos[v].v2 + ' items' : 'Backpack Limit increased by ' + Infos[v].v2 + ' items'))))) + '<br><br>Please note these upgrades are <u><b>now</b></u> cumulative, so it is possible to buy one upgrade now and then buy a different one later and the effect will be combined.<Br>Cost: $' + (Infos[v].d * 5) + '/ ' + (Infos[v].d) + 'hc<Br>' + Infos[v].e + '';
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="window.open(\'fhfhd.asp?item_name=Extra: ' + Infos[v].s + '&item_number=' + Math.abs(Infos[v].v) + '&a3=' + Infos[v].d + '&custom=' + CharacterID + '\', \'PP\', \'\');">Purchase</button>';
}


function PC(v) {
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor='';
}