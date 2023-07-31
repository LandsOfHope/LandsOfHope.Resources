var SN = SN;
var IPath = window.top.FHIP
var Processing = 0;
var Type2 = Type2;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, x, kc, sn) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, x, kc, sn);
//x="' + x + '" kc=' + kc + ' sn="' + sn +'" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'150\' style="color: ' +  Color + '; padding-left: 5px;">' + sn + '</td><td>' + x + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, x, kc, sn) {
this.c = Color;
this.x = x;
this.p = PictureID;
this.i = sn;
this.kc = kc;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + Type2 + '&SN=' + SN);
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>XP (last 7 days): ' + Infos[v].x + '<Br>Kills (last 7 days): ' + Infos[v].kc ;
	getObj('Buttons').innerHTML = '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
}