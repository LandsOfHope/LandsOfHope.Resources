// Global variables
var OX = OX - 1;
var OY = OY - 1;
var CharsAt = CharsAt;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPM;
var X = 0;
var Y = 0;
var MC = 0;
var Markers = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function smy(v) {
	if (getObj('TitleOf') != null) {
		getObj('TitleOf').innerHTML = Markers[v].t + '<br>X: ' + (Math.floor(Markers[v].mx) + OX) + ', Y: ' + (Math.floor(Markers[v].my) + OY);
		getObj('PicZoom').innerHTML = '<img src=\'' + IPath + Markers[v].p + '\' width=20 height=20>';
		getObj('PicZoom').className = 'c' + Markers[v].xc;
		getObj('ResultsL').style.left = ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
		getObj('ResultsL').style.top = (Markers[v].my * 12) + 'px'
		getObj('ResultsL').style.display = '';
		window.top.InfoTip('' + IPath + Markers[v].p, 'X: ' + (Math.floor(Markers[v].mx) + OX) + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
	}
}

function Plt(IType, Named, Picture, X, Y) {
	if (IType >= 9) { IType = IType / 10; var Special = 1 } else { var Special = 0; }
	if (Picture == '') { Picture = 'na.gif' }

	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(IType, Named, Picture, X, Y);

	document.write('<img src=\'' + IPath + Picture + '\'  id=\'SM' + MC + '\' style=\'cursor: pointer; position: absolute; width: 10; height: 10; border: 1px solid red;left: ' + (((X - OX) * 12) - 8) + '; top: ' + (((Y - OY) * 12) + 10) + ';\' onclick="Go(' + X + ', ' + Y + ')" OnMouseOver="smy(' + MC + ');">')
	MC = MC + 1;
}


function newMarker(IType, Named, Picture, X, Y) {
	this.xc = '#66ff66';
	this.t = Named;
	this.p = Picture;
	this.mx = (X - OX);
	this.my = (Y - OY);
}


function RC(v) {
	getObj('M' + v).style.backgroundColor = '';
	getObj('M' + v).style.cursor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip(Markers[v].p, '<b>' + Markers[v].t + '</b>');
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}

function MM(e) {
	e = e || window.event;
	if (e.pageX == null) {
		X = e.clientX;
		Y = e.clientY;
	} else {
		X = e.pageX;
		Y = e.pageY;
	}
	X = (X) + 5;
	Y = (Y) - 10;
	if (X < 12) { X = 12 }
	if (Y < 12) { Y = 12 }
	if (X > 300) { X = 300 }
	if (Y > 300) { Y = 300 }
	X = ((Math.floor(X / 12)) + (OX));
	Y = (Math.floor(Y / 12) + (OY))
	if (lastx != X || lasty != Y) {
		window.top.InfoTip('', 'X: ' + X + ' Y:' + Y)
	}
	lastx = X;
	lasty = Y;
}

function MMV(e) {
	getObj('map').onmousemove = null;
	getObj('map').onclick = null;
	MM(e);
	Go(X, Y);
}

function BuildSearch2() {
	document.write('<div style=\'height: 300; overflow: auto\'><table cellpadding=1 cellspacing=0 class=\'weakcell\' height=295 id=Yoyo><tr><td colspan=2>To uncover a clue you need a Magnifying glass item, bought from the Treasure Hunter. Use the Magnifying glass from your Inventory after going to one of the clue tiles to search for the clue.<br>' + Adr('window.location.replace(\'fhshopth.asp?CharsAt=' + CharsAt + '\');', 'Back to Treasure Hunter', 'Back') + '</td></tr><tr height=\'100%\'><td></td><tr></table></div>');
}

function BuildSearch3() {
	document.write('<table width=\'100%\'><tr><td height=100 width=100></td></tr></table>');
}


function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
}