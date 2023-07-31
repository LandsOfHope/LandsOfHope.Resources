var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIP;
var Processing = 0;
var MT = MT;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


//response.write "AvC(" & rstChat("WantType") & ",'" & rstChat("WantURL") & "','" & rstChat("WantPictureID") & "','" & rstChat("WantPicturePath") & "', '" & rstChat("WantHeader") & "'," & rstChat("WantCount") & ");" & vbcrlf


function AvC(wt, wu, wp, wpp, m, mt) {
var Color = LITE;
if (wt == 0) {
	Color = 'yellow';
} else if (wt == 1) {
	Color = 'orange';
} else if (wt == 2) {
	Color = 'cyan';
}
var PictureID = wp;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, m, mt, wt, wu, wp, wpp);
document.write('<div id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" STYLE="float: left; width: 300px; color:' + Color + ';"><table class="weakercell"><tr><td width=15><img width=15 height=15 src="' + IPath + wpp + '/' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + m + '</td><td>' + mt + '</td></tr></table></div>');
IC = IC + 1;
}

function newInfo(Color, PictureID, m, mt, wt, wu, wp, wpp) {
this.c = Color;
this.m = m;
this.p = wpp + '/' + wp;
this.mt = mt;
this.wt = wt;
this.wu = wu;
this.wp = wp;
this.wpp = wpp;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Type=' + MT);
}
function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].m + '</b><br>Total: ' + Infos[v].mt + '';
}

function DC(v) {
	Processing = 1;
	window.location.replace(Infos[v].wu + '?Type=' + Infos[v].m);
}