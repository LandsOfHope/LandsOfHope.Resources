var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(rid, rc, Itty, PictureID, t, b, bep, ep, lr) {
	var Color = LITE;
	if (bep != 0) {
		Color = 'gold';
	}
	if (ep == 1) {
		Color = '#339966';
	} else if (ep == 2) {
		Color = '#9966FF';
	} else if (ep == 3) {
		Color = '#CC0000';
	} else if (ep == 4) {
		Color = '#666699';
	} else if (ep == 5) {
		Color = '#666633';
	}

	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, rid, rc, Itty, PictureID, t, b, bep, ep, lr);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '">' + Itty + '</td><td>' + (t != 0 ? 'T' : '') + '</td><td>' + (b != 0 ? 'B' : '') + '</td><td>' + (bep != 0 ? '$' : '') + '</td><td>' + (ep == 1 ? 'JW' : (ep == 2 ? 'UW' : (ep == 3 ? 'DE' : (ep == 4 ? 'TA' : (ep == 5 ? 'DD' : ''))))) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, rid, rc, Itty, PictureID, t, b, bep, ep, lr) {
	this.c = Color;
	this.ep = ep;
	this.e = ep;
	this.p = PictureID;
	this.lr = lr;
	this.r = rid;
	this.bep = bep;
	this.t = t;
	this.b = b;
	this.rc = rc;
	this.i = Itty;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + Infos[v].i + '</b><br>Classification: ' + Infos[v].rc + (Infos[v].t != 0 ? '<br>Taming Skill: ' + (Infos[v].rc == 'Beast' ? 'Beastmastery' : (Infos[v].rc == 'Undead' ? 'Necromancy' : (Infos[v].rc == 'Demon' ? 'Demonology' : (Infos[v].rc == 'Humanoid' ? 'Slavemastery' : (Infos[v].rc == 'Plant' ? 'Druid Magic' : (Infos[v].rc == 'Mythical' ? 'Myth and Legends' : (Infos[v].rc == 'Insect' ? 'Druid Magic' : (Infos[v].rc == 'Magical' ? 'Ethereal Trappings' : (Infos[v].rc == 'Alien' ? 'Alien Hunting' : 'None'))))))))) : '<br>Can not be Tamed') + (Infos[v].rc == 'Beast' && Infos[v].b != 0 ? '<br>Breedable Race' : '') + (Infos[v].bep != 0 ? '<br><b>Bought Extra Pet</b>' : '') + (Infos[v].e == 0 ? '' : (Infos[v].e == 1 ? '<br><b color="#339966">Jurassic Wars</b>' : (Infos[v].e == 3 ? '<br><b color="#CC0000">Dragons of the East</b>' : (Infos[v].e == 4 ? '<br><b color="#CC0000">Afterlife</b>' : (Infos[v].e == 5 ? '<br><b color="#CC0000">Dark Depths</b>' : '<br><b color="#9966FF">Uncharted Waters</b>'))))) + (Infos[v].lr == 2 ? '<br><i>Requires Training saddle</i>' : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'fhlibraryrmp.asp?CharsAt=' + Infos[v].r + '\',300,300,\'iwindow\',\'' + Infos[v].i + ' Professions\');', 'View available race professions', 'Professions') + Adr('window.top.loadwindow2(\'fhlibraryrmb.asp?CharsAt=' + Infos[v].r + '\',300,300,\'iwindow\',\'' + Infos[v].i + ' Mount Bonuses\');', 'View available mount bonuses for this race', 'Mount') + (Infos[v].bep != 0 ? Adr('window.location.replace(\'fhcharxi.asp?CharsAt=' + Infos[v].bep + '\');', 'Buy Info', 'Buy Info') : '');
}
