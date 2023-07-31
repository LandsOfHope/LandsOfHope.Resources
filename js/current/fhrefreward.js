var CharacterID = CharacterID;
var IPath = window.top.FHIP
var Infos = new Array();
var ShopC = -1;
var IC = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AMX(PictureID, PP, Color, ItemName, Cost1, Cost2, v, Desc, x, t) {
	if (PictureID == '') { PictureID = 'na.gif' }
	PictureID = PP + "/" + PictureID;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, PP, Color, ItemName, Cost1, Cost2, v, Desc, x, t);

	IC = IC + 1;
}

function newInfo(PictureID, PP, Color, ItemName, Cost1, Cost2, v, Desc, x, t) {
	this.c = Color;
	this.p = PictureID;
	this.s = ItemName;
	this.d1 = Cost1;
	this.d2 = Cost2;
	this.v = v;
	this.x = x;
	this.e = Desc;
	this.h = ShopC;
	this.t = t;
}

function AH(SkillGroup) {
	ShopC = ShopC + 1;
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function AHOLD(Header) {
	document.write("<div style=\"filter: Glow(Color=#000000, Strength=1);" + strButtonx + "; width: 215; color: gold; font-weight: bold\">" + Header + "</div>");
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].s + '</b><Br>Points: ' + Infos[v].d2 + '<img src="https://lohcdn.com/game/icons/star.png" title="' + Infos[v].d2 + ' Paid referrals"> ' + Infos[v].d1 + '<img src="https://lohcdn.com/game/icons/status_offline.png" title="' + Infos[v].d1 + ' Standard referrals">';
	getObj('Stuff3').innerHTML = Infos[v].e;
	getObj('Buttons').innerHTML = '<' + strClicky2 + ' onclick="window.location.replace(\'fhrefreward.asp?Reward=' + Infos[v].x + '\');" style=\'width: 85\'>Redeem</button>' + (Infos[v].t == 3 ? '<' + strClicky2 + ' onclick="window.parent.loadwindow2(\'im3.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].s + '\');" style=\'width: 85\'>Info</button>' : '');
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].s + '</b><Br>Points: ' + Infos[v].d2 + '<img src="https://lohcdn.com/game/icons/star.png" title="' + Infos[v].d2 + ' Paid referrals"> ' + Infos[v].d1 + '<img src="https://lohcdn.com/game/icons/status_offline.png" title="' + Infos[v].d1 + ' Standard referrals">');
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
			strout = strout + '<div id="I' + y + '" onmouseover="PC(' + y + ');" onmouseout="RC(' + y + ');" title="' + Infos[y].s + '"  onclick="DC(' + y + ');" style="float: left; padding: 1px; margin: 1px; border: 1px dotted ' + Infos[y].c + '; width: 70px; height: 40px; background-color:' + Infos[y].c + ';" valign=bottom><table class="weakercell" style="filter: Glow(Color=#000000, Strength=1);" width="70px" height="40"><tr height="40"><td width="40"><img src="' + IPath + Infos[y].p + '" width=40 height=40></td><td width="30">' + Infos[y].d2 + '<img src="https://lohcdn.com/game/icons/star.png" title="' + Infos[y].d2 + ' Paid referrals"> ' + Infos[y].d1 + '<img src="https://lohcdn.com/game/icons/status_offline.png" title="' + Infos[y].d1 + ' Standard referrals"></td></tr></table></div>';
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '' + strout + '';
}

function OpenShops() {
	var y = 0;
	for (y = 0; y < ShopC; y++) {
		DrawShop(y);
	}
}