var PageNo = PageNo;
var Mask = Mask;
var Type = Type;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, v, PictureID, Itty, npc) {
	if (Color == 'gold' || npc != 0) { Itty = '<b>' + Itty + '</b>' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, npc);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, npc) {
	this.c = Color;
	this.npc = npc;
	this.v = v;
	this.p = PictureID;
	this.t = Itty;
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Mask=' + Mask + '&Type=' + Type);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t + '</b> (' + Infos[v].v + ')<br>' + (Infos[v].npc != 0 ? 'NPC Only Profession' : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'gmEPP.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].t + ' Stats\');', 'Stats', 'Stats') + Adr('window.top.loadwindow2(\'gmEPS.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].t + ' Skills\');', 'Skills', 'Skills') + Adr('window.top.loadwindow2(\'gmEPI.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].t + ' Items\');', 'Items', 'Items');

}
