var ItemTypeID = ItemTypeID;
var CharsAt = CharsAt;
var BagCount = 0;
var IPath = window.top.FHIPI;
var VPath = window.top.FHIPV;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}

function TA() {
var x = 0;
var totala = 0;
if (getObj("ItemID") != null) 
{
	if (IC <= 1) {
		totala = 0;
	} else {
		for (x = 0; x < IC; x++) {
			if (getObj("ItemID")[x].checked == true && getObj("ItemID")[x].disabled == false) {
				totala = Math.abs(totala) + Math.abs(Infos[x].v)
			}
		}
	}
}

return Math.round(totala);
}


function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles2 = 'Open your ' + Names;
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPV + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
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

function DC(v) {
var q3 = Math.abs(Infos[v].q2);
var q2 = 0;
if (q3 > 1000) {
	q2 = 1000;
} else {
	q2 = q3;
}
getObj('Stuff2').innerHTML = Infos[v].t + (Math.round(Infos[v].d) < 0 ? '<br>No Purchase' : '<br>Quantity: ' + q2 + '<br>' + window.top.PSGM(Infos[v].v) + '<br>Price Modifier: ' + Infos[v].bp + '%');
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = ''+ (Math.round(Infos[v].d) >= 0 ? (q3 <= 1000 ? Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&ItemID=' +Infos[v].z + '\');}','Sell','Sell') : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&aok=1000&ItemTypeID=' + ItemTypeID + '&ItemID=' +Infos[v].z + '\');}','Sell','Sell')) + (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'imivh.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') : '') : '');
}

function AM(Color, Named, ShopID, value, q2, Picture, d, bp) {
var q3 = q2;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture, d, bp);
document.write('<tr id="I' + IC + '" width="100%"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td width="150" style="color: ' + Color + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td width=150>' + (d < 0 ? 'NO PURCHASE' : window.top.PSGM(value)) + '</td><td><input type=checkbox' + (Math.abs(q2) > 1000 || d < 0 ? ' disabled' : '') + ' id=ItemID name=ItemID value="' + ShopID + '" style="width: 12; height: 12"></td></tr>');
IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture, d, bp) {
this.c = Color;
this.d = d;
this.p = Picture;
this.t = Named;
this.q2 = q2;
this.v = value;
this.bp = bp;
this.z = ShopID;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t + '<br>Value: ' + window.top.PSGM(Infos[v].v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				Processing = 1;
				window.top.PGS('money.wav');
				getObj('sellitems').submit();
			}
		}
	}
}

