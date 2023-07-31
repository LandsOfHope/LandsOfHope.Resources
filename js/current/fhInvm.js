var PageNo = PageNo;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>' + (Infos[v].g == 0 ? 'Unread' : 'Read - ' + GetRealm(Infos[v].g)) + '<br>Level: ' + Infos[v].l + '<br>Quantity: ' + Infos[v].q;
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhuse.asp?ItemTypeID=1&InventoryItemID=' + Infos[v].v + '\')};', 'Read', 'Read');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t)
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AvC(Color, v, PictureID, Itty, q, l, g) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, q, l, g);
	// g=' + g + ' v=' + v + ' l=' + l + ' q=' + q + ' p="' + PictureID + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="315" style="color: ' + Color + '; padding-left: 5px">' + Itty + (q > 1 ? ' * ' + q : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, q, l, g) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
	this.q = q;
	this.g = g;
	this.l = l;
}

function GoP(P) {
	window.location.replace('?P=' + P);
}