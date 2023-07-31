var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPB;
var Processing = 0;
var PageNo = PageNo;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(z, PictureID, v, g, x, y, oz, ox, oy, Itty) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, PictureID, v, g, x, y, oz, ox, oy, Itty);
	// z=' + z + ' v=' + v + ' ox=' + ox + ' oy=' + oy + ' oz=' + oz + '
	// g=' + g+ ' x=' + x + ' y='+ y +' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td><td>' + v + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, PictureID, v, g, x, y, oz, ox, oy, Itty) {
	this.c = Color;
	this.z = z;
	this.p = PictureID;
	this.i = Itty;
	this.v = v;
	this.ox = ox;
	this.oy = oy;
	this.oz = oz;
	this.g = g;
	this.x = x;
	this.y = y;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo);
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Items in Storage:' + Infos[v].v + '<br>Building: ' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealm(Infos[v].g) + '<br>Room Location: Floor ' + Infos[v].oz + ' at ' + Infos[v].ox + ', ' + Infos[v].oy;
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fh.asp?Redraw=1&y=' + Infos[v].y + '&x=' + Infos[v].x + '&MapNum=' + Infos[v].g + '\');}', 'Go to this location', 'Go To') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhstor2.asp?I=' + Infos[v].z + '\');}', 'View Inventory', 'Inventory');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
}
