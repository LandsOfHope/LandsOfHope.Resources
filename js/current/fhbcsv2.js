
var PageNo = PageNo;
var SystemUser = SystemUser;
var IPath = window.top.FHIPB;
var Processing = 0;
var MC = 0;
var Markers = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('M' + v).style.cursor = '';
getObj('M' + v).style.backgroundColor='';
window.top.hideTip();
}

function PC(v) {
window.top.InfoTip('' + IPath + Markers[v].p, '' + Markers[v].t + '');
getObj('M' + v).style.cursor = 'pointer';
getObj('M' + v).style.backgroundColor=BGCOLOR_S
}

function GS(in3, in2) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('?CharsAt=' + in2 + '&P=' + PageNo + '&Type=' + in3)
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Markers[v].t + '</b><br>Location: ' + Markers[v].x + ', ' + Markers[v].y + ' ' + GetRealm(Markers[v].g) + (Markers[v].h != 0 ? '<br><i>Stealthed</i>' : '');
	getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="Processing = 1; window.location.replace(\'fh.asp?Redraw=1&BuildingID=' + Markers[v].v + '\')" style=\'width: 85\'>Recall</button><' + strClicky + ' id=Sp4 onclick="confirm(\'Are you sure you wish to destroy ' + Markers[v].t + '?\',' + Markers[v].v + ',\'Destroy\');" style=\'width: 85\'>Destroy</button>' + (Markers[v].a == 1 ? '<' + strClicky3 + ' id=Sp8 onclick="Processing = 1; window.location.replace(\'fhbmrc.asp?CharsAt=' + Markers[v].v + '\')" style=\'width: 85\'>Recall Check</button>' : '') + '<br><' + strClicky3 + ' id=Sp10 onclick="GS(10, ' + Markers[v].v + ');" style=\'width: 85\'>Landmark</button><' + strClicky3 + ' onclick="Processing = 1; window.location.replace(\'fhblm.asp?CharsAt=' + Markers[v].v + '\')" style=\'width: 85\'>Renovate</button>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Markers[v].p == '' ? 'na.gif' : Markers[v].p) + "'>";
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && returnVal == true) {
			if (Processing == 0) {
				Processing = 1;
				window.top.Interface.location.replace('fhbcs.asp?CharsAt=' + pb + '&P=' + PageNo + '&Type=' + 4)
			}
		}
	}
}

function AB(PictureID, ItemName, ItemID, Color, h, x, y, g, c) {
if (PictureID == '0') {PictureID = ''}
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(PictureID, ItemName, ItemID, Color, h, x, y, g, c);
document.write('<tr id="M' + MC + '" onclick="DC(' + MC  + ')" onmouseout="RC(' + MC  + ')" onmouseover="PC(' + MC  + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
MC = MC + 1;
}

function newMarker(PictureID, ItemName, ItemID, Color, h, x, y, g, c) {
this.c = Color;
this.t = ItemName;
this.v = ItemID;
this.p = PictureID;
this.h = h;
this.a = c;
this.x = x;
this.y = y;
this.g = g;
}