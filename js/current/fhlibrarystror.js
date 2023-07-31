var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(tid, tin, tip, tii, ti) {
var Color = 'white';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, tid, tin, tip, tii, ti);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color:' + Color +'"><td width=40><img src="' + IPath + tip + '"></td><td width="100%" valign=top>' + tin + '<br>' + tii + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, tid, tin, tip, tii, ti) {
this.c = Color;
this.tid = tid;
this.tip = tip;
this.tin = tin;
this.tii = tii;
this.ti = ti;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].tin + '</b>';
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].tin + '</b><br>' + Infos[v].ti + '<br><br><center><b>Requirements</b></center><br>' + Infos[v].tii
	getObj('Pic').innerHTML = "<img src='https://res.landsofhope.com/game/i/" + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = Adr('window.parent.loadwindow2(\'troz.asp?Test=' + Infos[v].tid  + '\',300,300,\'iwindow\',\'' + Infos[v].tin + '\');','More Info','More Info');
}
