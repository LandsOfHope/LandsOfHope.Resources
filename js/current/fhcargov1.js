var ItemTypeID = ItemTypeID;
var IPath = window.top.FHIPI;
var VPath = window.top.FHIPV;
var IC = 0;
var Infos = new Array();
var Bags = new Array();
var BC = 0;
var LastID = -1;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v);
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	var Titles2 = 'Open your ' + Names;
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPV + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
	if (Bags[BC] == null) {
		Bags[BC] = new Array();
	}
	Bags[BC] = new newBag(n, Names, Color, PictureID);
	//document.write('<tr id="B' + BC + '" width="100%"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td width="150" style="color: ' + Color + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td width=150>' + window.top.PSGM(value) + '</td><td><input type=checkbox id=ItemID name=ItemID value="' + ShopID + '" style="width: 12; height: 12"></td></tr>');
	BC = BC + 1;
}


function newBag(n, Names, Color, PictureID) {
	this.c = Color;
	this.p = PictureID;
	this.t = Names;
	this.n = n;
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

function RCB(v) {
	getObj('B' + v).style.cursor = '';
	getObj('B' + v).style.backgroundColor = '';
}

function PCB(v) {
	window.top.InfoTip(VPath + (Bags[v].p == '' ? 'na.gif' : Bags[v].p), Bags[v].t + '');
	getObj('B' + v).style.cursor = 'pointer';
	getObj('B' + v).style.backgroundColor = BGCOLOR_S
}

function DCB(v) {
	//
	if (Processing == 0 && LastID >= 0) {
		Processing = 1;
		window.top.PGS('SlideWoodLong.wav');
		window.location.replace('?ItemTypeID=' + ItemTypeID + '&ItemID=' + Infos[LastID].z + '&Dest=' + Bags[v].n);
	}
}

function GetVessels(y) {
	var x = 0;
	var strout = '';
	for (x = 0; x < BC; x++) {
		if (Bags[x].n != y) {
			strout += '<tr id="B' + x + '" width="100%" onmouseover="PCB(' + x + ')" onmouseout="RCB(' + x + ')" onclick="DCB(' + x + ')"><td><img src="' + VPath + (Bags[x].p == '' ? 'na.gif' : Bags[x].p) + '" width=30 height=30></td><td width="150" style="color: ' + Bags[x].c + '">' + Bags[x].t + '<br><i>Transfer item here</i></td></tr>';
		}
	}
	return '<table cellpadding=1 cellspacing=1 class="weakcell">' + strout + '</table>';
}

function DC(v) {
	var q3 = Math.abs(Infos[v].q2);
	var q2 = 0;
	if (q3 > 1000) {
		q2 = 1000;
	} else {
		q2 = q3;
	}
	LastID = v;
	getObj('Stuff2').innerHTML = Infos[v].t + '<br>Quantity: ' + q2 + '<br>' + window.top.PSGM(Infos[v].v) + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'?ItemTypeID=' + ItemTypeID + '&ItemID=' + Infos[v].z + '\');}', 'Drop', 'Drop') + (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'imivh.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') + Adr('window.top.sendRequest(\'fhlink.asp?Type=U&CharsAt=' + Infos[v].z + '&Name=' + Infos[v].t + '&c=' + encodeURIComponent(Infos[v].c) + '&l1=i&l2=' + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '\');', 'Link', 'Link') : '') + '<br><b>Transfer Cargo</b><br>Destination:';
	getObj('Vessels').innerHTML = GetVessels(ItemTypeID);
}

function AM(Color, Named, ShopID, value, q2, Picture, vid) {
	var q3 = q2;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture, vid);
	document.write('<tr id="I' + IC + '" width="100%"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td width="150" style="color: ' + Color + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td width=150>' + window.top.PSGM(value) + '</td><td><input type=checkbox id=ItemID name=ItemID value="' + ShopID + '" style="width: 12; height: 12"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture, vid) {
	this.c = Color;
	this.p = Picture;
	this.t = Named;
	this.q2 = q2;
	this.v = value;
	this.vid = vid;
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

