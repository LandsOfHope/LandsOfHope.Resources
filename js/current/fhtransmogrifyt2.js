var PageNo2 = PageNo2;
var PageNo = PageNo;
var Piccy = Piccy;
var ItemID = ItemID;
var ItemTypeID = ItemTypeID;
var ItemID2 = ItemID2;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, Itty) {
var Color = LITE;
var PictureID = 'na.gif'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty) {
this.c = Color;
this.p = PictureID;
this.t = Itty;
this.v = v;
}


function GoP(PageNo) {
window.location.replace('?ItemID=' + ItemID + '&ItemTypeID=' + ItemTypeID + '&P2=' + PageNo2 + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', '' + Infos[v].t + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].v + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? Piccy : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im3.asp?Test=' + ItemID2 + '&Bonus=' + Infos[v].v + '&Material=' + Infos[v].t + '\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') + Adr('if (Processing == 0) {confirm(\'Are you sure you wish to transmogrify this item, once a material has been lowered it can not be raised ?\', ' + v + ');}', 'Transmogrify', 'Transmogrify');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhtransmogrifyt2.asp?Type=1&ItemID=' + ItemID + '&ItemTypeID=' + ItemTypeID + '&P2=' + PageNo2 + '&Material=' + Infos[pb].t + '&P=' + PageNo);
		}
	}

}