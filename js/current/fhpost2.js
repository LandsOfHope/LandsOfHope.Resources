var PageNo = PageNo;
var IPath = window.top.FHIPR;
var Processing = 0;
var CharsAt = CharsAt;
var Special = Special;
var lngTotal = lngTotal;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, PictureID, Itty, q) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, PictureID, Itty, q);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, PictureID, Itty, q) {
	this.c = Color;
	this.value = ItemID;
	this.p = PictureID;
	this.t = Itty;
	this.q = q;
}

function DC(v) {
	var x = 0;
	var bl = getObj('Note').value.length;

	if (bl > 500) {
		alert('This note is too long, please reduce it from ' + bl + ' to 500 chars.');
	} else {
		getObj('Dest').value = Infos[v].value;
		confirm('' + (Special == 0 ? 'Send these items to ' + Infos[v].t + ' via free post?' : 'Send these items to ' + Infos[v].t + ' at a cost of ' + window.top.BSGM2(lngTotal) + '?') + '', 1)
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('tradeform').submit();
		}
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GoP(P) {
	getObj('P').value = P;
	getObj('Dest').value = 0;
	getObj('tradeform').submit();
}