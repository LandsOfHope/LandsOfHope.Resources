var IC = 0;
var EP = EP;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(rid, rc, rlk, Itty, PictureID, skilly, qk) {
	var Color = LITE;
	if (qk > 0) {
		Color = 'gold';
	}
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, rid, rc, rlk, Itty, PictureID, skilly, qk);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '">' + Itty + '</td><td>' + skilly + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, rid, rc, rlk, Itty, PictureID, skilly, qk) {
	this.c = Color;
	this.r = rid;
	this.p = PictureID;
	this.i = Itty;
	this.qk = qk;
	this.rc = rc;
	this.rlk = rlk;
	this.s = skilly;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&E=' + EP);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Tipz(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function getdhm(harhar) {
	var wholedays = Math.floor((harhar / 60) / 24);
	var d = (Math.floor((harhar / 60) / 24));
	var h = Math.floor((harhar / 60) - (d * 24))
	var m = Math.floor((harhar) - Math.floor((h * 60) + ((d * 24) * 60)))
	var strout = '' + (d > 0 ? '<b>' + (d) + '</b>d, ' : '') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 ? '<b>' + (m) + '</b>mins' : '');
	return strout;
}

function Tipz(v) {
	return '<b>' + Infos[v].i + '</b><br>Classification: ' + Infos[v].rc + '<br>You have killed: ' + Infos[v].s + '<br>' + (Infos[v].qk > 0 ? 'Quest kills: ' + Infos[v].qk + '<br>' : '') + (Infos[v].s > 0 ? 'Last Kill: ' + getdhm(Infos[v].rlk) + ' ago' : '') + (Math.abs(Infos[v].s) < 5000 ? '<br><br><b>' + Infos[v].i + ' Slayer Title</b><br>' + Infos[v].i + ' kills remaining: ' + (5000 - Math.abs(Infos[v].s)) + '<br>' : '') + '';
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipz(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Math.abs(Infos[v].s) >= 5000 ? Adr('confirm(\'Are you sure you wish to use ' + Infos[v].i + ' Slayer as your title?\',' + v + ');', 'Use Slayer Title', 'Enable Title') : '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			window.top.Interface.location.replace('fhkillse.asp?E=' + EP + '&CharsAt=' + Infos[v].r + '&P=' + PageNo);
		}
	}
}