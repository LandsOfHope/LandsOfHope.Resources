
var DefaultShop = 0;
var WhatID = 0;
var CharsAt = CharsAt;
var Shop = 0;
var counter = 0;
var IPath = window.top.FHIPI;
var IPath2 = window.top.FHIPB;
var Infos = new Array();
var IC = 0;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function tgl(ShopNum) {
	if (getObj('Shop' + ShopNum).innerHTML == '') {
		DS(ShopNum);
	} else {
		getObj('Shop' + ShopNum).innerHTML = '';
	}
}

function DS(ShopNum) {
	var strout = '';
	var y = 0;
	for (y = 0; y < IC; y++) {
		if (Infos[y].shop == ShopNum) {
			strout = strout + GetRow(y);
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '<table width="100%" cellspacing=0 cellpadding=1 class=\'itemText\'>' + strout + '</table>';
}

function DrawAll() {
	var strout = '';
	var x = 0;
	for (x = 1; x <= Shop; x++) {
		DS(x)
	}
}

function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}


function AM(imp, Color, Named, v, d, Picture, p2, f, i, a, ql, qr) {
	var bg = ''
	if (Picture == '0') { Picture = '' }
	if ((IC / 2) == Math.round(IC / 2)) { bg = BGCOLOR }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo('', imp, Picture, p2, Named, Color, d, v, 0, a, bg, v, f, i, ql, qr);
	IC = IC + 1;
}

function DC(v) {
	if (Infos[v].type != '') {
		DC2(v);
	} else {
		getObj('Stuff1').innerHTML = "<table align=bottom width='100%' height=275 class='nav4'><tr height=40><td ID=Stuff2 class='weakcell' width='275'><b" + (Infos[v].a != 0 ? " style='color:" + GetAColor(Infos[v].a) + "'" : "") + ">" + Infos[v].t + "</b>" + (Infos[v].a > 0 ? "<br><b>" + GetAName(Infos[v].a) + "</b>" : "") + "<br>Quest Level: " + (Infos[v].ql == 0 ? "Any" : "" + Infos[v].ql) + "</td><td width=40 id=Pic valign=top></td></tr><tr><td colspan=2 width=325><DIV STYLE='OVERFLOW: AUTO; HEIGHT: 200px'><table class='weakcell' cellpadding=0 cellspacing=0 width='100%'><tr><td id=Buttons></td></tr></table></DIV></td></tr><tr height='100%'><td colspan=2 ID=Buttons2></td></tr></table>"
		getObj('Buttons').innerHTML = Infos[v].d + (Infos[v].qr != '' ? '<br><br><b>Rewards</b><br>' + Infos[v].qr : '');
		getObj('Buttons2').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhshopq.asp?CharsAt=' + CharsAt + '&ItemID=' + Infos[v].v + '\');}', 'Accept Quest', 'Accept Quest');
	}
}


function DC2(v) {
	if (Processing == 0) {
		getObj('Stuff1').innerHTML = "<iframe id=ResultsOfit name=ResultsOfit src='" + "fhquest2" + (Infos[v].a != 0 ? "a" : "") + ".asp?P=1&CharsAt=" + Infos[v].q + "&Type=" + CharsAt + "' NORESIZE SCROLLING=AUTO HSPACE=0 VSPACE=0 FRAMEBORDER=0 MARGINHEIGHT=0 MARGINWIDTH=0 WIDTH='325' HEIGHT='275'></iframe>"
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].b;
}

function PC(v) {
	window.top.InfoTip(window.top.FHIP + Infos[v].p2 + '/' + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AMN(imp, PictureID, p2, QuestName, Color, Quest, QuestID, Spe, a) {
	var bg = ''
	if (PictureID == '0') { PictureID = '' }
	if ((IC / 2) == Math.round(IC / 2)) { bg = BGCOLOR }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(2, imp, PictureID, p2, QuestName, Color, Quest, QuestID, Spe, a, bg, '');
	IC = IC + 1;
}

function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC' + Infos[v].type + '(' + v + ')" style="background-color: ' + Infos[v].b + '"><td width=15><img src=\'' + window.top.FHIP + Infos[v].p2 + '/' + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '\' width=15 height=15></td><td width="230" style="color: ' + Infos[v].c + '; padding-left: 5px;">' + (Infos[v].s == 1 ? '<i>' + Infos[v].t + '</i>' : Infos[v].t) + '</b></td><td width="50">' + (Infos[v].imp == 0 ? '' : (Infos[v].imp = 1 ? 'Allegiance' : '')) + '</td></tr>';
}

function newInfo(it, imp, PictureID, p2, QuestName, Color, Quest, QuestID, Spe, a, bg, v, f, i, ql, qr) {
	this.c = Color;
	this.imp = imp;
	this.p = PictureID;
	this.t = QuestName;
	this.p2 = p2;
	this.a = a;
	this.s = Spe;
	this.q = QuestID;
	this.d = Quest;
	this.shop = Shop;
	this.b = bg;
	this.v = v;
	this.i = i;
	this.f = f;
	this.ql = ql;
	this.type = it;
	this.qr = qr;
}

