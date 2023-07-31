var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemID, d, r, b, Itty) {
if (PictureID == '0') {PictureID = ''}
var Color = 'white'
PictureID = (PictureID == "" ? "na" : PictureID) + ".png";

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemID, d, r, b, Itty);
// v=' + ItemID + ' b="' + b + '" d=' + d+ ' r=' + r + ' p="' + (PictureID == '' ? 'na' : PictureID) + '.png"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + PictureID + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemID, d, r, b, Itty) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.t = Itty;
this.b = b;
this.d = d;
this.r = r;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br><br>' + Infos[v].b + '<br>' + (Infos[v].d != 0 && Infos[v].d > 0 ? 'Duration: ' + Infos[v].d + '<br>Time remaining: ' + Infos[v].r + 'mins' : 'Permanent/Instant');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Infos[v].v != -1 ? Adr('window.parent.loadwindow2(\'Mz.asp?test=' + Infos[v].v + '\',300, 250, \'iwindow\',\'' + Infos[v].t + '\');','Info','Info') : '') + Adr('SendLink2(\'M\',' + Infos[v].v + ',\'s\',\'' + Infos[v].p + '\',0,\'' + Infos[v].t + '\',\'' + Infos[v].c + '\');','Link','Link');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}