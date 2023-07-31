var Processing = 0;
var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(z, v, PictureID, Itty, skilly) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, skilly, z);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, skilly, z) {
	this.c = Color;
	this.s = skilly;
	this.p = PictureID;
	this.i = Itty;
	this.v = v;
	this.z = z;
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
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


function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Current Owner: ' + Infos[v].s + '<br>This does not indicate that this person stole it, merely that they now own it.';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') + '<' + strClicky3 + ' onclick="this.disabled=true;window.location.replace(\'fhmessn.asp?CharsAt=' + Infos[v].v + '&P=' + PageNo + '\')" style=\'width: 65\'>Private Message</button>';
}
