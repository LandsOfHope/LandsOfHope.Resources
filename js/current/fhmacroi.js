var Infos = new Array();
var IC = 0;
var SPath = window.top.FHIPS;
var IPath = window.top.FHIPI;
var xPath = window.top.FHIP;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Named, ItemID, pp, PictureID) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Named, ItemID, pp, PictureID, Color);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(this)"  onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\''+ xPath + pp + '/' + (PictureID == '' ?  'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Named, ItemID, pp, PictureID, Color) {
this.c = Color;
this.pp = pp;
this.v = ItemID;
this.p = PictureID;
this.n = Named;
}


function DC(v) {
	getObj('Stuff2').innerHTML = "<b>" + Infos[v].n + "</b><br><input type='hidden' id=IID name=IID value='" + Infos[v].v + "'><input type=hidden id=ImgSource name=ImgSource value=\'' + Infos[v].p + '\'>" + DrawImages(Infos[v].p);
	getObj('Butt').innerHTML = Buttons2();
}

function DrawImages(currentimage) {
	var x = 0;
	var xc = 0;
	var DI = '';
	var strImg = '';
	for (x = 1; x < 152; x++) {
		strImg = (x + ".png");
		DI = DI + "<img width=16 height=16 onclick=\"setimage('" + strImg + "')\" src=\"" + SPath + strImg + "\" style=\"padding: 1px; margin: 1px; border: 1px solid " + (currentimage == strImg ? "gold" : "#000000") + "\" onmouseover='DC2(this)' onmouseout='DC1(this, \"" + (currentimage == strImg ? "gold" : "#000000") + "\")'>"
		xc = xc + 1
		if (xc > 15 && x < 152) {
			DI = DI + "<br>"
			xc = 0
		}
	}
	return DI;
}

function setimage(newimg) {
	getObj('ImgSource').value = newimg;
}

function DC1(stuff, c) {
stuff.style.cursor = '';
stuff.style.border='1px solid ' + c;
}

function DC2(stuff) {
stuff.style.cursor = 'pointer';
stuff.style.border='1px solid #A2A2A2';
}

function Buttons2() {
	return "<" + strClicky2 + " onclick='if (CheckStuff() == true) {stufff.submit()}'>Save</button>";
}

function CheckStuff() {
	var blReturn = true;

	return blReturn;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function PC(v) {
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
