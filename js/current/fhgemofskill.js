var PageNo = PageNo;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(s, sn, sv, bv) {
var Color = LITE;

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, s, sn, sv, bv);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color:' + Color +';"><td>' + sn + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, s, sn, sv, bv) {
this.c = Color;
this.sv = sv;
this.s = s;
this.i = sn;
this.bv = bv;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('',Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].i + '</b><br>Current Value: ' + (Infos[v].sv) + (Math.round(Infos[v].bv) > 0 ? ' (+' + Infos[v].bv + ')' : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Buttons').innerHTML = (Processing == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?P=' + PageNo + '&CharsAt=' + Infos[v].s + '\')};','Maximize','Maximize') : '');
}
