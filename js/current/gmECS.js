var CharID = CharID;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(pn, pv, skillid, limit, sa, bv) {
	if (sa == 0) {
		var Color = '#ff6666';
	} else {
		var Color = 'green'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(pn, pv, skillid, limit, sa, bv, Color);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + pn + '</td><td>' + pv + '/' + limit + '</td><td>' + sa + '</td></tr>');
	IC = IC + 1;
}

function newInfo(pn, pv, skillid, limit, sa, bv, Color) {
	this.c = Color;
	this.sa = sa;
	this.bv = bv;
	this.l = limit;
	this.s = skillid;
	this.pv = pv;
	this.pn = pn;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].pn + ' (' + Infos[v].s + ')';
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=statform name=statform action=\'gmECS.asp\' style=\'margin: 0px;\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].s + '\'>' + (Infos[v].s == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Value: <input name=PropertyValue value=\'' + Infos[v].pv + '\'><br>Bonus Value: <input name=BonusValue value=\'' + Infos[v].bv + '\'><br>Limit: <input name=Limit value=\'' + Infos[v].l + '\'><br>Active: <input type=checkbox ' + (Infos[v].sa != 0 ? 'checked' : '') + ' name=Skillactive value=\'1\'><br>' + Adr('getObj(\'statform\').submit();', 'Set stat', 'Set') + '</form>';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].pn + ' = ' + Infos[v].pv + '/' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}