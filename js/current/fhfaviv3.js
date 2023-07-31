
var SPath = window.top.FHIPS;
var IPath = SPath;
var Skill = 1000000;
var g = g;
var Countt = 0;
var sz = sz;
var sx = sz;
var sy = sy;
var Infos = new Array();
var IC = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(Color, Named, ItemID, MX, MY, PictureID) {
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Named, ItemID, MX, MY, PictureID, Color);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + '/' + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Named + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Named, ItemID, MX, MY, PictureID, Color) {
	this.c = Color;
	this.x = MX;
	this.y = MY;
	this.v = ItemID;
	this.p = PictureID;
	this.n = Named;
}

function DC(v) {
	getObj('Stuff1').innerHTML = "<b>" + Infos[v].n + "</b>";
	getObj('Stuff2').innerHTML = "<input type='hidden' id=g name=g value='" + g + "'><input type='hidden' id=IID name=IID value='" + Infos[v].v + "'><input type=hidden id=ImgSource name=ImgSource value=\'' + Infos[v].p + '\'>" + DrawImages(Infos[v].p);
	getObj('Butt').innerHTML = Buttons2();
}

function DrawImages(currentimage) {
	var x = 0;
	var xc = 0;
	var DI = '';
	var strImg = '';
	for (x = 1; x <= 199; x++) {
		strImg = (x + ".png");
		DI = DI + "<div style='width: 16; height: 16; float: left; padding: 1px;'><img width=16 height=16 onclick=\"setimage('" + strImg + "')\" src=\"" + SPath + strImg + "\" style=\"padding: 1px; margin: 1px; border: 1px solid " + (currentimage == strImg ? "gold" : "#000000") + "\" onmouseover='DC2(this)' onmouseout='DC1(this, \"" + (currentimage == strImg ? "gold" : "#000000") + "\")'></div>"
		xc = xc + 1
	}
	return DI;
}

function setimage(newimg) {
	getObj('ImgSource').value = newimg;
}

function RC(v) {
	getObj('I' + v).style.backgroundColor = '';
	getObj('I' + v).style.cursor = '';
}

function PC(v) {
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S;
}

function DC1(stuff, c) {
	stuff.style.cursor = '';
	stuff.style.border = '1px solid ' + c;
}

function DC2(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.border = '1px solid #A2A2A2';
}

function Buttons2() {
	return "<" + strClicky2 + " onclick='if (CheckStuff() == true) {stufff.submit()}'>Save</button>";
}

function CheckStuff() {
	var blReturn = true;

	return blReturn;
}


function GoP(PageNo) {
	window.location.replace('?StartX=' + sx + '&g=' + g + '&StartY=' + sy + '&StartZ=' + sz + '&P=' + PageNo + '');
}
