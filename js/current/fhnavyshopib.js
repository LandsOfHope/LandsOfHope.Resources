var ItemTypeID = ItemTypeID;
var CharsAt = CharsAt;
var BagCount = 0;
var IPath = window.top.FHIPI;
var VPath = window.top.FHIPV;
var IC = 0;
var Infos = new Array();

var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles2 = 'Open your ' + Names;
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPV + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
}

function SA(how) {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID") != null) {
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

	getObj('Stuff2').innerHTML = Infos[v].t + '<br>Quantity: ' + q2 + '<br>' + window.top.PSGM(Infos[v].v) + '<br>Price Modifier: ' + Infos[v].bp + '%' + (Math.round(Infos[v].pf) > 0 ? '<br>Fame Needed: ' + Infos[v].pf : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (q3 <= 1000 ? Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?CharsAt=' + CharsAt + '&ItemTypeID=' + ItemTypeID + '&ItemID=' + Infos[v].z + '\');}', 'Buy', 'Buy') : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&aok=1000&ItemTypeID=' + ItemTypeID + '&ItemID=' + Infos[v].z + '\');', 'Buy', 'Buy')) + Adr('window.top.loadwindow2(\'imiv.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info');
}

function AM(Color, Named, ShopID, value, q2, Picture, bp, pf) {
	var q3 = q2;
	// pf=' + pf + ' q2=' + q2 + ' v="' + value + '" ' + (Picture != '' ? 'p="' + Picture + '"' : 'p=""') + ' bp=' + bp + ' z=' + ShopID + ' c="' + Color + '"
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture, bp, pf);
	document.write('<tr id="I' + IC + '" width="100%"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td width="150" style="color: ' + Color + ';"  onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td width=150>' + window.top.PSGM(value) + '</td><td><input type=checkbox' + (Math.abs(q2) > 1000 ? ' disabled' : '') + ' id=ItemID name=ItemID value="' + ShopID + '" style="width: 12; height: 12"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture, bp, pf) {
	this.c = Color;
	this.pf = pf;
	this.p = Picture;
	this.t = Named;
	this.q2 = q2;
	this.v = value;
	this.bp = bp;
	this.z = ShopID;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t + '<br>Value: ' + window.top.PSGM(Infos[v].v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
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
