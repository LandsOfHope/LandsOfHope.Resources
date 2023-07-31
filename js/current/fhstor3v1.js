var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var SN = SN;
var IPath = window.top.FHIPI;
var SearchType = SearchType;
var CharsAt = CharsAt;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function fx1(stuff) {
var re = /^\$|,|'|"|%|@|#/g;
stuff.value = stuff.value.replace(re, "");
if (stuff.value == '' || stuff.value == null) {
	stuff.value = 0;
	}
}

function AC(IID, ItemName, Storage, BuildingName, X,Y,G,PictureID) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, IID, ItemName, Storage, BuildingName, X,Y,G,PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function ACI(IID, ItemName, Location,PictureID) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo2(Color, IID, ItemName, Location,PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC2(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}


function newInfo(Color, IID, ItemName, Storage, BuildingName, X,Y,G,PictureID) {
this.c = Color;
this.s = Storage;
this.p = PictureID;
this.i = ItemName;
this.b = BuildingName;
this.x = X;
this.y = Y;
this.g = G;
this.v = IID;
}

function newInfo2(Color, IID, ItemName, Location,PictureID) {
this.c = Color;
this.l = Location;
this.p = PictureID;
this.i = ItemName;
this.v = IID;
}

function DC2(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Location: ' + Infos[v].l;
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '' 
}


function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&Type=' + SearchType + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Location: ' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealm(Infos[v].g) + '<br>Container: ' + Infos[v].s + '<br>Room: ' + Infos[v].b + '';
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '' 
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}