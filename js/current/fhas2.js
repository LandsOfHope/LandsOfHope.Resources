var PageNo = PageNo;
var CharsAt = CharsAt;
var counterb = ((PageNo * 14) - 14);
var counteri = 0;
var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo);
}

function AC(CharacterName, PictureID, cv, l, LA, a) {
counteri = counteri + 1
counterb = counterb + 1
var BGC = '';
if ((counteri / 2) == Math.round(counteri / 2)) {BGC = BGCOLOR_S}

var Color = GetAColor(a);
if (a > 0) {
	var als = GetAImg(a);
	var alst = GetAName(a);
} else {
	var als = FHIPO + 'p.gif';
	var alst = '';
}
document.write('<tr width="100%" style="background-color: ' + BGC + '"><Td>' + counterb + ').</td><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;" width="220">' + CharacterName + '</td><td width=10><img name=al1 src="' + als +  '" title="' + alst + '" width=10 height=10></td><td width="250">' + window.top.BSGM(cv) + '</td><td width="130">' + getdhm(LA) + '</td></tr>');
}


function DC(stuff) {
	window.location.replace('fhmess.asp?CharsAt=-' + stuff);
}

function getdhm(harhar) {
	var wholedays = Math.floor((harhar / 60) / 24);
	var d= (Math.floor((harhar / 60) / 24));
	var h = Math.floor((harhar / 60) - (d * 24))
	var m =Math.floor((harhar) - Math.floor((h * 60) + ((d * 24) * 60)))
	var strout = '' + (d > 0 ? '<b>' + (d) + '</b>d, ' :'') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 && h < 0 ? '<b>' + (m) + '</b>mins' : '');
	return strout;
}