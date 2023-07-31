var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var Type2 = Type2;
var IPath = window.top.FHIPS;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Color, Value, PictureID,Named, d) {
if (PictureID != '') {
	PictureID = PictureID + '.png'
} else {
	PictureID = 'na.gif'
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Value, PictureID,Named, d);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="cursor: pointer; color: ' + Color + '"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td>' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Value, PictureID,Named, d) {
this.c = Color;
this.v = Value;
this.p = PictureID;
this.i = Named;
this.d = d;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Duration: ' + Infos[v].d;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Type=1&Type2=' + Infos[v].v + '&CharsAt=' + CharsAt + '\');}','Cast', 'Cast');
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