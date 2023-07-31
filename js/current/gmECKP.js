
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Skill: ' + Infos[v].d + '<br>Skill Requirement: ' + Infos[v].i + '';
	getObj('Pic').innerHTML = "<img src='" + Infos[v].p + "'>"
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' + Infos[v].v + '\');', 'Forget', 'Forget');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AvC(v, d, i, PictureID, Itty) {
	var Color = LITE;
	PictureID = PictureID + (PictureID.indexOf('.') == -1 ? ".gif" : "");
	PictureID = IPath + "/" + PictureID;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, d, i, PictureID, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + PictureID + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, d, i, PictureID, Itty) {
	this.c = Color;
	this.t = Itty;
	this.p = PictureID;
	this.d = d;
	this.v = v;
	this.i = i;
}
