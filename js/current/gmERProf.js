var CharID = CharID;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(p, pn, ok) {
	if (ok == 0) {
		var Color = '#ff6666';
	} else {
		var Color = 'green'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, p, pn, ok);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15></td><td width=\'100%\'>' + pn + '</td><td>' + p + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, p, pn, ok) {
	this.c = Color;
	this.p = p;
	this.pn = pn;
	this.ok = ok;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].pn + ' (' + Infos[v].p + ')';
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=editform name=editform style=\'margin: 0px;\' action=\'/gm/gmERProf.asp\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].p + '\'>' + (Infos[v].ok == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Enabled: <input type=checkbox ' + (Infos[v].ok != 0 ? 'checked' : '') + ' name=Skillactive value=\'1\'><br>' + Adr('getObj(\'editform\').submit();', 'Save', 'Save') + '</form>';
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


function GoP(P) {
	window.location.replace('?P=' + P + '&CharsAt=' + CharID);
}