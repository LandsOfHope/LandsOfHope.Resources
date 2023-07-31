var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&P=' + GoP + '');
}


function DC(v) {
	getObj('Stuff2').innerHTML = '<input name=CharsAt value="' + CharsAt + '" type=hidden><input name=type value="' + Infos[v].v + '" type=hidden><table class="weakcell"><tr><td>Character Name:</td><td><input name=CPName value="' + Infos[v].cpn + '"></td></tr><tr><td>Chat Tag:</td><td><input name=CPChatTag value="' + Infos[v].cpct + '">Off:<input name=CPChatTagOff type=checkbox value="1" ' + (Infos[v].cpcto == 1 ? 'checked' : '') + '></td></tr><tr><td>Title:</td><td><input name=CPTitle value="' + Infos[v].cpt + '"></td></tr><tr><td>Picture:</td><td><input name=CPPictureID value="' + Infos[v].p + '"></td></tr><tr><td>Default:</td><td><input name=CPDefault type=checkbox value="1" ' + (Infos[v].def == 1 ? 'checked' : '') + '></td></tr><tr><td>Race Title:</td><td><input name=CPRaceTitle value="' + Infos[v].r + '"></td></tr><tr><td>Delete:</td><td><input name=Delete type=checkbox value="1"></td></tr><tr><td>New:</td><td><input name=New type=checkbox value="1" ' + (Infos[v].v < 0 ? 'checked' : '') + '></td></tr></table>'
	getObj('Buttons').innerHTML = Adr('getObj(\'proform\').submit();', 'Save', 'Save');
	getObj('Pic').innerHTML = "<img src='" + (Infos[v].cpp != '' ? IPath + Infos[v].p : IPath + Infos[v].PID) + "'>";
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AC(v, cn, t, PID, cpt, cpp, cpn, d, def, r, cpct, cpcto) {
	if (def != 0) {
		var Color = 'gold';
	} else {
		var Color = LITE;
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, cn, t, PID, cpt, cpp, cpn, d, def, r, cpct, cpcto);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="40"><img src=\'' + IPath + (cpp != '' ? cpp : PID) + '\'></td><Td width=\'100%\' style=\'color: ' + Color + ';\'><b>' + (cpn != '' ? cpn : cn) + '</b><br>Title: ' + (cpt != '' ? cpt : t) + (cpct != '' ? '<br>' + (cpcto == 0 ? '<font id=tgreen>Chat: ' + cpct + '</font>' : '<font id=tred>Chat: ' + cpct + '</font>') : '') + (def != 0 ? '<br><i>Original Profile</i>' : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, cn, t, PID, cpt, cpp, cpn, d, def, r, cpct, cpcto) {
	this.c = Color;
	this.d = d;
	this.p = cpp;
	this.cpt = cpt;
	this.cpp = cpp;
	this.cpn = cpn;
	this.v = v;
	this.cn = cn;
	this.t = t;
	this.r = r;
	this.def = def;
	this.PID = PID;
	this.cpct = cpct;
	this.cpcto = cpcto;
}
