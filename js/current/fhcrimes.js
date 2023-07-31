var IC = 0;
var Infos = new Array();
var Type2 = Type2;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, crimes, lc) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty, crimes, lc);
// s="' + crimes + '" lc=' + lc + ' v=' + v + ' p="' + PictureID + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td>' + crimes + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, crimes, lc) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.i = Itty;
this.lc = lc;
this.s = crimes;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Crimes: ' + Infos[v].s + '<br>First Crime: ' + getdhm(Infos[v].lc) + ' ago';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '';
}

function getdhm(harhar) {
	if (harhar < 60)  {
		var d = 0;
		var h = 0;
		var m = harhar;
	} else {
		var wholedays = Math.floor((harhar / 60) / 24);
		var d= (Math.floor((harhar / 60) / 24));
		var h = Math.floor((harhar / 60) - (d * 24))
		var m =Math.floor((harhar) - Math.floor((h * 60) + ((d * 24) * 60)))
	}
	var strout = '' + (d > 0 ? '<b>' + (d) + '</b>d, ' :'') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 && h <= 0 ? '<b>' + (m) + '</b>mins' : '');
	return strout;
}