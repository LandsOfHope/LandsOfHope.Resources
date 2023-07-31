var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPO;
var IID = IID;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(ItemID, Itty,PictureID) {
var Color = 'white'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, Itty,PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, ItemID, Itty,PictureID) {
this.c = Color;
this.value = ItemID;
this.p = PictureID;
this.t = Itty;
}

function DC(v) {
	if (Infos[v].t != 'Current') {
		confirm('Set race to ' + Infos[v].t + '?', v);
	}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + IID + '&P=' + PageNo + '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('r').value = Infos[pb].value;
			getObj('RaceForm').submit();		
		}
	}
}