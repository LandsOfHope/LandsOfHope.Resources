var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPR;
var Processing = 0;
var MC = 0;
var Markers = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(f, fn, PictureID, fln, flp, fit, ft, fc) {
	var Color = fc;
	PictureID = flp;
	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(f, fn, flp, fln, fit, ft, fc);
	document.write('<tr id="M' + MC + '" onclick="DC(' + MC + ')" onmouseout="RC(' + MC + ')" onmouseover="PC(' + MC + ')"><td width=40><img width=40 height=40 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td valign=top width=250><b style="color: ' + Color + '">' + fn + '</b><br>Leader: ' + fln + '<br><center>' + ft + '</center></td></tr>');
	MC = MC + 1;
}

function newMarker(f, fn, flp, fln, fit, ft, fc) {
	this.c = fc;
	this.fn = fn;
	this.f = f;
	this.p = flp;
	this.fit = fit;
	this.ft = ft;
	this.fln = fln;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('' + IPath + Markers[v].p, '' + Tipsfor(v))
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Markers[v].fn + '</b>';
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v) + '<br>Leader: ' + Markers[v].fln + '<br>' + Markers[v].fit;
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="if (Processing == 0) {window.location.replace(\'fhlibraryf2.asp?Type=' + Markers[v].f + '\')}" style=\'width: 65\'>Faction Rewards</button>';
}
