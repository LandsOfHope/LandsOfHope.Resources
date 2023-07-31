var ItemTypeID = ItemTypeID;
var CharsAt = CharsAt;
var BagCount = 0;
var Levelx = Levelx;
var ATX = ATX;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}

function FB(v) {
if (ItemTypeID == 48) {
	window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
} else {
	window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
}
}

function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles = 'Swap items in or out of your ' + Names;
var Titles2 = 'Open your ' + Names;
var Actions = 'FB(' + n + ');';
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout','') + '</td></tr></table></td>');
}

function DC(v) {
var q3 = Math.abs(Infos[v].q2);
var q2 = 0;
if (q3 > 1000) {
	q2 = 1000;
} else {
	q2 = q3;
}
getObj('Stuff2').innerHTML = Infos[v].t + '<br>Level: ' + Infos[v].l + '<br>Worth: ' + Infos[v].v + ' * <b>' + Infos[v].si + '</b>';
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '' + (q3 <= 1000 ? Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&ItemID=' +Infos[v].z + '\');}','Sell','Sell') : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&aok=1000&ItemTypeID=' + ItemTypeID + '&ItemID=' +Infos[v].z + '\');}','Sell','Sell')) + (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') : '');
}

function AM(Color, Named, ShopID, value, q2, Picture, Level, at, si) {
var q3 = q2;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture, Level, at, si);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td style="' + (Level > Levelx || at > ATX ? ';border: 1px dotted red' : '') + '">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture, Level, at, si) {
this.c = Color;
this.t = Named;
this.p = Picture;
this.l = Level;
this.q2 = q2;
this.v = value;
this.z = ShopID;
this.at = at;
this.si = si;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, ' ' + Infos[v].t + '<br>Level: ' + Infos[v].l + '<br>Worth: ' + Infos[v].v + ' * ' + Infos[v].si);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
