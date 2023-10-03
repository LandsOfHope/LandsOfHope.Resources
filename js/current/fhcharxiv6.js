var CharacterID = CharacterID;
var IPath = window.top.FHIP
var Infos = new Array();
var ShopC = -1;
var IC = 0;
var PageNo = PageNo;
var LastClickedItem = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AMX(PictureID, PP, Color, ItemName, Cost, v, Desc, x, xm) {
	if (PictureID == '') { PictureID = 'na.gif' }
	PictureID = PP + "/" + PictureID;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, PP, Color, ItemName, Cost, v, Desc, x, xm);

	IC = IC + 1;
}

function newInfo(PictureID, PP, Color, ItemName, Cost, v, Desc, x, xm) {
	this.c = Color;
	this.p = PictureID;
	this.s = ItemName;
	this.d = Cost;
	this.v = v;
	this.x = x;
	this.e = Desc;
	this.h = ShopC;
	this.xm = xm;
}

function GoP(PageNo) {
	window.location.replace('fhcharxi.asp?P=' + PageNo + '');
}

function AH(SkillGroup) {
	ShopC = ShopC + 1;
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function AHOLD(Header) {
	document.write("<div style=\"filter: Glow(Color=#000000, Strength=1);" + strButtonx + "; width: 215; color: gold; font-weight: bold\">" + Header + "</div>");
}

function DC(v) {
	LastClickedItem = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].s + '</b><Br>Cost: $' + (Infos[v].d * 5) + '/ ' + Infos[v].d + 'hc' + (Infos[v].xm != 0 ? '<br><i>Available this month, once a year only!</i>' : '') + '<br><b>Useful Links: </b><a href=\'http://www.xe.com/ucc/\' target=\'_new\'>Currency Calculator</a>';
	getObj('Stuff3').innerHTML = Infos[v].e + '<br>';
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="window.open(\'fhfhd.asp?item_name=Extra: ' + Infos[v].s + '&item_number=' + Infos[v].x + '&a3=' + Infos[v].d + '&custom=' + CharacterID + '\', \'PP\', \'\');">Purchase</button><' + strClicky2 + ' onclick="window.parent.loadwindow2(\'im3.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].s + '\');" style=\'width: 85\'>Info</button><' + strClicky1 + ' onclick="confirm(\'The Link button is used to send a clickable link to the Shoutbox, which allows other people to view the details of the item you have selected. Continue?\', 3);" style=\'width: 85\'>Link</button>';
}

function PromptReturn(returnVal, postback) {
	var v = LastClickedItem;
	var II = Infos[v];
	if (returnVal != null) {
		if (returnVal != false) {
			if (postback == 3) {
				window.top.sendRequest('fhlink.asp?Type=P&cost=' + (II.d * 5) + '&CharsAt=' + II.v + '&Name=' + encodeURIComponent(II.s) + '&c=' + encodeURIComponent('gold') + '&l1=i&l2=' + (II.p == '' ? 'na.gif' : II.p));
			}
		}
	}
}


function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].s + '</b><Br>Cost: $' + (Infos[v].d * 5) + '/ ' + Infos[v].d + 'hc');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].c
}

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
	for (y = 0; y < Infos.length; y++) {
		if (Infos[y].h == ShopNum) {
			strout = strout + '<div id="I' + y + '" onmouseover="PC(' + y + ');" onmouseout="RC(' + y + ');" title="' + Infos[y].s + '"  onclick="DC(' + y + ');" style="float: left; padding: 1px; margin: 1px; border: 1px dotted ' + Infos[y].c + '; width: 41px; height: 58px; background-color:' + Infos[y].c + '; background-position: top center; background-repeat: no-repeat; background-image: URL(' + IPath + Infos[y].p + ');" valign=bottom><table class="weakercell" style="filter: Glow(Color=#000000, Strength=1);" height="58px"><tr height="40"><td></td></tr><tr><td>' + ('$' + (Infos[y].d * 5)) + '</td></tr></table></div>';
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '' + strout + '';
}

function OpenShops() {
	var y = 0;
	for (y = 0; y <= ShopC; y++) {
		DrawShop(y);
	}
}