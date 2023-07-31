var GAllegiance = GAllegiance;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPO;
var Mask = Mask;
var LastV = -1;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Mask=' + Mask);
}

function DD(t, v) {
	confirm('Change ' + Infos[LastV].t + '`s guild level to ' + t + '?', v);
}

function DC(v) {
	LastV = v;
	getObj('Udder').style.visibility = 'visible';
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>' + (Infos[v].l >= 0 ? '' : (Infos[v].l == -1 ? '<br>New Member - Promote to Guild Level or Kick' : ''));
	getObj('Buttons').innerHTML = Adr('window.parent.focus();window.parent.location.replace(\'fhMess.asp?CharsAt=-' + Infos[v].v + '\');', 'Private message ' + Infos[v].t, 'PM') + Adr('window.location.replace(\'?P=' + PageNo + '&Mask=' + Mask + '&CharsAt=' + Infos[v].v + '&Type=-2\');', 'Kick ' + Infos[v].t + ' from guild.', 'Kick') + Adr('confirm(\'Do you wish to transfer the ownership of this guild to ' + Infos[v].t + '?\', -5000);', 'Transfer guild ownership', 'Transfer');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb != -5000) {
				window.top.Interface.Interface.location.replace('fhguem.asp?P=' + PageNo + '&Mask=' + Mask + '&CharsAt=' + Infos[LastV].v + '&Type=' + pb + '');
			} else {
				window.top.Interface.Interface.location.replace('fhguem.asp?P=' + PageNo + '&Mask=' + Mask + '&CharsAt=' + Infos[LastV].v + '&Type=-3');
			}
		}
	}
}


function AvD(v, Name, gf) {
	document.write('<tr onclick="DD(\'' + Name + '\',' + v + ')"><td width=50>' + v + '</td><td class=\'btn\' onmouseover="this.className = \'btn btnhov\';"  onmouseout="this.className = \'btn\';" style=\'width:150\'>' + Name + ' (' + gf + ')</td></tr>');
}

function AvC(a, v, PictureID, x, z, l, Itty, j, prof) {
	var Color = GetAColor(a);
	if (a > 0) {
		var als = GetAImg(a);
		var alst = GetAName(a);
	} else {
		var als = FHIPO + 'p.gif';
		var alst = '';
	}

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, a, v, PictureID, x, z, l, Itty, j, prof, als, alst);
	//prof="' + prof + '" j="' + j + '" t="' + Itty + '" x="' + x + '"
	//v=' + v + ' l=' + l + ' z=' + z + ' p="' + PictureID + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="315" style="background-image: URL(' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '); background-repeat: no-repeat; background-position: top right; padding-left: 5px;"><table cellpadding=1 class=weakercell cellspacing=0 width="100%"><tr><td colspan=2 style="color: ' + Color + '">' + Itty + '</td></tr><tr><td width="50%">' + (l >= 0 ? 'Guild Level: ' + l : 'New Member') + '</td><td width="50%">Level:' + z + ' <img name=al1 src="' + als + '" title="' + alst + '" width=10 height=10></td></tr><tr><td>' + prof + '</td><td>Fame: ' + x + '</td></tr><tr><td colspan=2>Member: ' + j + '</td></tr></table></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, a, v, PictureID, x, z, l, Itty, j, prof, als, alst) {
	this.c = Color;
	this.t = Itty;
	this.p = PictureID;
	this.a = a;
	this.v = v;
	this.x = x;
	this.z = z;
	this.l = l;
	this.j = j;
	this.prof = prof;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}