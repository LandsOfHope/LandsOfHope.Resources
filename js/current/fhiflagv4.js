var OPath = window.top.FHIPO;
var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var Pr = Pr;
var BagCount = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, l, PictureID, Itty, t, s, d, el, mn, dd) {
	if (l == 'C') { l = 'Common' }
	else if (l == 'N') { l = 'Uncommon' }
	else if (l == 'R') { l = 'Rare' }
	else if (l == 'V') { l = 'Very Rare' }
	else if (l == 'U') { l = 'Unique' }
	else if (l == 'A') { l = 'Artifact' }

	if (Color == '#D9FB96') { Itty = '<b>' + Itty + '</b>' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, l, PictureID, Itty, t, s, d, el, mn, dd);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width="10">' + (t == 0 ? '' : 'X') + '</td><td width="10">' + (s == 0 ? '' : 'X') + '</td><td width="10">' + (d == 0 ? '' : 'X') + '</td><td width="10">' + (dd == 0 ? '' : 'X') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, l, PictureID, Itty, t, s, d, el, mn, dd) {
	this.c = Color;
	this.p = PictureID;
	this.i = Itty;
	this.t = t;
	this.mn = mn;
	this.el = el;
	this.s = s;
	this.l = l;
	this.d = d;
	this.z = z;
	this.dd = dd;
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
	window.location.replace('?ItemTypeID=' + v + '&InventoryItemID=1');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles = 'Swap items in or out of your ' + Names;
	var Titles2 = 'Open your ' + Names;
	var Actions = 'FB(' + n + ');';
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout', '') + '</td></tr></table></td>');
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<input type="hidden" name=ItemID value="1"><input type="hidden" name=InventoryITemID value="' + Infos[v].z + '"><input type="hidden" name=ItemTypeID value="' + ItemTypeID + '"><input type="hidden" name=P value="' + PageNo + '"><font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].i.length > 28 ? Infos[v].i.substr(0, 28) + '..' : Infos[v].i) + '</b></font>' + '<br>Rarity: ' + Infos[v].l + (Infos[v].i.indexOf('($)') != -1 || Infos[v].i.indexOf('(T)') != -1 || Infos[v].i.indexOf('(#)') != -1 ? '<br>' : '') + (Infos[v].i.indexOf('($)') != -1 ? 'Stolen ' : '') + (Infos[v].i.indexOf('(T)') != -1 ? 'Trapped ' : (Infos[v].i.indexOf('(#)') != -1 ? 'Inscribed ' : '')) + '<br>Level: ' + Infos[v].el + ' ' + Infos[v].mn + '<br><b>Prevent:</b><br><table class="weakcell" cellspacing=0 cellpadding=2><tr><td>Trade:</td><td><input name=DisallowTrade value=1 type=checkbox ' + (Math.round(Infos[v].t) != 0 ? 'checked' : '') + '></td><td>Sale:</td><td><input name=DisallowSale value=1 type=checkbox ' + (Math.round(Infos[v].s) != 0 ? 'checked' : '') + '></td></tr><tr><td>Drop:</td><td><input name=DisallowDrop value=1 type=checkbox ' + (Math.round(Infos[v].d) != 0 ? 'checked' : '') + '></td><td>Decon:</td><td><input name=DisallowDecon value=1 type=checkbox ' + (Math.round(Infos[v].dd) != 0 ? 'checked' : '') + '></td></tr></table><br>' + Adf2('', 'Save changes', 'Save') + (Infos[v].i.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}
