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
		window.top.PGS('eat.wav');
		Processing = 1;
		window.parent.OKDOKE = 0;
		window.parent.location.replace('fhfturn' + (fs == 0 ? '' : '2') + '.asp?type=4&s2=' + fs2 + '&s=' + fs + '&left=' + fr0 + '&right=' + fr1 + '&iid=' + Choices[v].v);
	}
}

function AC(v, Picture, Itty, q, t, l, props) {
var Color = LITE;

if (Choices[sc] == null) {
	Choices[sc] = new Array();
}
Choices[sc] = new Choice(v, Picture, Itty, q, t, l, props, Color);


document.write('<div id="Choice' + sc + '" title="' + Itty + '" style="width: 40; height: 40; padding: 1px; margin: 1px; background-color: ' + Color + '; float: left;" onclick="DC(' + sc + ')" onmouseover="PC(' + sc + ')" onmouseout="RC(' + sc + ')"><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=40 height=40></div>');
sc = sc + 1;
}

function Choice(v, Picture, Itty, q, t, l, props, Color) {
this.v = v;
this.p = Picture;
this.i = Itty;
this.q = q;
this.t = t;
this.l = l;
this.props = props;
this.Color = Color;
}

function RC(v) {
window.top.hideTip();
getObj('Choice' + v).style.cursor = '';
getObj('Choice' + v).style.backgroundColor=Choices[v].Color;
}

function PC(v) {
window.top.InfoTip('', '<b>' + Choices[v].i + '</b><br>Quantity: ' + Choices[v].q + '<Br>Level: ' + Choices[v].l + '' + (Choices[v].t == 93 ? '<Br>Heals: ' + (Choices[v].l * 2) + '<br>+ ' + Choices[v].l + ' for 2 rounds<br>First Aid Skill<br>Recommended: ' + (Choices[v].l * 5) : '') + '<br>' + Choices[v].props);
getObj('Choice' + v).style.cursor = 'pointer';
getObj('Choice' + v).style.backgroundColor=BGCOLOR_S
}