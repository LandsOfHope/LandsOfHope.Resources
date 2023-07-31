
var PageNo = PageNo;
var OB = OB;
var Cat = Cat;
var SN = SN;
var IPath = window.top.FHIP
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function ColumnHeaders() {
	document.write('<tr class=\'boldcell\'><td></td><td>' + CH('Auction Information', '2') + '</td><td>' + CH('Comments', '1') + '</td><td>' + CH('Price', '3') + '</td><td>' + CH('Time Left', '4') + '</td></tr>');
}

function CH(strdisplay, ob1) {
	return '<a href="?SN=' + SN + '&Cat=' + Cat + '&OB=' + (ob1 == OB ? -ob1 : ob1) + '">' + strdisplay + '</a>';
}

function AC(IID, ItemName, t, PictureID, mb, b, cd, ip) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	ip = ip + "/";

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, IID, ItemName, t, PictureID, mb, b, cd, ip);

	//ip="' + ip + '" i="' + ItemName + '" t="' + t + '" cd="' + cd + '" v=' + IID + ' mb=' + mb + '
	// b=' + b + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + ip + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\' valign=top><b>' + ItemName + '</b>' + (t != '' ? '<br>' + t : '') + '</td><td width=\'40\' valign=top>' + b + '</td><td id=\'tgold\' width=\'90\' valign=top>' + window.top.BSGM(mb) + '</td><td width=\'95\' valign=top>' + cd + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, IID, ItemName, t, PictureID, mb, b, cd, ip) {
	this.c = Color;
	this.p = PictureID;
	this.i = ItemName;
	this.v = IID;
	this.t = t;
	this.cd = cd;
	this.mb = mb;
	this.b = b;
	this.ip = ip;
}


function GoP(PageNo) {
	window.location.replace('?Cat=' + Cat + '&OB=' + OB + '&SN=' + SN + '&P=' + PageNo + '');
}

function DC(v) {
	window.location.replace('fhaucc.asp?Cat=' + Cat + '&CharsAt=' + Infos[v].v);
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].i + ', ' + Infos[v].b + ' comments, highest bid ' + window.top.BSGM2(Infos[v].mb) + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}