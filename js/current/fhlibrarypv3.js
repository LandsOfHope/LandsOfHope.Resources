var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIP + 'pi/';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(pid, rc, Itty, PictureID, bx, m, b, pa) {
	var Color = '#ff6666';
	if (m == 0) {
		Color = 'gold';
	}

	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pid, rc, Itty, PictureID, bx, m, b, pa);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color:' + Color + '">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pid, rc, Itty, PictureID, bx, m, b, pa) {
	this.c = Color;
	this.r = pid;
	this.p = PictureID;
	this.pa = pa;
	this.b = b;
	this.m = m;
	this.rc = rc;
	this.i = Itty;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].i + '</b><br>' + (Math.abs(Infos[v].m) == 0 ? 'Playable Profession' : 'Monster Profession') + '<br>' + (Math.abs(Infos[v].b) != 0 ? 'Breedable' : 'Not Breedable') + (Math.abs(Infos[v].pa) == 0 ? '<br>Can not Wear Armor/Clothing' : '<br>Armor: <b>' + (Math.abs(Infos[v].pa) == 1 ? 'Cloth' : (Math.abs(Infos[v].pa) == 2 ? 'Leather' : (Math.abs(Infos[v].pa) == 3 ? 'Mail' : 'Plate'))) + '</b>');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.open(\'https://guide.landsofhope.com/Professions/' + Infos[v].i + '.htm\',\'null\',\'\');', 'View more information on ' + Infos[v].i, 'View');
}
