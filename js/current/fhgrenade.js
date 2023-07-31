
var Skill = Skill;
var PageNo = PageNo;
var IPath = window.top.FHIPS;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, Skill2, d) {
	if (PictureID == '0') { PictureID = '' }
	var Color = 'white'
	if (Skill2 <= Skill) { var Color = '#66ff66' } else { var Color = '#ff6666' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, Skill2, d);

	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na' : PictureID) + '.png\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, Skill2, d) {
	this.c = Color;
	this.t = ItemName;
	this.p = PictureID + '.png';
	this.v = ItemID;
	this.s = Skill2;
	this.d = d;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Heavy Munitions Skill: ' + Infos[v].s + '<br>Damage: ' + Infos[v].d;
	getObj('Pic').style.backgroundColor = Infos[v].c;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; window.top.PGS(\'drop.wav\'); window.location.replace(\'?CharsAt2=' + Infos[v].v + '&aok=' + Infos[v].s + '&P=' + PageNo + '\'); this.disabled=true;}" style=\'width: 85\'>Make</button>';
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}