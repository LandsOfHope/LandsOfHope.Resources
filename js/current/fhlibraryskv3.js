var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(pid, Itty, PictureID, h, t, cs, qs) {
	var Color = LITE;
	if (t != 0) {
		Color = 'gold'
	} else if (cs != 0) {
		Color = '#6666ff'
	} else if (qs != 0) {
		Color = 'gray'
	}
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pid, Itty, PictureID, h, t, cs, qs);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color:' + Color + '"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pid, Itty, PictureID, h, t, cs, qs) {
	this.c = Color;
	this.t = t;
	this.p = PictureID;
	this.qs = qs;
	this.cs = cs;
	this.r = pid;
	this.h = h;
	this.i = Itty;
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
	getObj('I' + v).style.backgroundColor = BGCOLOR_S;
}

function Tipsfor(v) {
	return '<b>' + Infos[v].i + '</b><br>Trainable: ' + (Infos[v].t == 0 ? 'No' : 'Yes') + ', Class Skill: ' + (Infos[v].cs == 0 ? 'No' : 'Yes') + ', Gained from a Quest: ' + (Infos[v].qs == 0 ? 'No' : 'Yes');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	window.frames['ResultsOfit'].location.replace("manualnew.asp?search=" + Infos[v].h + "&ns=1");
}
