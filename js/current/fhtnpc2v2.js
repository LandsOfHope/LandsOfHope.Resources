var MapID = MapID;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, s, t, l, b, g) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, s, t, l, b, g);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, s, t, l, b, g) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.i = ItemName;
	this.s = s;
	this.g = g;
	this.t = t;
	this.l = l;
	this.b = b;



}

function DC(v) {
	getObj('Stuff2').innerHTML = "<input type='hidden' name=MapID value='" + MapID + "'><b>" + Infos[v].i + "</b><br>Sex: " + Infos[v].s + "<br>Title: " + Infos[v].t + "<br>Location: " + Infos[v].l + " " + GetRealm(Infos[v].g) + "<br>" + (Math.round(Infos[v].b) != 0 ? "Inside a Building" : "Outside a Building") + "<input type='hidden' name=IID value='" + Infos[v].v + "'>";
	getObj('Butt').innerHTML = Adr('getObj(\'editform\').submit();', 'Move', 'Move');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&MapID=' + MapID);
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