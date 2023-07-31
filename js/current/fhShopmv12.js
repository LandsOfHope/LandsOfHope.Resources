var Processing = 0;
var CharsAt = CharsAt;
var SL = SL;
var SN = SN;
var PageNo = PageNo;
var EL = EL;
var SP = SP;
var EP = EP;
var AA = AA;
var EM = EM;
var MT = MT;
var QL = QL;
var Level = Level;
var Infos = new Array();
var IC = 0;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function fx1() {
	var re = /^\$|,|'|"|%|@|#/g;

	getObj('SN').value = getObj('SN').value.replace(re, "");
	if (getObj('SN').value == '' || getObj('SN').value == null) {
		getObj('SN').value = 0;
	}
}

function Tipz(v) {
	return '<b>' + Infos[v].t + '</b>' + (Infos[v].pr != '' ? '<br>' + Infos[v].pr : '') + (Infos[v].aa > 0 ? '<br>Armor Type: ' + GetAT(Infos[v].aa) : (Infos[v].dpr > 0 ? '<br>DPR: ' + Infos[v].dpr : '')) + '<br>Rarity: ' + Infos[v].r + '<br>Quantity: ' + Infos[v].q2 + '<br>Level: ' + Infos[v].l + '<br>Sale Price: ' + window.top.BSGM(Infos[v].v);

}

