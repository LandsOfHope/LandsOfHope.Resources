var ItemID = ItemID;
var CharsAt = CharsAt;
var PageNo = PageNo;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var LastPatchClick = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, d) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty, d);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, d) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Itty;
this.d = d;
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&ItemID=' + ItemID + '&P=' + PageNo + '');
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

function DC(v) {
	LastPatchClick = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>' + Infos[v].d;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + (ItemID != 0 ? Adr('if (Processing == 0) {confirm(\'Are you sure you wish to animate the golem?\', 1)};','Animate','Animate') : '');
}

function PromptReturn(returnVal, pb) {
	var v = LastPatchClick;
	if (PromptReturn != null && Processing == 0) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhgolemassemble.asp?CharsAt=' + Infos[v].v + '&ItemID=' + ItemID + '&P=' + PageNo);
		}
	}
}