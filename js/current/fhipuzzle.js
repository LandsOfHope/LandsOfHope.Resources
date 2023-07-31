var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var TC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function AvC(tid, tin, tip, tpc, tpt) {
	var Color = LITE;
	if (Infos[TC] == null) {
		Infos[TC] = new Array();
	}
	Infos[TC] = new newInfo(Color, tid, tin, tip, tpc, tpt);
	document.write('<tr id="T' + TC + '" style="color:' + Color + '" onclick="DC(' + TC + ')" onmouseover="PC(' + TC + ');" onmouseout="RC(this)"><td width="40"><img src="https://lohcdn.com/game/i/' + tip + '"></td><td width="260" valign=top><b>' + tin + '</b><br>' + tpt + '</td><td>' + tpc + '</td></tr>');
	TC = TC + 1;

}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
}

function newInfo(Color, tid, tin, tip, tpc, tpt) {
	this.c = Color;
	this.tid = tid;
	this.tin = tin;
	this.tip = tip;
	this.tpc = tpc;
	this.tpt = tpt;
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('https://lohcdn.com/game/i/' + Infos[v].tip, '<b>' + Infos[v].tin + '</b>');
	getObj('T' + v).style.cursor = 'pointer';
	getObj('T' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	window.frames['ResultsOfit'].location.replace('fhipuzzlep.asp?CharsAt=' + Infos[v].tid);
}