function ShowSearch(strword) {
	var strTest = '';


	strTest = strTest + '<table class=\'weakcell\' cellpadding=0 cellspacing=0><input type=hidden id=MT name=MT value=' + MT + '><input type=hidden id=CharsAt name=CharsAt value=\'' + CharsAt + '\'><tr><td>' + strword + ':</td><td><INPUT TYPE=text ID=SN NAME=SN VALUE=\'' + SN + '\' ONBLUR=\'fx1()\' TITLE=\'The ' + strword + ' to look for.\' AUTOCOMPLETE=\'\'></td><td>Exact:<input type=checkbox title=\'If this box is checked it will attempt to find matches exactly otherwise it will use the search word for a partial match.\' name=em value=1' + (EM != 0 ? ' checked' : '') + '></td><td>All:<input type=checkbox title=\'If this box is checked all items will be shown, otherwise unchecked it just shows Items (armor) you can wear.\' name=aa value=1' + (AA != 0 || (MT >= 5 && MT < 20) ? ' checked' : '') + '></td><td>Min Level:</td><td><input title=\'The minimum material level to find.\' id=SL name=SL value=\'' + SL + '\' size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>Max Level:</td><td><input title=\'The maximum material level to find.\' name=EL value=\'' + EL + '\' id=EL size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>';
	strTest = strTest + '<tr><td colspan=8><table class=\'weakcell\' cellpadding=0 cellspacing=0><tr><td>Min Price:</td><td colspan=2><input id=SP name=SP value=\'' + SP + '\' type=hidden>' + FormMoney('SP', SP) + '</td><td>to</td><td colspan=2><input id=EP name=EP value=\'' + EP + '\' type=hidden>' + FormMoney('EP', EP) + '</td><td>Rarity:</td><td><select id=QL name=QL><option value=0 ' + (QL == 0 ? 'selected' : '') + '>All</option><option value=10 style=\'color: #FFFF66\' ' + (QL == 10 ? 'selected' : '') + '>Unique</option><option value=8 style=\'color: #6666FF\' ' + (QL == 8 ? 'selected' : '') + '>Very Rare</option><option value=5 style=\'color: #6666FF\' ' + (QL == 5 ? 'selected' : '') + '>Rare</option><option value=2 style=\'color: #66FF66\' ' + (QL == 2 ? 'selected' : '') + '>Uncommon</option></select></td></tr></table></td></tr>';
	strTest = strTest + '<tr><td colspan=8>';

	if (MT < 0 || MT > 20) {
		var strButtons = new Array()
		strButtons[0] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=' + MT + ';fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Shop search', 'Shop');
		strButtons[1] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=0;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Back', 'Back');

		strTest = strTest + strButtons[0];
		strTest = strTest + strButtons[1];
	} else {
		var strButtons = new Array()
		strButtons[0] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=0;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Items by ItemName', 'Name');
		strButtons[1] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=1;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Items by Location', 'Location');
		strButtons[2] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=2;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Items by Skill Required', 'Skill');
		strButtons[3] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=3;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Items by Bonus', 'Bonus');
		strButtons[4] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=4;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Locked Items by ItemName', 'Locked');
		strButtons[5] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=5;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Cloth Armor', 'Cloth');
		strButtons[6] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=6;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Leather Armor', 'Leather');
		strButtons[7] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=7;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Mail Armor', 'Mail');
		strButtons[8] = '' + Adr('if (Processing == 0) {Processing = 1; getObj(\'MT\').value=8;fx1(); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'search\').submit();}', 'Find Plate Armor', 'Plate');

		strTest = strTest + strButtons[MT];
		var x = 0;
		for (x = 0; x <= 8; x++) {
			if (x == MT) {
			} else {
				strTest = strTest + strButtons[x];
			}
		}

	}

	strTest = strTest + '</td></tr></table>';
	document.write(strTest);
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&AA=' + AA + '&MT=' + MT + '&QL=' + QL + '&SP=' + SP + '&EP=' + EP + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipz(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AM(Color, z, v, i, l, q2, PictureID, Itty, pr, aa, dpr, r, e, eid, et, ec) {
	if (PictureID == '') { PictureID = 'na.gif' }
	if (r == 'C') { r = 'Common' }
	else if (r == 'N') { r = 'Uncommon' }
	else if (r == 'R') { r = 'Rare' }
	else if (r == 'V') { r = 'Very Rare' }
	else if (r == 'U') { r = 'Unique' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, v, i, l, q2, PictureID, Itty, pr, aa, dpr, r, e, eid, et, ec);

	v = IC;
	if (Infos[v].e != 0 && (MT >= 0 && MT < 20)) {
		document.write('<tr><td colspan=6><table cellpadding=0 width=\"100%\" class=\"itemText\" cellspacing=0 style=\"background-color: ' + Infos[v].ec + '; padding: 1px; margin: 1px;\">');
	}
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="315" style="color: ' + Color + '' + (l > Level || aa > AT ? ';border: 1px dotted red' : '') + '; padding-left: 5px">' + (Infos[v].e != 0 && (MT >= 0 && MT < 20) ? '<b>' : '') + Itty + (Infos[v].e != 0 && (MT >= 0 && MT < 20) ? '</b>' : '') + (q2 > 1 ? ' * ' + q2 : '') + (Infos[v].pr != '' ? '<br><i>' + Infos[v].pr + '</i>' : '') + '</td><td width=50>' + l + '</td><td width=60>' + (aa == 0 ? (dpr > 0 ? '' + dpr : '') : GetAT(aa)) + '</td><td width=100>' + window.top.BSGM(Infos[v].v) + '</td><td width="80px">' + Adir('if (Processing == 0) {Processing = 1; window.location.replace(\"fhshopm.asp?C2=' + Infos[v].i + '&ItemID=' + Infos[v].z + '&EP=' + EP + '&SP=' + SP + '&AA=' + AA + '&P=' + PageNo + '&SN=' + SN + '&QL=' + QL + '&MT=' + MT + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '\");}', 'Buy ' + Infos[v].t, 'coins', '') + Adir('PopupCompare(' + Infos[v].z + ');', 'Compare ' + Infos[v].t, 'briefcase', '') + Adir('window.parent.loadwindow2(\"im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\",300,300,\"iwindow\",\"' + Infos[v].t + '\");', 'Information on ' + Infos[v].t, 'magnifier', '') + '</td></tr>');
	if (Infos[v].e != 0 && (MT >= 0 && MT < 20)) {
		document.write('<tr><td colspan=6 id="IX' + IC + '" onclick="DCX(' + IC + ');" onmouseover="PCX(' + IC + ')" onmouseout="RCX(' + IC + ')"><center>Enhanced listing: <b>' + makeRainbow(Infos[v].et) + '</b></center></td></tr>');
	}
	if (Infos[v].e != 0 && (MT >= 0 && MT < 20)) {
		document.write('</table></td></tr>');
	}

	IC = IC + 1;
	if (Infos[v].e != '' && (MT < 0 || MT > 20)) {
		getObj('topbartitle').innerHTML = 'Shop [' + Infos[v].et + ']';
	}
}

function createHexArray(n) {
	this.length = n;
	for (var i = 1; i <= n; i++)
		this[i] = i - 1;
	this[11] = "A";
	this[12] = "B";
	this[13] = "C";
	this[14] = "D";
	this[15] = "E";
	this[16] = "F";
	return this;
}

var hx = new createHexArray(16);

function convertToHex(x) {
	if (x < 17)
		x = 16;

	var high = x / 16;
	var s = high + "";

	s = s.substring(0, 2);
	high = parseInt(s, 10);

	var left = hx[high + 1];
	var low = x - high * 16;

	if (low < 1)
		low = 1;
	s = low + "";
	s = s.substring(0, 2);
	low = parseInt(s, 10);

	var right = hx[low + 1];
	var string = left + "" + right;
	return string;
}
function makeRainbow(text) {
	var rtext = ''
	text = text.substring(0, text.length);
	var color_d1 = 255;
	var mul = color_d1 / text.length;
	for (var i = 0; i < text.length; i++) {
		color_d1 = 255 * Math.sin(i / (text.length / 3));
		var color_h1 = convertToHex(color_d1);
		var color_d2 = mul * i;
		var color_h2 = convertToHex(color_d2);
		var k = text.length;
		var j = k - i;
		if (j < 0)
			j = 0;
		var color_d3 = mul * j;
		var color_h3 = convertToHex(color_d3);
		rtext += "<FONT COLOR=\"#" + color_h3 + color_h1 + color_h2 + "\">" + text.substring(i, i + 1) + "</FONT>";
	}
	return rtext;
}

function DCX(v) {
	if (Processing == 0) {
		Processing = 1;
		getObj('MT').value = Infos[v].eid;
		fx1();
		fxn(getObj('EL'));
		fxn(getObj('SL'));
		getObj('search').submit();
	}
}

function RCX(v) {
	getObj('IX' + v).style.cursor = '';
	getObj('IX' + v).style.backgroundColor = '';
}

function PCX(v) {
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), 'Click for an enhanced listing');
	getObj('IX' + v).style.cursor = 'pointer';
	getObj('IX' + v).style.backgroundColor = BGCOLOR_S
}

function newInfo(Color, z, v, i, l, q2, PictureID, Itty, pr, aa, dpr, r, e, eid, et, ec) {
	this.c = Color;
	this.p = PictureID;
	this.t = Itty;
	this.z = z;
	this.aa = aa;
	this.r = r;
	this.dpr = dpr;
	this.pr = pr;
	this.i = i;
	this.v = v;
	this.l = l;
	this.q2 = q2;
	this.e = e;
	this.eid = eid;
	this.et = et;
	this.ec = ec;
}

