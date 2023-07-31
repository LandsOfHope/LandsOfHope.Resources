var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var Level = Level;
var InscribeLevel = InscribeLevel;
var TrapID = TrapID;
var OPath = window.top.FHIPO;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, u, l, a, i, v, PictureID, Itty, eql) {
if (l == 'C') {l = 'Common'}
else if (l == 'N') {l = 'Uncommon'}
else if (l == 'R') {l = 'Rare'}
else if (l == 'V') {l = 'Very Rare'}
else if (l == 'U') {l = 'Unique'}
else if (l == 'A') {l = 'Artifact'}
if (Color == '#D9FB96') {Itty = '<b>' + Itty + '</b>'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, u, l, a, i, v, PictureID, Itty, eql);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="250" style="color: ' + Color + '' + (Level < InscribeLevel ? '; border: 1px dotted red' : '') + '; padding-left: 5px;">' + Itty + '</td><td width="100">' + (Itty.indexOf('(#)') != -1 ? 'Bewitched' : 'Not Bewitched') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, u, l, a, i, v, PictureID, Itty, eql) {
this.c = Color;
this.eql = eql;
this.p = PictureID;
this.t = Itty;
this.v = v;
this.i = i;
this.l = l;
this.u = u;
this.z = z;
this.a = a;
}

function GoP(PageNo) {
window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}

function FB(v) {
if (ItemTypeID == 48) {
	window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
} else {
	window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
}
}

function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '&InventoryItemID=' + InventoryItemID);
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
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),GetTips(v, 1));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
getObj('Stuff2').innerHTML = GetTips(v, 0) + '<br>Equip Level: ' + Infos[v].eql + '<br>Bewitching Level: ' + InscribeLevel + (Level < InscribeLevel && Math.abs(Infos[v].eql) < Level ? '<br>Bewitching this item will prevent you from equipping it until you reach the right level.' : (Math.abs(Infos[v].eql) < InscribeLevel ? '<br>Bewitching this item will raise its level to ' + InscribeLevel + '.' : ''));
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '<input type=hidden name=ItemID id=ItemID value=' + Infos[v].z + '>' + (InventoryItemID > 0 ? Adf2('', 'Install', 'Install') : '') + (Infos[v].t.indexOf('(#)') != -1 ? Adr('getObj(\'ItemID\').value = -' + Infos[v].z + ';getObj(\'inscribe\').submit()', 'Remove', 'Remove') : '') + Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') + (TrapID > 0 ? Adr('window.top.loadwindow2(\'Sz.asp?Test=' + TrapID + '\',300,300,\'iwindow\',\'Inscription Info\');','Inscription Info','Other') : '');
}

function GetTips(v, ttype) {
	if (ttype == 0) {
		return '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font>' + (Infos[v].i == 1 ? '<br>Rarity: <b>' + Infos[v].l + '</b><br>Value: ' + window.top.BSGM(Infos[v].v) :  '');
	}
	else {
		return '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font>' + (Infos[v].i == 1 ? '<br>Required Level: <b>' + Infos[v].eql + '</b>' :  '');
	}
}
