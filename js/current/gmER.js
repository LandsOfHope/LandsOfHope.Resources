var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Type2 = Type2;
var Mask = Mask;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(v, Itty, rm, PictureID) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Itty, rm, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Itty, rm, PictureID) {
this.c = Color;
this.v = v;
this.i = Itty;
this.rm = rm;
this.p = PictureID;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Classification: ' + Infos[v].rm;
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'gmERD.asp?CharsAt=' + Infos[v].v + '\',460,300,\'iwindow\',\'' + Infos[v].i + ' Description\');','Description','Description') + Adr('window.top.loadwindow2(\'gmERP.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].i + ' Stats\');','Stats','Stats') + Adr('window.top.loadwindow2(\'gmERS.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].i + ' Skills\');','Skills','Skills') + Adr('window.top.loadwindow2(\'gmERProf.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].i + ' Professions\');','Professions','Professions');

}

function GoP(P) {
	window.location.replace('?P=' + P + '&Type=' + Type2 + '&Mask=' + Mask);
}
