var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Itty, ht, hc, hf) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Itty, ht, hc, hf);
document.write('<tr  id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' + Color + '"><td><b>' + Itty + '</b><br>' + ht + '</td></tr>');

IC = IC + 1;
}

function newInfo(Color, Itty, ht, hc, hf) {
this.c = Color;
this.ht = ht;
this.hc = hc;
this.hf = hf;
this.i = Itty;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}
function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, '' + Tipsfor(v))
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].i + '</b><br>' + Infos[v].ht;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Buttons').innerHTML = (Infos[v].hf != '' ? Adr('window.top.SwitchHelper(\'js/' + Infos[v].hf + '\');','Show helper', 'Show') : Adr('ShowHelper(' + v + ');','Show helper', 'Show')) + Adr('HelperLinkx(' + v + ');','Link to tutorial', 'Link');
}

function ShowHelper(v) {
	eval(Infos[v].hc);
}

function HelperLinkx(v) {
	window.top.HelperLink(Infos[v].i,'js/' + Infos[v].hf);
}