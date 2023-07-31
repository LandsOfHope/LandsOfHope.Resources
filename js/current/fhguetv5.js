
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPS;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(v, gf, r, m, b, t, f, a, e, p, Title, lgtm, ax, ra) {
var PictureID = '';
var Color = LITE;
if (lgtm > 0) {
	Color = '#66ff66'
} else if (v > 0) {
	Color = '#ff6666'
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, gf, r, m, b, t, f, a, e, p, Title, lgtm, ax, ra);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'110px\' style="color: ' +  Color + '; padding-left: 5px">' + Title + '</td><td width=50>' + v + '</td></tr>');
IC = IC + 1;
}

function fx3(stuff) {
var y = 0;
var newstr = '';
var oldstr = stuff.value;
for (y = 0; y < oldstr.length; y++) {
	var re = oldstr.charCodeAt(y)
	if (re == 32 || (re >= 48 && re <= 57) || (re >= 65 && re <= 122)) {
		newstr = newstr + String.fromCharCode(re)
	}
}
stuff.value = newstr;
}

function newInfo(Color, v, gf, r, m, b, t, f, a, e, p, Title, lgtm, ax, ra) {
this.c = Color;
this.gf = gf;
this.ax = ax;
this.ra = ra;
this.r = r;
this.m = m;
this.b = b;
this.t = t;
this.f = f;
this.a = a;
this.e = e;
this.p = p;
this.i = Title;
this.v = v;
this.lgtm = lgtm;
}

function DC(v) {
getObj('Stuff2').innerHTML = '<form method=post style=\'margin: 0px;\' id=edittitle name=edittitle><input type=\'hidden\' name=P value=\'' + PageNo + '\'><table class=\'weakcell\' cellpadding=1 cellspacing=0><tr><td colspan=2>Guild Title: </td><td colspan=2><input name=GuildTitle size=20 maxlength=40 value=\'' + Infos[v].i + '\' onblur=\'fx3(this)\'></td></tr>' + (Infos[v].v == 9999 ? '<input name=GuildLevel type=hidden value=\'' + Infos[v].v + '\'><input name=GuildFame type=hidden value=\'99999\'>' : '<tr><td colspan=2>Guild Level: </td><td colspan=2><input name=GuildLevel ' + (Infos[v].v == 9999 ? 'disabled ' : '') + 'value=\'' + Infos[v].v + '\' onkeypress=\'return fxkp(event);\' size=4 maxlength=4> (1 - 9999)</td></tr><tr><td colspan=2>Guild Fame: </td><td colspan=2><input name=GuildFame ' + (Infos[v].v == 9999 ? 'disabled ' : '') + 'value=\'' + (Infos[v].v == 9999 ? '99999' : Infos[v].gf) + '\' onkeypress=\'return fxkp(event);\' size=4 maxlength=4> (1 - 9999)') + '</td></tr><tr><td colspan=2>Recruiter Active: </td><td colspan=2><input type=checkbox name=RecruiterActive  type=checkbox style=\'height: 12px\' ' + (Infos[v].ra == 0 ? '' : 'checked') + ' value=\'1\'></td></tr><tr><td colspan=4 class=\'weakercell\'><b>Admin Permissions</b></td></tr><tr><td colspan=4><table class=\'weakercell\' cellpadding=0 cellspacing=0 width=\'260px\'><tr><td width=\'40%\'><input type=hidden name=Old value=' + Infos[v].v + '>Ranks: </td><td width=\'5%\'><input type=checkbox style=\'height: 12px\' name=AdminRanks ' + (Infos[v].r == 0 ? '' : 'checked') + ' value=\'-1\'></td><td width=\'40%\'>Bonuses: </td><td width=\'5%\'><input type=checkbox style=\'height: 12px\' name=AdminBonuses ' + (Infos[v].b == 0 ? '' : 'checked') + ' value=\'-1\'></td></tr><tr><td>Members:</td><td><input type=checkbox style=\'height: 12px\' name=AdminMembers ' + (Infos[v].m == 0 ? '' : 'checked') + ' value=\'-1\'></td><td>New Members:</td><td><input type=checkbox style=\'height: 12px\' name=AdminNewMembers ' + (Infos[v].ax == 0 ? '' : 'checked') + ' value=\'-1\'></td></tr><tr><td>Treasury: </td><td><input type=checkbox style=\'height: 12px\' name=AdminTreasury ' + (Infos[v].t == 0 ? '' : 'checked') + ' value=\'-1\'></td><td></td><td></td></tr><tr><td colspan=4 class=\'weakercell\'><b>Message Permissions</b></td></tr><tr><td>Admin: </td><td><input type=checkbox style=\'height: 12px\' name=AdminMessages ' + (Infos[v].a == 0 ? '' : 'checked') + ' value=\'-1\'></td><td>View: </td><td><input type=checkbox style=\'height: 12px\' name=ViewMessages ' + (Infos[v].e == 0 ? '' : 'checked') + ' value=\'-1\'></td></tr><tr><td>Post: </td><td><input type=checkbox style=\'height: 12px\' name=PostMessages ' + (Infos[v].p == 0 ? '' : 'checked') + ' value=\'-1\'></td><td></td><td></td></tr></table></td></tr><tr><td colspan=4>' + (Infos[v].lgtm > 0 ? '<font id=tgreen>Title Message Set</font>' : '<font id=tred>No Title Message</b>') + '</td></tr><tr><td colspan=4>' + Adf2('', 'Save title changes', 'Save') + (Infos[v].v != 9999 ? Adr('window.location.replace(\'?CharsAt=' + Infos[v].v + '&P=' + PageNo + '&Type=-2\');', 'Delete ' + Infos[v].i, 'Delete') + Adr('window.location.replace(\'FHgueTM.asp?CharsAt=' + Infos[v].v + '\');','Change promotion message', 'Message') : '') + Adr('window.location.replace(\'FHguem.asp?Mask=' + Infos[v].i + '\');', 'View members on this rank', 'Members') + '</td></tr></table></form>';
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}
			
function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}