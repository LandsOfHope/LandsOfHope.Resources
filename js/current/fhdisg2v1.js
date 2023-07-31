var PageNo = PageNo;
var Typez = Typez;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?Type=' + Typez + '&P=' + PageNo + '');
}

function AC(Itty) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=\'300\'>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Itty) {
	this.c = Color;
	this.i = Itty;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Info').innerHTML = '<b>' + Infos[v].i + '</b>';
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Type=' + Typez + '&ID=1&P=' + PageNo + '&NewName=' + Infos[v].i + '\');};', 'Use', 'Use');

}
