
var ItemTypeID = ItemTypeID;
var BagCount = 0;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(Color, ItemID, v, PictureID, Itty, q) {
if (PictureID == '0') {PictureID = ''}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, v, PictureID, Itty, q);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + (q > 1 ? ' * ' + q : '') + '</td><td><input type=checkbox id=ItemID name=ItemID value=' + ItemID + ' style=\'width: 12px; height: 12px\'></td></tr>');
IC = IC + 1;
}

function newInfo(Color, ItemID, v, PictureID, Itty, q) {
this.c = Color;
this.q = q;
this.p = PictureID;
this.t = Itty;
this.v = v;
this.value = ItemID;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tips(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Processing == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhpost2.asp?CharsAt=' + CharsAt + '&Special=0&ItemID=' +Infos[v].value + '\');}','Free Post','Free Post') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhpost2.asp?CharsAt=' + CharsAt + '&Special=1&ItemID=' +Infos[v].value + '\');}','Special Post','Special Post') + Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].value + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info')  : '');
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo);
} 

function SA(how) {
var x = 0;
var totala = 0;
if (getObj("ItemID") != null) 
{
	if (IC <= 1) {
		getObj("ItemID").checked = how;
	} else {
		for (x = 0; x < IC; x++) {
			getObj("ItemID")[x].checked = how;
		}
	}
}
}
function Tips(v) {
	return '<b>' + Infos[v].t + '</b><br>Quantity: ' + Infos[v].q + '<br>Postage Cost: Free<br>Special Postage: ' + window.top.BSGM(Infos[v].v) + ''
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Tips(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function FB(v) {
if (ItemTypeID == 48) {
	window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '&Pet=0');
} else {
	window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '' + '&Pet=0');
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