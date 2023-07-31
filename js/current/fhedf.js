var PageNo = PageNo;
var Following= Following;
var BN = BN;
var ItemID = ItemID;
var IPath = window.top.FHIPR;
var LastV = -1;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GS(how, stuff) {
	if (Processing == 0) {
		Processing = 1;
		window.top.Interface.location.replace('fhedf.asp?Type=' + how + '&P=' + PageNo + '&CharsAt=' + ItemID + '&Who=' + Infos[LastV].t + '&CharsAt2=' + stuff + '');
	}
}

function DC(v) {
LastV = v;
getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>' + (Infos[v].c == '#ff6666' ? '<br>Banned - Can not access this room' : '') + '<br>' + Adr('GS(1, ' + Infos[v].v + ');','Delete','Delete') + Adr('GS(2, ' + Infos[v].v + ');','Kick','Kick') + Adr('confirm(\'Do you wish to make this security setting, dungeon wide? i.e. global ban\', 1)','Global Ban','Global Ban') + Adr('confirm(\'Do you wish to delete this person from your entire dungeon Friends list?\', 2)','Global Delete','Global Delete') ;
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				GS(7, Infos[LastV].v);
			} else if (pb == 2) {
				GS(8, Infos[LastV].v);
			}
		}
	}
}

function DD(v) {
	GS(6, Infos[v].v);
}

function AvC(v, b, Itty, PictureID) {
var Color = LITE;
if (b  != 0) {Color = '#ff6666'} else {Color = '#66ff66'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, b, Itty, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, b, Itty, PictureID) {
this.c = Color;
this.b = b;
this.p = PictureID;
this.t = Itty;
this.v = v;
}

function ADC(v, Itty, PictureID) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, 0, Itty, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DD(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&CharsAt=' + ItemID);
}