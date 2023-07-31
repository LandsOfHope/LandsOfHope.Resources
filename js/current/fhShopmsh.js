var Processing = 0;
var CharsAt = CharsAt;
var SL = SL;
var SN = SN;
var PageNo = PageNo;
var EL = EL;
var SP = SP;
var EP = EP;
var Level = Level;
var Infos = new Array();
var IC = 0;
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function fx1() {
var re = /^\$|,|'|"|%|@|#/g;

getObj('SN').value = getObj('SN').value.replace(re, "");
if (getObj('SN').value == '' || getObj('SN').value == null) {
	getObj('SN').value = 0;
	}
}

function Tipz(v) {
	return '<b>' + Infos[v].et + '</b><br>Level: ' + Infos[v].l1 + ' to ' + Infos[v].l2 + '<br>Cost: ' +  window.top.BSGM(Infos[v].g1) + ' to ' +  window.top.BSGM(Infos[v].g2) + '<br>Quantity: ' + Infos[v].c;

}

function ShowSearch(strword) {
	var strTest = '';


	strTest = strTest + '<table class=\'weakcell\' cellpadding=0 cellspacing=0><input type=hidden id=CharsAt name=CharsAt value=\'' + CharsAt + '\'><tr><td>' + strword + ':</td><td><INPUT TYPE=text ID=SN NAME=SN VALUE=\'' + SN + '\' ONBLUR=\'fx1()\' TITLE=\'The ' + strword + ' to look for.\' AUTOCOMPLETE=\'\'></td><td></td><td></td><td>Min Level:</td><td><input title=\'The minimum material level to find.\' id=SL name=SL value=\'' + SL + '\' size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>Max Level:</td><td><input title=\'The maximum material level to find.\' name=EL value=\'' + EL + '\' id=EL size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>';
	strTest = strTest + '<tr><td colspan=8><table class=\'weakcell\' cellpadding=0 cellspacing=0><tr><td>Min Price:</td><td colspan=2><input id=SP name=SP value=\'' + SP + '\' type=hidden>' + FormMoney('SP', SP) + '</td><td>to</td><td colspan=2><input id=EP name=EP value=\'' + EP + '\' type=hidden>' +FormMoney('EP', EP) + '</td></tr></table></td></tr>';
	strTest = strTest + '<tr><td colspan=8>';

	var strButtons = new Array()
	strButtons[0] = '' + Adr('if (Processing == 0) {Processing = 1;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}','Shop search', 'Shop');
	strTest = strTest + strButtons[0];
	strTest = strTest + '</td></tr></table>';
	document.write(strTest);
}

function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&SP=' + SP + '&EP=' + EP + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', Tipz(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AM(et, eid, g1, g2, l1, l2, c) {
var Color = 'white';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, et, eid, g1, g2, l1, l2, c);

v = IC;
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td></td><td width="215" style="color: ' + Color + '; padding-left: 5px">' + et + '</td><td width=80>' + l1 + ' - ' + l2 + '</td><td width=60>' + c + '</td><td width=215>' + window.top.BSGM(g1) + ' to ' + window.top.BSGM(g2) + '</td><td width="32px">' + Adir('if (Processing == 0) {Processing = 1; window.location.replace(\"fhshopm.asp?MT=' + Infos[v].v + '&EP=' + EP + '&SP=' + SP + '&P=' + PageNo + '&SN=' + SN + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '\");}','View goods','magnifier', '')  + '</td></tr>');

IC = IC + 1;
}

function newInfo(Color, et, eid, g1, g2, l1, l2, c) {
this.c = c;
this.g1 = g1;
this.g2 = g2;
this.l1 = l1;
this.l2 = l2;
this.v = eid;
this.et = et;
}

