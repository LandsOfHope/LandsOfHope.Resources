var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(m, mt, PictureID, l, v) {
var Color = LITE;
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(m, mt, Color, PictureID, l, v);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + m + '</td><td>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(m, mt, Color, PictureID, l, v) {
this.c = Color;
this.v = v;
this.m = m;
this.p = PictureID;
this.mt = mt;
this.l = l;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Type=' + MT);
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
return '<b>' + Infos[v].m + '</b><br>Material: ' + Infos[v].mt + '<br>Minimum Level: ' + Infos[v].l;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v+ '\',300,300,\'iwindow\',\'' + Infos[v].m + ' Info\');','Item information', 'Info');

}
