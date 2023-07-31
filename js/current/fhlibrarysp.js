var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(sid, Itty, PictureID, rc) {
var Color = LITE;
if (PictureID == '' || PictureID == '0') {PictureID = 'na'}
PictureID = PictureID + '.png'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, sid, Itty, PictureID, rc);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + Itty + '</td><td>' + rc + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, sid, Itty, PictureID, rc) {
this.c = Color;
this.s = sid;
this.p = PictureID;
this.rc = rc;
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
window.top.InfoTip(IPath + Infos[v].p,Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].i + '</b><br>Spells: ' + Infos[v].rc;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhlibrarysp2.asp?CharsAt=' + Infos[v].s + '&SN=' + Infos[v].i  + '\');', 'View all spells from the ' + Infos[v].i + ' spell line', 'View');
}
