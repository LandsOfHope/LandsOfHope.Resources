var CharID = CharID;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(pn, pv, pmv, skillid, sa) {
	if (sa == 0) {
		var Color = '#ff6666';
	} else {
		var Color = 'green'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pn, pv, pmv, skillid, sa);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15></td><td width=\'100%\'>' + pn + '</td><td>' + pv + '</td><td>' + pmv + '</td><td>' + sa + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pn, pv, pmv, skillid, sa) {
	this.c = Color;
	this.pn = pn;
	this.pv = pv;
	this.sa = sa;
	this.s = skillid;
	this.pmv = pmv;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].pn + ' (' + Infos[v].s + ')';
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=skillform name=skillform style=\'margin: 0px;\' action=\'/gm/gmEVS.asp\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].s + '\'>' + (Infos[v].s == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Value: <input name=PropertyValue size=3 maxlength=3 value=\'' + Infos[v].pv + '\'>Max: <input name=PropertyMaxValue size=3 maxlength=3 value=\'' + Infos[v].pmv + '\'><br>Active: <input type=checkbox ' + (Infos[v].sa != 0 ? 'checked' : '') + ' name=Skillactive value=\'1\'>' + Adr('getObj(\'skillform\').submit();', 'Save', 'Save') + '</form>';
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].pn);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
