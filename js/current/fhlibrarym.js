var PageNo = PageNo;
var Infos = new Array();
var IC = 0;
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(mc, m, PictureID, d, m2) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, mc, m, PictureID, d, m2);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + m2 + '</td><td>' + mc + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, mc, m, PictureID, d, m2) {
this.c = Color;
this.d = d;
this.p = PictureID;
this.m2 = m2;
this.m = m;
this.mc = mc;
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
return '<b>' + Infos[v].m2 + '</b><br>Materials: ' + Infos[v].mc;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].m2 + '</b><br>' + Infos[v].d + '<br>Materials: ' + Infos[v].mc
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhlibrarym2.asp?Type=' + Infos[v].m + '\');}', 'View', 'View') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhlibraryimt.asp?Type=' + Infos[v].m + '\');}', 'Items', 'Items');
}
