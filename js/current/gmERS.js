var CharID = CharID;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(pn, pv, skillid, sa) {
if (sa == 0) {
	var Color = '#ff6666';
} else {
	var Color = 'green'
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, pn, pv, skillid, sa);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15></td><td width=\'100%\'>' + pn + '</td><td>' + pv + '</td><td>' + sa + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, pn, pv, skillid, sa) {
this.c = Color;
this.pv = pv;
this.pn = pn;
this.sa = sa;
this.s = skillid;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].pn + ' (' + Infos[v].s + ')';
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=editform name=editform style=\'margin: 0px;\' action=\'gmERS.asp\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].s + '\'>' + (Infos[v].s == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Value: <input name=PropertyValue value=\'' + Infos[v].pv + '\'><br>Active: <input type=checkbox ' + (Infos[v].sa != 0 ? 'checked' : '') + ' name=Skillactive value=\'1\'><br>' + Adr('getObj(\'editform\').submit();','Save','Save') + '</form>';
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('',Infos[v].pn + ' = ' + Infos[v].pv);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}