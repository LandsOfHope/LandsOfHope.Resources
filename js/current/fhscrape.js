
var SN = SN;
var PageNo = PageNo;
var MT = MT;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?MT=' + MT + '&P=' + PageNo + '');
}

function GoUp(z) {
	window.location.replace('?CharsAt=' + z + '&Location=-1&MT=' + MT + '&P=' + PageNo + '');
}

function GoDn(z) {
	window.location.replace('?CharsAt=' + z + '&Location=1&MT=' + MT + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AM(Color, z, ud, Itty, u, o, st) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, ud, Itty, u, o, st);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td style="padding-left: 5px; color:' + Color + ';"><b>' + Itty + '</b></td><td align=center colspan=3 class="btn" onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoUp(' + z + ')"><img src="' + OPath + 'up.png"></td><td width=30>' + o + '</td><td align=center colspan=3 class="btn" onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" onclick="GoDn(' + z + ')"><img src="' + OPath + 'dn.png"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, ud, Itty, u, o, st) {
	this.c = Color;
	this.z = z;
	this.ud = ud;
	this.t = Itty;
	this.u = u;
	this.o = o;
	this.st = st;
}

function DC(v) {
	getObj("SN").value = Infos[v].u;
	getObj("UN").value = Infos[v].t;
	tinyMCE.get('UD').setContent(Infos[v].ud);
	getObj('Buttons2').innerHTML = Adr('if (Processing == 0) {Processing = 1; getObj(\'CharsAt\').value = -' + Infos[v].z + '; getObj(\'scrapform\').submit()};', 'Edit Entry', 'Edit') + Adr('if (Processing == 0) {Processing = 1; getObj(\'SN\').value = \'\';getObj(\'CharsAt\').value = -' + Infos[v].z + ';getObj(\'scrapform\').submit()};', 'Delete Entry', 'Delete');
}
