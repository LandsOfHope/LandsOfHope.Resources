var Mask = Mask;
var PageNo = PageNo;
var IPath = window.top.FHIPB;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var LastV = -1;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Mask=' + Mask +'');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GS(in3, in2) {
	if (Processing == 0) {
		Processing = 1;
		window.top.Interface.location.replace('fhstargate2.asp?CharsAt=' + in2 + '&P=' + PageNo + '&Type=' + in3 + '&Mask=' + Mask)
	}
}

function DC(v) {
	LastV = v;

	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Rooms: ' + Infos[v].r + '<br>Location: ' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealm(Infos[v].g) + '<br>' + (Infos[v].a != 0 ? 'You own this ' : 'You manage this ' ) +  'Building';
	getObj("Buttons").innerHTML = Adr("GS(1, " + Infos[v].v + ");","Select building", "Select","Select");
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function AB(PictureID, ItemName, ItemID, Color, x, y, v, g, c, f, d, hd, r, ls) {
if (PictureID == '0') {PictureID = ''}
if (d != 0) {
	Color = '#ff6666'
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(PictureID, ItemName, ItemID, Color, x, y, v, g, c, f, d, hd, r, ls);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=40><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=40 height=40></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;"><b>' + ItemName + '</b><br>Location: ' + x + ', ' + y + ' ' + GetRealm(g) + '</td></tr>');
IC = IC + 1;
}

function newInfo(PictureID, ItemName, ItemID, Color, x, y, v, g, c, f, d, hd, r, ls) {
this.color = Color;
this.i = ItemName;
this.v = ItemID;
this.p = PictureID;
this.ls = ls;
this.r = r;
this.z = v;
this.hd = hd;
this.d = d;
this.f = f;
this.a = c;
this.g = g;
this.x = x;
this.y = y;
}

