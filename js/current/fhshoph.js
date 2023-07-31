var CharsAt = CharsAt;
var IPath = window.top.FHIP;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].t;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1;window.location.replace(\'fhshoph2.asp?CharsAt=' + CharsAt + '&ItemID=' + Infos[v].v + '\'); this.disabled=true;}" style=\'width: 85\'>Select</button>';
}

function AM(Color, Named, ShopID, Picture, PicturePath, PD) {
	Picture = PicturePath + '/' + Picture;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, Picture, PicturePath, PD);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=40 height=40></td><td width="100%" style="color: ' + Color + ';"><b>' + Named + '</b><br>' + PD + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Named, ShopID, Picture, PicturePath, PD) {
	this.c = Color;
	this.v = ShopID;
	this.p = Picture;
	this.t = Named;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}