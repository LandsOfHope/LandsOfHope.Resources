var CharsAt = CharsAt;
var lt = lt;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoPx(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function GoP(PageNo) {
	window.location.replace('?P=3&P2=' + PageNo + '');
}

function AC(v, PictureID, d, Itty) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	//v=' + v + ' i="' + Itty +'" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" class="it" 
	document.write('<tr onmouseover="PC(this, \'' + Itty + '\')" onmouseout="RC(this)"  onclick="GoPx(' + v + ')" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><td width=40><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td width=\'100%\'><b>' + Itty + '</b><br>' + d + '</td></tr>');
}

function AvC(Itty, PictureID, v, t, r, at) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (t > lt) {
		Color = '#ff6666';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Itty, PictureID, v, t, r, at);
	document.write('<tr id="I' + IC + '" onmouseover="PC2(' + IC + ')" onmouseout="RC2(' + IC + ')" onclick="DC2(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=20><img width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td width=\'100%\'>' + Itty + '</td><td>' + t + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Itty, PictureID, v, t, r, at) {
	this.c = Color;
	this.t = t;
	this.p = PictureID;
	this.at = at;
	this.r = r;
	this.v = v;
	this.i = Itty;
}

function RC2(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].i + '</b>' + (Infos[v].at > 0 ? '<br>Armor: <b>' + (Infos[v].at == 1 ? 'Cloth' : (Infos[v].at == 2 ? 'Leather' : (Infos[v].at == 3 ? 'Mail' : 'Plate'))) : '') + '</b><br>Cost: ' + Infos[v].t + ' tokens' + (Math.abs(Infos[v].t) > lt ? '<br>Missing ' + (Math.abs(Infos[v].t) - lt) + ' tokens' : '');
}

function DC2(v) {
	getObj('Stuff3').innerHTML = Tipsfor(v)
	getObj('Pic3').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].r + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') + (Math.abs(Infos[v].t) <= lt ? Adr('confirm(\'Are you sure you wish to buy ' + Infos[v].i + ' for ' + Infos[v].t + ' legend tokens?<br><br>You will have ' + (lt - Math.abs(Infos[v].t)) + ' tokens remaining after purchase.\', ' + v + ');', 'Buy', 'Buy') : '');
}



function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff, i) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fhlegend.asp?CharsAt=' + CharsAt + '&ItemID=' + Infos[pb].v + '&P=3');
		}
	}
}