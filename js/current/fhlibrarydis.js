var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(v, PictureID, dn, s, rnp, Itty, sv) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, dn, s, rnp, Itty, sv);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'230\' style="color: ' + Color + '; padding-left: 5px;">' + dn + '</td><td width=100>' + sv + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, dn, s, rnp, Itty, sv) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.sv = sv;
	this.i = Itty;
	this.dn = dn;
	this.rnp = rnp;
	this.s = s;
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
	return '<b>' + Infos[v].dn + '</b><Br>Sex: ' + Infos[v].s + '<br>Skill Value: ' + Infos[v].sv + '<br>Race/Profession: ' + Infos[v].rnp + '<br>Effect: ' + Infos[v].i;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'Mz.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].dn + '\');', 'View disguise effect', 'Effect');
}
