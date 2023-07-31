var Processing = 0;
var IPath = window.top.FHIPI;
var Infos = new Array();
var IC = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(iid, v,v2, u, Itty, PictureID, ed) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (u < 0) {
	Color = '#ff6666';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, iid, v,v2, u, Itty, PictureID, ed);
//iid=' + iid + ' n="' + Itty + '" ed=' + ed + '
//v2=' + v2 + ' u=' + u + ' v=' + v + '
// p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, iid, v,v2, u, Itty, PictureID, ed) {
this.c = Color;
this.iid = iid;
this.p = PictureID;
this.v = v;
this.v2 = v2;
this.u = u;
this.n = Itty;
this.ed = ed;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>' + (Math.round(Infos[v].v2) == 0 ? 'Trophy task can be enabled' : (Math.round(Infos[v].u) == 0 ? 'Trophy task can not be disabled' : (Infos[v].ed >= 60 ? 'Trophy task can be disabled' : 'Trophy task can not be disabled for another ' + (60 - Infos[v].ed) + ' minutes.')));
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].iid + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].n + '\');','Info','Info') + (Math.round(Infos[v].v2) == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + Infos[v].v + '\')};','Enable this trophy','Enable') : (Math.round(Infos[v].u) == 0 ? '' : (Infos[v].ed >= 60 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=-' + Infos[v].v + '\')};','Disable this trophy', 'Disable') : '')));
}
		
function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}