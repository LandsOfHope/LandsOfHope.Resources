var CharID = CharID;
var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&P=' + GoP + '');
}

function DC(v) {
	var aa = window.top.GetAName(Infos[v].a);
	if (aa == '') { aa = 'Neutral' }
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Owner: ' + Infos[v].o + '<br>Allegiance: ' + aa;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>"
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&P=' + PageNo + '&InventoryItemID=' + Infos[v].v + '\');}', 'Return ' + Infos[v].i + ' to ' + Infos[v].o, 'Return');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].i + '</b><br>Owner: ' + Infos[v].o);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AvC(v, o, PictureID, Itty, a) {
	var Color = window.top.GetAColor(a);
	if (Color == '') { Color = LITE };
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, o, PictureID, Itty, a);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, o, PictureID, Itty, a) {
	this.c = Color;
	this.o = o;
	this.p = PictureID;
	this.i = Itty;
	this.a = a;
	this.v = v;
}

