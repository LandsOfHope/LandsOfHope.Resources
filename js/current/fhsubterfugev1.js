
var Skill = Skill;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(v, PictureID, dn, s, rnp, Itty, sv) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, dn, s, rnp, Itty, sv);

	// t="' + Itty + '" v=' + v + ' sv=' + sv + ' dn="' + dn + '" rnp="' + rnp + '" s="' + s + '" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" class="it"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"   onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'330\'>' + rnp + ' (' + s + ')</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, dn, s, rnp, Itty, sv) {
	this.c = Color;
	this.t = Itty;
	this.dn = dn;
	this.p = PictureID;
	this.v = v;
	this.s = s;
	this.sv = sv;
	this.rnp = rnp;
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].rnp + '</b><br>Subterfuge Skill: ' + Infos[v].sv + '<br>Kit Use Level: ' + Math.round(Math.abs(Infos[v].sv) / 5) + '<br>Effect: ' + Infos[v].t;
	getObj('Pic').style.backgroundColor = Infos[v].c;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; window.top.PGS(\'cast.wav\'); window.location.replace(\'?CharsAt2=' + Infos[v].v + '&aok=' + Infos[v].sv + '&P=' + PageNo + '\'); this.disabled=true;}" style=\'width: 85\'>Make</button>';
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].rnp + '<br>Skill: ' + Infos[v].sv + '<br>Level: ' + Math.round(Math.abs(Infos[v].sv) / 5));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}