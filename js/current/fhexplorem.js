// Global variables
var OX = OX - 1;
var OY = OY - 1;
var ResCount = 0;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPB;
var OPath = window.top.FHIPO;
var t = 1;
var strYoyo = '';
var X = 0;
var Y = 0;
var MC = 0;
var Markers = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function smy(v) {
if (getObj('TitleOf') != null) {
	getObj('TitleOf').innerHTML=Markers[v].t + '<br>X: ' + (Math.floor(Markers[v].mx) + OX) + ', Y: ' + (Math.floor(Markers[v].my) + OY  + '<br>Skill: ' + Markers[v].l);
	getObj('PicZoom').innerHTML='<img src=\'' + Markers[v].p + '\' style=\'height: 12px; width: 12px\'>';
	//alert(getObj('SM' + v).style.Left);
	//alert(getObj('SM' + v).style.Top);
	getObj('ResultsL').style.left= ((Markers[v].mx * 12) + 12) + 'px' //getObj('SM' + v).style.Left+12;
	getObj('ResultsL').style.top= (Markers[v].my * 12) + 'px'
	getObj('ResultsL').style.display='';
	window.top.InfoTip('' + Markers[v].p, 'X: ' + (Math.floor(Markers[v].mx) + OX)  + ' Y:' + (Math.floor(Markers[v].my) + OY) + '')
}
}

function Plt(IType, lx, Named, Picture, X,Y) {
if (Picture == '') {Picture = 'na.gif'}
if (Picture.indexOf('/')!=-1) {} else {Picture = '' + IPath + Picture}
if (lx == 0) {lx = 1}

if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(IType, lx, Named, Picture, X,Y);


// l=' + lx + ' i=' + IType + ' mx=' + (X - OX) + ' my=' + (Y - OY) + ' t="' + Named + '" 
document.write('<img src=\'' + Picture + '\' id=\'SM' + MC + '\' style=\'position: absolute; width: 10; height: 10; cursor: pointer;border: 1px solid gold;left: ' + (((X - OX) * 12) - 8) + '; top: ' + (( (Y - OY) * 12) + 10) + ';\' onclick="Go(' +  X + ',' + Y + ')" OnMouseOver="smy(' + MC + ');">')
// i=" + IType + " p='" + Picture + "' l=" + lx + " t='" + Named + "'
strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")' onclick=\"Go(" + X + ", " + Y + ")\"><td><img src=\'" + Picture + "\' width=10 height=10></td><td style='width: 100%'>" + Named + " (" + lx + ")</td><tr>";
MC = MC + 1;
}


function newMarker(IType, lx, Named, Picture, X,Y) {
this.i = IType;
this.l = lx;
this.t = Named;
this.p = Picture;
this.mx = (X - OX);
this.my = (Y - OY);
}


function RC(v) {
getObj('M' + v).style.backgroundColor = '';
getObj('M' + v).style.cursor = '';
}

function PC(v) {
window.top.InfoTip('' + Markers[v].p, '<b>' + Markers[v].t + '</b><br>Skill: ' + (Markers[v].l))
getObj('M' + v).style.cursor = 'pointer';
getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}

function BuildSearch2() {
document.write('<div style=\'height: 300; overflow: auto\'><table height=295 id=Yoyo class=\'weakercell\'>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
}

function BuildSearch() {
var str = '<table width=\'100%\' height=\'100%\' valign=top cellpadding=1 cellspacing=0><tr><td>';

var v = 0;
var i = 0;

var x = Math.floor((OX) / 25)
var y =  Math.floor((OY) / 25)
if (x <= 0) {
	x = 0
}
if (y <= 0) {
	y = 0
}
if (y > 3) {
	y = 3
}
if (x > 3) {
	x = 3
}

str += '</td></tr><tr><td height=\'100%\' width=60 valign=bottom class=\'\'><table class="itemtext" cellpadding=0 cellspacing=0>';        
str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';        
str += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';        
str += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';        
str += '</table></td></tr></table>';
document.write(str);
}

function GoXY(xx,yy) {
	if (xx <= 0) {
		xx = 0
	}
	if (yy <= 0) {
		yy = 0
	}
	if (yy > 3) {
		yy = 3
	}
	if (xx > 3) {
		xx = 3
	}

	window.location.replace("?StartX=" + xx + "&StartY=" + yy + "&StartZ=" + GameID);
}

function GoP(type3) {
	window.location.replace('?StartX=' + (OX / 25) + '&StartY=' + (OY / 25) + '&StartZ=' + GameID);
}

function Go(xx, yy) {
	window.location.replace('fh.asp?Redraw=1&MapNum=' + GameID + '&x=' + xx + '&y=' + yy);
}