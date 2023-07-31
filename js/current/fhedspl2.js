
var Skill = Skill;
var IC = 0;
var Infos = new Array();
var GoPage = GoPage;
var GoPage2 = GoPage2;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var Processing = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, sn, ItemName, ItemID, Skill2, pid) {
if (PictureID == '0') {PictureID = ''}
var Color = 'white'
if (pid != 0) {
	Color = 'gold';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, sn, ItemName, ItemID, Skill2, pid);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" c="' + Color + '" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, sn, ItemName, ItemID, Skill2, pid) {
this.c = Color;
this.pid = pid;
this.p = PictureID;
this.t = ItemName;
this.sn = sn;
this.v = ItemID;
this.s = Skill2;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&P2=' + GoPage2 + '&CharsAt=' + CharsAt);
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Race: ' + Infos[v].sn + '<br>Dungeon Mastery Skill: ' + Infos[v].s;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].pid == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Infos[v].v + '&P2=' + GoPage2 + '&CharsAt=' + CharsAt + '&P=' + GoPage + '\');}', 'Add','Add') :  Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=-' +Infos[v].v + '&P2=' + GoPage2 + '&CharsAt=' + CharsAt + '&P=' + GoPage + '\');}', 'Remove','Remove'));
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}