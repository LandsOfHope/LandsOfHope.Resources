var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var MT = MT;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(rid, rc, Itty, PictureID, t, b, m, ep) {
	var Color = LITE;
	if (ep == 1) {
		Color = '#339966';
	} else if (ep == 2) {
		Color = '#9966FF';
	} else if (ep == 3) {
		Color = '#CC0000';
	} else if (ep == 4) {
		Color = '#666699';
	}
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, rid, rc, Itty, PictureID, t, b, m, ep);
	document.write('<tr  id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' + Color + '"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + Itty + '</td><td color="gold">' + (ep > 0 ? '$' : '') + '</td></tr>');

	IC = IC + 1;
}

function newInfo(Color, rid, rc, Itty, PictureID, t, b, m, ep) {
	this.c = Color;
	this.r = rid;
	this.p = PictureID;
	this.e = ep;
	this.t = t;
	this.b = b;
	this.m = m;
	this.rc = rc;
	this.i = Itty;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Tipsfor(v))
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].i + '</b>' + (Infos[v].e == 0 ? '' : (Infos[v].e == 1 ? '<br><b color="#339966">Jurassic Wars</b>' : (Infos[v].e == 3 ? '<br><b color="#CC0000">Dragons of the East</b>' : (Infos[v].e == 4 ? '<br><b color="#FFFFCC">The Afterlife</b>' : '<br><b color="#9966FF">Uncharted Waters</b>')))) + '<br>Classification: ' + Infos[v].rc + (Infos[v].t != 0 ? '<br>Taming Skill: ' + (Infos[v].rc == 'Beast' ? 'Beastmastery' : (Infos[v].rc == 'Undead' ? 'Necromancy' : (Infos[v].rc == 'Demon' ? 'Demonology' : (Infos[v].rc == 'Humanoid' ? 'Slavemastery' : (Infos[v].rc == 'Plant' ? 'Druid Magic' : (Infos[v].rc == 'Mythical' ? 'Myth and Legends' : (Infos[v].rc == 'Insect' ? 'Druid Magic' : (Infos[v].rc == 'Magical' ? 'Ethereal Trappings' : (Infos[v].rc == 'Alien' ? 'Alien Hunting' : 'None'))))))))) : '<br>Can not be Tamed') + (Infos[v].rc == 'Beast' && Infos[v].b != 0 ? '<br>Breedable Race' : '') + (Infos[v].m != 0 ? '<br>Rideable' : '<br>Not Rideable');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'fhlibraryrmp.asp?CharsAt=' + Infos[v].r + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Standard spawn professions for this race', 'Professions') + Adr('window.top.loadwindow2(\'fhlibraryrmb.asp?CharsAt=' + Infos[v].r + '\',300,300,\'iwindow\',\'' + Infos[v].i + ' Mount Bonuses\');', 'Available bonuses when riding this race as a mount', 'Mount') + Adr('window.open(\'beastiary.asp?r=' + Infos[v].i + '\',\'\',\'\');', 'More information...', 'More');
}