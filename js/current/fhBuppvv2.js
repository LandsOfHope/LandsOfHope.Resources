
var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].rn + ' ' + Infos[v].s + '</b><br>Race: ' + Infos[v].rn + '<br>Prof: ' + Infos[v].n + '<br>Level: ' + Infos[v].l + '<br>Item Limit: ' + Infos[v].vil + '<br>Cost: ' + window.top.BSGM(Infos[v].z);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'?CharsAt=' + CharsAt + '&ItemID=' + Infos[v].v + '&P=' + PageNo + '\');', 'Hire this vendor', 'Hire');
}

function AC(v, r, z, rn, l, PictureID, s, vil) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, r, z, rn, l, PictureID, s, vil);
	//v=' + v + ' r=' + r + ' z=' + z + ' vil=' + vil + ' l='+ l + ' s="' + s + '" rn="' + rn + '" n="Player Vendor"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'175px\' style="color: ' + Color + '; padding-left: 5px;">' + rn + '</td><td width=60>' + s + '</td><td width=50>' + vil + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, r, z, rn, l, PictureID, s, vil) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.r = r;
	this.z = z;
	this.vil = vil;
	this.l = l;
	this.s = s;
	this.rn = rn;
	this.n = 'Player Vendor';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].rn + ' ' + Infos[v].s + ', ' + window.top.BSGM2(Infos[v].z));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}