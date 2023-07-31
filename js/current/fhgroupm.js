
var ItemID = ItemID;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].l + (Infos[v].b != null && Infos[v].b != 0 ? '<br>Accepted Member' : '<br>Un-accepted Member') + '<br>Allegiance: ' + GetAName(Infos[v].a);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('Processing = 1; window.location.replace(\'fhmess.asp?CharsAt=-' + Infos[v].z + '\');','Send message', 'Message');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', '' + Infos[v].i + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function SMM(a, Color, z, v,b, PictureID, Named, l) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(a, Color, PictureID, v, b, l, Named, z);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td>');
IC = IC + 1;
}

function newInfo(a, Color, PictureID, v, b, l, Named, z) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Named;
this.b = b;
this.a = a;
this.l = l;
this.z = z;
}