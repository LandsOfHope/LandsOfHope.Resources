var PageNo = PageNo;
var IPath = window.top.FHIPV;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(vid, Itty, PictureID, vt) {
var Color = LITE;
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, vid, Itty, PictureID, vt);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + ';">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, vid, Itty, PictureID, vt) {
this.c = Color;
this.v = vid;
this.p = PictureID;
this.vt = vt;
this.i = Itty;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].i + '</b><br><b color="gold">Uncharted Waters</b><br>Hull Type: ' + Infos[v].vt;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'vessels.asp?MT=' + Infos[v].v + '\',615,395,\'iwindow\',\'' + Infos[v].i + '\');','View vessel information','View');

}
