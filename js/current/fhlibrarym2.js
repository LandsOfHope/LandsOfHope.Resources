var PageNo = PageNo;
var MT = MT;
var IPath = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(mc, m, Color) {
if (Color == '') {
	Color = LITE;
}
var PictureID = 'na.gif'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(mc, m, Color, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + ';">' + m + '</td><td>' + mc + '</td></tr>');
IC = IC + 1;
}

function newInfo(mc, m, Color, PictureID) {
this.c = Color;
this.m = m;
this.p = PictureID;
this.mc = mc;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Type=' + MT);
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
return '<b>' + Infos[v].m + '</b><br>Level: ' + Infos[v].mc + '<br>Trade Skill: ' + (Infos[v].mc * 5);
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v) + '<Br>Items made with this material require you to be at least this level to equip or use them.'
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}
