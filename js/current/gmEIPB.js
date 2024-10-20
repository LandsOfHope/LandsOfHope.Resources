
var Type2 = Type2;
var Mask = Mask;
var CharacterName = CharacterName;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ip, lu, nt) {
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ip, lu, nt);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ip + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ip, lu, nt) {
	this.c = Color;
	this.i = ip;
	this.ip = ip;
	this.l = lu;
	this.n = nt;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].ip + '</b><br>Added: ' + Infos[v].l + '<br>Note: ' + Infos[v].n;
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'/gm/gmEA.asp?Mask=' + Infos[v].i + '\');', 'Accounts', 'Accounts') + Adr('window.location.replace(\'/gm/gmEIPB.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].i + '&Action=1&Name=\');', 'Remove IP Ban', 'Remove');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].ip);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}