var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Typez = Typez;
var IPath = window.top.FHIPR;
var strsel = strsel;
var Types = Types;
var OldName = OldName;
var NewName = NewName;

var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?Type=' + Typez + '&Sex=' + Types + '&P=' + PageNo + '');
}

function AC(v, PictureID, n, dn, s, rnp, Itty, sv, sid, db) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, n, dn, s, rnp, Itty, sv, sid, db);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\'>' + n + ' the ' + dn + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, n, dn, s, rnp, Itty, sv, sid, db) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = Itty;
	this.sid = sid;
	this.db = db;
	this.sv = sv;
	this.n = n;
	this.dn = dn;
	this.rnp = rnp;
	this.s = s;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].n + ' ' + Infos[v].dn + '</b><br>Disguise: ' + Infos[v].sv);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Zg(valin) {
	window.location.replace('?Type=' + Typez + '&Sex=' + valin + '');
}

function DC(v) {
	getObj('Logo').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Info').innerHTML = '<b>' + Infos[v].n + ' the ' + Infos[v].dn + '</b><br>Sex: ' + Infos[v].s + '<br>Disguises as <b>' + Infos[v].rnp + '</b><br>Bonus Effect: ' + Infos[v].i + '<br>' + Infos[v].db;
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.top.FHIPP = \'' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '\'; window.location.replace(\'?Type=' + Typez + '&ID=' + Infos[v].v + '&Sex=' + Types + '&P=' + PageNo + '&NewName=' + NewName + '\');}', 'Full Disguise', 'Full') + Adr('if (Processing == 0) {Processing = 1; this.disabled = true; window.location.replace(\'?Type=' + Typez + '&P=' + PageNo + '&ID=' + Infos[v].v + '&Sex=' + Types + '&NewName=' + OldName + '\');}', 'Partial disguise', 'Partial');

}
