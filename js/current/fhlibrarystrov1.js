var PageNo = PageNo;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(tid, tin, tip, ti) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, tid, tin, tip, ti);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td width=40><img src="' + IPath + tip + '"></td><td width="500" valign=top style="color:' + Color + '"><b>' + tin + '</b><br><font id=tmagenta>' + ti + '</font></td><td valign=top>' + Adr('window.parent.loadwindow2(\'imi.asp?Test=' + tid + '\',300,300,\'iwindow\',\'' + tin + '\');', 'Info', 'Info') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, tid, tin, tip, ti) {
	this.c = Color;
	this.tid = tid;
	this.tip = tip;
	this.tin = tin;
	this.ti = ti;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].tin + '</b>';
}