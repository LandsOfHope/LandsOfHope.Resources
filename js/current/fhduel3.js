var Infos = new Array();
var IC = 0;
var Processing = 0;
var CharsAt = CharsAt;
var Bag = Bag;
var AT = AT;
var BagCount = 0;
var LastI = 0;
var PageNo = PageNo;
var ItemCount = 0;
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('tradeitem').value = Infos[v].v;	
	getObj('Stuff2').innerHTML = '' + Infos[v].i + '';
	getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p +'\'>';
	showbutton(v);
}

function showbutton(v) {
	getObj('Buttons').innerHTML = Adr('if (Processing ==0) {confirm(\'Are you sure you wish to confirm this duel?\', ' + v + ');}','Confirm duel', 'Confirm duel');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (Processing == 0) {
				Processing = 1;
				getObj('Duel').submit();
			}
		}
	}
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'C' : (aa == 2 ? 'L' : (aa == 3 ? 'M' : 'P'))) : '');
}

function AI(PictureID, ItemName, ItemID, aa, il) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, aa, il);
//v=' + ItemID + ' i="' + ItemName + '" il=' + il + ' aa=' + aa + '  p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" 
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + ItemName + '</td><td width=50 style="' + (aa > 0 ? (aa <= AT ? 'color: #66ff66':  'color: #ff6666') : '') + '">' + (aa > 0 ? GetAT(aa) : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, aa, il) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.i = ItemName;
this.il = il;
this.aa = aa;
}

function FBI(v) {
window.location.replace('?CharsAt=' + CharsAt + '&B=' + v);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles2 = 'Open your ' + Names;
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function GoP(PageNo) {
	window.location.replace('?Bag=' + Bag + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}