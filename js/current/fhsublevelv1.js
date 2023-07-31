var pn = '';
var pv = 0;
var Processing = 0;
var SubLevelPoints = SubLevelPoints;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var LastV = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(pn, pv, bv, pd) {
	var PictureID = 'na.gif';
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pn, pv, bv, pd);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + pn + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pn, pv, bv, pd) {
	this.c = Color;
	this.pd = pd;
	this.pn = pn;
	this.bv = bv;
	this.pv = pv;
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

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].pn + '</b><br>Property Value: ' + Infos[v].pv + ' (' + Infos[v].bv + ')<br>Points to Spend: ' + SubLevelPoints + '<br>' + Infos[v].pd;
	getObj('Buttons').innerHTML = '<input type=hidden name=stat value="' + Infos[v].pn + '">' + (Infos[v].pn == 'RUBY TICKET' ? '<input type=hidden name=points id=points value=100>' : 'Points to spend:<input name=points id=points value=0 size=4 maxlength=3 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\' onblur="UpdateResult(' + v + ')">');
	getObj('Buttons3').innerHTML = Adr('if (Processing == 0) {confirm(\'Are you sure you wish to spend \' + getObj(\'points\').value + \' points?\',' + v + ');}', 'Spend', 'Spend');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			getObj('sublevel').submit();
		}
	}
}

function UpdateResult(v) {
	getObj('Buttons2').innerHTML = '' + Infos[LastV].pn + ': ' + (Math.round(Infos[LastV].pv) + Math.round(getObj('points').value));
}