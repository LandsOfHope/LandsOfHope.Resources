var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIP;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].bc;
}

function AVC(a2t, iid, value, PictureID, Itty, ad, at, sp, qsp, ed, cd, b, ip, ac) {
	var Color = ac;
	if (cd != 0) {
		Color = '#00ff00';
	}
	var BColor = '';
	if (a2t == 1) {
		Color = '#00ff00'
		BColor = BGCOLOR_S;
	}
	if (a2t == 2) {
		Color = '#0000ff'
		BColor = BGCOLOR_S;
	}
	if (a2t == 3) {
		Color = '#ff0000'
		BColor = BGCOLOR_S;
	}
	if (a2t == 4) {
		Color = 'yellow'
		BColor = BGCOLOR_S;
	}

	ip = ip + "/";

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, BColor, a2t, iid, value, PictureID, Itty, ad, at, sp, qsp, ed, cd, b, ip);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + ';' + (BColor != '' ? 'background-color:' + BColor + ';' : '') + '"><td width=15><img width=15 height=15 src="' + IPath + ip + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="padding-left: 5px">' + Itty + '</td><td>' + b + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, BColor, a2t, iid, value, PictureID, Itty, ad, at, sp, qsp, ed, cd, b, ip) {
	this.c = Color;
	this.bc = BColor;
	this.p = PictureID;
	this.t = Itty;
	this.a2t = a2t;
	this.b = b;
	this.cd = cd;
	this.z = value;
	this.v = iid;
	this.ad = ad;
	this.at = at;
	this.sp = sp;
	this.qsp = qsp;
	this.ed = ed;
	this.ip = ip;
}

function AVCE(at, curat, PictureID, Itty, ip) {
	var Color = LITE;
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

	if (at == curat) {
		Itty = Itty + ' SELECTED';
	}
	return '<tr onclick="DC2(' + at + ')" style="color: ' + Color + '; cursor: pointer;background-color:' + BColor + ';"><td width=15><img width=15 height=15 src="' + IPath + ip + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="padding-left: 5px;">' + Itty + '</td></tr>';
}

function DC2(at) {
	getObj('AuctionType').value = at;

}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].t + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function ATCo(v) {
	var strout = '';
	strout = '<table class=\'itemtext\' cellspacing=0 cellpadding=0>'

	strout = strout + '' + AVCE(0, Infos[v].a2t, Infos[v].p, Infos[v].t, Infos[v].ip)
	strout = strout + '' + AVCE(1, Infos[v].a2t, Infos[v].p, Infos[v].t, Infos[v].ip)
	strout = strout + '' + AVCE(2, Infos[v].a2t, Infos[v].p, Infos[v].t, Infos[v].ip)
	strout = strout + '' + AVCE(3, Infos[v].a2t, Infos[v].p, Infos[v].t, Infos[v].ip)
	strout = strout + '' + AVCE(4, Infos[v].a2t, Infos[v].p, Infos[v].t, Infos[v].ip)

	strout = strout + '</table>'
	return strout;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t.substr(0, 35) + '</b></font><br>' + (Infos[v].cd != 0 ? 'COMPLETED AUCTION' : 'RUNNING AUCTION') + '<br><table class=\'itemtext\' cellpadding=1 cellspacing=0><tr><td><input type=hidden name=AuctionType id=AuctionType value=\'' + Infos[v].a2t + '\'><input type=hidden name=CharsAt value=\'' + Infos[v].z + '\'><input type=hidden name=bids value=\'' + Infos[v].b + '\'>Auction Name:</td><td><input name=AuctionName size=20 maxlength=80 value=\'' + Infos[v].t + '\'></td></tr><tr><td>Auction Teaser:</td><td><input name=AuctionTeaser size=20 maxlength=75 value=\'' + Infos[v].at + '\'></td></tr><tr><td colspan=2><textarea name=AuctionDescription style=\'width: 200px; height: 45px;\'>' + Infos[v].ad + '</textarea></td></tr><tr><td colspan=2>Appearance:</td></tr><tr><td colspan=2 id=atc>' + ATCo(v) + '</td></tr></table>';
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].ip + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adf2('', 'Save', 'Save') + '<' + strClicky + ' type=button onclick="confirm(\'Are you sure you wish to delete this auction?\',' + v + ');" style=\'width: 85\'>Delete</button>'
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && returnVal == true) {
			window.top.Interface.location.replace('fhaucac.asp?ItemTypeID=1&I=' + Infos[pb].z + '&P=' + PageNo);
		}
	}
}