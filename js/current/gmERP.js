var CharID = CharID;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(pn, pv, ev) {
	if (pv == 0) {
		var Color = '#ff6666';
	} else {
		var Color = 'green'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pn, pv, ev);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15></td><td width=\'100%\'>' + pn + '</td><td>' + pv + '</td><td>' + ev + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pn, pv, ev) {
	this.c = Color;
	this.pv = pv;
	this.ev = ev;
	this.pn = pn;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].pn;
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=editform name=editform style=\'margin: 0px;\' action=\'/gm/gmERP.asp\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].pn + '\'><input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Value: <input name=PropertyValue value=\'' + Infos[v].pv + '\'><br>Evolve Value: <input name=EvolveValue value=\'' + Infos[v].ev + '\'><br>' + Adr('getObj(\'editform\').submit();', 'Save', 'Save') + '</form>';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].pn + ' = ' + Infos[v].pv);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}