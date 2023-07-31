var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].sn + '</b><br>' + Infos[v].sd + '<br>Set Pieces: ' + Infos[v].sc + '';
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="window.parent.loadwindow2(\'fhlibraryset2.asp?CharsAt=' + Infos[v].v+ '\',415,200,\'iwindow\',\'Set Pieces - ' + Infos[v].sn + '\');" style=\'width: 85\'>List Pieces</button><' + strClicky3 + ' onclick="window.parent.loadwindow2(\'fhlibraryset3.asp?CharsAt=' + Infos[v].v+ '\',415,200,\'iwindow\',\'Set Abilities - ' + Infos[v].sn + '\');" style=\'width: 85\'>List Abilities</button>';
}

function AC(ItemID, s, sc, Color, PictureID, sd) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(ItemID, s, sc, Color, PictureID, sd);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + s + '</td></tr>');
IC = IC + 1;
}

function newInfo(ItemID, s, sc, Color, PictureID, sd) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.sd = sd;
this.sn = s;
this.sc = sc;
this.s = s;
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

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}