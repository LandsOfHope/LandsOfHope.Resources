var ItemID = ItemID;
var CharsAt = CharsAt;
var PageNo = PageNo;
var Processing = 0;
var Effect = Effect;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, e) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, e);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, e) {
	this.c = Color;
	this.e = e;
	this.p = PictureID;
	this.i = Itty;
	this.v = v;
}


function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&ItemID=' + ItemID + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') + (Processing == 0 ? (Math.abs(Infos[v].e) != 0 ? '' : '') + (ItemID != 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhinvaugment.asp?CharsAt=' + Infos[v].v + '&ItemID=' + ItemID + '&P=' + PageNo + '\')};', 'Augment', 'Augment') : '') : '');
}
