var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var PageNo = PageNo;
var NL = NL;
var mg = mg;
var Processing = 0;
var SystemUser = SystemUser;
var IPath = window.top.FHIPB;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GS(in2) {
	if (Processing == 0) {
		confirm('Relocate this building to ' + NL + '?', in2);
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.top.Interface.location.replace('fhbrel.asp?CharsAt=' + CharsAt + '&P=' + PageNo + '&Type=' + pb);

		}
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Current Location: ' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealm(Infos[v].g) + '<br>New Location: ' + NL;
	getObj('Buttons').innerHTML = Adr('GS(' + Infos[v].v + ');','Relocate','Relocate');
}

function AB(PictureID, ItemName, ItemID, Color, x, y, g) {
if (PictureID == '0') {PictureID = ''}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(PictureID, ItemName, ItemID, Color, x, y, g);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(PictureID, ItemName, ItemID, Color, x, y, g) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.t = ItemName;
this.g = g;
this.x = x;
this.y = y;
}