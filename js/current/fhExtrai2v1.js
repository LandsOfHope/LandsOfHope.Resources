var PageNo2 = PageNo2;
var PageNo = PageNo;
var Piccy = Piccy;
var ItemID = ItemID;
var ItemID2 = ItemID2;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, Itty) {
var Color = '#D9FB96';
var PictureID = 'na.gif'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Itty, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Itty, PictureID) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Itty;
}


function GoP(PageNo) {
window.location.replace('?ItemID=' + ItemID + '&P2=' + PageNo2 + '&P=' + PageNo + '');
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].v + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? Piccy : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im3.asp?Test=' + ItemID2 + '&Bonus=' + Infos[v].v + '&Material=' + Infos[v].i + '\',300,300,\'iwindow\',\'Item Info\');','Info','Info') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhextrai2.asp?Type=1&ItemID=' + ItemID + '&P2=' + PageNo2 + '&Material=' + Infos[v].i + '&P=' + PageNo + '\');}','Adjust','Adjust');
}
