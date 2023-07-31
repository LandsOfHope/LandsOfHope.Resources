var BID2 = BID2;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Infos = new Array();
var IC = 0;
var Source = new Array();
var SC = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(AP, PictureID, ItemName, ItemID, RM, TrueID, m, OID, q, lu, re, qi, s, vs, vd, pp, d) {
	if (PictureID == '0') { PictureID = '' }
	if (AP != '') {
		PictureID = AP;
	}
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, AP, PictureID, ItemName, ItemID, RM, TrueID, m, OID, q, lu, re, qi, s, vs, vd, pp, d);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + window.top.FHIP + pp + '/' + PictureID + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, AP, PictureID, ItemName, ItemID, RM, TrueID, m, OID, q, lu, re, qi, s, vs, vd, pp, d) {
	this.c = Color;
	this.ap = AP;
	this.p = window.top.FHIP + pp + '/' + PictureID;
	this.o = OID;
	this.m = m;
	this.vs = vs;
	this.pp = pp;
	this.vd = vd;
	this.t = ItemName;
	this.s = s;
	this.lu = lu;
	this.re = re;
	this.qi = qi;
	this.r = RM;
	this.q = q;
	this.v = TrueID;
	this.z = ItemID;
	this.d = d;
}


function AC2(AP, ItemID, ItemName, PictureID, pp) {
	if (PictureID == '0') { PictureID = '' }
	if (AP != '') {
		PictureID = AP;
	}
	var Color = LITE;
	if (Source[SC] == null) {
		Source[SC] = new Array();
	}
	Source[SC] = new newSource(Color, AP, ItemID, ItemName, PictureID, pp);
	document.write('<div id="S' + SC + '" onmouseover="PC2(' + SC + ')" onmouseout="RC2(' + SC + ')" onclick="DC2(' + SC + ')" style="color: ' + Color + '; width: 20px; height: 20px; float: left; padding: 2px;"><img src=\'' + window.top.FHIP + pp + '/' + PictureID + '\' width=20 height=20></div>');
	SC = SC + 1;
}

function newSource(Color, AP, ItemID, ItemName, PictureID, pp) {
	this.c = Color;
	this.z = ItemID;
	this.p = window.top.FHIP + pp + '/' + PictureID;
	this.t = ItemName;
}


function DC2(v) {
	window.location.replace('gmEIS.asp?I=' + Source[v].z + '&P=' + PageNo);
}

function GoP(p) {
	window.location.replace('?P=' + p);
}

function DC(v) {
	getObj('Stuff2').innerHTML = "<input type='hidden' name=IID value='" + Infos[v].v + "'><input type='hidden' name=p value='" + PageNo + "'><table class='itemtext' cellspacing=0 cellpadding=1><tr><td>Item ID:</td><td><input name=ID id=ID value='" + Infos[v].z + "' size=5><input name=ap id=ap value='" + Infos[v].ap + "' size=10></td></tr><tr><td>Pic Path:</td><td><input name=pp id=pp value='" + Infos[v].pp + "' size=15></td></tr><tr><td>Name:</td><td><input name=IN id=IN value='" + Infos[v].t + "'></td></tr><tr><td>Desc:</td><td><input name=MD id=MD value='" + Infos[v].d + "'></td></tr><tr><td>LastUsed:</td><td><input name=LU id=LU value='" + Infos[v].lu + "'></td><tr><td>Server:</td><td><input name=s id=s value='" + Infos[v].s + "'></td></tr><tr><td>Flag/mat:</td><td><input name=OD id=OD value='" + Infos[v].o + "' size=4 maxlength=15><input name=m id=m value='" + Infos[v].m + "' size=10></td></tr><tr><td>Respawns:</td><td><input name=RE value=1 id=RE " + (Infos[v].re != 0 ? "checked" : "") + " type=checkbox value=1><input name=RM size=4 maxlength=3 id=RM value='" + Infos[v].r + "'>mins</td></tr><tr><td>Quantity:</td><td><input name=IQ size=4 maxlength=3 id=IQ value='" + Infos[v].q + "'></td></tr><tr><td colspan=2>Quest: <input name=QI value=1 id=QI " + (Infos[v].qi != 0 ? "checked" : "") + " type=checkbox value=1> Stealthed: <input name=VS value=1 id=VS " + (Infos[v].vs != 0 ? "checked" : "") + " type=checkbox value=1> Dead: <input name=VD value=1 id=VD " + (Infos[v].vd != 0 ? "checked" : "") + " type=checkbox value=1></td></tr></table>";
	getObj('Pic').innerHTML = "<img src='" + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = '' + Adr('getObj(\'EditItem\').submit()', 'Save', 'Save') + '' + Adr('getObj(\'ID\').value = 0;getObj(\'EditItem\').submit()', 'Delete', 'Delete');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function RC2(v) {
	getObj('S' + v).style.cursor = '';
	getObj('S' + v).style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip(Source[v].p, Source[v].t);
	getObj('S' + v).style.cursor = 'pointer';
	getObj('S' + v).style.backgroundColor = BGCOLOR_S
}
