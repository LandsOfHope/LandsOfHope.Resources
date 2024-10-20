var CharID = CharID;
var IPath = window.top.FHIPR;
var Infos = new Array();
var IC = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(pn, pv, skillid, limit) {
	if (pv <= 0) {
		var Color = '#ff6666'
	} else {
		var Color = 'green'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pn, pv, skillid, limit);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + pn + '</td><td>' + pv + '/' + limit + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pn, pv, skillid, limit) {
	this.c = Color;
	this.l = limit;
	this.s = skillid;
	this.pv = pv;
	this.pn = pn;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].pn + ' (' + Infos[v].s + ')';
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' action=\'/gm/gmEBS.asp\' style=\'margin: 0px;\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].s + '\'>' + (Infos[v].s == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Value: <input name=PropertyValue value=\'' + Infos[v].pv + '\'><br>Limit: <input name=Limit value=\'' + Infos[v].l + '\'><br>' + Adr('this.form.submit();', 'Save changes', 'Save') + '</form>';
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}