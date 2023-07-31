var IC = 0;
var Infos = new Array();
var Skill = Skill;
var IPath = window.top.FHIP;
var Processing = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(i, PictureID, ItemName, ItemID, Level, Skill2, sc) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Skill2 <= Skill) {Color = '#66ff66'} else {Color = '#ff6666'}
if (Skill2 == 0) {Color = 'gold'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, i, PictureID, ItemName, ItemID, Level, Skill2, sc,'', '', 0);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'i/na.gif' : (PictureID.indexOf('.') != -1 ? 'i' + '/' + PictureID : 's' + '/' + PictureID + '.gif')) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, i, PictureID, ItemName, ItemID, Level, Skill2, sc, Material, Material2, rc) {
this.c = Color;
this.i = i;
this.p = PictureID;
this.n = ItemName;
this.v = ItemID;
this.sc = sc;
this.s = Skill2;
this.l = Level;
this.t = Material2;
this.m = Material;
this.r = rc;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function AC2(i, PictureID, ItemName, ItemID, Material, Material2, rc) {
if (PictureID == '0') {PictureID = ''}
var Color = 'gold'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, i, PictureID, ItemName, ItemID, 0, 0, 0, Material, Material2, rc);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'i/na.gif' : (PictureID.indexOf('.') != -1 ? 'i' + '/' + PictureID : 's' + '/' + PictureID + '.gif')) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function DC(v) {
	if (Infos[v].s == 0 && Infos[v].l ==0)  {
		var mod = Math.floor(Skill / 500);
		var Chance = Infos[v].r
		getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Material: ' + (Infos[v].m == '' ? '[random]' : '' + Infos[v].m) + '<br>Drop Chance: ' + Chance + '%<br>';
	} else {
		var Chance = Infos[v].sc;
		getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Level: ' + Infos[v].l + '<br>Dungeon Mastery Skill: ' + Infos[v].s  + '<br>Drop Chance: ' + Chance + '%<br>';
	}
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'i/na.gif' : (Infos[v].p.indexOf(".") != -1 ? "i"+ "/" + Infos[v].p : "s"+ "/" + Infos[v].p + ".gif")) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].c !='gold' ? Adr('window.location.replace(\'?CharsAt2=' + Infos[v].v + '\');','Add','Add') : Adr('window.location.replace(\'?CharsAt2=-' + Infos[v].v + '\');','Delete','Delete')) + Adr('PopupItemInfo(' + -Infos[v].i + ',\'' + Infos[v].n + '\');','Info','Info');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == null ? 'i/na.gif' : (Infos[v].p.indexOf(".") != -1 ? "i"+ "/" + Infos[v].p : "s"+ "/" + Infos[v].p + ".gif")),Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}