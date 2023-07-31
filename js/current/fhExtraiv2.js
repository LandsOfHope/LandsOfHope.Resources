var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var ItemID = ItemID;
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, skilly, e) {
var Color = '#D9FB96';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty, skilly, e);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, skilly, e) {
this.c = Color;
this.e = e;
this.p = PictureID;
this.i = Itty;
this.s = skilly;
this.v = v;
}

function GoP(PageNo) {
window.location.replace('?ItemID=' + ItemID + '&P=' + PageNo + '');
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Material Level: ' + Infos[v].s + (Infos[v].i.indexOf('(E)') != -1 ? '<br>Please unequip the item first' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + (Infos[v].i.indexOf('(E)') == -1 ? Adr('window.location.replace(\'fhextrai2.asp?ItemID=' + Infos[v].v + '&P2=' + PageNo + '\');', 'Select','Select') : '');
}
