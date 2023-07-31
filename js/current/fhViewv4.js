var Skill = Skill;
var TargetLevel = TargetLevel;
var ItemTypeID = ItemTypeID;
var BagCount = 0;
var CharID = CharID;
var PageNo = PageNo;
var Bo = Bo;
var Cr = Cr;
var What = What;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + GoP + '');
}

function DC(v) {
	var tl = Math.round(Infos[v].m);
	if (TargetLevel > 0) {
		tl = TargetLevel * 5;
	}
	getObj('Stuff2').innerHTML = Tips(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>"
	if (Processing == 0) {
		getObj('Buttons').innerHTML = (Infos[v].i == 'True' ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '') + (Skill >= tl && Math.abs(What) == 0 && tl > 0 ? (Bo != 0 ? Adr('confirm(\'Stealing from other players will make you a criminal are you sure you wish to do this ?\',' + v + ');', 'Steal', 'Steal') : Adr('window.location.replace(\'fhview.asp?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' + Infos[v].v + '&L=' + tl + '\');', 'Steal', 'Steal')) : '');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			if (pb >= 0) {
				var tl = Math.round(Infos[pb].m);
				if (TargetLevel > 0) {
					tl = TargetLevel * 5;
				}
				window.top.Interface.location.replace('fhview.asp?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' + Infos[pb].v + '&L=' + tl);
			} else {
				window.top.Interface.location.replace('fhview.asp?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=2&InventoryItemID=' + Math.abs(pb));
			}
		}
	}
}

function Tips(v) {
	var tl = Math.round(Infos[v].m);
	if (TargetLevel > 0) {
		tl = TargetLevel * 5;
	}
	return '<b>' + Infos[v].t + '</b>' + (Infos[v].i == 'True' ? (Infos[v].s != '' ? '<br>Needs: ' + Infos[v].s : '') + '' : (Infos[v].a != '' ? '<br>Appraisal: ' + Infos[v].a : '')) + (tl >= 0 ? '<br>Stealing: ' + tl + '/' + (Skill < tl ? '<font id=tred>' + Skill + '</font><br>Deficit: ' + (tl - Skill) : Skill) + '<br>Experience: ' + Infos[v].x : (Infos[v].t.indexOf('(X)') != -1 ? '<br>Trade Goods<br><font id=tred>You can not steal newly traded goods</font>' : (Infos[v].t.indexOf('(E)') != -1 ? '<br>Equipped' : '<br>Carrying'))) + (Cr != 0 ? '<br><b>Criminal Action</b>' : '')
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	var tl = Math.round(Infos[v].m);
	if (TargetLevel > 0) {
		tl = TargetLevel * 5;
	}
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tips(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AvC(v, s, a, i, b, m, PictureID, Itty, x) {
	var Color = LITE;
	if (Math.round(m) > Skill || Math.round(m) < 0) {
		Color = '#ff6666';
	}
	else if (Itty.indexOf('(E)') != -1) {
		Color = 'gold';
	} else {
		Color = '#66ff66';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, s, a, i, b, m, PictureID, Itty, x);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, s, a, i, b, m, PictureID, Itty, x) {
	this.c = Color;
	this.x = x;
	this.p = PictureID;
	this.t = Itty;
	this.m = m;
	this.b = b;
	this.v = v;
	this.i = i;
	this.a = a;
	this.s = s;
}

function AvM(v) {
	var Color = LITE;
	document.write('<tr width="250" onclick="DC2(this, ' + v + ')" onmouseover="PC2(this, ' + v + ')" onmouseout="RC2(this)"><td><img width=15 height=15 src="' + IPath + 'na.gif"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + window.top.BSGM3(v) + '</td></tr>');
}

function RC2(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC2(stuff, amount) {
	window.top.InfoTip('', '<b>Purse Money</b><br>' + window.top.BSGM(amount) + (Cr != 0 ? '<br><b>Criminal Action</b>' : '') + '');
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function DC2(stuff, amount) {
	getObj('Stuff2').innerHTML = '<b>Purse Money</b><br>' + window.top.BSGM3(amount) + '' + (Cr != 0 ? '<br><b>Criminal Action</b>' : '');
	getObj('Pic').innerHTML = ""
	if (Processing == 0) {
		getObj('Buttons').innerHTML = (Bo != 0 ? Adr('confirm(\'Stealing from other players will make you a criminal are you sure you wish to do this?\',' + -amount + ');', 'Steal', 'Steal') : Adr('window.location.replace(\'fhview.asp?CharsAt=' + CharID + '&ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '&ItemID=2&InventoryItemID=' + amount + '\');', 'Steal', 'Steal'))
	} else {
		getObj('Buttons').innerHTML = '';
	}
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharID);
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	BagCount = BagCount + 1;
	var Titles2 = 'Open your ' + Names;
	document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');
}

