var PageNo = PageNo;
var ItemID = ItemID;
var ItemTypeID = ItemTypeID;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var BagCount = 0;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, skilly, e, q) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty, skilly, e, q);
//e=' + e + ' q=' + q + ' s=' + skilly + ' v=' + v + ' p="' + PictureID + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" ><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + (Math.abs(q) > 1 ? ' * ' + q : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, skilly, e, q) {
this.c = Color;
this.e = e;
this.p = PictureID;
this.t = Itty;
this.q = q;
this.s = skilly;
this.v = v;
}


function GoP(PageNo) {
window.location.replace('?ItemID=' + ItemID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}


function Tipz(v) {
	return '<b>' + Infos[v].t + '</b><br>Quantity: ' + Infos[v].q + '<br>Material Level: ' + Infos[v].s;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipz(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') + (Infos[v].t.indexOf('(E)') == -1 ? '<' + strClicky + ' type=button onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fhtransmogrify2.asp?ItemID=' + Infos[v].v + '&ItemTypeID=' + ItemTypeID + '&P2=' + PageNo + '\');}" style=\'width: 65\'>Select</button><' + strClicky + ' type=button onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fhtransmogrify.asp?InventoryItemID=' + Infos[v].v + '&ItemTypeID=' + ItemTypeID + '&Level=1&P=' + PageNo + '\');}" style=\'width: 65\'>Level 1</button>' : '');
}

function FB(v) {
if (ItemTypeID == 48) {
	window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
} else {
	window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
}
}

function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles = 'Swap items in or out of your ' + Names;
var Titles2 = 'Open your ' + Names;
var Actions = 'FB(' + n + ');';
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout','') + '</td></tr></table></td>');
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipz(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}