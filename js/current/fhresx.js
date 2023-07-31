var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var PetID = PetID;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(m, mt, PictureID, l, v) {
var Color = LITE;
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, m, mt, PictureID, l, v);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + m + '</td><td>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, m, mt, PictureID, l, v) {
this.c = Color;
this.m = m;
this.p = PictureID;
this.mt = mt;
this.l = l;
this.v = v;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&PetID=' + PetID);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].m + '</b><br>Material Type: ' + Infos[v].mt + '<br>Minimum Level: ' + Infos[v].l;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].m + '\');','Info','Info')
}
