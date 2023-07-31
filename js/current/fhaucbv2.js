
var PageNo = PageNo;
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
	window.location.replace('?SN=' + SN + '&P=' + PageNo + '');
}

function DC(v) {
	window.location.replace('fhaucv.asp?CharsAt=' + Infos[v].v);
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].i + ', ' + Infos[v].b + ' bids, highest bid ' + window.top.BSGM2(Infos[v].mb) + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}