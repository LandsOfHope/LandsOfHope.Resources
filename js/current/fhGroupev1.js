var IC = 0;
var Infos = new Array();
var ItemID = ItemID;
var CharacterID = CharacterID;
var Processing = 0;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GS(how, stuff) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('FHGroupe.asp?Type=' + how + '&CharsAt=' + ItemID + '&CharsAt2=' + stuff + '');
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].l + (Infos[v].b != null && Infos[v].b != 0 ? '<br>Accepted Member' : '<br>Un-accepted Member') + (Infos[v].a != 0 ? '<br>Allegiance: ' + GetAName(Infos[v].a) : '') + '<br>' + (Infos[v].la <= 15 ? 'Online' : 'Last Active: ' + getdhm(Infos[v].la) + ' ago');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Processing == 0 ? ((Infos[v].b == null || Infos[v].b ==0) && Infos[v].z != CharacterID ? Adr('GS(1, ' + Infos[v].v + ');', 'Accept to fellowship', 'Accept') : (Infos[v].z != CharacterID ? Adr('GS(2, ' + Infos[v].v + ')', 'Reject', 'Reject') : '')) + (Math.abs(Infos[v].z) != CharacterID ? Adr('GS(3, ' + Infos[v].v + ');','Kick from fellowship', 'Kick') : '') + Adr('Processing = 1; window.location.replace(\'fhmess.asp?CharsAt=-' + Infos[v].z + '\');','Send message', 'Message') : '');
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

function SMM(a, Color, z, v,b, PictureID, Named, l, la) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(a, Color, PictureID, v, la, b, l, Named, z);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td><td>' + (la <= 15 ? 'Online' : '' + getdhm(la)) + '</td>');
IC = IC + 1;
}

function newInfo(a, Color, PictureID, v, la, b, l, Named, z) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Named;
this.b = b;
this.la = la;
this.a = a;
this.l = l;
this.z = z;
}

function getdhm(harhar) {
	if (harhar < 60)  {
		var d= 0;
		var h = 0;
		var m = harhar;
	} else {
		var wholedays = Math.floor((harhar / 60) / 24);
		var d= (Math.floor((harhar / 60) / 24));
		var h = Math.floor((harhar / 60) - (d * 24))
		var m =Math.floor((harhar) - Math.floor((h * 60) + ((d * 24) * 60)))
	}
	var strout = '' + (d > 0 ? '<b>' + (d) + '</b>d, ' :'') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 && h <= 0 ? '<b>' + (m) + '</b>mins' : '');
	return strout;
}