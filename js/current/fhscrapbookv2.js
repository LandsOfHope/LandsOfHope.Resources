var PageNo = PageNo;
var Processing = 0;

var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
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


function AM(Color, z, ud, Itty) {
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td style="padding-left: 5px; color: ' + Color + ';"><b>' + Itty + '</b></td></tr>');
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, ud, Itty);
	IC = IC + 1;
}

function newInfo(Color, z, ud, Itty) {
	this.c = Color;
	this.z = z;
	this.ud = ud;
	this.t = Itty;
}

function DC(v) {
	getObj("UN").value = Infos[v].t;
	tinyMCE.get('UD').setContent(Infos[v].ud);
	getObj('Buttons2').innerHTML = Adr('if (Processing == 0) {Processing = 1; getObj(\'CharsAt\').value = ' + Infos[v].z + '; getObj(\'UD\').value = tinyMCE.get(\'UD\').getContent();getObj(\'scrapform\').submit();};', 'Save changes', 'Save') + Adr('if (Processing == 0) {Processing = 1; getObj(\'CharsAt\').value = -' + Infos[v].z + ';getObj(\'scrapform\').submit()};', 'Delete Scrapbook', 'Delete') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhscrape.asp?MT=' + Infos[v].z + '\')};', 'Edit Entries', 'Edit Entries');
}
