var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var LastClick = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function SA(how) {
	var x = 0;
	if (IC > 1) {
		for (x = 0; x < IC; x++) {
			getObj("IID")[x].checked = how;
		}
	}
	return false;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Bags').style.display = '';
	LastClick = v;
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font>' + (Infos[v].i == 1 ? (Infos[v].s != '' ? '<br>Needs: ' + Infos[v].s : '') + '<br>Rarity: ' + Infos[v].l + '' + (Infos[v].m != '' ? '<br>Equips To: ' + Infos[v].m : '<br><i>Not Equippable</i>') + (Infos[v].t.indexOf('($)') != -1 || Infos[v].t.indexOf('(T)') != -1 || Infos[v].t.indexOf('(#)') != -1 ? '<br>' : '') + (Infos[v].t.indexOf('($)') != -1 ? 'Stolen ' : '') + (Infos[v].t.indexOf('(T)') != -1 ? 'Trapped ' : (Infos[v].t.indexOf('(#)') != -1 ? 'Inscribed ' : '')) + '<br>Value: ' + window.top.BSGM(Infos[v].v) + '' : (Infos[v].a != '' ? '<br>Appraisal: ' + Infos[v].a : '')) + (Infos[v].i == 1 ? '<br><' + strClicky + ' onclick="window.ResultsOfit.location.replace(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\')" style=\'width: 85\'>Info</button>' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}


function AvC(Color, z, s, u, l, a, i, v, m, PictureID, Itty) {
	if (l == 'C') { l = 'Common' }
	else if (l == 'N') { l = 'Uncommon' }
	else if (l == 'R') { l = 'Rare' }
	else if (l == 'V') { l = 'Very Rare' }
	else if (l == 'U') { l = 'Unique' }
	else if (l == 'A') { l = 'Artifact' }
	//alert(1);
	if (Color == '#D9FB96') { Itty = '<b>' + Itty + '</b>' }

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, s, u, l, a, i, v, m, PictureID, Itty);

	// width="250" m="' + m + '" v="' + v + '" i=' + i + ' l="' + l + '" u=' + u + ' s="' + s + '"
	// p="' + PictureID + '"  z=' + z + ' a="' + a + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td><input type=checkbox name=IID value="' + z + '" style="width: 12px; height: 12px"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, s, u, l, a, i, v, m, PictureID, Itty) {
	this.c = Color;
	this.t = Itty;
	this.p = PictureID;
	this.v = v;
	this.z = z;
	this.s = s;
	this.u = u;
	this.l = l;
	this.a = a;
	this.i = i;
	this.m = m;
}


function FBI(v) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('?P=' + PageNo + '&ItemID=' + Infos[LastClick].z + '&B=' + v);
	}
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	var Titles2 = 'Loot the selected item to ' + Names;
	document.write('<td style=\'cursor: pointer\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td p="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" class="menucell" title="' + Titles2 + '" style="width: 30px; color: ' + Color + '; background-color:' + Color + '" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + IPath + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=30 height=30 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="FBI(' + n + ');"></td></tr></table></td>');
	document.write('</td>');
}