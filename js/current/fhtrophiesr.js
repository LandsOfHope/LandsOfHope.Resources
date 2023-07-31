var CharsAt = CharsAt;
var PageNo = PageNo;
var DefaultShop = 0;
var ShopC = 0;
var counter = 0;
var Infos = new Array();
var IC = 0;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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
			strout = strout + '<tr id="I' + y + '" onmouseover="PC(' + y + ');" onmouseout="RC(' + y + ');" title="' + Infos[y].i + '"  onclick="DC(' + y + ');" valign=bottom><td><img src=\'' + IPath + Infos[y].p + '\' width=15 height=15></td><td style="padding-left: 5px; color:' + Infos[y].c + '">' + Infos[y].i + '</td><td><' + strClicky1 + ' onclick="window.parent.loadwindow2(\'troz.asp?Test=' + Infos[y].v + '\',300,300,\'iwindow\',\'' + Infos[y].i + '\');">Info</button></td><tr>';
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\' cellpadding=1 cellspacing=0>' + strout + '</table>'
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
}

function AM(Color, STID, Picture, Named, Other) {
	counter = counter + 1;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, STID, Picture, Named, Other);

	IC = IC + 1;
}

function newInfo(Color, STID, Picture, Named, Other) {
	this.c = Color;
	this.p = Picture;
	this.i = Named;
	this.v = STID;
	this.o = Other;
	this.h = ShopC;
}


function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=3 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function DDC(valin) {
	window.frames['ResultsOfit'].location.replace('fhtrophiesr3.asp?ItemID=' + valin + '&CharsAt=' + CharsAt);
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>' + Infos[v].o
	getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p + '\'>';
	DDC(Infos[v].v);
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].i + '</b>');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function OpenShops() {
	var y = 0;
	for (y = 0; y < ShopC; y++) {
		DrawShop(y);
	}
}