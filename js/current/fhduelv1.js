var Skill = Skill;
var IPath = window.top.FHIPR;
var Processing = 0;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(Color, ItemID, PictureID, pn, l, Itty) {
if (PictureID == '0') {PictureID = ''}
var s = Math.round(l * 5) - 10;
if (s <= 0) {
	s = 1;
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, PictureID, pn, l, Itty, s);
// l=' + l + ' s=' + s + ' pn="' + pn + '" v=' + ItemID + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'250\' style="color: ' +  Color + '; padding-left: 5px">' + Itty + '</td><td width=\'50\'>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, ItemID, PictureID, pn, l, Itty, s) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.i = Itty;
this.s = s;
this.pn = pn;
this.l = l;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Profession: ' + Infos[v].pn + '<br>Level: ' + Infos[v].l;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Processing == 0 ? Adr('if (Processing == 0) {this.disabled = true; Processing = 1; window.location.replace(\'fhpref.asp?CharsAt=' +Infos[v].v + '&D=1\')};', 'Start a standard duel', 'Standard Duel') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhduel2.asp?CharsAt=' +Infos[v].v + '\')};', 'Initiate a staked duel', 'Staked Duel') :'');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '' + '<b>' + Infos[v].i + '</b><br>Profession: ' + Infos[v].pn + '<br>Level: ' + Infos[v].l  + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}