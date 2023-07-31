
var Skill = Skill;
var SpellID = SpellID;
var IPath = window.top.FHIPS;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, Skill2, d) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (ItemID == SpellID) {
		Color = 'gold';
	} else {
		if (Skill2 <= Skill) { Color = '#66ff66' } else { Color = '#ff6666' }
	}
	PictureID = (PictureID == '' ? 'na' : PictureID) + '.png'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, Skill2, d);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + PictureID + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, Skill2, d) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.t = ItemName;
	this.d = d;
	this.s = Skill2;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Dungeon Mastery Skill: ' + Infos[v].s + '<br>Damage: ' + Infos[v].d;
	getObj('Pic').innerHTML = DrawImage2(IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p), 0, 0)
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' + Infos[v].v + '\');}', 'Set', 'Set') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=-' + Infos[v].v + '\');}', 'Set all traps in this dungeon', 'Global Set');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}