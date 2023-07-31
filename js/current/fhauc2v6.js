var Level = Level;
var PageNo = PageNo;
var Cat = Cat;
var OB = OB;
var SN = SN;
var IPath = window.top.FHIP
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function fx1(stuff) {
	var re = /^\$|,|'|"|%|@|#/g;
	stuff.value = stuff.value.replace(re, "");
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
}

function ColumnHeaders() {
	document.write('<tr class=\'boldcell\'><td></td><td>' + CH('Auction Information', '2') + '</td><td>' + CH('Bids', '3') + '</td><td>' + CH('Price', '4') + '</td><td>' + CH('Time Left', '1') + '</td></tr>');
}

function CH(strdisplay, ob1) {
	return '<a href="?Cat=' + Cat + '&SN=' + SN + '&OB=' + (ob1 == OB ? -ob1 : ob1) + '">' + strdisplay + '</a>';
}


function AC(at, IID, ItemName, t, PictureID, mb, b, cd, ip, al, ao, ac) {
	if (PictureID == '0') { PictureID = '' }
	var Color = ac;
	var BColor = '';
	if (at == 1) {
		Color = '#00ff00'
		BColor = BGCOLOR_S;
	}
	if (at == 2) {
		Color = '#0000ff'
		BColor = BGCOLOR_S;
	}
	if (at == 3) {
		Color = '#ff0000'
		BColor = BGCOLOR_S;
	}
	if (at == 4) {
		Color = 'yellow'
		BColor = BGCOLOR_S;
	}
	ip = ip + "/";

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, BColor, at, IID, ItemName, t, PictureID, mb, b, cd, ip, al, ao);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; ' + (BColor != '' ? 'background-color: ' + BColor + ';' : '') + ' padding-left: 5px"><td width=15><img src=\'' + IPath + ip + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\' valign=top ' + (al > Level ? 'style=\'border: 1px dotted red\'' : '') + '><b>' + ItemName + '</b>' + (t != '' ? '<br>' + t : '') + '<br>Level: ' + al + ' ' + ao + '</td><td width=\'40\' valign=top>' + b + '</td><td id=\'tgold\' width=\'90\' valign=top>' + window.top.BSGM(mb) + '</td><td width=\'95\' valign=top>' + cd + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, BColor, at, IID, ItemName, t, PictureID, mb, b, cd, ip, al, ao) {
	this.c = Color;
	this.bc = BColor;
	this.p = PictureID;
	this.i = ItemName;
	this.at = at;
	this.v = IID;
	this.t = t;
	this.cd = cd;
	this.mb = mb;
	this.b = b;
	this.ao = ao;
	this.al = al;
	this.ip = ip;
}

function AC2(ItemName, cc) {
	var PictureID = '';
	if (PictureID == '0') { PictureID = '' }
	var Color = 'gold';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo2(Color, ItemName, cc, PictureID);

	document.write('<tr id="I' + IC + '" onmouseover="PC2(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC2(' + IC + ')" onmouseover="PC2(this)" onmouseout="RC(this)" onclick="DC2(this)" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + 'i/' + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'480\' valign=top><b>' + ItemName + '</b></td><td width=\'40\' valign=top>' + cc + '</td></tr>');
	IC = IC + 1;
}

function newInfo2(Color, ItemName, cc, PictureID) {
	this.c = Color;
	this.p = PictureID;
	this.i = ItemName;
	this.cc = cc;
	this.bc = '';
}


function GoP(PageNo) {
	window.location.replace('?OB=' + OB + '&SN=' + SN + '&Cat=' + Cat + '&P=' + PageNo + '');
}

function DC(v) {
	window.location.replace('fhaucv.asp?Cat=' + Cat + '&CharsAt=' + Infos[v].v);
}

function DC2(v) {
	window.location.replace('?Cat=' + Infos[v].i + '');
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].bc;
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].ip + Infos[v].p, '' + Infos[v].i + '<br>Level: ' + Infos[v].al + ' ' + Infos[v].ao + '<br>' + Infos[v].b + ' bids, highest ' + window.top.BSGM2(Infos[v].mb) + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PC2(v) {
	window.top.InfoTip('', '' + Infos[v].i + '<br>Click to view category');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}