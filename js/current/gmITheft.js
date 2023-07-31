
var Type2 = Type2;
var Mask = Mask;
var PageNo = PageNo;
var CharacterName = CharacterName;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, CharID, VicID, CDT, Itty, CN, VN, CT) {
	var Color = '#66ff66';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, CharID, VicID, CDT, Itty, CN, VN, CT);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'100%\'><b>' + CT + '</b>: ' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, CharID, VicID, CDT, Itty, CN, VN, CT) {
	this.c = Color;
	this.p = PictureID;
	this.cid = CharID;
	this.t = Itty;
	this.vid = VicID;
	this.ct = CT;
	this.cdt = CDT;
	this.cn = CN;
	this.vn = VN;
}

function GoP(PageNo) {
	window.location.replace('?Mask=' + Mask + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].ct + ': ' + Infos[v].t + '</b><br>Purp: <b>' + Infos[v].cn + '</b><br>Victim: <b>' + Infos[v].vn + '</b><Br>Date/Time: ' + Infos[v].cdt + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = ''
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}