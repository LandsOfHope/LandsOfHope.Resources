var Countt = 0;
var ChardAt = CharsAt;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function AC2(ItemID, ItemName, PictureID) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, ItemName, PictureID);
document.write('<div id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="float: left; width: 15px; height: 15px; padding: 1px; margin: 1px;"><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></div>');
IC = IC + 1;
}

function newInfo(Color, ItemID, ItemName, PictureID) {
this.c = Color;
this.z = ItemID;
this.t = ItemName;
this.p = PictureID;
}

function DC(v) {
	window.location.replace('gmblmef.asp?I=' + Infos[v].z + '&CharsAt=' + CharsAt);
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(''+ IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}