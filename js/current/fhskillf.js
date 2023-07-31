var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(Color, ItemID, PictureID, Itty, sv) {
	if (PictureID == '0') { PictureID = '' }
	if (PictureID == '') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, PictureID, Itty, sv);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, PictureID, Itty, sv) {
	this.c = Color;
	this.sv = sv;
	this.p = PictureID;
	this.n = Itty;
	this.value = ItemID;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tips(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {confirm(\'Whats that you want to forget a skill, what are you mad .... umm well I hope you have thought this through. Are you sure ?\', ' + v + ')}', 'Forget', 'Forget');
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo);
}

function Tips(v) {
	return '<b>' + Infos[v].n + '</b><br>Current Value: ' + Infos[v].sv;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tips(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhskillf.asp?CharsAt=' + CharsAt + '&ItemID=' + Infos[pb].value + '');
		}
	}
}