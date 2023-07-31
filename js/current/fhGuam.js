var Infos = new Array();
var IC = 0;
var PageNo = PageNo;
var Mask = Mask;
var IPath = window.top.FHIPR;
var LastV = -1;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Mask=' + Mask);
}


function DC(v) {
	getObj('Udder').style.visibility = 'visible';
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].l + (Infos[v].g != 0 ? '<br>They already belong to a guild' : '') + (Infos[v].j < 2 && Infos[v].g == 0 ? '<br>They can not join another Guild for ' + (2 - Infos[v].j) + 'days.' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.parent.location.replace(\'fhMess.asp?CharsAt=-' + Infos[v].v + '\');', 'Private message ' + Infos[v].t, 'PM') + (Infos[v].j != 0 && Infos[v].g == 0 ? Adr('window.location.replace(\'?Mask=' + Mask + '&CharsAt=' + Infos[v].v + '&P=' + PageNo + '&Type=-2\');', 'Invite ' + Infos[v].t + ' to your guild', 'Add') : '');
}

function AvC(a, v, g, l, PictureID, Itty, GJ) {
	var Color = 'yellow';
	if (a < 0) {
		Color = '#ff6666'
	} else if (a > 0) {
		Color = '#66ff66'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, a, v, g, l, PictureID, Itty, GJ);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, a, v, g, l, PictureID, Itty, GJ) {
	this.c = Color;
	this.a = a;
	this.p = PictureID;
	this.v = v;
	this.j = GJ;
	this.g = g;
	this.l = l;
	this.t = Itty;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
