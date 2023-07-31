var IC = 0;
var Infos = new Array();
var CN = CN;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPS;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?P=' + GoP + '');
}

function GS(how, stuff) {
	window.location.replace('FHGroups.asp?Type=' + how + '&CharsAt=' + stuff + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br><i>' + Infos[v].d + '</i>' + (Infos[v].c == '#ff6666' || Infos[v].c == '#ff6666' ? '<br>You are not approved' : (Infos[v].c == '#66ff66' ? '<br>Approved member' : '<br><form method=\'post\'><input type=hidden name=GGI value=\'' + Infos[v].v + '\'>Fellowship Name: <input name=GroupName value=\'' + Infos[v].i + '\'><br>Description:<br><textarea rows=4 cols=50 name=GroupDescription>' + Infos[v].d + '</textarea><br>Allow New Members: <input type=checkbox name=LFG value=1 ' + (Infos[v].f == 1 ? 'checked ' : '') + '><Br><' + strClicky + ' onclick=\'this.form.submit()\'>Save</button></form>'));
	getObj('Pic').innerHTML = "<img src='" + IPath2 + (Infos[v].p2 == '' ? 'na.gif' : Infos[v].p2) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].c == 'gold' ? Adr('GS(1, ' + Infos[v].v + ');', 'Disband the fellowship', 'Disband') + Adr('window.location.replace(\'FHGroupe.asp?CharsAt=' + Infos[v].v + '\');', 'Edit fellowship members', 'Edit Members') + Adr('window.location.replace(\'FHGroupm.asp?CharsAt=' + Infos[v].v + '\');', 'View fellowship members', 'View') + Adr('window.location.replace(\'FHGroupsi.asp\');', 'Edit fellowship icon', 'Symbol') : Adr('window.location.replace(\'FHGroupm.asp?CharsAt=' + Infos[v].v + '\');', 'View fellowship members', 'Members') + Adr('GS(5, ' + Infos[v].v + ');', 'Leave the fellowship', 'Leave'));
}


function ShowNew() {
	getObj('Stuff2').innerHTML = '<b>New Fellowship</b><br><form method=\'post\'>New Fellowship name: <input name=GroupName value=\'' + CN + '`s Fellowship\'><br>Description:<br><textarea rows=6 cols=50 name=GroupDescription></textarea><br>Allow New Members: <input type=checkbox name=LFG value=1 checked><Br><' + strClicky + ' onclick=\'this.form.submit()\'>Save</button></form>';
	getObj('Buttons').innerHTML = '';
}



function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].i + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function SMM(Color, PictureID, v, f, d, l, Named) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, v, f, d, l, Named);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td style="color: ' + Color + '">' + Named + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, v, f, d, l, Named) {
	this.c = Color;
	this.v = v;
	this.p2 = PictureID;
	this.i = Named;
	this.d = d;
	this.f = f;
	this.l = l;
}
