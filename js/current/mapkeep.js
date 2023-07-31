// Global variables
var OX = OX - 1;
var OY = OY - 1;
var t = 1;
var Type2 = Type2;
var IPath = window.top.FHIPB;
var IPath2 = window.top.FHIPIM;
var OPath = window.top.FHIPO;
var MC = 0;
var Markers = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

var strYoyo = '';
var X = 0;
var Y = 0;
var lastx = 0;
var lasty = 0;
var Allegiance = Allegiance;

function smy(v) {
if (getObj('TitleOf') != null) {
	window.top.InfoTip('' + Markers[v].p, Markers[v].n + '<br>X: ' + (Math.floor(Markers[v].mx))  + ' Y:' + (Math.floor(Markers[v].my)) + '')
}
}

function Plt(Named, a, Picture, X,Y) {
var Special = 0;
var Color2 = GetAColor(a);
if (Color2 == '') {
	Color2 = 'yellow';
}
var SkillName = GetAName(a);
if (SkillName == '') {
	SkillName = 'Not Captured';
}
if (Allegiance == a && a > 0) {
	SkillName = SkillName + " - Friendly";
} else if (Allegiance != a && a > 0) {
	SkillName = SkillName + " - Enemy";
}

var QX = ((Math.floor(X / 25, 0)))// + 1) //* 3
var QY = ((Math.floor(Y / 25, 0)))// + 1) * 3
getObj('mapx').rows[QY].cells[QX].style.backgroundColor = Color2;
if (a > 0) {
	getObj('mapx').rows[QY].cells[QX].innerHTML = '';
} else {
}

if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newMarker(Color2, Named, a, Picture, X,Y, SkillName);

document.write('<img src=\'' + IPath + Picture + '\' id=\'SM' + MC + '\' title=\'' + Named + '\' style=\'cursor: pointer; position: absolute; width: 40; height: 40; border: 1px solid gold;left: ' + (((Math.floor(X / 25) * 25) * 3) + 20) + '; top: ' + (((Math.floor(Y / 25) * 25) * 3) + 40) + ';\' OnMouseOver="smy(' + MC + ');">')
strYoyo += "<tr id=\'M" + MC + "\' onmouseover='PC(" + MC + ")' onmouseout='RC(" + MC + ")'  style='cursor: pointer; color: " + Color2 + "'><td width=10 style='width: 10; height: 10'>" + (Picture != "" ? "<img src=\"" + IPath + (Picture == "" ? "na.gif" : Picture) + "\" width=10 height=10>" : "") + "<td style='width: 100%'><b>" + Named + " (" + X + ", " + Y + ")</b>" + (SkillName != "" ? "<br>" + SkillName : "") + "</td><tr>";
MC = MC + 1;
}


function newMarker(Color2, Named, a, Picture, X,Y, SkillName) {
this.xc = Color2;
this.n = Named;
this.p = IPath + Picture;
this.a = a;
this.s = SkillName;
this.mx = (X);
this.my = (Y);
}


function RC(v) {
getObj('M' + v).style.backgroundColor = '';
getObj('M' + v).style.cursor = '';
window.top.hideTip();
}

function PC(v) {
window.top.InfoTip(Markers[v].p, '<b>' + Markers[v].n + '</b><br>' + Markers[v].s);
getObj('M' + v).style.cursor = 'pointer';
getObj('M' + v).style.backgroundColor = BGCOLOR_S;
}

function Floors() {
var strTest = '';
var v = 0;
var i = 0;
strTest += '<tr><td colspan=2></td></tr>';        
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
getObj('Pages').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
}


function BuildSearch2() {
document.write('<div style=\'height: 300; overflow: auto\'><table height=295 id=Yoyo cellpadding=1 cellspacing=1 class=\'weakercell\'>' + strYoyo + '<tr height=\'100%\'><td></td><tr></table></div>');
}