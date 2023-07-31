var skill = skill;
var Processing = 0;
var MX = MX;
var MY = MY;
var MZ = MZ;
var PageNo = PageNo;
var IPath = window.top.FHIPM;

var MC = 0;
var Markers = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?Z=' + MZ +'&X='+ MX + '&Y='+ MY + '&P=' + PageNo + '');
}

function DC(v) {
	if ((Markers[v].l * 5) <= skill) {
		if (Processing == 0) {
			Processing = 1;	
			window.location.replace('?L=' + Markers[v].l +  '&Z=' + MZ +'&X='+ MX + '&Y='+ MY + '&ItemID=' +Markers[v].value + '');
		}
	}
}



function RC(v) {
window.top.hideTip();
getObj('M' + v).style.cursor = '';
getObj('M' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoMap('' + (Markers[v].p2 == '' ? '' : Markers[v].p2), '' + (Markers[v].p == '' ? '' : Markers[v].p), Markers[v].xc  , '' + Markers[v].i);
getObj('M' + v).style.cursor = 'pointer';
getObj('M' + v).style.backgroundColor=BGCOLOR_S
}

function AC(l, x, y, value, Itty, PictureID, PictureID2, Color2) {
if (l < 1) {l = 1};
if (PictureID == '0') {PictureID = ''}
if (PictureID2 == '0') {PictureID2 = ''}
var Color = LITE;
if ((l * 5) > skill) {
	Color = '#ff6666';
}
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(l, x, y, value, Itty, PictureID, PictureID2, Color2, Color);

document.write('<tr id="M' + MC + '" onclick="DC(' + MC + ')" onmouseover="PC(' + MC + ');" onmouseout="RC(' + MC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=20 class="' +  Color2 + '" valign=top>' + (PictureID != '' || PictureID2 != '' ? '<img src=\'' + (PictureID == '' && PictureID2 != '' ? IPath + (PictureID2 == '' ? 'na.gif' : PictureID2) : IPath + (PictureID == '' ? 'na.gif' : PictureID)) + '\' style=\'' + (PictureID2 != '' && PictureID != '' ? 'background-image: URL(' + IPath + (PictureID2 == '' ? 'na.gif' : PictureID2) + ')' : '') + '\' width=20 height=20>' : '') + '</td><td><b>' + Itty + '</b><br>Location: ' + x + ' ' + y + '<br>Level: ' + l + '<br>' + (skill < (l * 5) ? 'To mark this spot you need to have ' + (l * 5) + ' skill' : 'Skill: ' + (l * 5)) + '</td></tr>');
MC = MC + 1;
}



function newMarker(l, x, y, value, Itty, PictureID, PictureID2, Color2, Color) {
this.c = Color;
this.xc = Color2;
this.p = PictureID;
this.p2 = PictureID2;
this.l = l;
this.x = x;
this.y = y;
this.value = value;
this.i = Itty;
}

