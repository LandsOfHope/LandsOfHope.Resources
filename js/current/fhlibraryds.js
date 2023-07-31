var PageNo = PageNo;
var GameID = GameID;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPB;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Itty, PictureID, cn, x, y, ds) {
	var Color = '#66ff66';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Itty, PictureID, cn, x, y, ds);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color:' + Color + '"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Itty, PictureID, cn, x, y, ds) {
	this.c = Color;
	this.i = Itty;
	this.p = PictureID;
	this.d = ds;
	this.cn = cn;
	this.x = x;
	this.y = y;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].i + '</b><br>Location: ' + Infos[v].x + ', ' + Infos[v].y + '<br>Discovered Skill: ' + Infos[v].d + '<br>Discovered By: ' + Infos[v].cn;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}
