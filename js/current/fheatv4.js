var Tick = 0;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var TickTimer = 0;
var IID = 0;
var IIL = 0
var IN = '';
var PN = '';
var PV = 0;
var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AVC(il, value, PictureID, t, Itty, pn, pv) {
var Color = LITE;
if (pv == '') {
	pv = 0;
} else {
	pv = Math.round(pv);
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, il, value, PictureID, t, Itty, pn, pv);
//value=' + value + ' pn="' + pn + '" pv=' + pv + ' il=' + il + ' t="' + t + '" p="' + PictureID + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, il, value, PictureID, t, Itty, pn, pv) {
this.c = Color;
this.value = value;
this.p = PictureID;
this.i = Itty;
this.pn = pn;
this.pv = pv;
this.il = il;
this.t = t;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
function DC(v) {
	if (Processing == 0) {
		getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].il + '<Br>' + (Infos[v].pn != '' ? 'Consume Effect: ' + Infos[v].pv + ' ' + Infos[v].pn + '<br>Savor Effect: ' + (Infos[v].pv * 5) + ' ' + Infos[v].pn + '' : '');
		getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
		IID = Infos[v].value;
		PN = Infos[v].pn;
		IIL = Infos[v].il;
		PV = Infos[v].pv;
		IN = Infos[v].i;
		getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].value + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'?InventoryItemID=' + Infos[v].value + '&il=' + Infos[v].il + '&ItemID=1&Tick=1&CharsAt=' + CharsAt + '&PN=' + PN + '\');}" style=\'width: 65\'>Consume</button>' + (Infos[v].pn != '' ? '<' + strClicky2 + ' onclick="if (Processing == 0) {TickOn()}" style=\'width: 65\'>Savor</button>' : '');
	}
}

function GoP(p) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + p);
}

function TickOn() {
	Processing = 1;
	TickUpdate();
	TickTimer = window.setInterval("TickUpdate()", 2000);
}

function TickOff() {
	if (TickTimer != 0) {
		Processing == 0;
		window.clearInterval(TickTimer);
	}
}

function TickUpdate() {
	Tick = Tick + 1;
	getObj('Stuff2').innerHTML = '<b>' + IN + '</b><br>Effect: ' + PV + ' ' + PN + '<br><b>Tick ' + Tick + ' of 5</b><br>Total Effect: ' + (Math.abs(PV) * Tick) + ' ' + PN ;
	getObj('Buttons').innerHTML = '<' + strClicky2 + ' onclick="TickDone();" style=\'width: 65\'>Stop</button>';
	if (Tick >= 5) {
		TickDone();
	}
}

function TickDone() {
	TickOff();
	window.location.replace('?InventoryItemID=' + IID + '&il=' + IIL + '&ItemID=1&Tick=' + Tick + '&PN=' + PN + '&CharsAt=' + CharsAt);
}