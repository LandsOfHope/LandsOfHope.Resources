var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Skill = Skill;
var Processing = 0;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, skilly) {
	var Color = LITE;
	var l = skilly;
	if (skilly <= 1) { skilly = 2 }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, skilly, l);
	//l='  + l +' s=' + skilly + ' v=' + v + ' p="' + PictureID + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, skilly, l) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = Itty;
	this.l = l;
	this.s = skilly;
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Archaeology Required: ' + ((Infos[v].s * 5) - 5) + '<br>Material Level: ' + Infos[v].l + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') + (Processing == 0 ? (Skill >= (Math.abs(Infos[v].s * 5) - 5) ? '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fharch.asp?Type=1&L=' + Infos[v].s + '&ItemID=' + Infos[v].v + '&P=' + PageNo + '\')};" style=\'width: 65\'>Uncover</button>' : '') : '');
}
