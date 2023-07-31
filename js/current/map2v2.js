// Global variables
var OX = OX - 1;
var OY = OY - 1;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPM;
var strYoyo = '<tr><td colspan=2>To dig up a treasure, you need the Mining skill and a Spade, equip the spade go to the Treasure location and then click the Dig button or click on the Spade.</td></tr>';
var X = 0;
var Y = 0;
var MC = 0;
var Markers = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function smy(v) {
if (getObj('TitleOf') != null) {
	getObj('TitleOf').innerHTML=Markers[v].t + '<br>X: ' + (Math.floor(Markers[v].mx) + OX) + ', Y: ' + (Math.floor(Markers[v].my) + OY );
	getObj('PicZoom').innerHTML='<img src=\'' + Markers[v].p + '\' style=\'height: 12px; width: 12px\'>';
	getObj('ResultsL').style.left= ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
	getObj('ResultsL').style.top= (Markers[v].my * 12) + 'px'
	getObj('ResultsL').style.display='';
	window.top.InfoTip('' + Markers[v].p, 'X: ' + (Math.floor(Markers[v].mx) + OX)  + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
}
}

function Plt(IType, Named,  Picture, X,Y) {
if (IType >= 9) {IType = IType / 10; var Special = 1} else {var Special = 0;}
if (Picture == '') {Picture = 'na.gif'}
if (Picture.indexOf('/')!=-1) {} else {Picture = '' + IPath + Picture}
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(IType, Named,  Picture, X,Y);

// i=' + IType + ' mx=' + (X - OX) + ' my=' + (Y - OY) + ' t="' + Named + '" 
document.write('<img src=\'' + Picture + '\'  id=\'SM' + MC + '\' style=\'position: absolute; width: 20; height: 20; cursor: pointer;' + (Special == 1 ? 'border: 2px dashed orange; ' : 'border: 2px solid white; ') + 'left: ' + (((X - OX) * 12) - 13) + '; top: ' + (( (Y - OY) * 12) + 5) + ';\' onclick="Go(' +  X + ',' + Y + ')" OnMouseOver="smy(' + MC + ');">')
strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + X + ", " + Y + ")\"><td><img src=\'" + Picture + "\' width=10 height=10></td><td style='width: 100%'>" + Named + "</td><tr>";
MC = MC + 1;
}


function newMarker(IType, Named,  Picture, X,Y) {
this.i = IType;
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
window.top.InfoTip( Markers[v].p, '<b>' + Markers[v].t + '</b>');
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
	if (X < 12) {X = 12}
	if (Y < 12) {Y = 12}
	if (X > 300) {X = 300}
	if (Y > 300) {Y = 300}
	X =  ((Math.floor(X / 12)) + (OX));
	Y = (Math.floor(Y / 12) + (OY))
	window.top.InfoTip('', 'X: ' + X  + ' Y:' + Y + '')
}

function MMV(e) {
	getObj('map').onmousemove = null;
	getObj('map').onclick = null;
	MM(e);
	Go(X,Y);
}

function BuildSearch2() {
document.write('<div style=\'height: 300; overflow: auto\'><table cellpadding=1 cellspacing=1 class=\'itemtext\' height=295 id=Yoyo class=\'weakcell\'>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
}

function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&NoSpawn=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
}