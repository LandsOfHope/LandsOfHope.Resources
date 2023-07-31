
var IC = 0;
var Infos = new Array();

var Skill = Skill;
var GoPage = GoPage;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPI;
var Processing = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, Skill2,ItemID) {
if (PictureID == '0') {PictureID = ''}
var Color = 'white'
if (Skill2 <= Skill) {Color = '#66ff66'} else {Color = '#ff6666'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, Skill2,ItemID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'250\'>' + ItemName + '</td><td width=\'50\'>' + Skill2 + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, Skill2,ItemID) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.t = ItemName;
this.s = Skill2;
}

function AC2(PictureID, ItemName) {
if (PictureID == '0') {PictureID = ''}
var Color = 'gold'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, 0, 0);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\' colspan=2>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	if (Infos[v].v == 0) {
		DC2(v);
	} else {
		DC1(v);
	}
}

function DC1(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Dungeon Mastery: ' + Infos[v].s;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Infos[v].v + '&P=' + GoPage + '\');}','Set','Set');
}

function DC2(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=-1&P=' + GoPage + '\');}', 'Remove','Remove') ;
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