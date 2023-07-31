var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(rid, rn, Itty, PictureID, dm, b, l) {
var Color = LITE;
if (b != 0){
	Color = 'gold';
}
county = county + 1
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, rid, rn, Itty, PictureID, dm, b, l);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '">' + Itty + '</td><td>' + dm + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, rid, rn, Itty, PictureID, dm, b, l) {
this.c = Color;
this.r = rid;
this.p = PictureID;
this.dm = dm;
this.b = b;
this.l = l;
this.rn = rn;
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
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].i + '</b>' + (Infos[v].i != Infos[v].rn ? '<br>Race Name: ' + Infos[v].rn : '') + (Infos[v].b  == 1 ? '<br>Lesser Boss' : (Infos[v].b  == 2 ? '<br>Terminus Boss' : '')) + (Infos[v].dm != 0 ? '<br>Dungeon Mastery Skill: ' + Infos[v].dm : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'rz.asp?test=' + Infos[v].r + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','View more information on this race','Info')
}
