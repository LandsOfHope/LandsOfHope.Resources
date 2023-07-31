var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, q, m, mt, PictureID, l, v, t, i, mid, lh, ad, ivi) {
	var q2 = '';
	if (q == 0) { q2 = 'Common' }
	else if (q == 1) { q2 = 'Uncommon' }
	else if (q == 2) { q2 = 'Rare' }
	else if (q == 3) { q2 = 'Very Rare' }
	else if (q == 4) { q2 = 'Unique' }
	else if (q == 'A') { q2 = 'Artifact' }
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (t == 0) {
		Color = '#ff6666';
	}
	if (lh != 0) {
		Color = 'purple';
	}
	if (ivi != 0) {
		Color = 'gold';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, q, m, mt, PictureID, l, v, t, i, mid, lh, ad, ivi, q2);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '">' + m + '</td><td>' + mt + '</td><td>' + (ad != 0 ? 'X' : '') + '' + (ivi != 0 ? 'V' : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, q, m, mt, PictureID, l, v, t, i, mid, lh, ad, ivi, q2) {
	this.c = Color;
	this.i = i;
	this.p = PictureID;
	this.ad = ad;
	this.ivi = ivi;
	this.lh = lh;
	this.mid = mid;
	this.q = q;
	this.t = t;
	this.q2 = q2;
	this.v = v;
	this.m = m;
	this.mt = mt;
	this.l = l;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].m + '</b><br>Makes: ' + (Infos[v].i == '' ? Infos[v].m : Infos[v].i) + '<br>Skill Name: ' + MT + '<br>Skill Required: ' + Infos[v].mt + '<br>Rarity: ' + Infos[v].q2 + '<br>Availability: Looted' + (Infos[v].lh == 0 ? (Infos[v].t == 0 ? '' : ' or Trainer') : '') + '<br>Equip/Use Level: ' + Infos[v].l + '<br>' + (Infos[v].ad != 0 ? 'Allow Deconstruction: Yes' : 'Allow Deconstruction: No');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {window.parent.loadwindow2(\'imi' + (Infos[v].ivi != 0 ? 'v' : '') + '.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].m + '\');}', 'View crafted item information', 'Info') + Adr('if (Processing == 0) {window.parent.loadwindow2(\'mr.asp?ItemID=' + Infos[v].mid + '\',300,300,\'iwindow\',\'' + Infos[v].m + '\');}', 'View crafting information', 'Ingredients')
}
