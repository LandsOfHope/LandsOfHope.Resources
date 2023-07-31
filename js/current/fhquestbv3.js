var SN = SN;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPR + 'big/';
var DefaultShop = 0;
var Shop = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].qn + '</b><img src="' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '" style="float: left;padding: 2px; margin: 2px;"><br>Quest Level: ' + Infos[v].ql + '<br>If you wish to take this quest go to <b>' + Infos[v].cn + '</b> at <b>' + Infos[v].x + ', ' + Infos[v].y + '</b>' + (Math.abs(Infos[v].b) != 0 ? ' and look inside the buildings, you may need to explore a building if you can not find the NPC immediately' : '') + '.<br><br>' + (Infos[v].qr != '' ? '<b>Rewards</b><br>' + Infos[v].qr : '');
}

function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" ' + (Infos[v].bg != '' ? 'style="background-color: ' + Infos[v].bg + '"' : '') + '><td width=15><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="280" style="color: ' + Infos[v].c + '; padding-left: 5px;">' + Infos[v].qn + '</b></td></tr>';
}


function AM(ql, v, x, y, Named, Picture, CN, b, qr) {
	var Color = LITE;
	var bgx = ''
	if (Picture == '0') { Picture = '' }
	if ((IC / 2) == Math.round(IC / 2)) { bgx = BGCOLOR }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ql, v, x, y, Named, Picture, CN, b, bgx, qr);
	IC = IC + 1;
}

function newInfo(Color, ql, v, x, y, Named, Picture, CN, b, bgx, qr) {
	this.c = Color;
	this.b = b;
	this.p = Picture;
	this.bg = bgx;
	this.cn = CN;
	this.ql = ql;
	this.x = x;
	this.y = y;
	this.v = v;
	this.qn = Named;
	this.shop = Shop;
	this.qr = qr;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].bg;
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].qn + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
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