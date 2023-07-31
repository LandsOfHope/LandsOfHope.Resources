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
document.write('<tr  id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  style="color: ' + Color + '"><td><b>' + Itty + '</b><br>' + ht + '<br>' + (hf != '' ? Adr('window.top.SwitchHelper(\'js/' + hf + '\');window.top.closeme(\'iwindow\');','Show helper', 'Show') : '') + '</td></tr>');

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
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function ShowHelper(v) {
	eval(Infos[v].hc);
}

function HelperLinkx(v) {
	window.top.HelperLink(Infos[v].i,'js/' + Infos[v].hf);
}