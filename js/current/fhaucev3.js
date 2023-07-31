
var PageNo = PageNo;
var AAE = AAE;
var IC = 0;
var Infos = new Array();

var IPath = window.top.FHIP
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function AVC(iid, value, PictureID, Itty, ad, at, sp, qsp, ed, cd, b, ip, aover, bi) {
	var Color = LITE;
	if (cd != 0) {
		Color = '#66ff66';
	}
	ip = ip + "/";

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, iid, value, PictureID, Itty, ad, at, sp, qsp, ed, cd, b, ip, aover, bi);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + ip + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td>' + b + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, iid, value, PictureID, Itty, ad, at, sp, qsp, ed, cd, b, ip, aover, bi) {
	this.c = Color;
	this.a = aover;
	this.p = PictureID;
	this.t = Itty;
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
	this.bi = bi;
}


function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].ip + Infos[v].p, '' + Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t.substr(0, 35) + '</b></font><br>' + (Infos[v].cd != 0 ? 'COMPLETED AUCTION' : (Infos[v].a != 0 ? 'AUCTION OVER' : 'RUNNING AUCTION')) + '<Br>Bids: ' + Infos[v].b
	getObj('Stuff3').innerHTML = '<table class=\'itemtext\' cellpadding=1 cellspacing=0><tr><td><input type=hidden name=CharsAt value=\'' + Infos[v].z + '\'><input type=hidden name=bids value=\'' + Infos[v].b + '\'>Auction Name:</td><td><input name=AuctionName size=20 maxlength=80 value=\'' + Infos[v].t + '\'></td></tr>' + (AAE != 0 ? '<tr><td>Auction Teaser:</td><td><input name=AuctionTeaser size=20 maxlength=75 value=\'' + Infos[v].at + '\'></td></tr><tr><td colspan=2><textarea name=AuctionDescription style=\'width: 200px; height: 45px;\'>' + Infos[v].ad + '</textarea></td></tr>' : '') + '<tr><td>Starting Price:</td><td><input name=StartingPrice id=StartingPrice value=\'' + Infos[v].sp + '\' type=hidden>' + (Infos[v].b != 0 ? '' + window.top.BSGM3(Infos[v].sp) : FormMoney('StartingPrice', Infos[v].sp)) + '</td></tr><tr><td>Bid Increment:</td><td><input name=BidIncrement id=BidIncrement value=\'' + Infos[v].bi + '\' type=hidden>' + (Infos[v].b != 0 ? '' + window.top.BSGM3(Infos[v].bi) : FormMoney('BidIncrement', Infos[v].bi)) + '</td></tr><tr><td>Quick Sale Price:</td><td><input name=QuickSalePrice id=QuickSalePrice value=\'' + Infos[v].qsp + '\' type=hidden>' + (Infos[v].b != 0 ? '' + window.top.BSGM3(Infos[v].sp) : FormMoney('QuickSalePrice', Infos[v].qsp)) + '</td></tr><tr><td>End Date:</td><td><input name=EndDate size=20 maxlength=30 value=\'' + Infos[v].ed + '\' ' + (Infos[v].b != 0 ? 'disabled' : '') + '></td></tr></table>';
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].ip + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].a != 0 ? '' : Adf2('', 'Save', 'Save')) + Adr('confirm(\'Are you sure you wish to delete this auction?\', ' + v + ');', 'Delete', 'Delete');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (returnVal == true) {
			if (pb == null) {
			} else if (pb >= 0) {
				window.top.Interface.location.replace('fhauce.asp?ItemTypeID=1&I=' + Infos[pb].z + '&P=' + PageNo);
			}
		}
	}
}