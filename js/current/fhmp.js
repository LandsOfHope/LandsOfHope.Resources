// Global variables
var OX = OX - 1;
var OY = OY - 1;
var t = 1;
var MapSrc = MapSrc;
var GameID = GameID;
var IPath = window.top.FHIPM;
var OPath = window.top.FHIPO;

var strYoyo = '';
var X = 0;
var Y = 0;
var lastx = 0;
var lasty = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function Floors() {
var strTest = '';
var v = 0;
var i = 0;
strTest += '<tr><td colspan=2>Map</td></tr>';        
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
strTest += '<tr height="100%"><td colspan=2>&nbsp;</td></tr>';      
strTest += '</tr><tr><td colspan=2><table class="itemtext" cellpadding=0 cellspacing=0>';        
strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y - t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'up.png" align=center></td></tr>';        
strTest += '<tr><td class="btn" ' + (Math.abs(x) > 0 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x - t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'lt.png"></td><td></td><td class="btn" ' + (Math.abs(x) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:15" onclick="GoXY(' + (x + t) + ',' + y + ')"' : ' style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'rt.png"></td></tr>';        
strTest += '<tr><td colspan=3 class="btn" ' + (Math.abs(y) < 3 ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="padding-left: 10px" onclick="GoXY(' + x + ',' + (y + t) + ')"' : ' style="padding-left: 10px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '><img src="' + OPath + 'dn.png" align=center></td></tr>';        
strTest += '</table></td></tr>'
getObj('Pages').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
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
	if (lastx != X || lasty != Y) {
		window.top.InfoTip('', '' + 'X: ' +X + ' Y:' + Y)
	}
	lastx = X;
	lasty = Y;
}

function MMV(e) {
	MM(e);
	Go(X,Y);
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

function Go(xx, yy) {
	window.frames['ResultsOfIt'].location.replace('fhmp2.asp?Z=' + GameID + '&x=' + xx + '&y=' + yy);
}