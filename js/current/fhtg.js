var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = GetTips(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhtourng.asp?CharsAt=' + CharsAt + '&t=' + Infos[v].z + '\');', 'Enter', 'Enter');
}

function GetTips(v) {
	return '<b>' + Infos[v].i + '</b>' + (Infos[v].h > 0 ? '<br>Player Hosted' : '') + '<br>Tourney Type: ' + (Infos[v].t == 'FREEFORALL' ? 'Free For All<br>The guild with the highest wins at the end of the Tournament wins.' : (Infos[v].t == 'BOUNTY' ? 'Bounty<br>The guild with the highest guild fame at the end of the Tournament wins.' : 'Deathmatch<br>The guild with the highest wins at the end of the Tournament wins. If your guild loses a match your guild is knocked out of this tournament and can not participate till it resets.')) + ''
}

function AC(z, ItemName, tt, m, h) {
	var PictureID = 'na.gif'
	var Color = '#ff6666';
	if (tt == 'FREEFORALL') { Color = '#66ff66' }
	if (tt == 'BOUNTY') { Color = 'gold' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, z, ItemName, tt, m, h);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + (h <= 0 ? '<b>' : '') + ItemName + (h <= 0 ? '</b>' : '') + '</td><td width=\'100\'>' + (tt == 'FREEFORALL' ? 'Free-for-all' : (tt == 'BOUNTY' ? 'Bounty' : 'Deathmatch')) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, z, ItemName, tt, m, h) {
	this.c = Color;
	this.z = z;
	this.p = PictureID;
	this.i = ItemName;
	this.h = h;
	this.m = m;
	this.t = tt;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), GetTips(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}