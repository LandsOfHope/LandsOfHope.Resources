var Pic = Pic;
var KC = KC;
var PageNo = PageNo;
var IPath = window.top.FHIPH;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
getObj('Stuff2').innerHTML = Infos[v].s + '<br>Keeps Required: ' + Infos[v].t + '<br>Keeps Held: ' + KC + '<br>Level Required: ' + Infos[v].l  + (Infos[v].b == 0 ? '' : '<br>Duration: ' + Infos[v].b);
getObj('Pic').innerHTML = "<img src='" + IPath + (Pic == '' ? 'na.gif' : Pic) + "'>";
getObj('Buttons').innerHTML = Adr('window.parent.loadwindow2(\'Mz.asp?test=' + Infos[v].v + '\',300, 250, \'iwindow\',\'' + Infos[v].s + '\');','Info','Info');
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].s);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(Color,v, s, mc, t, b ,l) {
var PictureID = Pic;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color,v, s, mc, t, b ,l, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=10><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=10 height=10></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + s + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color,v, s, mc, t, b ,l, PictureID) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.s = s;
this.t = t;
this.b = b;
this.l = l;
this.mc = mc;
}
