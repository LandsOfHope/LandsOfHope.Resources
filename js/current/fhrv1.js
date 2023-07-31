var Processing = 0;
var PageNo = PageNo;
var p = p;
var p2 = p2;
var IN = IN;
var Skill = Skill;
var IID = IID;
var ItemID = ItemID;
var strword = strword;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?InventoryItemID=' + IID + '&ItemID=' + ItemID + '&P=' + PageNo + '');
}

function AC(l, Itty) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, l, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (p2 == '' || p2 == '0' ? 'na.gif' : p2) + '"></td><td width="270" style="color: ' + Color + '; padding-left: 5px;">' + Itty + ' ' + IN + '</td><td>' + l + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, l, Itty) {
	this.c = Color;
	this.l = l;
	this.p = IPath + (p2 == '' || p2 == '0' ? 'na.gif' : p2);
	this.m = Itty;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(Infos[v].p, Infos[v].m);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].m + '</b><br>Material: ' + Infos[v].m + '<br>Level: ' + Infos[v].l + '<br>Skill: ' + (Infos[v].l * 5) + '<br>Maximum Capacity: ' + ((Math.floor(Skill / 50)) + 50);
	getObj('Pic').innerHTML = "<img src='" + IPath + (p == '' ? 'na.gif' : p) + "'><img src='" + IPath + (p2 == '' || p2 == '0' ? 'na.gif' : p2) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {confirm(\'Are you sure you wish to automate the production of ' + Infos[v].m + '\',' + v + ');}', 'Automate production', strword);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhr.asp?InventoryItemID=' + IID + '&Type=1&ItemID=' + ItemID + '&Material=' + Infos[pb].m + '&P=' + PageNo);

		}
	}

}