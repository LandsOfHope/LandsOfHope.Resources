var PageNo = PageNo;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo);
}


function AM(ABID, AN) {
var PictureID = 'na.gif';
var bgx = ''
var Color = LITE;
if ((IC / 2) == Math.round(IC / 2)) {bgx = BGCOLOR_S}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ABID, AN, bgx);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="background-color: ' + bgx + '"><td><img src="' + IPath + PictureID + '" width=10 height=10></td><td>' + AN + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ABID, AN, bgx) {
this.c = Color;
this.v = ABID;
this.p = PictureID;
this.n = AN;
this.b = bgx;
}


function DC(v) {
	confirm('Remove this account from your banlist?', v);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function DB(stuff) {
	window.location.replace('fhmess2.asp?Type=' + stuff);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			window.top.Interface.location.replace('fhmessb.asp?CharsAt=-' + Infos[v].v + '&P=' + PageNo);
		}
	}
}