var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function APN(n, v) {
	var Color = (v == 0 ? 'white' : 'gold');
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(n, v, Color);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px">' + n + '</td><td width=75>' + v + '</td></tr>');
	IC = IC + 1;
}

function newInfo(n, v, Color) {
	this.c = Color;
	this.n = n;
	this.v = v;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].n;
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=statform name=statform action=\'/gm/gmECP.asp\' style=\'margin: 0px;\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].n + '\'>' + (Math.round(Infos[v].v) == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharsAt + '\'><input name=PropertyValue value=\'' + Infos[v].v + '\'>' + Adr('getObj(\'statform\').submit();', 'Set stat', 'Set') + '</form>';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].n + ' = ' + Infos[v].v);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}