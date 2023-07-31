var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var TC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function AvC(tid, tin, tip, tpc) {
	var Color = LITE;
	if (Infos[TC] == null) {
		Infos[TC] = new Array();
	}
	Infos[TC] = new newInfo(Color, tid, tin, tip, tpc);
	if (tpc == 0) {
		Color = '#FF6666';
	} else {
		Color = '#66FF66';
	}
	document.write('<tr id="T' + TC + '" style="color:' + Color + '" onmouseover="PC(' + TC + ');" onclick="DC(' + TC + ')"  onmouseout="RC(this)"><td width="15"><img src="https://lohcdn.com/game/i/' + tip + '" width=15 height=15></td><td width="100%" valign=top><b>' + tin + '</b></td></tr>');
	//
	TC = TC + 1;
}

function newInfo(Color, tid, tin, tip, tpc) {
	this.c = Color;
	this.tid = tid;
	this.tin = tin;
	this.tip = tip;
	this.tpc = tpc;
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('https://lohcdn.com/game/i/' + Infos[v].tip, '<b>' + Infos[v].tin + '</b><br>' + (Infos[v].tpc == 0 ? 'Missing piece' : 'You have this piece'));
	getObj('T' + v).style.cursor = 'pointer';
	getObj('T' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	window.top.loadwindow2('imi.asp?Test=' + Infos[v].tid + '&Bonus=0&Material=', 300, 300, 'iwindow', Infos[v].tin);
}

