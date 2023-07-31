var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(Color, Value, PictureID, Named) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Value, PictureID, Named);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td>' + Named + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Value, PictureID, Named) {
	this.c = Color;
	this.v = Value;
	this.p = PictureID;
	this.i = Named;
}

function DC(v) {
	window.top.loadwindow2('im.asp?Test=' + Infos[v].v + '&Bonus=0&Material=', 300, 300, 'iwindow', Infos[v].i);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}