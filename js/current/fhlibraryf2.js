var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIP;
var Processing = 0;
var MT = MT;
var MC = 0;
var Markers = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(rid, rt, rn, rpp, rp, rf, rc, rl, ru, rq) {
	var PictureID = IPath + rpp + '/' + rp;
	if (ru != 0) {
		var Color = 'gold';
	} else {
		var Color = 'white';
	}

	//p="' + (IPath + rpp + '/' + PictureID) + '"

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(rid, rt, rn, rf, rc, rl, ru, rq, Color, PictureID);
	document.write('<tr id="M' + MC + '" style="color: ' + Color + '" onclick="DC(' + MC + ')" onmouseout="RC(' + MC + ')" onmouseover="PC(' + MC + ')" ><td width=375><table width=370 class="weakercell" cellpadding=0 cellspacing=0><tr><td rowspan=2><img width=30 height=30 src="' + PictureID + '"></td><td><b>' + rn + (rq > 1 ? ' * ' + rq : '') + '</b></td></tr><tr><td colspan=2><table class="weakercell" width=330 cellpadding=0 cellspacing=0><td width=90>Fame: ' + rf + '</td><td width=160>' + window.top.BSGM3(rc) + '</td><td width=90>Level: ' + rl + '</td></tr></table></td></tr></table></td></tr>');
	MC = MC + 1;
}

function newMarker(rid, rt, rn, rf, rc, rl, ru, rq, Color, PictureID) {
	this.c = Color;
	this.p = PictureID;
	this.rid = rid;
	this.rt = rt;
	this.rn = rn;
	this.rf = rf;
	this.rc = rc;
	this.rl = rl;
	this.ru = ru;
	this.rq = rq;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('' + Markers[v].p, '' + Tipsfor(v))
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Markers[v].rn + '</b><br>Quantity: ' + Markers[v].rq + '<br>Unique: ' + (Markers[v].ru != 0 ? 'Yes' : 'Nope') + '<br>Faction: ' + Markers[v].rf + '<br>Cost: ' + window.top.BSGM(Markers[v].rc) + '<br>Level: ' + Markers[v].rl;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + (Markers[v].p == '' ? 'na.gif' : Markers[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="if (Processing == 0) {window.parent.loadwindow2(\'' + (Markers[v].rt == 1 ? 'imi.asp' : 'Mz.asp') + '?Test=' + Markers[v].rid + '\',300,300,\'iwindow\',\'' + Markers[v].rn + '\')}" style=\'width: 65\'>Info</button>';
}
