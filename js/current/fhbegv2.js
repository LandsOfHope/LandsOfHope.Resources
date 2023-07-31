var Skill = Skill;
var IPath = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(Color, ItemID, PictureID, pn, l, Itty, b) {
	if (PictureID == '0') { PictureID = '' }
	var s = Math.round(l * 5) - 10;
	if (s <= 0) {
		s = 1;
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, PictureID, pn, l, Itty, b, s);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'250\'>' + Itty + '</td><td width=\'50\'>' + (b == 0 ? '<b>Empty</b>' : window.top.BSGM(b)) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, PictureID, pn, l, Itty, b, s) {
	this.c = Color;
	this.l = l;
	this.p = PictureID;
	this.t = Itty;
	this.b = b;
	this.s = s;
	this.pn = pn;
	this.v = ItemID;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Profession: ' + Infos[v].pn + '<br>Level: ' + Infos[v].l + '<br>Beggars Purse: ' + (Infos[v].b == 0 ? '<b>Empty</b>' : window.top.BSGM(Infos[v].b)) + '<br>Begging required: ' + Infos[v].s + '/' + (Skill < Math.round(Infos[v].s) ? '<font id=tred>' + Skill + '</font>' : Skill);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Processing == 0 && Infos[v].s <= Skill && Math.round(Infos[v].b >= 0) ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + Infos[v].v + '&L=' + Infos[v].l + '&B=' + Infos[v].b + '\');}', 'Beg', 'Beg') : '') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhpref.asp?CharsAt=' + Infos[v].v + '\')};', 'Fight Victim', 'Fight');
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t + '<br>Profession: ' + Infos[v].pn + '<br>Level: ' + Infos[v].l + '<br>Purse: ' + (Infos[v].b == 0 ? '<b>Empty</b>' : window.top.BSGM(Infos[v].b)) + '<br>Begging: ' + Infos[v].s + '/' + (Skill < Math.round(Infos[v].s) ? '<font id=tred>' + Skill + '</font>' : Skill) + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}