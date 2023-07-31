var Infos = new Array();
var IC = 0;
var Following = Following;
var BN = BN;
var ItemID = ItemID;
var PageNo = PageNo;
var SN = SN;
var IPath = window.top.FHIPR;
var Processing = 0;
var LastV = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GS(how, stuff) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('fhbfa.asp?Type=' + how + '&SN=' + SN + '&CharsAt=' + ItemID + '&P=' + PageNo + '&Who=' + Infos[LastV].t + '&CharsAt2=' + stuff);
	}
}

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&CharsAt=' + ItemID + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	LastV = v;
	confirm('Add ' + Infos[v].t + ' to the ' + BN + ' friends list?', v)
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			GS(6, Infos[v].v);
		}
	}
}

function ADC(v, Itty, PictureID, l, la) {
	var Color = LITE;
	if (la < 0) { la = 0 };
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, Itty, PictureID, l, la);
	//width="250" v=' + v + ' p="' + PictureID + '" onclick="DD(this)" onmouseover="PC(this)" onmouseout="RC(this)"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td>' + l + '</td><td>' + (la <= 15 ? 'Active' : '' + getdhm(la) + ' ago') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, Itty, PictureID, l, la) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
	this.l = l;
	this.la = la;
}

function getdhm(harhar) {
	var wholedays = Math.floor((harhar / 60) / 24);
	var d = (Math.floor((harhar / 60) / 24));
	var h = Math.floor((harhar / 60) - (d * 24))
	var m = Math.floor((harhar) - Math.floor((h * 60) + ((d * 24) * 60)))
	var strout = '' + (d > 0 ? '<b>' + (d) + '</b>d, ' : '') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 ? '<b>' + (m) + '</b>mins' : '');
	return strout;
}