var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos= new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>' + Infos[v].at + '<br>' + Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'fhconstellation.asp?CharsAt=' + CharsAt + '&Con=' + Infos[v].v + '\');}','Select ' + Infos[v].i + '' ,'Select');
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == ''  ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, ' <font color=' + Infos[v].c + '>' + Infos[v].i + '</font>');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function AM(Named, value, Picture, a) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, value, Picture, a);
var y = IC;
document.write('<tr width="100%" id="I' + y + '" onmouseover="PC(' + y + ')" onmouseout="RC(' + y + ')" onclick="DC(' + y + ')"><td><img src=\'' + IPath + Infos[y].p + '\' width=15 height=15></td><td width="100%" style="color: ' + Infos[y].c + '">' + Infos[y].i + '</td></tr>');

IC = IC + 1;
}

function newInfo(Color, Named, value, Picture, at) {
this.c = Color;
this.v = value;
this.p = Picture;
this.i = Named;
this.at = at;
}
