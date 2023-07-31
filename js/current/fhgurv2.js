var PageNo = PageNo;
var counterb = ((PageNo * 14) - 14);
var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo);
}

function AC(CharacterID, CharacterName, PictureID, GuildTitle, GuildLevel, LA, a) {
counterb = counterb + 1
var BGC = '';
if ((IC / 2) == Math.round(IC / 2)) {BGC = BGCOLOR}

var Color = GetAColor(a);
if (a > 0) {
	var als = GetAImg(a);
	var alst = GetAName(a);
} else {
	var als = FHIPO + 'p.gif';
	var alst = '';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color,CharacterID, CharacterName, PictureID, GuildTitle, GuildLevel, LA, a, BGC);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" title="Click to Message them" ' + (BGC != '' ? 'style="background-color: ' + BGC + '"' : '') + ' onclick="DC(' + CharacterID + ')"><Td>' + counterb + ').</td><td width=20><img width=20 height=20 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;" width="220"><b>' + CharacterName + '</b><br>' + GuildTitle + ' (' + GuildLevel + ')</td><td width=10><img name=al1 src="' + als +  '" title="' + alst + '" width=10 height=10></td><td width="130">' + getdhm(LA) + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color,CharacterID, CharacterName, PictureID, GuildTitle, GuildLevel, LA, a, BGC) {
this.c = Color;
this.v = CharacterID;
this.p = PictureID;
this.t = CharacterName;
this.gt = GuildTitle;
this.gl = GuildLevel;
this.LA = LA;
this.a = a;
this.b = BGC;
}


function DC(v) {
	window.location.replace('fhmess.asp?CharsAt=-' + Infos[v].v);
}

function getdhm(harhar) {
	if (harhar < 60)  {
		var d= 0;
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

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].b;
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
