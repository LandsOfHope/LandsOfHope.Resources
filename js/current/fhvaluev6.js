var ItemPrice = ItemPrice;
var CharsAt = CharsAt;
var InventoryItemID = InventoryItemID;
var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var OPath = window.top.FHIPO;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, z, u, l, a, i, v, PictureID, Itty, aa, eql, q, iid, ss, expr1, expr2) {
	if (l == 'C') { l = 'Common' }
	else if (l == 'N') { l = 'Uncommon' }
	else if (l == 'R') { l = 'Rare' }
	else if (l == 'V') { l = 'Very Rare' }
	else if (l == 'U') { l = 'Unique' }
	else if (l == 'A') { l = 'Artifact' }
	if (Color == '#D9FB96') { Itty = '' + Itty + '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, u, l, a, i, v, PictureID, Itty, aa, eql, q, iid, ss, expr1, expr2);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" ><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="250" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width="100">' + window.top.BSGM(u) + '</td><td width="60">' + GetSaleDate(ss) + '</td></tr>');
	IC = IC + 1;
}

function GetSaleDate(ss) {
	if (ss < 0) {
		return '';
	} else if (ss <= 7) {
		return '0-7d';
	} else if (ss <= 31) {
		return '8-31d';
	} else {
		return '32d+';
	}
}

function newInfo(Color, z, u, l, a, i, v, PictureID, Itty, aa, eql, q, iid, ss, expr1, expr2) {
	this.c = Color;
	this.q = q;
	this.p = PictureID;
	this.t = Itty;
	this.iid = iid;
	this.aa = aa;
	this.eql = eql;
	this.v = v;
	this.i = i;
	this.l = l;
	this.u = u;
	this.z = z;
	this.a = a;
	this.ss = ss;
	this.e1 = expr1;
	this.e2 = expr2;
}

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function FB(v) {
	if (ItemTypeID == 48) {
		window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '');
	} else {
		window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '');
	}
}

function FBI(v) {
	window.location.replace('?ItemTypeID=' + v + '&InventoryItemID=1&CharsAt=' + CharsAt + '');
}

function FastPrice() {
	prompt('Please enter a number between 1 and 10, this will then be multiplied by the default price of your items to form the new price.', 1, 1);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (returnVal >= 1 && returnVal <= 10) {
			window.top.Interface.location.replace('fhvalue.asp?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&ItemID=3&FP=' + returnVal + '&CharsAt=' + CharsAt + '&P=' + PageNo + '')
		}
	}
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
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), GetTips(v, 1));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DDC(stuff) {
	window.ResultsOfit.location.replace('im.asp?Test=' + stuff.z + '&Bonus=0&Material=');
}

function DC(v) {
	getObj('Stuff2').innerHTML = GetTips(v, 0);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<input type=hidden name=saleprice id=saleprice value=' + Infos[v].u + '><input type=hidden name=saletype id=saletype value=0><input type=hidden name=InventoryItemID id=InventoryItemID value=' + Infos[v].z + '><input type=hidden id=ItemID name=ItemId value=1>' + FormMoney('saleprice', Infos[v].u) + '<br>' + Adf2('', 'Set Sale Price', 'Set') + Adr('getObj(\'saletype\').value = ' + Infos[v].iid + '; this.form.submit()', 'Set Sale Price for all Items of this type', 'Set Type') + Adr('getObj(\'saleprice\').value = FairPrice(' + Infos[v].eql + ',' + Infos[v].q + '); this.form.submit()', 'Use Fair Price', 'Fair Price') + (Infos[v].i == 1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '');
}

function FairPrice(l, q) {
	var outp = 0;
	outp = Math.round((l * q) * ItemPrice)
	return outp;
}

function GetTips(v, ttype) {
	if (ttype == 0) {
		return '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font>' + (Infos[v].i == 1 ? '<br>Rarity: <b>' + Infos[v].l + '</b><br>Price: ' + window.top.BSGM(Infos[v].u) + '<br>Fair Price: ' + window.top.BSGM(FairPrice(Infos[v].eql, Infos[v].q)) + '<br>Actual Value: ' + window.top.BSGM(Infos[v].v) + '' + (Infos[v].e1 > 0 ? '<br><b style="color: gold;">Recommended price range</b><br><center>' + window.top.BSGM(Infos[v].e1) + ' to ' + window.top.BSGM(Infos[v].e2) + '</center>' : '') : '') + (Infos[v].ss < 0 ? '<br>Not up for sale' : '<br>Placed: ' + Infos[v].ss + ' days ago');
	}
	else {
		return '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + (Infos[v].t.length > 28 ? Infos[v].t.substr(0, 28) + '..' : Infos[v].t) + '</b></font>' + (Infos[v].i == 1 ? '<br>Required Level: <b>' + Infos[v].eql + '</b>' : '') + (Infos[v].ss < 0 ? '<br>Not up for sale' : '<br>Placed: ' + Infos[v].ss + ' days ago');
	}
}
