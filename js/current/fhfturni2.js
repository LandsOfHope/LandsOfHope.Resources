var sc = 0;
var Choices = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	var fr1 = window.parent.fr1;
	var fs = window.parent.fs;
	var fs2 = window.parent.fs2;
	var fr0 = window.parent.fr0;

	if (Processing == 0) {
		Processing = 1;
		window.parent.OKDOKE = 0;
		window.parent.location.replace('fhfturn' + (fs == 0 ? '' : '2') + '.asp?type=14&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Choices[v].v);
	}
}

function AC(v, Picture, Itty, q, t, l) {
var Color = LITE;

if (Choices[sc] == null) {
	Choices[sc] = new Array();
}
Choices[sc] = new Choice(v, Picture, Itty, q, t, l, Color);


document.write('<div width=18 height=18 id="Choice' + sc + '" title="' + Itty + '" style="padding: 1px; margin: 1px; background-color: ' + Color + '; float: left;" onclick="DC(' + sc + ')" onmouseover="PC(' + sc + ')" onmouseout="RC(' + sc + ')"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=16 height=16></div>');
sc = sc + 1;
}

function Choice(v, Picture, Itty, q, t, l, Color) {
this.v = v;
this.p = Picture;
this.i = Itty;
this.q = q;
this.t = t;
this.l = l;
this.Color = Color;
}

function RC(v) {
window.top.hideTip();
getObj('Choice' + v).style.cursor = '';
getObj('Choice' + v).style.backgroundColor=Choices[v].Color;
}

function PC(v) {
window.top.InfoTip('', '<b>' + Choices[v].i + '</b><br>Quantity: ' + Choices[v].q + '<br>Level: ' + Choices[v].l + '<br>'+ Choices[v].t);
getObj('Choice' + v).style.cursor = 'pointer';
getObj('Choice' + v).style.backgroundColor=BGCOLOR_S
}