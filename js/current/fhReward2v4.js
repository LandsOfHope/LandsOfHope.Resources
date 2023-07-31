var Level = Level;
var Processing = 0;
var CharsAt = CharsAt;
var IN = IN;
var P = P;
var Level = Level;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var PrizeV = -1;
var TokenV = -1;
var TC = 0;
var Tokens = new Array();
var PCC = 0;
var Prizes = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC1(v, PictureID, Itty, q) {
	var Color = 'gold';
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Tokens[TC] == null) {
		Tokens[TC] = new Array();
	}
	Tokens[TC] = new newToken(Color, v, PictureID, Itty, q);
	document.write('<tr id="T' + TC + '" onmouseover="PC(' + TC + ')" onmouseout="RC(' + TC + ')" onclick="DC(' + TC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + (q > 1 ? ' * ' + q : '') + '</td></tr>');
	TC = TC + 1;
}

function newToken(Color, v, PictureID, Itty, q) {
	this.c = Color;
	this.t = Itty;
	this.p = PictureID;
	this.v = v;
	this.q = q;
}

function AC2(v, PictureID, Itty, q, sn, it, at, l) {
	var Color = (l > Level ? '#ff6666' : LITE);
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Prizes[PCC] == null) {
		Prizes[PCC] = new Array();
	}
	Prizes[PCC] = new newPrize(Color, v, PictureID, Itty, q, sn, it, at, l);
	document.write('<tr id="P' + PCC + '" onmouseover="PC2(' + PCC + ')" onmouseout="RC2(' + PCC + ')" onclick="DC2(' + PCC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px;' + (l > Level ? 'border: 1px dotted red' : '') + '">' + Itty + (q > 1 ? ' * ' + q : '') + '</td><td width=16><img src="' + OPath + 'magnifier.png" style="cursor: pointer" title="View Item Info" onclick="PopupItemInfo(-' + Prizes[PCC].v + ',\'' + Prizes[PCC].t + '\');"></td></tr>');
	PCC = PCC + 1;
}

function newPrize(Color, v, PictureID, Itty, q, sn, it, at, l) {
	this.c = Color;
	this.t = Itty;
	this.p = PictureID;
	this.v = v;
	this.sn = sn;
	this.it = it;
	this.at = at;
	this.q = q;
	this.l = l;
}
function DC2(v) {
	PrizeV = v;
	getObj('Stuff3').innerHTML = '<font class="weakcell" style="color:' + Prizes[v].c + '">' + Prizes[v].t + '</font><br>Quantity: ' + Prizes[v].q + '' + (Prizes[v].sn != '' ? '<br>' + Prizes[v].sn : '') + '<br>Min Level: ' + Prizes[v].l + (Math.abs(Prizes[v].at) != 0 ? '<br>Armor: ' + GetAT(Prizes[v].at) : '');
	getObj('Pic3').innerHTML = "<img height=20 width=20 src='" + IPath + (Prizes[v].p == null ? 'na.gif' : Prizes[v].p) + "'>";
	check();
}

function RC2(v) {
	getObj('P' + v).style.cursor = '';
	getObj('P' + v).style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip(IPath + (Prizes[v].p == '' ? 'na.gif' : Prizes[v].p), Prizes[v].t + (Prizes[v].sn != '' ? '<br>' + Prizes[v].sn : '') + (Math.abs(Prizes[v].at) != 0 ? '<br>Min Level: ' + Prizes[v].l + '<br>Armor: ' + GetAT(Prizes[v].at) : ''));
	getObj('P' + v).style.cursor = 'pointer';
	getObj('P' + v).style.backgroundColor = BGCOLOR_S
}

function check() {
	if (PrizeV >= 0 && TokenV >= 0) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {confirm(\'Are you sure you wish to USE a voucher to gain that item?\', 1);}', 'Redeem', 'Redeem')
	} else {
		getObj('Buttons').innerHTML = ''
	};
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.top.Interface.location.replace('fhreward2.asp?CharsAt=' + CharsAt + '&IN=' + IN + '&P=' + P + '&ItemID=' + Tokens[TokenV].v + '&ItemID2=' + Prizes[PrizeV].v);
		}
	}
}

function DC(v) {
	TokenV = v;
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Tokens[v].c + '">' + Tokens[v].t + '</font><br>Quantity: ' + Tokens[v].q + '';
	getObj('Pic').innerHTML = "<img height=20 width=20 src='" + IPath + (Tokens[v].p == null ? 'na.gif' : Tokens[v].p) + "'>";
	check();
}

function RC(v) {
	getObj('T' + v).style.cursor = '';
	getObj('T' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Tokens[v].p == '' ? 'na.gif' : Tokens[v].p), Tokens[v].t);
	getObj('T' + v).style.cursor = 'pointer';
	getObj('T' + v).style.backgroundColor = BGCOLOR_S
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}