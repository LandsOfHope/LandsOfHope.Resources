var PageNo = PageNo;
var SPath = window.top.FHIPS;
var IPath = window.top.FHIPI;
var ItemTypeID = ItemTypeID;
var Countt = 0;
var LastV = -1;
var Vessels = new Array();
var VC = 0;
var LastVV = -1;
var LastColor = '';
var VPath = window.top.FHIPV;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function ADC(Itty, Color) {
	document.write('<div onmouseover="DC2(this)" onmouseout="DC1(this)" title="' + Itty + '" onclick="setimage(\'' + Color + '\');" width=100 style="float: left; padding: 1px; margin: 1px; width: 120px;"><table cellpadding=0 cellspacing=0 class=itemtext width="100%" style=" background-color: #' + Color + ';"><tr><td><center>' + Itty + '</center></td></tr></table></div>')

}

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&P=' + PageNo + '');
}

function setimage(newimg) {
	LastColor = '' + newimg;
	getObj('vesselbox').innerHTML = '<table cellpadding=1 cellspacing=1 class="weakcell">' + GetVessels() + '<tr height="100%"><td colspan=2></td></tr></table>'
}

function DC1(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function DC2(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S;
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	//document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPV + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');

	if (Vessels[VC] == null) {
		Vessels[VC] = new Array();
	}
	Vessels[VC] = new newVessel(Color, PictureID, n, Names);
	VC = VC + 1;

}

function GetVessels() {
	var v = 0;
	var strout = '';
	for (v = 0; v < VC; v++) {
		strout += '<tr id="V' + v + '" width="100%"><td><img src="' + VPath + Vessels[v].p2 + '" width=15 height=15></td><td width="150" style="color: ' + Vessels[v].c + '" onmouseover="PV(' + v + ')" onmouseout="RV(' + v + ')" onclick="DV(' + v + ')">' + Vessels[v].i + '</td></tr>';
	}
	return strout;
}

function DV(v) {
	LastVV = v;
	window.location.replace('?ItemTypeID=' + Vessels[v].v + '&IID=1&img=' + LastColor);
}

function RV(v) {
	getObj('V' + v).style.cursor = '';
	getObj('V' + v).style.backgroundColor = '';
}

function PV(v) {
	window.top.InfoTip('', '' + Vessels[v].i + '');
	getObj('V' + v).style.cursor = 'pointer';
	getObj('V' + v).style.backgroundColor = BGCOLOR_S
}

function newVessel(Color, PictureID, n, Names) {
	this.c = Color;
	this.v = n;
	this.p2 = PictureID;
	this.i = Names;
}